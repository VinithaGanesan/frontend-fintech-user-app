import React from 'react'
import { AuthenticatedRoutes } from '../../Route'
import { NavLink } from 'react-router-dom'
import { List, ListItem, ListItemIcon, ListItemText, MenuItem, MenuList, Paper, Typography, styled, Box } from '@mui/material'
import { ContentCut, ContentCutOutlined } from '@mui/icons-material';

const Container = styled(Box)({
    backgroundColor:"grey",
    // '& ul': {
    //     padding: '10px 0 0 5px',
    //     fontSize: 14,
    //     fontWeight: 500,
    //     cursor: 'pointer',
    //     '& > a' : {
    //         textDecoration: 'none',
    //         color: 'inherit'
    //     },
    //     '& > ul > a > li > svg': {
    //         marginRight: 20,
    //     }
    // }

})

export default function SidebarContent() {
    return (
        <>
            <Container>
                <MenuList>
                    {
                        AuthenticatedRoutes.children.map((route, index) => (
                            <MenuItem>
                                <NavLink
                                key={`${route.name}-${index}`}
                                to={route.path}
                                style={isActive => ({
                                    className: isActive
                                        ? "active"
                                        : "nonactive",
                                    color: isActive ? "#F5F5F5" : "#203562",
                                    textDecoration:"none"
                                })}
                            >
                                <ListItemIcon>
                                    <route.icon />
                                </ListItemIcon>
                                <ListItemText>{route.name}</ListItemText>
                               </NavLink>

                            </MenuItem>
                        ))
                    }
                </MenuList>
            </Container>
        </>
    )
}
