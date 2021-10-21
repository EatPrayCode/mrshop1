import { mockFruitsProduct3, mockGroceryProduct3, mockMilkPackService1, mockMonthlyHomeEssentialsProduct2, mockPackDataProduct, mockPackProduct1, mockPhoneBillService2, mockVegetablesProduct3, mockVirtualMathService3 } from './mockJsonPacks';
import { appSettingsState, categoriesNavItems } from "./app.models";

export const categoriesNavItemsConst: categoriesNavItems[] = [
    {
        displayName: 'Housekeeping',
        route: 'housekeeping',
        children: [
            {
                displayName: 'Groceries',
                packsList: [{
                    name: 'Name1',
                    price: '30'
                },
                {
                    name: 'Name2',
                    price: '60'
                },
                {
                    name: 'Name1',
                    price: '30'
                },
                {
                    name: 'Name2',
                    price: '60'
                }
                    ,
                {
                    name: 'Name1',
                    price: '30'
                },
                {
                    name: 'Name2',
                    price: '60'
                },
                {
                    name: 'Name1',
                    price: '30'
                },
                {
                    name: 'Name2',
                    price: '60'
                },
                {
                    name: 'Name1',
                    price: '30'
                },
                {
                    name: 'Name2',
                    price: '60'
                }]
            },
            {
                displayName: 'Essentials',
                packsList: [{
                    name: 'Name3',
                    price: '30'
                },
                {
                    name: 'Name4',
                    price: '60'
                },
                {
                    name: 'Name3',
                    price: '30'
                },
                {
                    name: 'Name4',
                    price: '60'
                }
                    ,
                {
                    name: 'Name3',
                    price: '30'
                },
                {
                    name: 'Name4',
                    price: '60'
                },
                {
                    name: 'Name3',
                    price: '30'
                },
                {
                    name: 'Name4',
                    price: '60'
                },
                {
                    name: 'Name3',
                    price: '30'
                },
                {
                    name: 'Name4',
                    price: '60'
                }]
            },
            {
                displayName: 'Cutlery',
                packsList: [{
                    name: 'Name5',
                    price: '30'
                },
                {
                    name: 'Name6',
                    price: '60'
                },
                {
                    name: 'Name5',
                    price: '30'
                },
                {
                    name: 'Name6',
                    price: '60'
                }
                    ,
                {
                    name: 'Name5',
                    price: '30'
                },
                {
                    name: 'Name6',
                    price: '60'
                },
                {
                    name: 'Name5',
                    price: '30'
                },
                {
                    name: 'Name6',
                    price: '60'
                },
                {
                    name: 'Name5',
                    price: '30'
                },
                {
                    name: 'Name6',
                    price: '60'
                }]
            },
            {
                displayName: 'Others',
                packsList: [{
                    name: 'Name7',
                    price: '30'
                },
                {
                    name: 'Name8',
                    price: '60'
                },
                {
                    name: 'Name7',
                    price: '30'
                },
                {
                    name: 'Name8',
                    price: '60'
                }
                    ,
                {
                    name: 'Name7',
                    price: '30'
                },
                {
                    name: 'Name8',
                    price: '60'
                },
                {
                    name: 'Name7',
                    price: '30'
                },
                {
                    name: 'Name8',
                    price: '60'
                },
                {
                    name: 'Name7',
                    price: '30'
                },
                {
                    name: 'Name8',
                    price: '60'
                }]
            },
            {
                displayName: 'Groceries',
                packsList: [{
                    name: 'Name1',
                    price: '30'
                },
                {
                    name: 'Name2',
                    price: '60'
                },
                {
                    name: 'Name1',
                    price: '30'
                },
                {
                    name: 'Name2',
                    price: '60'
                }
                    ,
                {
                    name: 'Name1',
                    price: '30'
                },
                {
                    name: 'Name2',
                    price: '60'
                },
                {
                    name: 'Name1',
                    price: '30'
                },
                {
                    name: 'Name2',
                    price: '60'
                },
                {
                    name: 'Name1',
                    price: '30'
                },
                {
                    name: 'Name2',
                    price: '60'
                }]
            },
            {
                displayName: 'Essentials',
                packsList: [{
                    name: 'Name3',
                    price: '30'
                },
                {
                    name: 'Name4',
                    price: '60'
                },
                {
                    name: 'Name3',
                    price: '30'
                },
                {
                    name: 'Name4',
                    price: '60'
                }
                    ,
                {
                    name: 'Name3',
                    price: '30'
                },
                {
                    name: 'Name4',
                    price: '60'
                },
                {
                    name: 'Name3',
                    price: '30'
                },
                {
                    name: 'Name4',
                    price: '60'
                },
                {
                    name: 'Name3',
                    price: '30'
                },
                {
                    name: 'Name4',
                    price: '60'
                }]
            },
            {
                displayName: 'Cutlery',
                packsList: [{
                    name: 'Name5',
                    price: '30'
                },
                {
                    name: 'Name6',
                    price: '60'
                },
                {
                    name: 'Name5',
                    price: '30'
                },
                {
                    name: 'Name6',
                    price: '60'
                }
                    ,
                {
                    name: 'Name5',
                    price: '30'
                },
                {
                    name: 'Name6',
                    price: '60'
                },
                {
                    name: 'Name5',
                    price: '30'
                },
                {
                    name: 'Name6',
                    price: '60'
                },
                {
                    name: 'Name5',
                    price: '30'
                },
                {
                    name: 'Name6',
                    price: '60'
                }]
            },
            {
                displayName: 'Others',
                packsList: [{
                    name: 'Name7',
                    price: '30'
                },
                {
                    name: 'Name8',
                    price: '60'
                },
                {
                    name: 'Name7',
                    price: '30'
                },
                {
                    name: 'Name8',
                    price: '60'
                }
                    ,
                {
                    name: 'Name7',
                    price: '30'
                },
                {
                    name: 'Name8',
                    price: '60'
                },
                {
                    name: 'Name7',
                    price: '30'
                },
                {
                    name: 'Name8',
                    price: '60'
                },
                {
                    name: 'Name7',
                    price: '30'
                },
                {
                    name: 'Name8',
                    price: '60'
                }]
            }
        ]
    },
    {
        displayName: 'Housekeeping',
        route: 'housekeeping',
        children: [
            {
                displayName: 'Groceries',
                packsList: [{
                    name: 'Name1',
                    price: '30'
                },
                {
                    name: 'Name2',
                    price: '60'
                },
                {
                    name: 'Name1',
                    price: '30'
                },
                {
                    name: 'Name2',
                    price: '60'
                }
                    ,
                {
                    name: 'Name1',
                    price: '30'
                },
                {
                    name: 'Name2',
                    price: '60'
                },
                {
                    name: 'Name1',
                    price: '30'
                },
                {
                    name: 'Name2',
                    price: '60'
                },
                {
                    name: 'Name1',
                    price: '30'
                },
                {
                    name: 'Name2',
                    price: '60'
                }]
            },
            {
                displayName: 'Essentials',
                packsList: [{
                    name: 'Name3',
                    price: '30'
                },
                {
                    name: 'Name4',
                    price: '60'
                },
                {
                    name: 'Name3',
                    price: '30'
                },
                {
                    name: 'Name4',
                    price: '60'
                }
                    ,
                {
                    name: 'Name3',
                    price: '30'
                },
                {
                    name: 'Name4',
                    price: '60'
                },
                {
                    name: 'Name3',
                    price: '30'
                },
                {
                    name: 'Name4',
                    price: '60'
                },
                {
                    name: 'Name3',
                    price: '30'
                },
                {
                    name: 'Name4',
                    price: '60'
                }]
            },
            {
                displayName: 'Cutlery',
                packsList: [{
                    name: 'Name5',
                    price: '30'
                },
                {
                    name: 'Name6',
                    price: '60'
                },
                {
                    name: 'Name5',
                    price: '30'
                },
                {
                    name: 'Name6',
                    price: '60'
                }
                    ,
                {
                    name: 'Name5',
                    price: '30'
                },
                {
                    name: 'Name6',
                    price: '60'
                },
                {
                    name: 'Name5',
                    price: '30'
                },
                {
                    name: 'Name6',
                    price: '60'
                },
                {
                    name: 'Name5',
                    price: '30'
                },
                {
                    name: 'Name6',
                    price: '60'
                }]
            },
            {
                displayName: 'Others',
                packsList: [{
                    name: 'Name7',
                    price: '30'
                },
                {
                    name: 'Name8',
                    price: '60'
                },
                {
                    name: 'Name7',
                    price: '30'
                },
                {
                    name: 'Name8',
                    price: '60'
                }
                    ,
                {
                    name: 'Name7',
                    price: '30'
                },
                {
                    name: 'Name8',
                    price: '60'
                },
                {
                    name: 'Name7',
                    price: '30'
                },
                {
                    name: 'Name8',
                    price: '60'
                },
                {
                    name: 'Name7',
                    price: '30'
                },
                {
                    name: 'Name8',
                    price: '60'
                }]
            }
        ]
    },
    {
        displayName: 'Housekeeping',
        route: 'housekeeping',
        children: [
            {
                displayName: 'Groceries',
                packsList: [{
                    name: 'Name1',
                    price: '30'
                },
                {
                    name: 'Name2',
                    price: '60'
                },
                {
                    name: 'Name1',
                    price: '30'
                },
                {
                    name: 'Name2',
                    price: '60'
                }
                    ,
                {
                    name: 'Name1',
                    price: '30'
                },
                {
                    name: 'Name2',
                    price: '60'
                },
                {
                    name: 'Name1',
                    price: '30'
                },
                {
                    name: 'Name2',
                    price: '60'
                },
                {
                    name: 'Name1',
                    price: '30'
                },
                {
                    name: 'Name2',
                    price: '60'
                }]
            },
            {
                displayName: 'Essentials',
                packsList: [{
                    name: 'Name3',
                    price: '30'
                },
                {
                    name: 'Name4',
                    price: '60'
                },
                {
                    name: 'Name3',
                    price: '30'
                },
                {
                    name: 'Name4',
                    price: '60'
                }
                    ,
                {
                    name: 'Name3',
                    price: '30'
                },
                {
                    name: 'Name4',
                    price: '60'
                },
                {
                    name: 'Name3',
                    price: '30'
                },
                {
                    name: 'Name4',
                    price: '60'
                },
                {
                    name: 'Name3',
                    price: '30'
                },
                {
                    name: 'Name4',
                    price: '60'
                }]
            },
            {
                displayName: 'Cutlery',
                packsList: [{
                    name: 'Name5',
                    price: '30'
                },
                {
                    name: 'Name6',
                    price: '60'
                },
                {
                    name: 'Name5',
                    price: '30'
                },
                {
                    name: 'Name6',
                    price: '60'
                }
                    ,
                {
                    name: 'Name5',
                    price: '30'
                },
                {
                    name: 'Name6',
                    price: '60'
                },
                {
                    name: 'Name5',
                    price: '30'
                },
                {
                    name: 'Name6',
                    price: '60'
                },
                {
                    name: 'Name5',
                    price: '30'
                },
                {
                    name: 'Name6',
                    price: '60'
                }]
            },
            {
                displayName: 'Others',
                packsList: [{
                    name: 'Name7',
                    price: '30'
                },
                {
                    name: 'Name8',
                    price: '60'
                },
                {
                    name: 'Name7',
                    price: '30'
                },
                {
                    name: 'Name8',
                    price: '60'
                }
                    ,
                {
                    name: 'Name7',
                    price: '30'
                },
                {
                    name: 'Name8',
                    price: '60'
                },
                {
                    name: 'Name7',
                    price: '30'
                },
                {
                    name: 'Name8',
                    price: '60'
                },
                {
                    name: 'Name7',
                    price: '30'
                },
                {
                    name: 'Name8',
                    price: '60'
                }]
            }
        ]
    },
    {
        displayName: 'Housekeeping',
        route: 'housekeeping',
        children: [
            {
                displayName: 'Groceries',
                packsList: [{
                    name: 'Name1',
                    price: '30'
                },
                {
                    name: 'Name2',
                    price: '60'
                },
                {
                    name: 'Name1',
                    price: '30'
                },
                {
                    name: 'Name2',
                    price: '60'
                }
                    ,
                {
                    name: 'Name1',
                    price: '30'
                },
                {
                    name: 'Name2',
                    price: '60'
                },
                {
                    name: 'Name1',
                    price: '30'
                },
                {
                    name: 'Name2',
                    price: '60'
                },
                {
                    name: 'Name1',
                    price: '30'
                },
                {
                    name: 'Name2',
                    price: '60'
                }]
            },
            {
                displayName: 'Essentials',
                packsList: [{
                    name: 'Name3',
                    price: '30'
                },
                {
                    name: 'Name4',
                    price: '60'
                },
                {
                    name: 'Name3',
                    price: '30'
                },
                {
                    name: 'Name4',
                    price: '60'
                }
                    ,
                {
                    name: 'Name3',
                    price: '30'
                },
                {
                    name: 'Name4',
                    price: '60'
                },
                {
                    name: 'Name3',
                    price: '30'
                },
                {
                    name: 'Name4',
                    price: '60'
                },
                {
                    name: 'Name3',
                    price: '30'
                },
                {
                    name: 'Name4',
                    price: '60'
                }]
            },
            {
                displayName: 'Cutlery',
                packsList: [{
                    name: 'Name5',
                    price: '30'
                },
                {
                    name: 'Name6',
                    price: '60'
                },
                {
                    name: 'Name5',
                    price: '30'
                },
                {
                    name: 'Name6',
                    price: '60'
                }
                    ,
                {
                    name: 'Name5',
                    price: '30'
                },
                {
                    name: 'Name6',
                    price: '60'
                },
                {
                    name: 'Name5',
                    price: '30'
                },
                {
                    name: 'Name6',
                    price: '60'
                },
                {
                    name: 'Name5',
                    price: '30'
                },
                {
                    name: 'Name6',
                    price: '60'
                }]
            },
            {
                displayName: 'Others',
                packsList: [{
                    name: 'Name7',
                    price: '30'
                },
                {
                    name: 'Name8',
                    price: '60'
                },
                {
                    name: 'Name7',
                    price: '30'
                },
                {
                    name: 'Name8',
                    price: '60'
                }
                    ,
                {
                    name: 'Name7',
                    price: '30'
                },
                {
                    name: 'Name8',
                    price: '60'
                },
                {
                    name: 'Name7',
                    price: '30'
                },
                {
                    name: 'Name8',
                    price: '60'
                },
                {
                    name: 'Name7',
                    price: '30'
                },
                {
                    name: 'Name8',
                    price: '60'
                }]
            }
        ]
    },
    {
        displayName: 'Housekeeping',
        route: 'housekeeping',
        children: [
            {
                displayName: 'Groceries',
                packsList: [{
                    name: 'Name1',
                    price: '30'
                },
                {
                    name: 'Name2',
                    price: '60'
                },
                {
                    name: 'Name1',
                    price: '30'
                },
                {
                    name: 'Name2',
                    price: '60'
                }
                    ,
                {
                    name: 'Name1',
                    price: '30'
                },
                {
                    name: 'Name2',
                    price: '60'
                },
                {
                    name: 'Name1',
                    price: '30'
                },
                {
                    name: 'Name2',
                    price: '60'
                },
                {
                    name: 'Name1',
                    price: '30'
                },
                {
                    name: 'Name2',
                    price: '60'
                }]
            },
            {
                displayName: 'Essentials',
                packsList: [{
                    name: 'Name3',
                    price: '30'
                },
                {
                    name: 'Name4',
                    price: '60'
                },
                {
                    name: 'Name3',
                    price: '30'
                },
                {
                    name: 'Name4',
                    price: '60'
                }
                    ,
                {
                    name: 'Name3',
                    price: '30'
                },
                {
                    name: 'Name4',
                    price: '60'
                },
                {
                    name: 'Name3',
                    price: '30'
                },
                {
                    name: 'Name4',
                    price: '60'
                },
                {
                    name: 'Name3',
                    price: '30'
                },
                {
                    name: 'Name4',
                    price: '60'
                }]
            },
            {
                displayName: 'Cutlery',
                packsList: [{
                    name: 'Name5',
                    price: '30'
                },
                {
                    name: 'Name6',
                    price: '60'
                },
                {
                    name: 'Name5',
                    price: '30'
                },
                {
                    name: 'Name6',
                    price: '60'
                }
                    ,
                {
                    name: 'Name5',
                    price: '30'
                },
                {
                    name: 'Name6',
                    price: '60'
                },
                {
                    name: 'Name5',
                    price: '30'
                },
                {
                    name: 'Name6',
                    price: '60'
                },
                {
                    name: 'Name5',
                    price: '30'
                },
                {
                    name: 'Name6',
                    price: '60'
                }]
            },
            {
                displayName: 'Others',
                packsList: [{
                    name: 'Name7',
                    price: '30'
                },
                {
                    name: 'Name8',
                    price: '60'
                },
                {
                    name: 'Name7',
                    price: '30'
                },
                {
                    name: 'Name8',
                    price: '60'
                }
                    ,
                {
                    name: 'Name7',
                    price: '30'
                },
                {
                    name: 'Name8',
                    price: '60'
                },
                {
                    name: 'Name7',
                    price: '30'
                },
                {
                    name: 'Name8',
                    price: '60'
                },
                {
                    name: 'Name7',
                    price: '30'
                },
                {
                    name: 'Name8',
                    price: '60'
                }]
            }
        ]
    },
    {
        displayName: 'Mens',
        iconName: 'videocam',
        route: 'mens',
        children: [
            {
                displayName: 'Grooming',
                packsList: [{
                    name: 'Name9',
                    price: '30'
                },
                {
                    name: 'Name10',
                    price: '60'
                },
                {
                    name: 'Name9',
                    price: '30'
                },
                {
                    name: 'Name10',
                    price: '60'
                }
                    ,
                {
                    name: 'Name9',
                    price: '30'
                },
                {
                    name: 'Name10',
                    price: '60'
                },
                {
                    name: 'Name9',
                    price: '30'
                },
                {
                    name: 'Name10',
                    price: '60'
                },
                {
                    name: 'Name9',
                    price: '30'
                },
                {
                    name: 'Name10',
                    price: '60'
                }]
            },
            {
                displayName: 'Hair/Makeup',
                packsList: [{
                    name: 'Name11',
                    price: '30'
                },
                {
                    name: 'Name12',
                    price: '60'
                },
                {
                    name: 'Name11',
                    price: '30'
                },
                {
                    name: 'Name12',
                    price: '60'
                }
                    ,
                {
                    name: 'Name11',
                    price: '30'
                },
                {
                    name: 'Name12',
                    price: '60'
                },
                {
                    name: 'Name11',
                    price: '30'
                },
                {
                    name: 'Name12',
                    price: '60'
                },
                {
                    name: 'Name11',
                    price: '30'
                },
                {
                    name: 'Name12',
                    price: '60'
                }]
            },
            {
                displayName: 'Others',
                packsList: [{
                    name: 'Name13',
                    price: '30'
                },
                {
                    name: 'Name14',
                    price: '60'
                },
                {
                    name: 'Name13',
                    price: '30'
                },
                {
                    name: 'Name14',
                    price: '60'
                }
                    ,
                {
                    name: 'Name13',
                    price: '30'
                },
                {
                    name: 'Name14',
                    price: '60'
                },
                {
                    name: 'Name13',
                    price: '30'
                },
                {
                    name: 'Name14',
                    price: '60'
                },
                {
                    name: 'Name13',
                    price: '30'
                },
                {
                    name: 'Name14',
                    price: '60'
                }]
            }
        ]
    },
    {
        displayName: 'Womens',
        route: 'womens',
        children: [
            {
                displayName: 'Beauty/Makeup',
                packsList: [{
                    name: 'Name14',
                    price: '30'
                },
                {
                    name: 'Name15',
                    price: '60'
                },
                {
                    name: 'Name14',
                    price: '30'
                },
                {
                    name: 'Name15',
                    price: '60'
                }
                    ,
                {
                    name: 'Name14',
                    price: '30'
                },
                {
                    name: 'Name15',
                    price: '60'
                },
                {
                    name: 'Name14',
                    price: '30'
                },
                {
                    name: 'Name15',
                    price: '60'
                },
                {
                    name: 'Name14',
                    price: '30'
                },
                {
                    name: 'Name15',
                    price: '60'
                }]
            },
            {
                displayName: 'Fashion',
                packsList: [{
                    name: 'Name16',
                    price: '30'
                },
                {
                    name: 'Name17',
                    price: '60'
                },
                {
                    name: 'Name16',
                    price: '30'
                },
                {
                    name: 'Name17',
                    price: '60'
                }
                    ,
                {
                    name: 'Name16',
                    price: '30'
                },
                {
                    name: 'Name17',
                    price: '60'
                },
                {
                    name: 'Name16',
                    price: '30'
                },
                {
                    name: 'Name17',
                    price: '60'
                },
                {
                    name: 'Name16',
                    price: '30'
                },
                {
                    name: 'Name17',
                    price: '60'
                }]
            },
            {
                displayName: 'Essentials',
                packsList: [{
                    name: 'Name18',
                    price: '30'
                },
                {
                    name: 'Name2',
                    price: '60'
                },
                {
                    name: 'Name18',
                    price: '30'
                },
                {
                    name: 'Name2',
                    price: '60'
                }
                    ,
                {
                    name: 'Name18',
                    price: '30'
                },
                {
                    name: 'Name2',
                    price: '60'
                },
                {
                    name: 'Name18',
                    price: '30'
                },
                {
                    name: 'Name2',
                    price: '60'
                },
                {
                    name: 'Name18',
                    price: '30'
                },
                {
                    name: 'Name2',
                    price: '60'
                }]
            },
            {
                displayName: 'Others',
                packsList: [{
                    name: 'Name19',
                    price: '30'
                },
                {
                    name: 'Name20',
                    price: '60'
                },
                {
                    name: 'Name19',
                    price: '30'
                },
                {
                    name: 'Name20',
                    price: '60'
                }
                    ,
                {
                    name: 'Name19',
                    price: '30'
                },
                {
                    name: 'Name20',
                    price: '60'
                },
                {
                    name: 'Name19',
                    price: '30'
                },
                {
                    name: 'Name20',
                    price: '60'
                },
                {
                    name: 'Name19',
                    price: '30'
                },
                {
                    name: 'Name20',
                    price: '60'
                }]
            }
        ]
    },
    {
        displayName: 'Devotional',
        iconName: 'videocam',
        route: 'devotional',
        children: [
            {
                displayName: 'Incense',
                packsList: [{
                    name: 'Name21',
                    price: '30'
                },
                {
                    name: 'Name22',
                    price: '60'
                },
                {
                    name: 'Name21',
                    price: '30'
                },
                {
                    name: 'Name22',
                    price: '60'
                }
                    ,
                {
                    name: 'Name21',
                    price: '30'
                },
                {
                    name: 'Name22',
                    price: '60'
                },
                {
                    name: 'Name21',
                    price: '30'
                },
                {
                    name: 'Name22',
                    price: '60'
                },
                {
                    name: 'Name21',
                    price: '30'
                },
                {
                    name: 'Name22',
                    price: '60'
                }]
            },
            {
                displayName: 'Flowers',
                packsList: [{
                    name: 'Name23',
                    price: '30'
                },
                {
                    name: 'Name24',
                    price: '60'
                },
                {
                    name: 'Name23',
                    price: '30'
                },
                {
                    name: 'Name24',
                    price: '60'
                }
                    ,
                {
                    name: 'Name23',
                    price: '30'
                },
                {
                    name: 'Name24',
                    price: '60'
                },
                {
                    name: 'Name23',
                    price: '30'
                },
                {
                    name: 'Name24',
                    price: '60'
                },
                {
                    name: 'Name23',
                    price: '30'
                },
                {
                    name: 'Name24',
                    price: '60'
                }]
            },
            {
                displayName: 'Others',
                packsList: [{
                    name: 'Name25',
                    price: '30'
                },
                {
                    name: 'Name26',
                    price: '60'
                },
                {
                    name: 'Name25',
                    price: '30'
                },
                {
                    name: 'Name26',
                    price: '60'
                }
                    ,
                {
                    name: 'Name25',
                    price: '30'
                },
                {
                    name: 'Name26',
                    price: '60'
                },
                {
                    name: 'Name25',
                    price: '30'
                },
                {
                    name: 'Name26',
                    price: '60'
                },
                {
                    name: 'Name25',
                    price: '30'
                },
                {
                    name: 'Name26',
                    price: '60'
                }]
            }
        ]
    },
    {
        displayName: 'Housekeeping',
        route: 'housekeeping',
        children: [
            {
                displayName: 'Groceries',
                packsList: [{
                    name: 'Name1',
                    price: '30'
                },
                {
                    name: 'Name2',
                    price: '60'
                },
                {
                    name: 'Name1',
                    price: '30'
                },
                {
                    name: 'Name2',
                    price: '60'
                }
                    ,
                {
                    name: 'Name1',
                    price: '30'
                },
                {
                    name: 'Name2',
                    price: '60'
                },
                {
                    name: 'Name1',
                    price: '30'
                },
                {
                    name: 'Name2',
                    price: '60'
                },
                {
                    name: 'Name1',
                    price: '30'
                },
                {
                    name: 'Name2',
                    price: '60'
                }]
            },
            {
                displayName: 'Essentials',
                packsList: [{
                    name: 'Name3',
                    price: '30'
                },
                {
                    name: 'Name4',
                    price: '60'
                },
                {
                    name: 'Name3',
                    price: '30'
                },
                {
                    name: 'Name4',
                    price: '60'
                }
                    ,
                {
                    name: 'Name3',
                    price: '30'
                },
                {
                    name: 'Name4',
                    price: '60'
                },
                {
                    name: 'Name3',
                    price: '30'
                },
                {
                    name: 'Name4',
                    price: '60'
                },
                {
                    name: 'Name3',
                    price: '30'
                },
                {
                    name: 'Name4',
                    price: '60'
                }]
            },
            {
                displayName: 'Cutlery',
                packsList: [{
                    name: 'Name5',
                    price: '30'
                },
                {
                    name: 'Name6',
                    price: '60'
                },
                {
                    name: 'Name5',
                    price: '30'
                },
                {
                    name: 'Name6',
                    price: '60'
                }
                    ,
                {
                    name: 'Name5',
                    price: '30'
                },
                {
                    name: 'Name6',
                    price: '60'
                },
                {
                    name: 'Name5',
                    price: '30'
                },
                {
                    name: 'Name6',
                    price: '60'
                },
                {
                    name: 'Name5',
                    price: '30'
                },
                {
                    name: 'Name6',
                    price: '60'
                }]
            },
            {
                displayName: 'Others',
                packsList: [{
                    name: 'Name7',
                    price: '30'
                },
                {
                    name: 'Name8',
                    price: '60'
                },
                {
                    name: 'Name7',
                    price: '30'
                },
                {
                    name: 'Name8',
                    price: '60'
                }
                    ,
                {
                    name: 'Name7',
                    price: '30'
                },
                {
                    name: 'Name8',
                    price: '60'
                },
                {
                    name: 'Name7',
                    price: '30'
                },
                {
                    name: 'Name8',
                    price: '60'
                },
                {
                    name: 'Name7',
                    price: '30'
                },
                {
                    name: 'Name8',
                    price: '60'
                }]
            }
        ]
    },
    {
        displayName: 'Housekeeping',
        route: 'housekeeping',
        children: [
            {
                displayName: 'Groceries',
                packsList: [{
                    name: 'Name1',
                    price: '30'
                },
                {
                    name: 'Name2',
                    price: '60'
                },
                {
                    name: 'Name1',
                    price: '30'
                },
                {
                    name: 'Name2',
                    price: '60'
                }
                    ,
                {
                    name: 'Name1',
                    price: '30'
                },
                {
                    name: 'Name2',
                    price: '60'
                },
                {
                    name: 'Name1',
                    price: '30'
                },
                {
                    name: 'Name2',
                    price: '60'
                },
                {
                    name: 'Name1',
                    price: '30'
                },
                {
                    name: 'Name2',
                    price: '60'
                }]
            },
            {
                displayName: 'Essentials',
                packsList: [{
                    name: 'Name3',
                    price: '30'
                },
                {
                    name: 'Name4',
                    price: '60'
                },
                {
                    name: 'Name3',
                    price: '30'
                },
                {
                    name: 'Name4',
                    price: '60'
                }
                    ,
                {
                    name: 'Name3',
                    price: '30'
                },
                {
                    name: 'Name4',
                    price: '60'
                },
                {
                    name: 'Name3',
                    price: '30'
                },
                {
                    name: 'Name4',
                    price: '60'
                },
                {
                    name: 'Name3',
                    price: '30'
                },
                {
                    name: 'Name4',
                    price: '60'
                }]
            },
            {
                displayName: 'Cutlery',
                packsList: [{
                    name: 'Name5',
                    price: '30'
                },
                {
                    name: 'Name6',
                    price: '60'
                },
                {
                    name: 'Name5',
                    price: '30'
                },
                {
                    name: 'Name6',
                    price: '60'
                }
                    ,
                {
                    name: 'Name5',
                    price: '30'
                },
                {
                    name: 'Name6',
                    price: '60'
                },
                {
                    name: 'Name5',
                    price: '30'
                },
                {
                    name: 'Name6',
                    price: '60'
                },
                {
                    name: 'Name5',
                    price: '30'
                },
                {
                    name: 'Name6',
                    price: '60'
                }]
            },
            {
                displayName: 'Others',
                packsList: [{
                    name: 'Name7',
                    price: '30'
                },
                {
                    name: 'Name8',
                    price: '60'
                },
                {
                    name: 'Name7',
                    price: '30'
                },
                {
                    name: 'Name8',
                    price: '60'
                }
                    ,
                {
                    name: 'Name7',
                    price: '30'
                },
                {
                    name: 'Name8',
                    price: '60'
                },
                {
                    name: 'Name7',
                    price: '30'
                },
                {
                    name: 'Name8',
                    price: '60'
                },
                {
                    name: 'Name7',
                    price: '30'
                },
                {
                    name: 'Name8',
                    price: '60'
                }]
            }
        ]
    },
    {
        displayName: 'Housekeeping',
        route: 'housekeeping',
        children: [
            {
                displayName: 'Groceries',
                packsList: [{
                    name: 'Name1',
                    price: '30'
                },
                {
                    name: 'Name2',
                    price: '60'
                },
                {
                    name: 'Name1',
                    price: '30'
                },
                {
                    name: 'Name2',
                    price: '60'
                }
                    ,
                {
                    name: 'Name1',
                    price: '30'
                },
                {
                    name: 'Name2',
                    price: '60'
                },
                {
                    name: 'Name1',
                    price: '30'
                },
                {
                    name: 'Name2',
                    price: '60'
                },
                {
                    name: 'Name1',
                    price: '30'
                },
                {
                    name: 'Name2',
                    price: '60'
                }]
            },
            {
                displayName: 'Essentials',
                packsList: [{
                    name: 'Name3',
                    price: '30'
                },
                {
                    name: 'Name4',
                    price: '60'
                },
                {
                    name: 'Name3',
                    price: '30'
                },
                {
                    name: 'Name4',
                    price: '60'
                }
                    ,
                {
                    name: 'Name3',
                    price: '30'
                },
                {
                    name: 'Name4',
                    price: '60'
                },
                {
                    name: 'Name3',
                    price: '30'
                },
                {
                    name: 'Name4',
                    price: '60'
                },
                {
                    name: 'Name3',
                    price: '30'
                },
                {
                    name: 'Name4',
                    price: '60'
                }]
            },
            {
                displayName: 'Cutlery',
                packsList: [{
                    name: 'Name5',
                    price: '30'
                },
                {
                    name: 'Name6',
                    price: '60'
                },
                {
                    name: 'Name5',
                    price: '30'
                },
                {
                    name: 'Name6',
                    price: '60'
                }
                    ,
                {
                    name: 'Name5',
                    price: '30'
                },
                {
                    name: 'Name6',
                    price: '60'
                },
                {
                    name: 'Name5',
                    price: '30'
                },
                {
                    name: 'Name6',
                    price: '60'
                },
                {
                    name: 'Name5',
                    price: '30'
                },
                {
                    name: 'Name6',
                    price: '60'
                }]
            },
            {
                displayName: 'Others',
                packsList: [{
                    name: 'Name7',
                    price: '30'
                },
                {
                    name: 'Name8',
                    price: '60'
                },
                {
                    name: 'Name7',
                    price: '30'
                },
                {
                    name: 'Name8',
                    price: '60'
                }
                    ,
                {
                    name: 'Name7',
                    price: '30'
                },
                {
                    name: 'Name8',
                    price: '60'
                },
                {
                    name: 'Name7',
                    price: '30'
                },
                {
                    name: 'Name8',
                    price: '60'
                },
                {
                    name: 'Name7',
                    price: '30'
                },
                {
                    name: 'Name8',
                    price: '60'
                }]
            }
        ]
    },
    {
        displayName: 'Housekeeping',
        route: 'housekeeping',
        children: [
            {
                displayName: 'Groceries',
                packsList: [{
                    name: 'Name1',
                    price: '30'
                },
                {
                    name: 'Name2',
                    price: '60'
                },
                {
                    name: 'Name1',
                    price: '30'
                },
                {
                    name: 'Name2',
                    price: '60'
                }
                    ,
                {
                    name: 'Name1',
                    price: '30'
                },
                {
                    name: 'Name2',
                    price: '60'
                },
                {
                    name: 'Name1',
                    price: '30'
                },
                {
                    name: 'Name2',
                    price: '60'
                },
                {
                    name: 'Name1',
                    price: '30'
                },
                {
                    name: 'Name2',
                    price: '60'
                }]
            },
            {
                displayName: 'Essentials',
                packsList: [{
                    name: 'Name3',
                    price: '30'
                },
                {
                    name: 'Name4',
                    price: '60'
                },
                {
                    name: 'Name3',
                    price: '30'
                },
                {
                    name: 'Name4',
                    price: '60'
                }
                    ,
                {
                    name: 'Name3',
                    price: '30'
                },
                {
                    name: 'Name4',
                    price: '60'
                },
                {
                    name: 'Name3',
                    price: '30'
                },
                {
                    name: 'Name4',
                    price: '60'
                },
                {
                    name: 'Name3',
                    price: '30'
                },
                {
                    name: 'Name4',
                    price: '60'
                }]
            },
            {
                displayName: 'Cutlery',
                packsList: [{
                    name: 'Name5',
                    price: '30'
                },
                {
                    name: 'Name6',
                    price: '60'
                },
                {
                    name: 'Name5',
                    price: '30'
                },
                {
                    name: 'Name6',
                    price: '60'
                }
                    ,
                {
                    name: 'Name5',
                    price: '30'
                },
                {
                    name: 'Name6',
                    price: '60'
                },
                {
                    name: 'Name5',
                    price: '30'
                },
                {
                    name: 'Name6',
                    price: '60'
                },
                {
                    name: 'Name5',
                    price: '30'
                },
                {
                    name: 'Name6',
                    price: '60'
                }]
            },
            {
                displayName: 'Others',
                packsList: [{
                    name: 'Name7',
                    price: '30'
                },
                {
                    name: 'Name8',
                    price: '60'
                },
                {
                    name: 'Name7',
                    price: '30'
                },
                {
                    name: 'Name8',
                    price: '60'
                }
                    ,
                {
                    name: 'Name7',
                    price: '30'
                },
                {
                    name: 'Name8',
                    price: '60'
                },
                {
                    name: 'Name7',
                    price: '30'
                },
                {
                    name: 'Name8',
                    price: '60'
                },
                {
                    name: 'Name7',
                    price: '30'
                },
                {
                    name: 'Name8',
                    price: '60'
                }]
            }
        ]
    },
    {
        displayName: 'Housekeeping',
        route: 'housekeeping',
        children: [
            {
                displayName: 'Groceries',
                packsList: [{
                    name: 'Name1',
                    price: '30'
                },
                {
                    name: 'Name2',
                    price: '60'
                },
                {
                    name: 'Name1',
                    price: '30'
                },
                {
                    name: 'Name2',
                    price: '60'
                }
                    ,
                {
                    name: 'Name1',
                    price: '30'
                },
                {
                    name: 'Name2',
                    price: '60'
                },
                {
                    name: 'Name1',
                    price: '30'
                },
                {
                    name: 'Name2',
                    price: '60'
                },
                {
                    name: 'Name1',
                    price: '30'
                },
                {
                    name: 'Name2',
                    price: '60'
                }]
            },
            {
                displayName: 'Essentials',
                packsList: [{
                    name: 'Name3',
                    price: '30'
                },
                {
                    name: 'Name4',
                    price: '60'
                },
                {
                    name: 'Name3',
                    price: '30'
                },
                {
                    name: 'Name4',
                    price: '60'
                }
                    ,
                {
                    name: 'Name3',
                    price: '30'
                },
                {
                    name: 'Name4',
                    price: '60'
                },
                {
                    name: 'Name3',
                    price: '30'
                },
                {
                    name: 'Name4',
                    price: '60'
                },
                {
                    name: 'Name3',
                    price: '30'
                },
                {
                    name: 'Name4',
                    price: '60'
                }]
            },
            {
                displayName: 'Cutlery',
                packsList: [{
                    name: 'Name5',
                    price: '30'
                },
                {
                    name: 'Name6',
                    price: '60'
                },
                {
                    name: 'Name5',
                    price: '30'
                },
                {
                    name: 'Name6',
                    price: '60'
                }
                    ,
                {
                    name: 'Name5',
                    price: '30'
                },
                {
                    name: 'Name6',
                    price: '60'
                },
                {
                    name: 'Name5',
                    price: '30'
                },
                {
                    name: 'Name6',
                    price: '60'
                },
                {
                    name: 'Name5',
                    price: '30'
                },
                {
                    name: 'Name6',
                    price: '60'
                }]
            },
            {
                displayName: 'Others',
                packsList: [{
                    name: 'Name7',
                    price: '30'
                },
                {
                    name: 'Name8',
                    price: '60'
                },
                {
                    name: 'Name7',
                    price: '30'
                },
                {
                    name: 'Name8',
                    price: '60'
                }
                    ,
                {
                    name: 'Name7',
                    price: '30'
                },
                {
                    name: 'Name8',
                    price: '60'
                },
                {
                    name: 'Name7',
                    price: '30'
                },
                {
                    name: 'Name8',
                    price: '60'
                },
                {
                    name: 'Name7',
                    price: '30'
                },
                {
                    name: 'Name8',
                    price: '60'
                }]
            }
        ]
    },
    {
        displayName: 'Mens',
        iconName: 'videocam',
        route: 'mens',
        children: [
            {
                displayName: 'Grooming',
                packsList: [{
                    name: 'Name9',
                    price: '30'
                },
                {
                    name: 'Name10',
                    price: '60'
                },
                {
                    name: 'Name9',
                    price: '30'
                },
                {
                    name: 'Name10',
                    price: '60'
                }
                    ,
                {
                    name: 'Name9',
                    price: '30'
                },
                {
                    name: 'Name10',
                    price: '60'
                },
                {
                    name: 'Name9',
                    price: '30'
                },
                {
                    name: 'Name10',
                    price: '60'
                },
                {
                    name: 'Name9',
                    price: '30'
                },
                {
                    name: 'Name10',
                    price: '60'
                }]
            },
            {
                displayName: 'Hair/Makeup',
                packsList: [{
                    name: 'Name11',
                    price: '30'
                },
                {
                    name: 'Name12',
                    price: '60'
                },
                {
                    name: 'Name11',
                    price: '30'
                },
                {
                    name: 'Name12',
                    price: '60'
                }
                    ,
                {
                    name: 'Name11',
                    price: '30'
                },
                {
                    name: 'Name12',
                    price: '60'
                },
                {
                    name: 'Name11',
                    price: '30'
                },
                {
                    name: 'Name12',
                    price: '60'
                },
                {
                    name: 'Name11',
                    price: '30'
                },
                {
                    name: 'Name12',
                    price: '60'
                }]
            },
            {
                displayName: 'Others',
                packsList: [{
                    name: 'Name13',
                    price: '30'
                },
                {
                    name: 'Name14',
                    price: '60'
                },
                {
                    name: 'Name13',
                    price: '30'
                },
                {
                    name: 'Name14',
                    price: '60'
                }
                    ,
                {
                    name: 'Name13',
                    price: '30'
                },
                {
                    name: 'Name14',
                    price: '60'
                },
                {
                    name: 'Name13',
                    price: '30'
                },
                {
                    name: 'Name14',
                    price: '60'
                },
                {
                    name: 'Name13',
                    price: '30'
                },
                {
                    name: 'Name14',
                    price: '60'
                }]
            }
        ]
    },
    {
        displayName: 'Womens',
        route: 'womens',
        children: [
            {
                displayName: 'Beauty/Makeup',
                packsList: [{
                    name: 'Name14',
                    price: '30'
                },
                {
                    name: 'Name15',
                    price: '60'
                },
                {
                    name: 'Name14',
                    price: '30'
                },
                {
                    name: 'Name15',
                    price: '60'
                }
                    ,
                {
                    name: 'Name14',
                    price: '30'
                },
                {
                    name: 'Name15',
                    price: '60'
                },
                {
                    name: 'Name14',
                    price: '30'
                },
                {
                    name: 'Name15',
                    price: '60'
                },
                {
                    name: 'Name14',
                    price: '30'
                },
                {
                    name: 'Name15',
                    price: '60'
                }]
            },
            {
                displayName: 'Fashion',
                packsList: [{
                    name: 'Name16',
                    price: '30'
                },
                {
                    name: 'Name17',
                    price: '60'
                },
                {
                    name: 'Name16',
                    price: '30'
                },
                {
                    name: 'Name17',
                    price: '60'
                }
                    ,
                {
                    name: 'Name16',
                    price: '30'
                },
                {
                    name: 'Name17',
                    price: '60'
                },
                {
                    name: 'Name16',
                    price: '30'
                },
                {
                    name: 'Name17',
                    price: '60'
                },
                {
                    name: 'Name16',
                    price: '30'
                },
                {
                    name: 'Name17',
                    price: '60'
                }]
            },
            {
                displayName: 'Essentials',
                packsList: [{
                    name: 'Name18',
                    price: '30'
                },
                {
                    name: 'Name2',
                    price: '60'
                },
                {
                    name: 'Name18',
                    price: '30'
                },
                {
                    name: 'Name2',
                    price: '60'
                }
                    ,
                {
                    name: 'Name18',
                    price: '30'
                },
                {
                    name: 'Name2',
                    price: '60'
                },
                {
                    name: 'Name18',
                    price: '30'
                },
                {
                    name: 'Name2',
                    price: '60'
                },
                {
                    name: 'Name18',
                    price: '30'
                },
                {
                    name: 'Name2',
                    price: '60'
                }]
            },
            {
                displayName: 'Others',
                packsList: [{
                    name: 'Name19',
                    price: '30'
                },
                {
                    name: 'Name20',
                    price: '60'
                },
                {
                    name: 'Name19',
                    price: '30'
                },
                {
                    name: 'Name20',
                    price: '60'
                }
                    ,
                {
                    name: 'Name19',
                    price: '30'
                },
                {
                    name: 'Name20',
                    price: '60'
                },
                {
                    name: 'Name19',
                    price: '30'
                },
                {
                    name: 'Name20',
                    price: '60'
                },
                {
                    name: 'Name19',
                    price: '30'
                },
                {
                    name: 'Name20',
                    price: '60'
                }]
            }
        ]
    },
    {
        displayName: 'Devotional',
        iconName: 'videocam',
        route: 'devotional',
        children: [
            {
                displayName: 'Incense',
                packsList: [{
                    name: 'Name21',
                    price: '30'
                },
                {
                    name: 'Name22',
                    price: '60'
                },
                {
                    name: 'Name21',
                    price: '30'
                },
                {
                    name: 'Name22',
                    price: '60'
                }
                    ,
                {
                    name: 'Name21',
                    price: '30'
                },
                {
                    name: 'Name22',
                    price: '60'
                },
                {
                    name: 'Name21',
                    price: '30'
                },
                {
                    name: 'Name22',
                    price: '60'
                },
                {
                    name: 'Name21',
                    price: '30'
                },
                {
                    name: 'Name22',
                    price: '60'
                }]
            },
            {
                displayName: 'Flowers',
                packsList: [{
                    name: 'Name23',
                    price: '30'
                },
                {
                    name: 'Name24',
                    price: '60'
                },
                {
                    name: 'Name23',
                    price: '30'
                },
                {
                    name: 'Name24',
                    price: '60'
                }
                    ,
                {
                    name: 'Name23',
                    price: '30'
                },
                {
                    name: 'Name24',
                    price: '60'
                },
                {
                    name: 'Name23',
                    price: '30'
                },
                {
                    name: 'Name24',
                    price: '60'
                },
                {
                    name: 'Name23',
                    price: '30'
                },
                {
                    name: 'Name24',
                    price: '60'
                }]
            },
            {
                displayName: 'Others',
                packsList: [{
                    name: 'Name25',
                    price: '30'
                },
                {
                    name: 'Name26',
                    price: '60'
                },
                {
                    name: 'Name25',
                    price: '30'
                },
                {
                    name: 'Name26',
                    price: '60'
                }
                    ,
                {
                    name: 'Name25',
                    price: '30'
                },
                {
                    name: 'Name26',
                    price: '60'
                },
                {
                    name: 'Name25',
                    price: '30'
                },
                {
                    name: 'Name26',
                    price: '60'
                },
                {
                    name: 'Name25',
                    price: '30'
                },
                {
                    name: 'Name26',
                    price: '60'
                }]
            }
        ]
    },
    {
        displayName: 'Housekeeping',
        route: 'housekeeping',
        children: [
            {
                displayName: 'Groceries',
                packsList: [{
                    name: 'Name1',
                    price: '30'
                },
                {
                    name: 'Name2',
                    price: '60'
                },
                {
                    name: 'Name1',
                    price: '30'
                },
                {
                    name: 'Name2',
                    price: '60'
                }
                    ,
                {
                    name: 'Name1',
                    price: '30'
                },
                {
                    name: 'Name2',
                    price: '60'
                },
                {
                    name: 'Name1',
                    price: '30'
                },
                {
                    name: 'Name2',
                    price: '60'
                },
                {
                    name: 'Name1',
                    price: '30'
                },
                {
                    name: 'Name2',
                    price: '60'
                }]
            },
            {
                displayName: 'Essentials',
                packsList: [{
                    name: 'Name3',
                    price: '30'
                },
                {
                    name: 'Name4',
                    price: '60'
                },
                {
                    name: 'Name3',
                    price: '30'
                },
                {
                    name: 'Name4',
                    price: '60'
                }
                    ,
                {
                    name: 'Name3',
                    price: '30'
                },
                {
                    name: 'Name4',
                    price: '60'
                },
                {
                    name: 'Name3',
                    price: '30'
                },
                {
                    name: 'Name4',
                    price: '60'
                },
                {
                    name: 'Name3',
                    price: '30'
                },
                {
                    name: 'Name4',
                    price: '60'
                }]
            },
            {
                displayName: 'Cutlery',
                packsList: [{
                    name: 'Name5',
                    price: '30'
                },
                {
                    name: 'Name6',
                    price: '60'
                },
                {
                    name: 'Name5',
                    price: '30'
                },
                {
                    name: 'Name6',
                    price: '60'
                }
                    ,
                {
                    name: 'Name5',
                    price: '30'
                },
                {
                    name: 'Name6',
                    price: '60'
                },
                {
                    name: 'Name5',
                    price: '30'
                },
                {
                    name: 'Name6',
                    price: '60'
                },
                {
                    name: 'Name5',
                    price: '30'
                },
                {
                    name: 'Name6',
                    price: '60'
                }]
            },
            {
                displayName: 'Others',
                packsList: [{
                    name: 'Name7',
                    price: '30'
                },
                {
                    name: 'Name8',
                    price: '60'
                },
                {
                    name: 'Name7',
                    price: '30'
                },
                {
                    name: 'Name8',
                    price: '60'
                }
                    ,
                {
                    name: 'Name7',
                    price: '30'
                },
                {
                    name: 'Name8',
                    price: '60'
                },
                {
                    name: 'Name7',
                    price: '30'
                },
                {
                    name: 'Name8',
                    price: '60'
                },
                {
                    name: 'Name7',
                    price: '30'
                },
                {
                    name: 'Name8',
                    price: '60'
                }]
            }
        ]
    },
    {
        displayName: 'Housekeeping',
        route: 'housekeeping',
        children: [
            {
                displayName: 'Groceries',
                packsList: [{
                    name: 'Name1',
                    price: '30'
                },
                {
                    name: 'Name2',
                    price: '60'
                },
                {
                    name: 'Name1',
                    price: '30'
                },
                {
                    name: 'Name2',
                    price: '60'
                }
                    ,
                {
                    name: 'Name1',
                    price: '30'
                },
                {
                    name: 'Name2',
                    price: '60'
                },
                {
                    name: 'Name1',
                    price: '30'
                },
                {
                    name: 'Name2',
                    price: '60'
                },
                {
                    name: 'Name1',
                    price: '30'
                },
                {
                    name: 'Name2',
                    price: '60'
                }]
            },
            {
                displayName: 'Essentials',
                packsList: [{
                    name: 'Name3',
                    price: '30'
                },
                {
                    name: 'Name4',
                    price: '60'
                },
                {
                    name: 'Name3',
                    price: '30'
                },
                {
                    name: 'Name4',
                    price: '60'
                }
                    ,
                {
                    name: 'Name3',
                    price: '30'
                },
                {
                    name: 'Name4',
                    price: '60'
                },
                {
                    name: 'Name3',
                    price: '30'
                },
                {
                    name: 'Name4',
                    price: '60'
                },
                {
                    name: 'Name3',
                    price: '30'
                },
                {
                    name: 'Name4',
                    price: '60'
                }]
            },
            {
                displayName: 'Cutlery',
                packsList: [{
                    name: 'Name5',
                    price: '30'
                },
                {
                    name: 'Name6',
                    price: '60'
                },
                {
                    name: 'Name5',
                    price: '30'
                },
                {
                    name: 'Name6',
                    price: '60'
                }
                    ,
                {
                    name: 'Name5',
                    price: '30'
                },
                {
                    name: 'Name6',
                    price: '60'
                },
                {
                    name: 'Name5',
                    price: '30'
                },
                {
                    name: 'Name6',
                    price: '60'
                },
                {
                    name: 'Name5',
                    price: '30'
                },
                {
                    name: 'Name6',
                    price: '60'
                }]
            },
            {
                displayName: 'Others',
                packsList: [{
                    name: 'Name7',
                    price: '30'
                },
                {
                    name: 'Name8',
                    price: '60'
                },
                {
                    name: 'Name7',
                    price: '30'
                },
                {
                    name: 'Name8',
                    price: '60'
                }
                    ,
                {
                    name: 'Name7',
                    price: '30'
                },
                {
                    name: 'Name8',
                    price: '60'
                },
                {
                    name: 'Name7',
                    price: '30'
                },
                {
                    name: 'Name8',
                    price: '60'
                },
                {
                    name: 'Name7',
                    price: '30'
                },
                {
                    name: 'Name8',
                    price: '60'
                }]
            }
        ]
    },
    {
        displayName: 'Housekeeping',
        route: 'housekeeping',
        children: [
            {
                displayName: 'Groceries',
                packsList: [{
                    name: 'Name1',
                    price: '30'
                },
                {
                    name: 'Name2',
                    price: '60'
                },
                {
                    name: 'Name1',
                    price: '30'
                },
                {
                    name: 'Name2',
                    price: '60'
                }
                    ,
                {
                    name: 'Name1',
                    price: '30'
                },
                {
                    name: 'Name2',
                    price: '60'
                },
                {
                    name: 'Name1',
                    price: '30'
                },
                {
                    name: 'Name2',
                    price: '60'
                },
                {
                    name: 'Name1',
                    price: '30'
                },
                {
                    name: 'Name2',
                    price: '60'
                }]
            },
            {
                displayName: 'Essentials',
                packsList: [{
                    name: 'Name3',
                    price: '30'
                },
                {
                    name: 'Name4',
                    price: '60'
                },
                {
                    name: 'Name3',
                    price: '30'
                },
                {
                    name: 'Name4',
                    price: '60'
                }
                    ,
                {
                    name: 'Name3',
                    price: '30'
                },
                {
                    name: 'Name4',
                    price: '60'
                },
                {
                    name: 'Name3',
                    price: '30'
                },
                {
                    name: 'Name4',
                    price: '60'
                },
                {
                    name: 'Name3',
                    price: '30'
                },
                {
                    name: 'Name4',
                    price: '60'
                }]
            },
            {
                displayName: 'Cutlery',
                packsList: [{
                    name: 'Name5',
                    price: '30'
                },
                {
                    name: 'Name6',
                    price: '60'
                },
                {
                    name: 'Name5',
                    price: '30'
                },
                {
                    name: 'Name6',
                    price: '60'
                }
                    ,
                {
                    name: 'Name5',
                    price: '30'
                },
                {
                    name: 'Name6',
                    price: '60'
                },
                {
                    name: 'Name5',
                    price: '30'
                },
                {
                    name: 'Name6',
                    price: '60'
                },
                {
                    name: 'Name5',
                    price: '30'
                },
                {
                    name: 'Name6',
                    price: '60'
                }]
            },
            {
                displayName: 'Others',
                packsList: [{
                    name: 'Name7',
                    price: '30'
                },
                {
                    name: 'Name8',
                    price: '60'
                },
                {
                    name: 'Name7',
                    price: '30'
                },
                {
                    name: 'Name8',
                    price: '60'
                }
                    ,
                {
                    name: 'Name7',
                    price: '30'
                },
                {
                    name: 'Name8',
                    price: '60'
                },
                {
                    name: 'Name7',
                    price: '30'
                },
                {
                    name: 'Name8',
                    price: '60'
                },
                {
                    name: 'Name7',
                    price: '30'
                },
                {
                    name: 'Name8',
                    price: '60'
                }]
            }
        ]
    },
    {
        displayName: 'Housekeeping',
        route: 'housekeeping',
        children: [
            {
                displayName: 'Groceries',
                packsList: [{
                    name: 'Name1',
                    price: '30'
                },
                {
                    name: 'Name2',
                    price: '60'
                },
                {
                    name: 'Name1',
                    price: '30'
                },
                {
                    name: 'Name2',
                    price: '60'
                }
                    ,
                {
                    name: 'Name1',
                    price: '30'
                },
                {
                    name: 'Name2',
                    price: '60'
                },
                {
                    name: 'Name1',
                    price: '30'
                },
                {
                    name: 'Name2',
                    price: '60'
                },
                {
                    name: 'Name1',
                    price: '30'
                },
                {
                    name: 'Name2',
                    price: '60'
                }]
            },
            {
                displayName: 'Essentials',
                packsList: [{
                    name: 'Name3',
                    price: '30'
                },
                {
                    name: 'Name4',
                    price: '60'
                },
                {
                    name: 'Name3',
                    price: '30'
                },
                {
                    name: 'Name4',
                    price: '60'
                }
                    ,
                {
                    name: 'Name3',
                    price: '30'
                },
                {
                    name: 'Name4',
                    price: '60'
                },
                {
                    name: 'Name3',
                    price: '30'
                },
                {
                    name: 'Name4',
                    price: '60'
                },
                {
                    name: 'Name3',
                    price: '30'
                },
                {
                    name: 'Name4',
                    price: '60'
                }]
            },
            {
                displayName: 'Cutlery',
                packsList: [{
                    name: 'Name5',
                    price: '30'
                },
                {
                    name: 'Name6',
                    price: '60'
                },
                {
                    name: 'Name5',
                    price: '30'
                },
                {
                    name: 'Name6',
                    price: '60'
                }
                    ,
                {
                    name: 'Name5',
                    price: '30'
                },
                {
                    name: 'Name6',
                    price: '60'
                },
                {
                    name: 'Name5',
                    price: '30'
                },
                {
                    name: 'Name6',
                    price: '60'
                },
                {
                    name: 'Name5',
                    price: '30'
                },
                {
                    name: 'Name6',
                    price: '60'
                }]
            },
            {
                displayName: 'Others',
                packsList: [{
                    name: 'Name7',
                    price: '30'
                },
                {
                    name: 'Name8',
                    price: '60'
                },
                {
                    name: 'Name7',
                    price: '30'
                },
                {
                    name: 'Name8',
                    price: '60'
                }
                    ,
                {
                    name: 'Name7',
                    price: '30'
                },
                {
                    name: 'Name8',
                    price: '60'
                },
                {
                    name: 'Name7',
                    price: '30'
                },
                {
                    name: 'Name8',
                    price: '60'
                },
                {
                    name: 'Name7',
                    price: '30'
                },
                {
                    name: 'Name8',
                    price: '60'
                }]
            }
        ]
    },
    {
        displayName: 'Housekeeping',
        route: 'housekeeping',
        children: [
            {
                displayName: 'Groceries',
                packsList: [{
                    name: 'Name1',
                    price: '30'
                },
                {
                    name: 'Name2',
                    price: '60'
                },
                {
                    name: 'Name1',
                    price: '30'
                },
                {
                    name: 'Name2',
                    price: '60'
                }
                    ,
                {
                    name: 'Name1',
                    price: '30'
                },
                {
                    name: 'Name2',
                    price: '60'
                },
                {
                    name: 'Name1',
                    price: '30'
                },
                {
                    name: 'Name2',
                    price: '60'
                },
                {
                    name: 'Name1',
                    price: '30'
                },
                {
                    name: 'Name2',
                    price: '60'
                }]
            },
            {
                displayName: 'Essentials',
                packsList: [{
                    name: 'Name3',
                    price: '30'
                },
                {
                    name: 'Name4',
                    price: '60'
                },
                {
                    name: 'Name3',
                    price: '30'
                },
                {
                    name: 'Name4',
                    price: '60'
                }
                    ,
                {
                    name: 'Name3',
                    price: '30'
                },
                {
                    name: 'Name4',
                    price: '60'
                },
                {
                    name: 'Name3',
                    price: '30'
                },
                {
                    name: 'Name4',
                    price: '60'
                },
                {
                    name: 'Name3',
                    price: '30'
                },
                {
                    name: 'Name4',
                    price: '60'
                }]
            },
            {
                displayName: 'Cutlery',
                packsList: [{
                    name: 'Name5',
                    price: '30'
                },
                {
                    name: 'Name6',
                    price: '60'
                },
                {
                    name: 'Name5',
                    price: '30'
                },
                {
                    name: 'Name6',
                    price: '60'
                }
                    ,
                {
                    name: 'Name5',
                    price: '30'
                },
                {
                    name: 'Name6',
                    price: '60'
                },
                {
                    name: 'Name5',
                    price: '30'
                },
                {
                    name: 'Name6',
                    price: '60'
                },
                {
                    name: 'Name5',
                    price: '30'
                },
                {
                    name: 'Name6',
                    price: '60'
                }]
            },
            {
                displayName: 'Others',
                packsList: [{
                    name: 'Name7',
                    price: '30'
                },
                {
                    name: 'Name8',
                    price: '60'
                },
                {
                    name: 'Name7',
                    price: '30'
                },
                {
                    name: 'Name8',
                    price: '60'
                }
                    ,
                {
                    name: 'Name7',
                    price: '30'
                },
                {
                    name: 'Name8',
                    price: '60'
                },
                {
                    name: 'Name7',
                    price: '30'
                },
                {
                    name: 'Name8',
                    price: '60'
                },
                {
                    name: 'Name7',
                    price: '30'
                },
                {
                    name: 'Name8',
                    price: '60'
                }]
            }
        ]
    },
    {
        displayName: 'Mens',
        iconName: 'videocam',
        route: 'mens',
        children: [
            {
                displayName: 'Grooming',
                packsList: [{
                    name: 'Name9',
                    price: '30'
                },
                {
                    name: 'Name10',
                    price: '60'
                },
                {
                    name: 'Name9',
                    price: '30'
                },
                {
                    name: 'Name10',
                    price: '60'
                }
                    ,
                {
                    name: 'Name9',
                    price: '30'
                },
                {
                    name: 'Name10',
                    price: '60'
                },
                {
                    name: 'Name9',
                    price: '30'
                },
                {
                    name: 'Name10',
                    price: '60'
                },
                {
                    name: 'Name9',
                    price: '30'
                },
                {
                    name: 'Name10',
                    price: '60'
                }]
            },
            {
                displayName: 'Hair/Makeup',
                packsList: [{
                    name: 'Name11',
                    price: '30'
                },
                {
                    name: 'Name12',
                    price: '60'
                },
                {
                    name: 'Name11',
                    price: '30'
                },
                {
                    name: 'Name12',
                    price: '60'
                }
                    ,
                {
                    name: 'Name11',
                    price: '30'
                },
                {
                    name: 'Name12',
                    price: '60'
                },
                {
                    name: 'Name11',
                    price: '30'
                },
                {
                    name: 'Name12',
                    price: '60'
                },
                {
                    name: 'Name11',
                    price: '30'
                },
                {
                    name: 'Name12',
                    price: '60'
                }]
            },
            {
                displayName: 'Others',
                packsList: [{
                    name: 'Name13',
                    price: '30'
                },
                {
                    name: 'Name14',
                    price: '60'
                },
                {
                    name: 'Name13',
                    price: '30'
                },
                {
                    name: 'Name14',
                    price: '60'
                }
                    ,
                {
                    name: 'Name13',
                    price: '30'
                },
                {
                    name: 'Name14',
                    price: '60'
                },
                {
                    name: 'Name13',
                    price: '30'
                },
                {
                    name: 'Name14',
                    price: '60'
                },
                {
                    name: 'Name13',
                    price: '30'
                },
                {
                    name: 'Name14',
                    price: '60'
                }]
            }
        ]
    },
    {
        displayName: 'Womens',
        route: 'womens',
        children: [
            {
                displayName: 'Beauty/Makeup',
                packsList: [{
                    name: 'Name14',
                    price: '30'
                },
                {
                    name: 'Name15',
                    price: '60'
                },
                {
                    name: 'Name14',
                    price: '30'
                },
                {
                    name: 'Name15',
                    price: '60'
                }
                    ,
                {
                    name: 'Name14',
                    price: '30'
                },
                {
                    name: 'Name15',
                    price: '60'
                },
                {
                    name: 'Name14',
                    price: '30'
                },
                {
                    name: 'Name15',
                    price: '60'
                },
                {
                    name: 'Name14',
                    price: '30'
                },
                {
                    name: 'Name15',
                    price: '60'
                }]
            },
            {
                displayName: 'Fashion',
                packsList: [{
                    name: 'Name16',
                    price: '30'
                },
                {
                    name: 'Name17',
                    price: '60'
                },
                {
                    name: 'Name16',
                    price: '30'
                },
                {
                    name: 'Name17',
                    price: '60'
                }
                    ,
                {
                    name: 'Name16',
                    price: '30'
                },
                {
                    name: 'Name17',
                    price: '60'
                },
                {
                    name: 'Name16',
                    price: '30'
                },
                {
                    name: 'Name17',
                    price: '60'
                },
                {
                    name: 'Name16',
                    price: '30'
                },
                {
                    name: 'Name17',
                    price: '60'
                }]
            },
            {
                displayName: 'Essentials',
                packsList: [{
                    name: 'Name18',
                    price: '30'
                },
                {
                    name: 'Name2',
                    price: '60'
                },
                {
                    name: 'Name18',
                    price: '30'
                },
                {
                    name: 'Name2',
                    price: '60'
                }
                    ,
                {
                    name: 'Name18',
                    price: '30'
                },
                {
                    name: 'Name2',
                    price: '60'
                },
                {
                    name: 'Name18',
                    price: '30'
                },
                {
                    name: 'Name2',
                    price: '60'
                },
                {
                    name: 'Name18',
                    price: '30'
                },
                {
                    name: 'Name2',
                    price: '60'
                }]
            },
            {
                displayName: 'Others',
                packsList: [{
                    name: 'Name19',
                    price: '30'
                },
                {
                    name: 'Name20',
                    price: '60'
                },
                {
                    name: 'Name19',
                    price: '30'
                },
                {
                    name: 'Name20',
                    price: '60'
                }
                    ,
                {
                    name: 'Name19',
                    price: '30'
                },
                {
                    name: 'Name20',
                    price: '60'
                },
                {
                    name: 'Name19',
                    price: '30'
                },
                {
                    name: 'Name20',
                    price: '60'
                },
                {
                    name: 'Name19',
                    price: '30'
                },
                {
                    name: 'Name20',
                    price: '60'
                }]
            }
        ]
    },
    {
        displayName: 'Devotional',
        iconName: 'videocam',
        route: 'devotional',
        children: [
            {
                displayName: 'Incense',
                packsList: [{
                    name: 'Name21',
                    price: '30'
                },
                {
                    name: 'Name22',
                    price: '60'
                },
                {
                    name: 'Name21',
                    price: '30'
                },
                {
                    name: 'Name22',
                    price: '60'
                }
                    ,
                {
                    name: 'Name21',
                    price: '30'
                },
                {
                    name: 'Name22',
                    price: '60'
                },
                {
                    name: 'Name21',
                    price: '30'
                },
                {
                    name: 'Name22',
                    price: '60'
                },
                {
                    name: 'Name21',
                    price: '30'
                },
                {
                    name: 'Name22',
                    price: '60'
                }]
            },
            {
                displayName: 'Flowers',
                packsList: [{
                    name: 'Name23',
                    price: '30'
                },
                {
                    name: 'Name24',
                    price: '60'
                },
                {
                    name: 'Name23',
                    price: '30'
                },
                {
                    name: 'Name24',
                    price: '60'
                }
                    ,
                {
                    name: 'Name23',
                    price: '30'
                },
                {
                    name: 'Name24',
                    price: '60'
                },
                {
                    name: 'Name23',
                    price: '30'
                },
                {
                    name: 'Name24',
                    price: '60'
                },
                {
                    name: 'Name23',
                    price: '30'
                },
                {
                    name: 'Name24',
                    price: '60'
                }]
            },
            {
                displayName: 'Others',
                packsList: [{
                    name: 'Name25',
                    price: '30'
                },
                {
                    name: 'Name26',
                    price: '60'
                },
                {
                    name: 'Name25',
                    price: '30'
                },
                {
                    name: 'Name26',
                    price: '60'
                }
                    ,
                {
                    name: 'Name25',
                    price: '30'
                },
                {
                    name: 'Name26',
                    price: '60'
                },
                {
                    name: 'Name25',
                    price: '30'
                },
                {
                    name: 'Name26',
                    price: '60'
                },
                {
                    name: 'Name25',
                    price: '30'
                },
                {
                    name: 'Name26',
                    price: '60'
                }]
            }
        ]
    },
];

