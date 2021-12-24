
var styleJSON = {
    "version": 8,
    "name": "qgis2web export",
    "pitch": 0,
    "light": {
        "intensity": 0.2
    },
    "sources": {
        "BSHbldg_0": {
            "type": "geojson",
            "data": json_BSHbldg_0
        }
                    },
    "sprite": "",
    "glyphs": "https://glfonts.lukasmartinelli.ch/fonts/{fontstack}/{range}.pbf",
    "layers": [
        {
            "id": "background",
            "type": "background",
            "layout": {},
            "paint": {
                "background-color": "#ffffff"
            }
        },
        {
            "id": "lyr_BSHbldg_0_0",
            "type": "fill",
            "source": "BSHbldg_0",
            "layout": {},
            "paint": {'fill-opacity': 1.0, 'fill-color': '#beb297'}
        }
],
}