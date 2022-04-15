// import { makeStyles } from '@mui/styles';
import React from 'react'
import { Drawer, Typography } from '@mui/material'

const drawerWidth = 240

// const useStyles = makeStyles({
//     page: {
//         background: '#f9f9f9',
//         width: '100%'
//     },
//     drawer:{
//         width: drawerWidth
//     }
// })

function Layout({children}) {
    // const classes = useStyles()
    return (
        <div>
            {/*<Drawer
            className={classes.drawer}
            variant="permanent"
            anchor='left'
            >
                <div>
                    <Typography variant='h5'>
                    ISIG
                    </Typography>
                </div>
            </Drawer>
            <div className={classes.page}>
    </div>*/}
        	{children}
        </div>
    )
}
export default Layout