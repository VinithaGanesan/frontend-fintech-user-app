import React from 'react'
import { AuthenticatedRoutes } from '../../Route'
import { NavLink } from 'react-router-dom'
import { ListItemIcon, ListItemText, MenuItem, MenuList, styled, Box } from '@mui/material'

const Container = styled(Box)({
    backgroundColor: "grey",
    height: "85vh",
    '& ul': {
        padding: '10 0 0 5px',
        fontSize: 14,
        fontWeight: 500,
        cursor: 'pointer',
        '& > a': {
            textDecoration: 'none',
            color: 'inherit'
        },
        '& > ul > a > li > svg': {
            marginRight: 50,
        }
    }
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
                                        color: isActive ? "#F5F5F5" : "#000000",
                                        textDecoration: "none"
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