export const organiserItemsConst: any[] = [
    {
        displayName: 'Home Essentials',
        route: 'home-essentials',
        imageUrl: '🧸',
        icon: 'inbox'
    },
    {
        displayName: 'Office Essentials',
        route: 'office-essentials',
        imageUrl: '🧸',
        icon: 'inbox'
    },
    {
        displayName: 'Personal Grooming',
        route: 'personal-grooming',
        imageUrl: '🧸',
        icon: 'inbox'
    },
];

export const appSettingsStateFirebaseBangalore: appSettingsState = {
    uid: '',
    isLoggedIn: false,
    isAnonymous: false,
    isLocationSaved: false,
    isUserDataSaved: false,
    userData: {
        uid: '',
        email: '',
        settingsId: '',
        displayName: '',
        emailVerified: '',
        photoURL: '',
    }
};

export const appSettingsStateFirebaseBellary: appSettingsState = {
    uid: '',
    isLoggedIn: false,
    isAnonymous: false,
    isLocationSaved: false,
    isUserDataSaved: false,
    userData: {
        uid: '',
        email: '',
        settingsId: '',
        displayName: '',
        emailVerified: '',
        photoURL: '',
    }
};

export const appSettingsStateDefault: appSettingsState = {
    uid: '',
    isLoggedIn: false,
    isAnonymous: false,
    isLocationSaved: false,
    isUserDataSaved: false,
    userData: {
        uid: '',
        email: '',
        settingsId: '',
        displayName: '',
        emailVerified: '',
        photoURL: '',
    }
};

