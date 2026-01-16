import { useState, useEffect, useRef } from 'react';
import { Calendar, Download, RefreshCw, ChevronDown, Search, Maximize2, X } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import React from 'react';
import { ExportDropdown } from './ExportDropdown';

interface TrendAnalyticsContainerProps {
  theme: 'dark' | 'light';
}

// Full dataset with all months for monthly view
const fullDatasets = {
  dataTransferred: {
    '2024': [
      { date: 'Jan', transferred: 3200, upload: 950, download: 2250 },
      { date: 'Feb', transferred: 3100, upload: 920, download: 2180 },
      { date: 'Mar', transferred: 3350, upload: 1000, download: 2350 },
      { date: 'Apr', transferred: 3280, upload: 980, download: 2300 },
      { date: 'May', transferred: 3450, upload: 1030, download: 2420 },
      { date: 'Jun', transferred: 3520, upload: 1050, download: 2470 },
      { date: 'Jul', transferred: 3680, upload: 1100, download: 2580 },
      { date: 'Aug', transferred: 3750, upload: 1120, download: 2630 },
      { date: 'Sep', transferred: 3890, upload: 1160, download: 2730 },
      { date: 'Oct', transferred: 4020, upload: 1200, download: 2820 },
      { date: 'Nov', transferred: 4150, upload: 1240, download: 2910 },
      { date: 'Dec', transferred: 4300, upload: 1280, download: 3020 },
    ],
    '2023': [
      { date: 'Jan', transferred: 2850, upload: 840, download: 2010 },
      { date: 'Feb', transferred: 2780, upload: 820, download: 1960 },
      { date: 'Mar', transferred: 2950, upload: 880, download: 2070 },
      { date: 'Apr', transferred: 2900, upload: 860, download: 2040 },
      { date: 'May', transferred: 3080, upload: 920, download: 2160 },
      { date: 'Jun', transferred: 3150, upload: 940, download: 2210 },
      { date: 'Jul', transferred: 3280, upload: 980, download: 2300 },
      { date: 'Aug', transferred: 3350, upload: 1000, download: 2350 },
      { date: 'Sep', transferred: 3480, upload: 1040, download: 2440 },
      { date: 'Oct', transferred: 3600, upload: 1070, download: 2530 },
      { date: 'Nov', transferred: 3720, upload: 1110, download: 2610 },
      { date: 'Dec', transferred: 3850, upload: 1150, download: 2700 },
    ],
  },
  serviceUsage: {
    '2024': [
      { day: 'Jan', requests: 1680000 },
      { day: 'Feb', requests: 1620000 },
      { day: 'Mar', requests: 1750000 },
      { day: 'Apr', requests: 1710000 },
      { day: 'May', requests: 1800000 },
      { day: 'Jun', requests: 1850000 },
      { day: 'Jul', requests: 1920000 },
      { day: 'Aug', requests: 1980000 },
      { day: 'Sep', requests: 2050000 },
      { day: 'Oct', requests: 2120000 },
      { day: 'Nov', requests: 2180000 },
      { day: 'Dec', requests: 2250000 },
    ],
    '2023': [
      { day: 'Jan', requests: 1520000 },
      { day: 'Feb', requests: 1480000 },
      { day: 'Mar', requests: 1590000 },
      { day: 'Apr', requests: 1560000 },
      { day: 'May', requests: 1640000 },
      { day: 'Jun', requests: 1690000 },
      { day: 'Jul', requests: 1750000 },
      { day: 'Aug', requests: 1810000 },
      { day: 'Sep', requests: 1870000 },
      { day: 'Oct', requests: 1930000 },
      { day: 'Nov', requests: 1990000 },
      { day: 'Dec', requests: 2050000 },
    ],
  },
  serviceTypeUsage: {
    '2024': [
      { month: 'Jan', mapServer: 1180, featureServer: 840, geoDataServer: 480, geoCodeServer: 390, geoProcessingServer: 570, networkAnalysisServer: 280, sceneServer: 320, vectorServer: 240, wmsServer: 530, versionManagementServer: 150, imageServer: 410, others: 240 },
      { month: 'Feb', mapServer: 1150, featureServer: 820, geoDataServer: 470, geoCodeServer: 380, geoProcessingServer: 560, networkAnalysisServer: 270, sceneServer: 310, vectorServer: 235, wmsServer: 520, versionManagementServer: 145, imageServer: 400, others: 235 },
      { month: 'Mar', mapServer: 1240, featureServer: 880, geoDataServer: 500, geoCodeServer: 410, geoProcessingServer: 600, networkAnalysisServer: 295, sceneServer: 335, vectorServer: 255, wmsServer: 555, versionManagementServer: 160, imageServer: 430, others: 255 },
      { month: 'Apr', mapServer: 1210, featureServer: 860, geoDataServer: 490, geoCodeServer: 400, geoProcessingServer: 590, networkAnalysisServer: 290, sceneServer: 330, vectorServer: 250, wmsServer: 545, versionManagementServer: 155, imageServer: 420, others: 250 },
      { month: 'May', mapServer: 1290, featureServer: 920, geoDataServer: 520, geoCodeServer: 425, geoProcessingServer: 620, networkAnalysisServer: 310, sceneServer: 350, vectorServer: 270, wmsServer: 575, versionManagementServer: 165, imageServer: 450, others: 270 },
      { month: 'Jun', mapServer: 1330, featureServer: 950, geoDataServer: 535, geoCodeServer: 440, geoProcessingServer: 640, networkAnalysisServer: 320, sceneServer: 365, vectorServer: 280, wmsServer: 590, versionManagementServer: 170, imageServer: 465, others: 280 },
      { month: 'Jul', mapServer: 1380, featureServer: 990, geoDataServer: 560, geoCodeServer: 460, geoProcessingServer: 670, networkAnalysisServer: 340, sceneServer: 385, vectorServer: 300, wmsServer: 620, versionManagementServer: 180, imageServer: 490, others: 300 },
      { month: 'Aug', mapServer: 1420, featureServer: 1020, geoDataServer: 575, geoCodeServer: 475, geoProcessingServer: 690, networkAnalysisServer: 350, sceneServer: 400, vectorServer: 310, wmsServer: 640, versionManagementServer: 185, imageServer: 505, others: 310 },
      { month: 'Sep', mapServer: 1480, featureServer: 1060, geoDataServer: 600, geoCodeServer: 495, geoProcessingServer: 720, networkAnalysisServer: 370, sceneServer: 420, vectorServer: 330, wmsServer: 670, versionManagementServer: 195, imageServer: 530, others: 330 },
      { month: 'Oct', mapServer: 1530, featureServer: 1100, geoDataServer: 620, geoCodeServer: 510, geoProcessingServer: 750, networkAnalysisServer: 385, sceneServer: 440, vectorServer: 345, wmsServer: 695, versionManagementServer: 205, imageServer: 550, others: 345 },
      { month: 'Nov', mapServer: 1580, featureServer: 1140, geoDataServer: 645, geoCodeServer: 530, geoProcessingServer: 780, networkAnalysisServer: 405, sceneServer: 460, vectorServer: 365, wmsServer: 725, versionManagementServer: 215, imageServer: 575, others: 365 },
      { month: 'Dec', mapServer: 1630, featureServer: 1180, geoDataServer: 665, geoCodeServer: 550, geoProcessingServer: 810, networkAnalysisServer: 420, sceneServer: 480, vectorServer: 380, wmsServer: 750, versionManagementServer: 225, imageServer: 595, others: 380 },
    ],
    '2023': [
      { month: 'Jan', mapServer: 1050, featureServer: 750, geoDataServer: 420, geoCodeServer: 350, geoProcessingServer: 510, networkAnalysisServer: 240, sceneServer: 280, vectorServer: 210, wmsServer: 470, versionManagementServer: 130, imageServer: 360, others: 210 },
      { month: 'Feb', mapServer: 1030, featureServer: 735, geoDataServer: 410, geoCodeServer: 342, geoProcessingServer: 500, networkAnalysisServer: 235, sceneServer: 275, vectorServer: 205, wmsServer: 460, versionManagementServer: 128, imageServer: 352, others: 205 },
      { month: 'Mar', mapServer: 1100, featureServer: 785, geoDataServer: 440, geoCodeServer: 365, geoProcessingServer: 535, networkAnalysisServer: 255, sceneServer: 295, vectorServer: 225, wmsServer: 490, versionManagementServer: 140, imageServer: 380, others: 225 },
      { month: 'Apr', mapServer: 1075, featureServer: 765, geoDataServer: 430, geoCodeServer: 358, geoProcessingServer: 525, networkAnalysisServer: 250, sceneServer: 290, vectorServer: 220, wmsServer: 482, versionManagementServer: 136, imageServer: 372, others: 220 },
      { month: 'May', mapServer: 1145, featureServer: 820, geoDataServer: 460, geoCodeServer: 380, geoProcessingServer: 555, networkAnalysisServer: 265, sceneServer: 310, vectorServer: 235, wmsServer: 510, versionManagementServer: 145, imageServer: 395, others: 235 },
      { month: 'Jun', mapServer: 1185, featureServer: 845, geoDataServer: 475, geoCodeServer: 395, geoProcessingServer: 575, networkAnalysisServer: 275, sceneServer: 320, vectorServer: 245, wmsServer: 525, versionManagementServer: 150, imageServer: 410, others: 245 },
      { month: 'Jul', mapServer: 1230, featureServer: 880, geoDataServer: 495, geoCodeServer: 410, geoProcessingServer: 600, networkAnalysisServer: 290, sceneServer: 335, vectorServer: 255, wmsServer: 550, versionManagementServer: 158, imageServer: 430, others: 255 },
      { month: 'Aug', mapServer: 1270, featureServer: 910, geoDataServer: 510, geoCodeServer: 425, geoProcessingServer: 620, networkAnalysisServer: 300, sceneServer: 350, vectorServer: 265, wmsServer: 570, versionManagementServer: 163, imageServer: 445, others: 265 },
      { month: 'Sep', mapServer: 1320, featureServer: 945, geoDataServer: 530, geoCodeServer: 440, geoProcessingServer: 645, networkAnalysisServer: 315, sceneServer: 365, vectorServer: 280, wmsServer: 595, versionManagementServer: 170, imageServer: 465, others: 280 },
      { month: 'Oct', mapServer: 1365, featureServer: 980, geoDataServer: 550, geoCodeServer: 455, geoProcessingServer: 670, networkAnalysisServer: 330, sceneServer: 380, vectorServer: 295, wmsServer: 615, versionManagementServer: 178, imageServer: 485, others: 295 },
      { month: 'Nov', mapServer: 1410, featureServer: 1010, geoDataServer: 570, geoCodeServer: 470, geoProcessingServer: 690, networkAnalysisServer: 345, sceneServer: 395, vectorServer: 310, wmsServer: 640, versionManagementServer: 185, imageServer: 505, others: 310 },
      { month: 'Dec', mapServer: 1450, featureServer: 1040, geoDataServer: 585, geoCodeServer: 485, geoProcessingServer: 710, networkAnalysisServer: 360, sceneServer: 410, vectorServer: 320, wmsServer: 660, versionManagementServer: 192, imageServer: 520, others: 320 },
    ],
  },
};

