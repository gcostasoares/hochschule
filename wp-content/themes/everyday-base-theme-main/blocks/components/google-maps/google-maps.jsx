import { registerBlockType } from '@wordpress/blocks';
import { InspectorControls } from '@wordpress/block-editor';
import {
    PanelBody,
    PanelRow,
    __experimentalInputControl as InputControl,
    ColorPalette,
} from '@wordpress/components';
import { useEffect } from '@wordpress/element';
import { mapMarker } from '@wordpress/icons';
import { v4 as uuidv4 } from 'uuid';
import { initGoogleMaps } from '../../../src/js/components/googleMaps';

registerBlockType('basetheme/google-maps', {
    title: 'Googlemaps',
    icon: mapMarker,
    category: 'layout',
    parent: ['basetheme/container', 'basetheme/grid-item'],
    description: 'A Description',
    keywords: [],
    attributes: {
        uuid: { type: 'string', default: '' },
        apiKey: {
            type: 'string',
            default: process.env.GOOGLE_MAPS_API_KEY,
            hidden: true,
        },
        geolocationApiKey: {
            type: 'string',
            default: process.env.GEOLOCATION_API_KEY,
            hidden: true,
        },
        location: { type: 'string', default: 'Hauptsitz' },
        street: { type: 'string', default: 'Hauptstrasse' },
        number: { type: 'string', default: '1' },
        zip: { type: 'string', default: '4001' },
        city: { type: 'string', default: 'Basel' },
        email: { type: 'string', default: '' },
        phone: { type: 'string', default: '' },
        colorLandscape: { type: 'string', default: '#FFFFFF' },
        colorRoad: { type: 'string', default: '#808080' },
        colorWater: { type: 'string', default: '#0d3b66' },
        colorPoiPark: { type: 'string', default: '#FFFFFF' },
        colorPoi: { type: 'string', default: '#FFFFFF' },
        enableAdvancedMarker: { type: 'boolean', default: false },
    },
    edit: EditComponent,
    save: () => null,
});

const googleMapsColorValues = [
    { name: 'primary', color: '#BE2830' },
    { name: 'secondary', color: '#5C5C5B' },
    { name: 'black', color: '#000000' },
    { name: 'white', color: '#fff' },
    { name: 'gray', color: '#adb5bd' },
];

function EditComponent({ attributes, setAttributes }) {
    const { apiKey, lat, long } = attributes;

    useEffect(() => {
        initGoogleMaps();
    }, [apiKey, lat, long]);

    useEffect(() => {
        if (!attributes.uuid) {
            setAttributes({ uuid: uuidv4() });
        }
    }, [attributes.uuid, setAttributes]);

    return (
        <>
            <InspectorControls>
                <MapSettingsPanel
                    attributes={attributes}
                    setAttributes={setAttributes}
                />
                <MapColorsPanel
                    attributes={attributes}
                    setAttributes={setAttributes}
                />
            </InspectorControls>
            <GoogleMapPreview attributes={attributes} />
        </>
    );
}

function MapSettingsPanel({ attributes, setAttributes }) {
    const { location, lat, long, street, number, zip, city, email, phone } =
		attributes;

    return (
        <PanelBody title="Google Maps Settings">
            {[
                { label: 'Location', value: location, key: 'location' },
                { label: 'Street', value: street, key: 'street' },
                { label: 'Number', value: number, key: 'number' },
                { label: 'Zip', value: zip, key: 'zip', type: 'number' },
                { label: 'City', value: city, key: 'city' },
                { label: 'Email', value: email, key: 'email', type: 'email' },
                { label: 'Phone', value: phone, key: 'phone', type: 'tel' },
            ].map(({ label, value, key, type }) => (
                <PanelRow key={key}>
                    <InputControl
                        label={label}
                        value={value}
                        type={type || 'text'}
                        onChange={(newValue) =>
                            setAttributes({ [key]: newValue })
                        }
                    />
                </PanelRow>
            ))}
        </PanelBody>
    );
}

function MapColorsPanel({ attributes, setAttributes }) {
    const { colorLandscape, colorRoad, colorWater, colorPoiPark, colorPoi } =
		attributes;

    return (
        <PanelBody title="Map Colors">
            {[
                {
                    label: 'Color Landscape',
                    value: colorLandscape,
                    key: 'colorLandscape',
                },
                { label: 'Color Road', value: colorRoad, key: 'colorRoad' },
                { label: 'Color Water', value: colorWater, key: 'colorWater' },
                {
                    label: 'Color Poi Park',
                    value: colorPoiPark,
                    key: 'colorPoiPark',
                },
                { label: 'Color Poi', value: colorPoi, key: 'colorPoi' },
            ].map(({ label, value, key }) => (
                <div key={key}>
                    <label htmlFor={key}>{label}</label>
                    <PanelRow>
                        <ColorPalette
                            disableCustomColors
                            clearable={false}
                            colors={googleMapsColorValues}
                            value={value}
                            onChange={(newColor) =>
                                setAttributes({ [key]: newColor })
                            }
                        />
                    </PanelRow>
                </div>
            ))}
        </PanelBody>
    );
}

function GoogleMapPreview({ attributes }) {
    const {
        uuid,
        apiKey,
        geolocationApiKey,
        location,
        street,
        number,
        zip,
        city,
        email,
        phone,
        colorLandscape,
        colorRoad,
        colorWater,
        colorPoiPark,
        colorPoi,
    } = attributes;

    return (
        <div className="google-maps-preview">
            <div
                className="google-maps-color"
                data-map-colors
                data-map-colors-id={uuid}
                data-map-colors-landscape={colorLandscape}
                data-map-colors-road={colorRoad}
                data-map-colors-water={colorWater}
                data-map-colors-poi-park={colorPoiPark}
                data-map-colors-poi={colorPoi}
            ></div>
            <div
                className="google-maps-wrapper"
                data-map
                data-map-id={uuid}
                data-api-key={apiKey}
                data-geolocation-api-key={geolocationApiKey}
                data-location={location}
                data-street={street}
                data-number={number}
                data-postal-code={zip}
                data-city={city}
                data-email={email}
                data-phone={phone}
            ></div>
        </div>
    );
}