export const appSettingsStateNull: appSettingsState = {
    uid: '',
    isLoggedIn: null,
    isAnonymous: null,
    isLocationSaved: null,
    isUserDataSaved: null,
    userData: {
        uid: '',
        email: '',
        settingsId: '',
        displayName: '',
        emailVerified: '',
        photoURL: '',
    }
};

export const adminMenuConst: any[] = [
    {
        displayName: 'Organiser Tasks',
        route: 'organiser-tasks'
    },
    {
        displayName: 'Categories',
        route: 'categories'
    },
    {
        displayName: 'SubCategories',
        route: 'subCategories'
    },
    {
        displayName: 'Main Packs List',
        route: 'main-packs-list'
    },
    {
        displayName: 'Marketing Material',
        route: 'marketing-material'
    },
    {
        displayName: 'Manage Pincode',
        route: 'manage-Pincode'
    },
    {
        displayName: 'Knowledge Base',
        route: 'knowledge-base'
    },
    {
        displayName: 'App Users',
        route: 'app-users'
    },
    {
        displayName: 'App Orders',
        route: 'app-orders'
    },
    {
        displayName: 'Pin Codes',
        route: 'pincodes'
    },
];


export const packsDataSampleDoctor = [
    mockPackDataProduct,
    mockPackProduct1,
    mockMonthlyHomeEssentialsProduct2,
    mockGroceryProduct3,
    mockFruitsProduct3,
    mockVegetablesProduct3,
    mockMilkPackService1,
    mockPhoneBillService2,
    mockVirtualMathService3,
];