// Daily data (30 days)
const dailyData = {
  dataTransferred: [
    { date: 'Nov 20', transferred: 105, upload: 31, download: 74 },
    { date: 'Nov 21', transferred: 108, upload: 33, download: 75 },
    { date: 'Nov 22', transferred: 102, upload: 30, download: 72 },
    { date: 'Nov 23', transferred: 95, upload: 28, download: 67 },
    { date: 'Nov 24', transferred: 98, upload: 29, download: 69 },
    { date: 'Nov 25', transferred: 112, upload: 34, download: 78 },
    { date: 'Nov 26', transferred: 115, upload: 35, download: 80 },
    { date: 'Nov 27', transferred: 110, upload: 33, download: 77 },
    { date: 'Nov 28', transferred: 107, upload: 32, download: 75 },
    { date: 'Nov 29', transferred: 113, upload: 34, download: 79 },
    { date: 'Nov 30', transferred: 118, upload: 36, download: 82 },
    { date: 'Dec 1', transferred: 120, upload: 37, download: 83 },
    { date: 'Dec 2', transferred: 116, upload: 35, download: 81 },
    { date: 'Dec 3', transferred: 122, upload: 38, download: 84 },
    { date: 'Dec 4', transferred: 119, upload: 36, download: 83 },
    { date: 'Dec 5', transferred: 125, upload: 39, download: 86 },
    { date: 'Dec 6', transferred: 128, upload: 40, download: 88 },
    { date: 'Dec 7', transferred: 123, upload: 38, download: 85 },
    { date: 'Dec 8', transferred: 126, upload: 39, download: 87 },
    { date: 'Dec 9', transferred: 130, upload: 41, download: 89 },
    { date: 'Dec 10', transferred: 133, upload: 42, download: 91 },
    { date: 'Dec 11', transferred: 129, upload: 40, download: 89 },
    { date: 'Dec 12', transferred: 132, upload: 41, download: 91 },
    { date: 'Dec 13', transferred: 135, upload: 43, download: 92 },
    { date: 'Dec 14', transferred: 138, upload: 44, download: 94 },
    { date: 'Dec 15', transferred: 142, upload: 45, download: 97 },
    { date: 'Dec 16', transferred: 139, upload: 44, download: 95 },
    { date: 'Dec 17', transferred: 145, upload: 46, download: 99 },
    { date: 'Dec 18', transferred: 148, upload: 47, download: 101 },
    { date: 'Dec 19', transferred: 152, upload: 48, download: 104 },
  ],
  serviceUsage: [
    { day: 'Nov 20', requests: 58000 },
    { day: 'Nov 21', requests: 61000 },
    { day: 'Nov 22', requests: 57000 },
    { day: 'Nov 23', requests: 54000 },
    { day: 'Nov 24', requests: 56000 },
    { day: 'Nov 25', requests: 63000 },
    { day: 'Nov 26', requests: 65000 },
    { day: 'Nov 27', requests: 62000 },
    { day: 'Nov 28', requests: 60000 },
    { day: 'Nov 29', requests: 64000 },
    { day: 'Nov 30', requests: 67000 },
    { day: 'Dec 1', requests: 68000 },
    { day: 'Dec 2', requests: 66000 },
    { day: 'Dec 3', requests: 70000 },
    { day: 'Dec 4', requests: 69000 },
    { day: 'Dec 5', requests: 72000 },
    { day: 'Dec 6', requests: 74000 },
    { day: 'Dec 7', requests: 71000 },
    { day: 'Dec 8', requests: 73000 },
    { day: 'Dec 9', requests: 76000 },
    { day: 'Dec 10', requests: 78000 },
    { day: 'Dec 11', requests: 75000 },
    { day: 'Dec 12', requests: 77000 },
    { day: 'Dec 13', requests: 80000 },
    { day: 'Dec 14', requests: 82000 },
    { day: 'Dec 15', requests: 85000 },
    { day: 'Dec 16', requests: 83000 },
    { day: 'Dec 17', requests: 87000 },
    { day: 'Dec 18', requests: 90000 },
    { day: 'Dec 19', requests: 93000 },
  ],
  serviceTypeUsage: [
    { month: 'Nov 20', mapServer: 42, featureServer: 30, geoDataServer: 17, geoCodeServer: 14, geoProcessingServer: 21, networkAnalysisServer: 10, sceneServer: 12, vectorServer: 9, wmsServer: 19, versionManagementServer: 5, imageServer: 14, others: 9 },
    { month: 'Nov 21', mapServer: 44, featureServer: 31, geoDataServer: 18, geoCodeServer: 15, geoProcessingServer: 22, networkAnalysisServer: 11, sceneServer: 13, vectorServer: 10, wmsServer: 20, versionManagementServer: 6, imageServer: 15, others: 10 },
    { month: 'Nov 22', mapServer: 40, featureServer: 29, geoDataServer: 16, geoCodeServer: 13, geoProcessingServer: 20, networkAnalysisServer: 9, sceneServer: 11, vectorServer: 8, wmsServer: 18, versionManagementServer: 5, imageServer: 13, others: 8 },
    { month: 'Nov 23', mapServer: 38, featureServer: 27, geoDataServer: 15, geoCodeServer: 12, geoProcessingServer: 18, networkAnalysisServer: 8, sceneServer: 10, vectorServer: 7, wmsServer: 17, versionManagementServer: 4, imageServer: 12, others: 7 },
    { month: 'Nov 24', mapServer: 39, featureServer: 28, geoDataServer: 16, geoCodeServer: 13, geoProcessingServer: 19, networkAnalysisServer: 9, sceneServer: 11, vectorServer: 8, wmsServer: 18, versionManagementServer: 5, imageServer: 13, others: 8 },
    { month: 'Nov 25', mapServer: 45, featureServer: 32, geoDataServer: 18, geoCodeServer: 15, geoProcessingServer: 23, networkAnalysisServer: 11, sceneServer: 13, vectorServer: 10, wmsServer: 21, versionManagementServer: 6, imageServer: 16, others: 10 },
    { month: 'Nov 26', mapServer: 46, featureServer: 33, geoDataServer: 19, geoCodeServer: 16, geoProcessingServer: 24, networkAnalysisServer: 12, sceneServer: 14, vectorServer: 11, wmsServer: 22, versionManagementServer: 6, imageServer: 17, others: 11 },
    { month: 'Nov 27', mapServer: 44, featureServer: 31, geoDataServer: 18, geoCodeServer: 15, geoProcessingServer: 22, networkAnalysisServer: 11, sceneServer: 13, vectorServer: 10, wmsServer: 20, versionManagementServer: 6, imageServer: 15, others: 10 },
    { month: 'Nov 28', mapServer: 43, featureServer: 30, geoDataServer: 17, geoCodeServer: 14, geoProcessingServer: 21, networkAnalysisServer: 10, sceneServer: 12, vectorServer: 9, wmsServer: 19, versionManagementServer: 5, imageServer: 14, others: 9 },
    { month: 'Nov 29', mapServer: 45, featureServer: 32, geoDataServer: 18, geoCodeServer: 15, geoProcessingServer: 23, networkAnalysisServer: 11, sceneServer: 13, vectorServer: 10, wmsServer: 21, versionManagementServer: 6, imageServer: 16, others: 10 },
    { month: 'Nov 30', mapServer: 47, featureServer: 34, geoDataServer: 19, geoCodeServer: 16, geoProcessingServer: 24, networkAnalysisServer: 12, sceneServer: 14, vectorServer: 11, wmsServer: 22, versionManagementServer: 6, imageServer: 17, others: 11 },
    { month: 'Dec 1', mapServer: 48, featureServer: 35, geoDataServer: 20, geoCodeServer: 16, geoProcessingServer: 25, networkAnalysisServer: 12, sceneServer: 14, vectorServer: 11, wmsServer: 23, versionManagementServer: 7, imageServer: 18, others: 11 },
    { month: 'Dec 2', mapServer: 46, featureServer: 33, geoDataServer: 19, geoCodeServer: 16, geoProcessingServer: 24, networkAnalysisServer: 12, sceneServer: 14, vectorServer: 11, wmsServer: 22, versionManagementServer: 6, imageServer: 17, others: 11 },
    { month: 'Dec 3', mapServer: 49, featureServer: 36, geoDataServer: 20, geoCodeServer: 17, geoProcessingServer: 26, networkAnalysisServer: 13, sceneServer: 15, vectorServer: 12, wmsServer: 24, versionManagementServer: 7, imageServer: 19, others: 12 },
    { month: 'Dec 4', mapServer: 48, featureServer: 35, geoDataServer: 20, geoCodeServer: 16, geoProcessingServer: 25, networkAnalysisServer: 12, sceneServer: 14, vectorServer: 11, wmsServer: 23, versionManagementServer: 7, imageServer: 18, others: 11 },
    { month: 'Dec 5', mapServer: 50, featureServer: 37, geoDataServer: 21, geoCodeServer: 17, geoProcessingServer: 27, networkAnalysisServer: 13, sceneServer: 15, vectorServer: 12, wmsServer: 25, versionManagementServer: 7, imageServer: 19, others: 12 },
    { month: 'Dec 6', mapServer: 51, featureServer: 38, geoDataServer: 21, geoCodeServer: 18, geoProcessingServer: 28, networkAnalysisServer: 14, sceneServer: 16, vectorServer: 13, wmsServer: 26, versionManagementServer: 8, imageServer: 20, others: 13 },
    { month: 'Dec 7', mapServer: 49, featureServer: 36, geoDataServer: 20, geoCodeServer: 17, geoProcessingServer: 26, networkAnalysisServer: 13, sceneServer: 15, vectorServer: 12, wmsServer: 24, versionManagementServer: 7, imageServer: 19, others: 12 },
    { month: 'Dec 8', mapServer: 50, featureServer: 37, geoDataServer: 21, geoCodeServer: 17, geoProcessingServer: 27, networkAnalysisServer: 13, sceneServer: 15, vectorServer: 12, wmsServer: 25, versionManagementServer: 7, imageServer: 19, others: 12 },
    { month: 'Dec 9', mapServer: 52, featureServer: 38, geoDataServer: 22, geoCodeServer: 18, geoProcessingServer: 28, networkAnalysisServer: 14, sceneServer: 16, vectorServer: 13, wmsServer: 26, versionManagementServer: 8, imageServer: 20, others: 13 },
    { month: 'Dec 10', mapServer: 53, featureServer: 39, geoDataServer: 22, geoCodeServer: 19, geoProcessingServer: 29, networkAnalysisServer: 14, sceneServer: 17, vectorServer: 13, wmsServer: 27, versionManagementServer: 8, imageServer: 21, others: 13 },
    { month: 'Dec 11', mapServer: 51, featureServer: 38, geoDataServer: 21, geoCodeServer: 18, geoProcessingServer: 28, networkAnalysisServer: 14, sceneServer: 16, vectorServer: 13, wmsServer: 26, versionManagementServer: 8, imageServer: 20, others: 13 },
    { month: 'Dec 12', mapServer: 52, featureServer: 39, geoDataServer: 22, geoCodeServer: 18, geoProcessingServer: 29, networkAnalysisServer: 14, sceneServer: 17, vectorServer: 13, wmsServer: 27, versionManagementServer: 8, imageServer: 21, others: 13 },
    { month: 'Dec 13', mapServer: 54, featureServer: 40, geoDataServer: 23, geoCodeServer: 19, geoProcessingServer: 30, networkAnalysisServer: 15, sceneServer: 17, vectorServer: 14, wmsServer: 28, versionManagementServer: 8, imageServer: 22, others: 14 },
    { month: 'Dec 14', mapServer: 55, featureServer: 41, geoDataServer: 23, geoCodeServer: 20, geoProcessingServer: 31, networkAnalysisServer: 15, sceneServer: 18, vectorServer: 14, wmsServer: 29, versionManagementServer: 9, imageServer: 22, others: 14 },
    { month: 'Dec 15', mapServer: 57, featureServer: 42, geoDataServer: 24, geoCodeServer: 20, geoProcessingServer: 32, networkAnalysisServer: 16, sceneServer: 19, vectorServer: 15, wmsServer: 30, versionManagementServer: 9, imageServer: 23, others: 15 },
    { month: 'Dec 16', mapServer: 56, featureServer: 41, geoDataServer: 23, geoCodeServer: 20, geoProcessingServer: 31, networkAnalysisServer: 15, sceneServer: 18, vectorServer: 14, wmsServer: 29, versionManagementServer: 9, imageServer: 22, others: 14 },
    { month: 'Dec 17', mapServer: 58, featureServer: 43, geoDataServer: 24, geoCodeServer: 21, geoProcessingServer: 33, networkAnalysisServer: 16, sceneServer: 19, vectorServer: 15, wmsServer: 31, versionManagementServer: 9, imageServer: 24, others: 15 },
    { month: 'Dec 18', mapServer: 59, featureServer: 44, geoDataServer: 25, geoCodeServer: 21, geoProcessingServer: 34, networkAnalysisServer: 17, sceneServer: 20, vectorServer: 16, wmsServer: 32, versionManagementServer: 10, imageServer: 25, others: 16 },
    { month: 'Dec 19', mapServer: 61, featureServer: 45, geoDataServer: 26, geoCodeServer: 22, geoProcessingServer: 35, networkAnalysisServer: 17, sceneServer: 20, vectorServer: 16, wmsServer: 33, versionManagementServer: 10, imageServer: 26, others: 16 },
  ],
};

