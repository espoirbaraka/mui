import { makeStyles } from '@mui/styles';
import React from 'react'
import { Drawer, ListItemIcon, Typography } from '@mui/material'
import { List, ListItem, ListeItemIcon, ListItemText } from '@mui/material'
import { AddCircleOutlineOutlined, SubjectOutlined } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import {AppBar, Toolbar} from '@mui/material'

const drawerWidth = 240

const useStyles = makeStyles((theme) => {
    return {
        page: {
            background: '#f9f9f9',
            width: '100%',
            //padding: theme.spacing(3)
        },
        drawer: {
            width: drawerWidth
        },
        drawerPaper: {
            width: drawerWidth
        },
        root: {
            display: 'flex'
        },
        active: {
            background: '#f4f4f4'
        },
        title:{
            //padding: theme.spacing(2)
        }
    }
})

function Layout({ children }) {
    const classes = useStyles()

    //in react-router-dom 6 it's useNavigate, under this, it's useHistory
    const history = useNavigate()

    const menuItems = [
        {
            text: 'Mu first note',
            icon: <SubjectOutlined color='secondary' />,
            path: '/'
        },
        {
            text: 'Mu second note',
            icon: <AddCircleOutlineOutlined color='secondary' />,
            path: '/home'
        }
    ]
    return (
        <div className={classes.root}>
            {/*side drawer*/}
            <Drawer className={classes.drawer} variant="permanent" anchor='left' classes={{ paper: classes.drawerPaper }}>
                <div>
                <Typography variant='h5' className={classes.title}>
                        ISIG goma
                    </Typography>
                </div>
                {/*List drawer*/}
                <List>
                    {menuItems.map(item => (
                        <ListItem
                            button
                            key={item.text}
                            onClick={() => history.push(item.path)}>
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText primary={item.text} />
                        </ListItem>
                    ))}
                </List>
            </Drawer>
            {/*page*/}
            <div className={classes.page}>
                {children}
            </div>

        </div>
    )
}
export default Layout