const toOrganiseTasks: any[] = [
    {
        link: 'https://angular.io/',
        taskDescription: 'Organise your daily Milk, and save time',
        taskName: 'Catchy Milk Task Name',
        taskVendor: 'taskVendorName',
        taskImage: 'https://semantic-ui.com/images/avatar2/large/matthew.png',
        icon: 'icon-angular',
        CSSClass: 'icon-angular',
        packsData: mockMilkPackService1
    },
    {
        link: 'https://facebook.com/',
        taskDescription: 'Organise your daily Grocery, and save time',
        taskName: 'Catchy Grocery Task Name',
        taskVendor: 'taskVendorName',
        taskImage: 'https://semantic-ui.com/images/avatar2/large/matthew.png',
        icon: 'icon-angular',
        CSSClass: 'icon-facebook',
        packsData: mockGroceryProduct3,
        route: 'Organiser'
    },
    {
        link: 'https://google.com/',
        taskDescription: "Organise your monthly Home Essentials, and save time",
        taskName: "Catchy Home Essentials Task Name",
        taskVendor: 'taskVendorName',
        taskImage: 'https://semantic-ui.com/images/avatar2/large/matthew.png',
        icon: 'icon-angular',
        CSSClass: 'icon-google',
        packsData: mockMonthlyHomeEssentialsProduct2
    },
    {
        link: 'https://microsoft.com/',
        taskDescription: "Organise your Kid's Math Tutorial with this pack. Super Quality Edtech Pack at super prices.",
        taskName: "Catchy Virtual Math Kid's Tutorial Task Name",
        taskVendor: 'taskVendorName',
        taskImage: 'https://semantic-ui.com/images/avatar2/large/matthew.png',
        icon: 'icon-angular',
        CSSClass: 'icon-microsoft',
        packsData: mockVirtualMathService3
    },
    {
        link: 'https://microsoft.com/',
        taskDescription: "Organise your Fruits, and save time",
        taskName: "Catchy Fruits Task Name",
        taskVendor: 'taskVendorName',
        taskImage: 'https://semantic-ui.com/images/avatar2/large/matthew.png',
        icon: 'icon-angular',
        CSSClass: 'icon-microsoft',
        packsData: mockFruitsProduct3
    },
    {
        link: 'https://microsoft.com/',
        taskDescription: "Organise your Vegetables, and save time",
        taskName: "Catchy Vegetables Task Name",
        taskVendor: 'taskVendorName',
        taskImage: 'https://semantic-ui.com/images/avatar2/large/matthew.png',
        icon: 'icon-angular',
        CSSClass: 'icon-microsoft',
        packsData: mockVegetablesProduct3
    },
    {
        link: 'https://angular.io/',
        taskDescription: 'Organise your Prepaid Phone bill, and save stress',
        taskName: 'Catchy Phone bill pay Task Name',
        taskVendor: 'taskVendorName',
        taskImage: 'https://semantic-ui.com/images/avatar2/large/matthew.png',
        icon: 'icon-angular',
        CSSClass: 'icon-angular',
        packsData: mockPhoneBillService2
    },
    {
        link: 'https://angular.io/',
        taskDescription: 'Other Demo Task, Test Task',
        taskName: 'Other Demo Task, Test Task',
        taskVendor: 'taskVendorName',
        taskImage: 'https://semantic-ui.com/images/avatar2/large/matthew.png',
        icon: 'icon-angular',
        CSSClass: 'icon-angular',
        packsData: mockPackDataProduct
    }
];

export const dataProfiles: any = [
    {
        full: "Software Professional",
        short: "SE",
        toOrganiseTasks: toOrganiseTasks
    },
    {
        full: "Doctor",
        short: "DOC",
        toOrganiseTasks: toOrganiseTasks
    },
    {
        full: "Lawyer",
        short: "LAW",
        toOrganiseTasks: toOrganiseTasks
    },
    {
        full: "Corporate Professional",
        short: "CA",
        toOrganiseTasks: toOrganiseTasks
    },
    {
        full: "Self-Employeed",
        short: "SEM",
        toOrganiseTasks: toOrganiseTasks
    },
    {
        full: "Others",
        short: "OTH",
        toOrganiseTasks: toOrganiseTasks
    }
];


// https://stackblitz.com/edit/angular-mat-card-sample?file=src%2Fstyles.scss