// Yearly data
const yearlyData = {
  dataTransferred: [
    { date: '2019', transferred: 28500, upload: 8400, download: 20100 },
    { date: '2020', transferred: 32100, upload: 9500, download: 22600 },
    { date: '2021', transferred: 35800, upload: 10600, download: 25200 },
    { date: '2022', transferred: 39200, upload: 11700, download: 27500 },
    { date: '2023', transferred: 42600, upload: 12800, download: 29800 },
    { date: '2024', transferred: 45900, upload: 13900, download: 32000 },
  ],
  serviceUsage: [
    { day: '2019', requests: 14200000 },
    { day: '2020', requests: 16500000 },
    { day: '2021', requests: 18900000 },
    { day: '2022', requests: 21400000 },
    { day: '2023', requests: 23800000 },
    { day: '2024', requests: 26200000 },
  ],
  serviceTypeUsage: [
    { month: '2019', mapServer: 9200, featureServer: 6800, geoDataServer: 3500, geoCodeServer: 2900, geoProcessingServer: 4500, networkAnalysisServer: 2000, sceneServer: 2400, vectorServer: 1600, wmsServer: 4200, versionManagementServer: 1050, imageServer: 3200, others: 1800 },
    { month: '2020', mapServer: 10100, featureServer: 7500, geoDataServer: 3900, geoCodeServer: 3200, geoProcessingServer: 5000, networkAnalysisServer: 2200, sceneServer: 2650, vectorServer: 1800, wmsServer: 4600, versionManagementServer: 1200, imageServer: 3500, others: 2000 },
    { month: '2021', mapServer: 11200, featureServer: 8300, geoDataServer: 4300, geoCodeServer: 3600, geoProcessingServer: 5600, networkAnalysisServer: 2450, sceneServer: 2900, vectorServer: 2000, wmsServer: 5100, versionManagementServer: 1350, imageServer: 3900, others: 2200 },
    { month: '2022', mapServer: 12500, featureServer: 9200, geoDataServer: 4800, geoCodeServer: 4000, geoProcessingServer: 6200, networkAnalysisServer: 2700, sceneServer: 3200, vectorServer: 2250, wmsServer: 5700, versionManagementServer: 1500, imageServer: 4300, others: 2450 },
    { month: '2023', mapServer: 13800, featureServer: 10200, geoDataServer: 5400, geoCodeServer: 4500, geoProcessingServer: 6900, networkAnalysisServer: 3000, sceneServer: 3600, vectorServer: 2500, wmsServer: 6300, versionManagementServer: 1700, imageServer: 4800, others: 2700 },
    { month: '2024', mapServer: 15200, featureServer: 11200, geoDataServer: 5900, geoCodeServer: 5000, geoProcessingServer: 7600, networkAnalysisServer: 3350, sceneServer: 4000, vectorServer: 2800, wmsServer: 7000, versionManagementServer: 1900, imageServer: 5300, others: 3000 },
  ],
};

