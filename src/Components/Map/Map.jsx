import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Paper, Typography,useMediaQuery } from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab';
import useStyles from './styles.js';
// some of the material ui component is still being worked on for which we are importing from lab not from core

const Map = () => {
    const classes = useStyles();
    const isMobile = useMediaQuery('(min-width:600px)');
    const coordinates = { lat: 0, lng: 0 };
    // that is isMobile will be set to false if the min width is less than 600px
    return (
        <div className={classes.mapContainer}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: '' }}
                defaultCenter = { coordinates }
                center = { coordinates }
                defaultZoom = { 14 }
                margin = {[50, 50, 50, 50]}
                options = {''}
                onChange = {''}
                onChildClick = {''}
                // on child click propety will be used when we click on specific marker or restaurant

                >

            </GoogleMapReact>
        </div>
    );
}

export default Map;