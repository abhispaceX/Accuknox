import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [
    {
      id: 'cspm_executive_dashboard',
      name: 'CSPM Executive Dashboard',
      widgets: [
        {
          id: 'cloud_accounts',
          name: 'Cloud Accounts',
          type: 'pie_chart',
          data: [
            { name: 'Connected', value: 2 },
            { name: 'Not Connected', value: 0 }
          ]
        },
        {
          id: 'cloud_account_risk_assessment',
          name: 'Cloud Account Risk Assessment',
          type: 'donut_chart',
          data: [
            { name: 'Failed', value: 1889 },
            { name: 'Warning', value: 581 },
            { name: 'Not Available', value: 36 },
            { name: 'Passed', value: 7253 }
          ]
        }
      ],
    },
    {
      id: 'cwpp_dashboard',
      name: 'CWPP Dashboard',
      widgets: [
        {
          id: 'top_5_namespace_specific_alerts',
          name: 'Top 5 Namespace Specific Alerts',
          type: 'placeholder',
          data: { message: 'No Graph data available!' }
        },
        {
          id: 'workload_alerts',
          name: 'Workload Alerts',
          type: 'placeholder',
          data: { message: 'No Graph data available!' }
        }
      ],
    },
    {
      id: 'registry_scan',
      name: 'Registry Scan',
      widgets: [
        {
          id: 'image_risk_assessment',
          name: 'Image Risk Assessment',
          type: 'bar_chart',
          data: [
            { name: 'Critical', value: 9 },
            { name: 'High', value: 190 }
          ]
        },
        {
          id: 'image_security_issues',
          name: 'Image Security Issues',
          type: 'bar_chart',
          data: [
            { name: 'Critical', value: 2 },
            { name: 'High', value: 2 }
          ]
        }
      ],
    }
  ],
  isAddWidgetModalOpen: false,
  availableWidgets: [
    { id: 'cloud_accounts', name: 'Cloud Accounts', category: 'cspm_executive_dashboard' },
    { id: 'cloud_account_risk_assessment', name: 'Cloud Account Risk Assessment', category: 'cspm_executive_dashboard' },
    { id: 'top_5_namespace_specific_alerts', name: 'Top 5 Namespace Specific Alerts', category: 'cwpp_dashboard' },
    { id: 'workload_alerts', name: 'Workload Alerts', category: 'cwpp_dashboard' },
    { id: 'image_risk_assessment', name: 'Image Risk Assessment', category: 'registry_scan' },
    { id: 'image_security_issues', name: 'Image Security Issues', category: 'registry_scan' },
    // Add more available widgets here
  ],
};

// ... (previous code remains the same)

export const dashboardSlice = createSlice({
    name: 'dashboard',
    initialState,
    reducers: {
      openAddWidgetModal: (state, action) => {
        state.isAddWidgetModalOpen = true;
        
      },
      closeAddWidgetModal: (state) => {
        state.isAddWidgetModalOpen = false;
        
      },
      addWidget: (state, action) => {
        const { categoryId, widgetName, widgetText } = action.payload;
        const category = state.categories.find(c => c.id === categoryId);
        
        if (category) {
          const newWidget = {
            id: `widget_${Date.now()}`, // Generate a unique ID
            name: widgetName,
            type: 'custom',
            data: { text: widgetText }
          };
          category.widgets.push(newWidget);
        }
      },
      removeWidget: (state, action) => {
        const widgetId = action.payload;
        state.categories.forEach(category => {
          category.widgets = category.widgets.filter(widget => widget.id !== widgetId);
        });
      },
    },
  });
  
  // ... (exports remain the same)

export const { openAddWidgetModal, closeAddWidgetModal, addWidget, removeWidget } = dashboardSlice.actions;

export default dashboardSlice.reducer;