// Service Request and Analysis Data
const serviceRequestAnalysisData = [
  { service: 'WMS GetMap', requests: 45800, avgTime: 145, type: 'MapServer' },
  { service: 'WFS GetFeature', requests: 38200, avgTime: 168, type: 'FeatureServer' },
  { service: 'CSW GetRecords', requests: 29400, avgTime: 112, type: 'GeoDataServer' },
  { service: 'WCS GetCoverage', requests: 22100, avgTime: 189, type: 'GeoProcessingServer' },
  { service: 'WMTS GetTile', requests: 18700, avgTime: 98, type: 'WMSServer' },
  { service: 'WPS Execute', requests: 12300, avgTime: 234, type: 'NetworkAnalysisServer' },
  { service: 'SOS GetObservation', requests: 8900, avgTime: 156, type: 'ImageServer' },
];

// Error Distribution Data
const errorDistributionData = [
  { name: 'Client Errors (4xx)', value: 612, color: '#f59e0b' },
  { name: 'Server Errors (5xx)', value: 267, color: '#ef4444' },
];

const getPremiumCardStyle = (theme: 'dark' | 'light') => {
  if (theme === 'dark') {
    return {
      background: '#19191A',
      border: '1px solid rgba(44, 44, 44, 0.59)',
      borderRadius: '10px',
    };
  } else {
    return {
      borderRadius: '14px',
      border: '4px solid #FFF',
      background: '#F8F8F8',
      boxShadow: '0 10px 15px -3px rgba(229, 231, 235, 0.50), 0 4px 6px -4px rgba(229, 231, 235, 0.50)',
    };
  }
};

