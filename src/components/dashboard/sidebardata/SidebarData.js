import React from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'
import * as BiIcons from 'react-icons/bi'
import * as MdIcons from 'react-icons/md'
import * as RiIcons from 'react-icons/ri'
import * as GoIcons from 'react-icons/go'


export const SidebarData = [
    
    {
        title:"Home",
        path:'/',
        icon:<AiIcons.AiFillHome />,
        cName: 'nav-text',
        type:"admin"
    },
    {
        title:"Home",
        path:'/',
        icon:<AiIcons.AiFillHome />,
        cName: 'nav-text',
        type:"user"
    },

    {
        title:"Book",
        path:'/dashboard/book',
        icon:<BiIcons.BiBookAdd />,
        cName: 'nav-text',
        type:"user"
    },
    {
        title:"Booking List",
        path:'/dashboard/bookinglist',
        icon:<IoIcons.IoIosPaper />,
        cName: 'nav-text',
        type:"user"
    },
    {
        title:"Review",
        path:'/dashboard/review',
        icon:<MdIcons.MdRateReview />,
        cName: 'nav-text',
        type:"user"
    },
    {
        title:"Order List",
        path:'/dashboard/orderlist',
        icon:<FaIcons.FaThList />,
        cName: 'nav-text',
        type:"admin"
    },
    {
        title:"Add Service",
        path:'/dashboard/addservice',
        icon:<BiIcons.BiBookAdd />,
        cName: 'nav-text',
        type:"admin"
    },
    {
        title:"Make Admin",
        path:'/dashboard/makeadmin',
        icon:<RiIcons.RiUserSettingsFill />,
        cName: 'nav-text',
        type:"admin"
    },
    {
        title:"Manage Service",
        path:'/dashboard/manageservice',
        icon:<GoIcons.GoSettings />,
        cName: 'nav-text',
        type:"admin"
    }


]