export function TrendAnalyticsContainer({ theme }: TrendAnalyticsContainerProps) {
  const [timePeriod, setTimePeriod] = useState<'yearly' | 'monthly' | 'daily'>('monthly');
  const [dateRange, setDateRange] = useState('Last 30 Days');
  const [selectedYear, setSelectedYear] = useState('2024');
  const [selectedMonth, setSelectedMonth] = useState('December');
  const [selectedMonthYear, setSelectedMonthYear] = useState('2024');
  const [showDateDropdown, setShowDateDropdown] = useState(false);
  
  // Year range for yearly view
  const [fromYear, setFromYear] = useState('2019');
  const [toYear, setToYear] = useState('2024');
  
  // Service dropdown states for each chart
  const [selectedService1, setSelectedService1] = useState('All Services');
  const [selectedService2, setSelectedService2] = useState('All Services');
  const [selectedService3, setSelectedService3] = useState('All Services');
  const [selectedService4, setSelectedService4] = useState('All Services');
  const [selectedService5, setSelectedService5] = useState('All Services');
  const [selectedService6, setSelectedService6] = useState('All Services');
  const [showServiceDropdown1, setShowServiceDropdown1] = useState(false);
  const [showServiceDropdown2, setShowServiceDropdown2] = useState(false);
  const [showServiceDropdown3, setShowServiceDropdown3] = useState(false);
  const [showServiceDropdown4, setShowServiceDropdown4] = useState(false);
  const [showServiceDropdown5, setShowServiceDropdown5] = useState(false);
  const [showServiceDropdown6, setShowServiceDropdown6] = useState(false);
  const [searchQuery1, setSearchQuery1] = useState('');
  const [searchQuery2, setSearchQuery2] = useState('');
  const [searchQuery3, setSearchQuery3] = useState('');
  const [searchQuery4, setSearchQuery4] = useState('');
  const [searchQuery5, setSearchQuery5] = useState('');
  const [searchQuery6, setSearchQuery6] = useState('');
  
  // Expanded chart state
  const [expandedChart, setExpandedChart] = useState<'dataTransferred' | 'serviceUsage' | null>(null);

  // Refs for service dropdowns
  const serviceDropdownRef1 = useRef<HTMLDivElement>(null);
  const serviceDropdownRef2 = useRef<HTMLDivElement>(null);
  const serviceDropdownRef3 = useRef<HTMLDivElement>(null);
  const serviceDropdownRef4 = useRef<HTMLDivElement>(null);
  const serviceDropdownRef5 = useRef<HTMLDivElement>(null);
  const serviceDropdownRef6 = useRef<HTMLDivElement>(null);

  // Service list
  const serviceList = [
    'All Services',
    'WMS GetMap',
    'WFS GetFeature',
    'CSW GetRecords',
    'WCS GetCoverage',
    'WMTS GetTile',
    'WPS Execute',
    'SOS GetObservation',
    'MapServer',
    'FeatureServer',
    'GeoDataServer',
    'GeoCodeServer',
    'GeoProcessingServer',
    'NetworkAnalysisServer',
    'SceneServer',
    'VectorServer',
    'WMSServer',
    'VersionManagementServer',
    'ImageServer',
  ];

  // Handle click outside for service dropdowns
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (serviceDropdownRef1.current && !serviceDropdownRef1.current.contains(event.target as Node)) {
        setShowServiceDropdown1(false);
      }
      if (serviceDropdownRef2.current && !serviceDropdownRef2.current.contains(event.target as Node)) {
        setShowServiceDropdown2(false);
      }
      if (serviceDropdownRef3.current && !serviceDropdownRef3.current.contains(event.target as Node)) {
        setShowServiceDropdown3(false);
      }
      if (serviceDropdownRef4.current && !serviceDropdownRef4.current.contains(event.target as Node)) {
        setShowServiceDropdown4(false);
      }
      if (serviceDropdownRef5.current && !serviceDropdownRef5.current.contains(event.target as Node)) {
        setShowServiceDropdown5(false);
      }
      if (serviceDropdownRef6.current && !serviceDropdownRef6.current.contains(event.target as Node)) {
        setShowServiceDropdown6(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const dateRangeOptions = [
    'Last 7 Days',
    'Last 30 Days',
    'Last 90 Days',
    'Last 6 Months',
    'Last Year',
  ];

  const yearOptions = ['2024', '2023', '2022', '2021', '2020', '2019'];
  
  const monthOptions = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  // Get filtered data based on selections
  const getFilteredData = () => {
    if (timePeriod === 'yearly') {
      // Filter by year range
      const from = parseInt(fromYear);
      const to = parseInt(toYear);
      
      return {
        dataTransferred: yearlyData.dataTransferred.filter(item => {
          const year = parseInt(item.date);
          return year >= Math.min(from, to) && year <= Math.max(from, to);
        }),
        serviceUsage: yearlyData.serviceUsage.filter(item => {
          const year = parseInt(item.day);
          return year >= Math.min(from, to) && year <= Math.max(from, to);
        }),
        serviceTypeUsage: yearlyData.serviceTypeUsage.filter(item => {
          const year = parseInt(item.month);
          return year >= Math.min(from, to) && year <= Math.max(from, to);
        }),
      };
    } else if (timePeriod === 'monthly') {
      // Return all 12 months for the selected year
      return {
        dataTransferred: fullDatasets.dataTransferred[selectedMonthYear as '2024' | '2023'] || fullDatasets.dataTransferred['2024'],
        serviceUsage: fullDatasets.serviceUsage[selectedMonthYear as '2024' | '2023'] || fullDatasets.serviceUsage['2024'],
        serviceTypeUsage: fullDatasets.serviceTypeUsage[selectedMonthYear as '2024' | '2023'] || fullDatasets.serviceTypeUsage['2024'],
      };
    } else {
      // Daily - filter based on date range selection
      let daysToShow = 30; // default
      
      if (dateRange === 'Last 7 Days') {
        daysToShow = 7;
      } else if (dateRange === 'Last 30 Days') {
        daysToShow = 30;
      } else if (dateRange === 'Last 90 Days') {
        daysToShow = 30; // We only have 30 days of data, show all
      }
      
      // Get the last N days from the data
      return {
        dataTransferred: dailyData.dataTransferred.slice(-daysToShow),
        serviceUsage: dailyData.serviceUsage.slice(-daysToShow),
        serviceTypeUsage: dailyData.serviceTypeUsage.slice(-daysToShow),
      };
    }
  };

  const currentData = getFilteredData();

  return (
    <>
      {/* Expanded Chart Modal */}
      {expandedChart && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] flex items-center justify-center p-4"
          onClick={() => setExpandedChart(null)}
        >
          <div 
            className={`w-full max-w-6xl rounded-2xl border shadow-2xl p-8 ${
              theme === 'dark' ? 'bg-slate-900 border-slate-800' : 'bg-white border-gray-200'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-xl font-bold mb-1">
                  {expandedChart === 'dataTransferred' ? 'Data Transferred Trend Analysis' : 'Service Usage Trend Analysis'}
                </h3>
                <p className={`text-sm mt-1 ${theme === 'dark' ? 'text-slate-300' : 'text-gray-700'}`}>
                  {expandedChart === 'dataTransferred' 
                    ? 'Upload and download bandwidth usage over time (GB)' 
                    : 'Request trends over the selected period'}
                </p>
              </div>
              <button
                onClick={() => setExpandedChart(null)}
                className={`px-4 py-2 rounded-lg border transition-all flex items-center gap-2 ${
                  theme === 'dark'
                    ? 'bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700'
                    : 'bg-gray-100 border-gray-300 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <X className="w-4 h-4" />
                Close
              </button>
            </div>

            <ResponsiveContainer width="100%" height={500}>
              {expandedChart === 'dataTransferred' ? (
                <LineChart data={currentData.dataTransferred}>
                  <CartesianGrid strokeDasharray="3 3" stroke={theme === 'dark' ? '#334155' : '#E5E7EB'} />
                  <XAxis dataKey="date" stroke={theme === 'dark' ? '#94a3b8' : '#6b7280'} style={{ fontSize: '12px' }} />
                  <YAxis stroke={theme === 'dark' ? '#94a3b8' : '#6b7280'} style={{ fontSize: '12px' }} />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: theme === 'dark' ? '#1e293b' : '#ffffff',
                      borderColor: theme === 'dark' ? '#334155' : '#e5e7eb',
                      color: theme === 'dark' ? '#f1f5f9' : '#1f2937'
                    }}
                  />
                  <Line type="monotone" dataKey="upload" stroke="#10B981" strokeWidth={3} dot={{ fill: '#10B981', r: 4 }} name="Upload" />
                  <Line type="monotone" dataKey="download" stroke="#F59E0B" strokeWidth={3} dot={{ fill: '#F59E0B', r: 4 }} name="Download" />
                  <Line type="monotone" dataKey="transferred" stroke="#0EA5E9" strokeWidth={3} dot={{ fill: '#0EA5E9', r: 4 }} name="Total Transferred" />
                </LineChart>
              ) : (
                <LineChart data={currentData.serviceUsage}>
                  <CartesianGrid strokeDasharray="3 3" stroke={theme === 'dark' ? '#334155' : '#E5E7EB'} />
                  <XAxis dataKey="day" stroke={theme === 'dark' ? '#94a3b8' : '#6b7280'} style={{ fontSize: '12px' }} />
                  <YAxis stroke={theme === 'dark' ? '#94a3b8' : '#6b7280'} style={{ fontSize: '12px' }} />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: theme === 'dark' ? '#1e293b' : '#ffffff',
                      borderColor: theme === 'dark' ? '#334155' : '#e5e7eb',
                      color: theme === 'dark' ? '#f1f5f9' : '#1f2937'
                    }}
                  />
                  <Line type="monotone" dataKey="requests" stroke="#8B5CF6" strokeWidth={3} dot={{ r: 4 }} name="Requests" />
                </LineChart>
              )}
            </ResponsiveContainer>
          </div>
        </div>
      )}

      <div style={
        theme === 'dark' 
          ? {
              background: '#19191A',
              border: '1px solid rgba(44, 44, 44, 0.59)',
              borderRadius: '10px',
            }
          : {
              borderRadius: '14px',
              border: '4px solid #FFF',
              background: '#F8F8F8',
              boxShadow: '0 10px 15px -3px rgba(229, 231, 235, 0.50), 0 4px 6px -4px rgba(229, 231, 235, 0.50)',
            }
      } className="p-6">
        {/* Header with Tabs and Controls */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">
        <div>
          <h2 className={`text-2xl font-bold ${theme === 'dark' ? 'text-slate-100' : 'text-[#101828]'}`}>
            Trend Analytics Overview
          </h2>
          <p className={`text-sm mt-1 ${theme === 'dark' ? 'text-slate-300' : 'text-[#4a5565]'}`}>
            Comprehensive analysis of service usage, data transfer, and operations
          </p>
        </div>

        {/* Controls */}
        <div className="flex flex-wrap items-center gap-3">
          {/* Time Period Tabs */}
          <div className={`flex items-center rounded-lg p-1 ${
            theme === 'dark' ? 'bg-slate-800/50' : 'bg-gray-100'
          }`}>
            <button
              onClick={() => {
                setTimePeriod('yearly');
                setDateRange('Last Year');
              }}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                timePeriod === 'yearly'
                  ? theme === 'dark'
                    ? 'bg-[#063360] text-white shadow-sm'
                    : 'bg-white text-[#063360] shadow-sm'
                  : theme === 'dark'
                    ? 'text-slate-400 hover:text-slate-200'
                    : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Yearly
            </button>
            <button
              onClick={() => {
                setTimePeriod('monthly');
                setDateRange('Last 30 Days');
              }}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                timePeriod === 'monthly'
                  ? theme === 'dark'
                    ? 'bg-[#063360] text-white shadow-sm'
                    : 'bg-white text-[#063360] shadow-sm'
                  : theme === 'dark'
                    ? 'text-slate-400 hover:text-slate-200'
                    : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => {
                setTimePeriod('daily');
                setDateRange('Last 7 Days');
              }}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                timePeriod === 'daily'
                  ? theme === 'dark'
                    ? 'bg-[#063360] text-white shadow-sm'
                    : 'bg-white text-[#063360] shadow-sm'
                  : theme === 'dark'
                    ? 'text-slate-400 hover:text-slate-200'
                    : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Daily
            </button>
          </div>

          {/* Date Range Selector */}
          <div className="relative">
            <button
              onClick={() => setShowDateDropdown(!showDateDropdown)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-all ${
                theme === 'dark'
                  ? 'bg-slate-900/80 border-slate-700/50 text-slate-300 hover:bg-slate-800/50'
                  : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50'
              }`}
            >
              <Calendar className="w-4 h-4" />
              <span className="text-sm">
                {timePeriod === 'yearly' 
                  ? `${fromYear} - ${toYear}`
                  : timePeriod === 'monthly'
                    ? selectedMonthYear
                    : dateRange
                }
              </span>
              <ChevronDown className="w-4 h-4" />
            </button>
            
            {showDateDropdown && (
              <div 
                className={`absolute right-0 mt-2 w-48 rounded-lg shadow-lg overflow-hidden ${
                  theme === 'dark' ? 'bg-slate-800 border border-slate-700' : 'bg-white border border-gray-200'
                }`}
                style={{ zIndex: 9999 }}
              >
                {timePeriod === 'yearly' ? (
                  <div className="p-3">
                    <div className="grid grid-cols-2 gap-3">
                      {/* From Year */}
                      <div>
                        <label className={`block text-xs font-medium mb-2 ${
                          theme === 'dark' ? 'text-slate-400' : 'text-gray-600'
                        }`}>
                          From
                        </label>
                        <div className="max-h-40 overflow-y-auto">
                          {yearOptions.map((option) => (
                            <button
                              key={option}
                              onClick={() => setFromYear(option)}
                              className={`w-full text-left px-3 py-2 text-sm rounded transition-colors mb-1 ${
                                fromYear === option
                                  ? theme === 'dark'
                                    ? 'bg-[#063360] text-white'
                                    : 'bg-[#063360] text-white'
                                  : theme === 'dark'
                                    ? 'text-slate-300 hover:bg-slate-700'
                                    : 'text-gray-700 hover:bg-gray-100'
                              }`}
                            >
                              {option}
                            </button>
                          ))}
                        </div>
                      </div>
                      
                      {/* To Year */}
                      <div>
                        <label className={`block text-xs font-medium mb-2 ${
                          theme === 'dark' ? 'text-slate-400' : 'text-gray-600'
                        }`}>
                          To
                        </label>
                        <div className="max-h-40 overflow-y-auto">
                          {yearOptions.map((option) => (
                            <button
                              key={option}
                              onClick={() => {
                                setToYear(option);
                                setShowDateDropdown(false);
                              }}
                              className={`w-full text-left px-3 py-2 text-sm rounded transition-colors mb-1 ${
                                toYear === option
                                  ? theme === 'dark'
                                    ? 'bg-[#063360] text-white'
                                    : 'bg-[#063360] text-white'
                                  : theme === 'dark'
                                    ? 'text-slate-300 hover:bg-slate-700'
                                    : 'text-gray-700 hover:bg-gray-100'
                              }`}
                            >
                              {option}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ) : timePeriod === 'monthly' ? (
                  <div className="max-h-60 overflow-y-auto">
                    {yearOptions.map((option) => (
                      <button
                        key={option}
                        onClick={() => {
                          setSelectedMonthYear(option);
                          setShowDateDropdown(false);
                        }}
                        className={`w-full text-left px-4 py-2 text-sm transition-colors first:rounded-t-lg last:rounded-b-lg ${
                          selectedMonthYear === option
                            ? theme === 'dark'
                              ? 'bg-[#063360] text-white'
                              : 'bg-[#063360] text-white'
                            : theme === 'dark'
                              ? 'text-slate-300 hover:bg-slate-700'
                              : 'text-gray-700 hover:bg-gray-100'
                        }`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                ) : (
                  <>
                    {dateRangeOptions
                      .filter(option => {
                        // Remove "Last 6 Months" and "Last Year" for daily view
                        if (timePeriod === 'daily') {
                          return option !== 'Last 6 Months' && option !== 'Last Year';
                        }
                        return true;
                      })
                      .map((option) => (
                        <button
                          key={option}
                          onClick={() => {
                            setDateRange(option);
                            setShowDateDropdown(false);
                          }}
                          className={`w-full text-left px-4 py-2 text-sm transition-colors first:rounded-t-lg last:rounded-b-lg ${
                            dateRange === option
                              ? theme === 'dark'
                                ? 'bg-[#063360] text-white'
                                : 'bg-[#063360] text-white'
                              : theme === 'dark'
                                ? 'text-slate-300 hover:bg-slate-700'
                                : 'text-gray-700 hover:bg-gray-100'
                          }`}
                        >
                          {option}
                        </button>
                      ))}
                  </>
                )}
              </div>
            )}
          </div>

          {/* Refresh Button */}
          <button
            className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-all ${
              theme === 'dark'
                ? 'bg-slate-900/80 border-slate-700/50 text-slate-300 hover:bg-slate-800/50'
                : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50'
            }`}
          >
            <RefreshCw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Data Transferred Trend Analysis */}
        <div style={getPremiumCardStyle(theme)} className="p-5">
          <div className="flex items-start justify-between mb-4 gap-4">
            <div className="flex-1">
              <h3 className={`text-lg font-bold ${theme === 'dark' ? 'text-slate-100' : 'text-[#101828]'}`}>
                Data Transferred Trend Analysis
              </h3>
              <p className={`text-xs mt-1 ${theme === 'dark' ? 'text-slate-300' : 'text-[#4a5565]'}`}>
                Upload and download bandwidth usage over time (GB)
              </p>
            </div>
            
            {/* Service Selector */}
            <div className="relative flex items-center gap-2" ref={serviceDropdownRef1}>
              <button
                onClick={() => setShowServiceDropdown1(!showServiceDropdown1)}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-lg border text-sm transition-all ${
                  theme === 'dark'
                    ? 'bg-slate-900/80 border-slate-700/50 text-slate-300 hover:bg-slate-800/50'
                    : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50'
                }`}
              >
                <span className="whitespace-nowrap">{selectedService1}</span>
                <ChevronDown className="w-3.5 h-3.5" />
              </button>
              <div className="scale-90">
                <ExportDropdown theme={theme} />
              </div>
              <button
                onClick={() => setExpandedChart('dataTransferred')}
                className={`p-1.5 rounded-lg border transition-all ${
                  theme === 'dark'
                    ? 'bg-slate-900/80 border-slate-700/50 text-slate-300 hover:bg-slate-800/50 hover:text-slate-100'
                    : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50'
                }`}
                title="Expand chart"
              >
                <Maximize2 className="w-4 h-4" />
              </button>
              
              {showServiceDropdown1 && (
                <div 
                  className={`absolute right-0 mt-2 w-64 rounded-lg shadow-lg ${
                    theme === 'dark' ? 'bg-slate-800 border border-slate-700' : 'bg-white border border-gray-200'
                  }`}
                  style={{ top: '100%', zIndex: 9999 }}
                >
                  {/* Search Bar */}
                  <div className={`p-2 border-b ${theme === 'dark' ? 'border-slate-700' : 'border-gray-200'}`}>
                    <div className={`flex items-center gap-2 px-3 py-2 rounded-md ${
                      theme === 'dark' ? 'bg-slate-900/50' : 'bg-gray-50'
                    }`}>
                      <Search className="w-4 h-4 text-gray-400" />
                      <input
                        type="text"
                        placeholder="Search services..."
                        value={searchQuery1}
                        onChange={(e) => setSearchQuery1(e.target.value)}
                        className={`w-full bg-transparent border-none outline-none text-sm ${
                          theme === 'dark' ? 'text-slate-200 placeholder-slate-500' : 'text-gray-700 placeholder-gray-400'
                        }`}
                      />
                    </div>
                  </div>
                  
                  {/* Service List */}
                  <div className="max-h-60 overflow-y-auto p-1">
                    {serviceList
                      .filter(service => service.toLowerCase().includes(searchQuery1.toLowerCase()))
                      .map((service) => (
                        <button
                          key={service}
                          onClick={() => {
                            setSelectedService1(service);
                            setShowServiceDropdown1(false);
                            setSearchQuery1('');
                          }}
                          className={`w-full text-left px-3 py-2 text-sm rounded transition-colors ${
                            selectedService1 === service
                              ? theme === 'dark'
                                ? 'bg-[#063360] text-white'
                                : 'bg-[#063360] text-white'
                              : theme === 'dark'
                                ? 'text-slate-300 hover:bg-slate-700'
                                : 'text-gray-700 hover:bg-gray-100'
                          }`}
                        >
                          {service}
                        </button>
                      ))}
                  </div>
                </div>
              )}
            </div>
          </div>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={currentData.dataTransferred}>
              <CartesianGrid strokeDasharray="3 3" stroke={theme === 'dark' ? '#334155' : '#E5E7EB'} />
              <XAxis dataKey="date" stroke={theme === 'dark' ? '#94a3b8' : '#6b7280'} style={{ fontSize: '11px' }} />
              <YAxis stroke={theme === 'dark' ? '#94a3b8' : '#6b7280'} style={{ fontSize: '11px' }} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: theme === 'dark' ? '#1e293b' : '#ffffff',
                  borderColor: theme === 'dark' ? '#334155' : '#e5e7eb',
                  color: theme === 'dark' ? '#f1f5f9' : '#1f2937'
                }}
              />
              <Line type="monotone" dataKey="transferred" stroke="#0EA5E9" strokeWidth={2} dot={{ fill: '#0EA5E9', r: 4 }} name="Total Transferred" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Service Usage Trend Analysis */}
        <div style={getPremiumCardStyle(theme)} className="p-5 overflow-visible">
          <div className="flex items-start justify-between mb-4 gap-4">
            <div className="flex-1">
              <h3 className={`text-lg font-bold ${theme === 'dark' ? 'text-slate-100' : 'text-[#101828]'}`}>
                Service Usage Trend Analysis
              </h3>
              <p className={`text-xs mt-1 ${theme === 'dark' ? 'text-slate-300' : 'text-[#4a5565]'}`}>
                Request trends over the selected period
              </p>
            </div>
            
            {/* Service Selector */}
            <div className="relative flex items-center gap-2 z-50" ref={serviceDropdownRef2}>
              <button
                onClick={() => setShowServiceDropdown2(!showServiceDropdown2)}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-lg border text-sm transition-all ${
                  theme === 'dark'
                    ? 'bg-slate-900/80 border-slate-700/50 text-slate-300 hover:bg-slate-800/50'
                    : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50'
                }`}
              >
                <span className="whitespace-nowrap">{selectedService2}</span>
                <ChevronDown className="w-3.5 h-3.5" />
              </button>
              <div className="scale-90 relative z-50">
                <ExportDropdown theme={theme} />
              </div>
              <button
                onClick={() => setExpandedChart('serviceUsage')}
                className={`p-1.5 rounded-lg border transition-all ${
                  theme === 'dark'
                    ? 'bg-slate-900/80 border-slate-700/50 text-slate-300 hover:bg-slate-800/50 hover:text-slate-100'
                    : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50'
                }`}
                title="Expand chart"
              >
                <Maximize2 className="w-4 h-4" />
              </button>
              
              {showServiceDropdown2 && (
                <div 
                  className={`absolute right-0 mt-2 w-64 rounded-lg shadow-lg ${
                    theme === 'dark' ? 'bg-slate-800 border border-slate-700' : 'bg-white border border-gray-200'
                  }`}
                  style={{ top: '100%', zIndex: 9999 }}
                >
                  {/* Search Bar */}
                  <div className={`p-2 border-b ${theme === 'dark' ? 'border-slate-700' : 'border-gray-200'}`}>
                    <div className={`flex items-center gap-2 px-3 py-2 rounded-md ${
                      theme === 'dark' ? 'bg-slate-900/50' : 'bg-gray-50'
                    }`}>
                      <Search className="w-4 h-4 text-gray-400" />
                      <input
                        type="text"
                        placeholder="Search services..."
                        value={searchQuery2}
                        onChange={(e) => setSearchQuery2(e.target.value)}
                        className={`w-full bg-transparent border-none outline-none text-sm ${
                          theme === 'dark' ? 'text-slate-200 placeholder-slate-500' : 'text-gray-700 placeholder-gray-400'
                        }`}
                      />
                    </div>
                  </div>
                  
                  {/* Service List */}
                  <div className="max-h-60 overflow-y-auto p-1">
                    {serviceList
                      .filter(service => service.toLowerCase().includes(searchQuery2.toLowerCase()))
                      .map((service) => (
                        <button
                          key={service}
                          onClick={() => {
                            setSelectedService2(service);
                            setShowServiceDropdown2(false);
                            setSearchQuery2('');
                          }}
                          className={`w-full text-left px-3 py-2 text-sm rounded transition-colors ${
                            selectedService2 === service
                              ? theme === 'dark'
                                ? 'bg-[#063360] text-white'
                                : 'bg-[#063360] text-white'
                              : theme === 'dark'
                                ? 'text-slate-300 hover:bg-slate-700'
                                : 'text-gray-700 hover:bg-gray-100'
                          }`}
                        >
                          {service}
                        </button>
                      ))}
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="relative z-0">
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={currentData.serviceUsage}>
              <CartesianGrid strokeDasharray="3 3" stroke={theme === 'dark' ? '#334155' : '#E5E7EB'} />
              <XAxis dataKey="day" stroke={theme === 'dark' ? '#94a3b8' : '#6b7280'} style={{ fontSize: '11px' }} />
              <YAxis stroke={theme === 'dark' ? '#94a3b8' : '#6b7280'} style={{ fontSize: '11px' }} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: theme === 'dark' ? '#1e293b' : '#ffffff',
                  borderColor: theme === 'dark' ? '#334155' : '#e5e7eb',
                  color: theme === 'dark' ? '#f1f5f9' : '#1f2937'
                }}
              />
              <Line type="monotone" dataKey="requests" stroke="#8B5CF6" strokeWidth={2} dot={{ r: 4 }} name="Requests" />
            </LineChart>
          </ResponsiveContainer>
          </div>
        </div>

        {/* Error Type Distribution */}
        <div style={getPremiumCardStyle(theme)} className="p-6">
          <div className="flex items-start justify-between mb-4 gap-4">
            <div className="flex-1">
              <h3 className={`text-xl font-bold ${theme === 'dark' ? 'text-slate-100' : 'text-[#101828]'}`}>
                Error Type Distribution
              </h3>
              <p className={`text-sm ${theme === 'dark' ? 'text-slate-300' : 'text-[#4a5565]'}`}>
                Error breakdown by type
              </p>
            </div>
            
            {/* Service Selector, Export, and Maximize */}
            <div className="relative flex items-center gap-2" ref={serviceDropdownRef6}>
              <button
                onClick={() => setShowServiceDropdown6(!showServiceDropdown6)}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-lg border text-sm transition-all ${
                  theme === 'dark'
                    ? 'bg-slate-900/80 border-slate-700/50 text-slate-300 hover:bg-slate-800/50'
                    : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50'
                }`}
              >
                <span className="whitespace-nowrap">{selectedService6}</span>
                <ChevronDown className="w-3.5 h-3.5" />
              </button>
              <div className="scale-90">
                <ExportDropdown theme={theme} />
              </div>
              
              {showServiceDropdown6 && (
                <div 
                  className={`absolute right-0 mt-2 w-64 rounded-lg shadow-lg ${
                    theme === 'dark' ? 'bg-slate-800 border border-slate-700' : 'bg-white border border-gray-200'
                  }`}
                  style={{ top: '100%', zIndex: 9999 }}
                >
                  {/* Search Bar */}
                  <div className={`p-2 border-b ${theme === 'dark' ? 'border-slate-700' : 'border-gray-200'}`}>
                    <div className={`flex items-center gap-2 px-3 py-2 rounded-md ${
                      theme === 'dark' ? 'bg-slate-900/50' : 'bg-gray-50'
                    }`}>
                      <Search className="w-4 h-4 text-gray-400" />
                      <input
                        type="text"
                        placeholder="Search services..."
                        value={searchQuery6}
                        onChange={(e) => setSearchQuery6(e.target.value)}
                        className={`w-full bg-transparent border-none outline-none text-sm ${
                          theme === 'dark' ? 'text-slate-200 placeholder-slate-500' : 'text-gray-700 placeholder-gray-400'
                        }`}
                      />
                    </div>
                  </div>
                  
                  {/* Service List */}
                  <div className="max-h-60 overflow-y-auto p-1">
                    {serviceList
                      .filter(service => service.toLowerCase().includes(searchQuery6.toLowerCase()))
                      .map((service) => (
                        <button
                          key={service}
                          onClick={() => {
                            setSelectedService6(service);
                            setShowServiceDropdown6(false);
                            setSearchQuery6('');
                          }}
                          className={`w-full text-left px-3 py-2 text-sm rounded transition-colors ${
                            selectedService6 === service
                              ? theme === 'dark'
                                ? 'bg-[#063360] text-white'
                                : 'bg-[#063360] text-white'
                              : theme === 'dark'
                                ? 'text-slate-300 hover:bg-slate-700'
                                : 'text-gray-700 hover:bg-gray-100'
                          }`}
                        >
                          {service}
                        </button>
                      ))}
                  </div>
                </div>
              )}
            </div>
          </div>
          
          {/* Donut Chart */}
          <div className="flex items-center justify-center mb-6">
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={errorDistributionData}
                  cx="50%"
                  cy="50%"
                  innerRadius={80}
                  outerRadius={120}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {errorDistributionData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} stroke="white" strokeWidth={4} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: theme === 'dark' ? '#1e293b' : '#ffffff',
                    border: `1px solid ${theme === 'dark' ? '#334155' : '#e5e7eb'}`,
                    borderRadius: '8px',
                    color: theme === 'dark' ? '#f1f5f9' : '#1f2937'
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Legend */}
          <div className={`rounded-xl px-10 py-4 ${theme === 'dark' ? 'bg-slate-800/30' : 'bg-white'}`}>
            <div className="grid grid-cols-2 gap-x-8 gap-y-3">
              {errorDistributionData.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div 
                    className="w-3 h-3 rounded-full shrink-0" 
                    style={{ backgroundColor: item.color }}
                  />
                  <span className={`text-[12px] leading-[16px] ${theme === 'dark' ? 'text-slate-400' : 'text-[#4a5565]'}`}>
                    {item.name}
                  </span>
                  <span className={`text-[14px] leading-[20px] ml-auto ${theme === 'dark' ? 'text-slate-200' : 'text-[#364153]'}`} style={{ fontWeight: 700 }}>
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Operation Metrics Analysis - placeholder */}
        <div style={getPremiumCardStyle(theme)} className="p-5 overflow-visible">
          <div className="flex items-start justify-between mb-4 gap-4">
            <div className="flex-1">
              <h3 className={`text-lg font-bold ${theme === 'dark' ? 'text-slate-100' : 'text-[#101828]'}`}>
                Operation Metrics Analysis
              </h3>
              <p className={`text-xs mt-1 ${theme === 'dark' ? 'text-slate-300' : 'text-[#4a5565]'}`}>
                Request distribution by operation type
              </p>
            </div>
            
            {/* Service Selector */}
            <div className="relative flex items-center gap-2 z-50" ref={serviceDropdownRef3}>
              <button
                onClick={() => setShowServiceDropdown3(!showServiceDropdown3)}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-lg border text-sm transition-all ${
                  theme === 'dark'
                    ? 'bg-slate-900/80 border-slate-700/50 text-slate-300 hover:bg-slate-800/50'
                    : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50'
                }`}
              >
                <span className="whitespace-nowrap">{selectedService3}</span>
                <ChevronDown className="w-3.5 h-3.5" />
              </button>
              <div className="scale-90 relative z-50">
                <ExportDropdown theme={theme} />
              </div>
              
              {showServiceDropdown3 && (
                <div 
                  className={`absolute right-0 mt-2 w-64 rounded-lg shadow-lg ${
                    theme === 'dark' ? 'bg-slate-800 border border-slate-700' : 'bg-white border border-gray-200'
                  }`}
                  style={{ top: '100%', zIndex: 9999 }}
                >
                  {/* Search Bar */}
                  <div className={`p-2 border-b ${theme === 'dark' ? 'border-slate-700' : 'border-gray-200'}`}>
                    <div className={`flex items-center gap-2 px-3 py-2 rounded-md ${
                      theme === 'dark' ? 'bg-slate-900/50' : 'bg-gray-50'
                    }`}>
                      <Search className="w-4 h-4 text-gray-400" />
                      <input
                        type="text"
                        placeholder="Search services..."
                        value={searchQuery3}
                        onChange={(e) => setSearchQuery3(e.target.value)}
                        className={`w-full bg-transparent border-none outline-none text-sm ${
                          theme === 'dark' ? 'text-slate-200 placeholder-slate-500' : 'text-gray-700 placeholder-gray-400'
                        }`}
                      />
                    </div>
                  </div>
                  
                  {/* Service List */}
                  <div className="max-h-60 overflow-y-auto p-1">
                    {serviceList
                      .filter(service => service.toLowerCase().includes(searchQuery3.toLowerCase()))
                      .map((service) => (
                        <button
                          key={service}
                          onClick={() => {
                            setSelectedService3(service);
                            setShowServiceDropdown3(false);
                            setSearchQuery3('');
                          }}
                          className={`w-full text-left px-3 py-2 text-sm rounded transition-colors ${
                            selectedService3 === service
                              ? theme === 'dark'
                                ? 'bg-[#063360] text-white'
                                : 'bg-[#063360] text-white'
                              : theme === 'dark'
                                ? 'text-slate-300 hover:bg-slate-700'
                                : 'text-gray-700 hover:bg-gray-100'
                          }`}
                        >
                          {service}
                        </button>
                      ))}
                  </div>
                </div>
              )}
            </div>
          </div>
          
          <div className="flex items-center justify-center mb-4 relative z-0">
            <ResponsiveContainer width="100%" height={264}>
              <PieChart>
                <Pie
                  data={[
                    { name: 'Query', value: 30, color: '#10b981' },
                    { name: 'Export', value: 25, color: '#8b5cf6' },
                    { name: 'Tile', value: 15, color: '#3b82f6' },
                    { name: 'Identify', value: 12, color: '#06b6d4' },
                    { name: 'GeoCode', value: 8, color: '#f59e0b' },
                    { name: 'Find', value: 4, color: '#ec4899' },
                    { name: 'Geometry', value: 3, color: '#14b8a6' },
                    { name: 'Edits', value: 2, color: '#ef4444' },
                    { name: 'Others', value: 1, color: '#6366f1' },
                  ]}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={95}
                  paddingAngle={3}
                  dataKey="value"
                >
                  {[
                    { name: 'Query', value: 30, color: '#10b981' },
                    { name: 'Export', value: 25, color: '#8b5cf6' },
                    { name: 'Tile', value: 15, color: '#3b82f6' },
                    { name: 'Identify', value: 12, color: '#06b6d4' },
                    { name: 'GeoCode', value: 8, color: '#f59e0b' },
                    { name: 'Find', value: 4, color: '#ec4899' },
                    { name: 'Geometry', value: 3, color: '#14b8a6' },
                    { name: 'Edits', value: 2, color: '#ef4444' },
                    { name: 'Others', value: 1, color: '#6366f1' },
                  ].map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: theme === 'dark' ? '#1e293b' : '#ffffff',
                    borderColor: theme === 'dark' ? '#334155' : '#e5e7eb',
                    borderRadius: '8px',
                    color: theme === 'dark' ? '#f1f5f9' : '#1f2937'
                  }} 
                />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Legend */}
          <div className={`rounded-xl px-10 py-4 ${theme === 'dark' ? 'bg-slate-800/30' : 'bg-white'}`}>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2">
              {[
                { name: 'Query', value: 30, color: '#10b981' },
                { name: 'Export', value: 25, color: '#8b5cf6' },
                { name: 'Tile', value: 15, color: '#3b82f6' },
                { name: 'Identify', value: 12, color: '#06b6d4' },
                { name: 'GeoCode', value: 8, color: '#f59e0b' },
                { name: 'Find', value: 4, color: '#ec4899' },
                { name: 'Geometry', value: 3, color: '#14b8a6' },
                { name: 'Edits', value: 2, color: '#ef4444' },
                { name: 'Others', value: 1, color: '#6366f1' },
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-1.5">
                  <div 
                    className="w-2.5 h-2.5 rounded-full shrink-0" 
                    style={{ backgroundColor: item.color }}
                  />
                  <span className={`text-[10px] ${theme === 'dark' ? 'text-slate-400' : 'text-[#4a5565]'}`}>
                    {item.name}
                  </span>
                  <span className={`text-xs ml-auto ${theme === 'dark' ? 'text-slate-200' : 'text-[#364153]'}`} style={{ fontWeight: 700 }}>
                    {item.value}%
                  </span>
                </div>
              ))}
          </div>
        </div>
      </div>
      </div>
      </div>
    </>
  );
}