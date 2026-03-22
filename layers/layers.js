var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleTerrainHybrid_1 = new ol.layer.Tile({
            'title': 'Google Terrain Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=p&x={x}&y={y}&z={z}'
            })
        });
var format_Mapadeinundabilidad_2 = new ol.format.GeoJSON();
var features_Mapadeinundabilidad_2 = format_Mapadeinundabilidad_2.readFeatures(json_Mapadeinundabilidad_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Mapadeinundabilidad_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mapadeinundabilidad_2.addFeatures(features_Mapadeinundabilidad_2);
var lyr_Mapadeinundabilidad_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Mapadeinundabilidad_2, 
                style: style_Mapadeinundabilidad_2,
                popuplayertitle: 'Mapa de inundabilidad',
                interactive: true,
    title: 'Mapa de inundabilidad<br />\
    <img src="styles/legend/Mapadeinundabilidad_2_0.png" /> Inundable<br />\
    <img src="styles/legend/Mapadeinundabilidad_2_1.png" /> No inundable<br />' });
var format_Mapadesuelos_3 = new ol.format.GeoJSON();
var features_Mapadesuelos_3 = format_Mapadesuelos_3.readFeatures(json_Mapadesuelos_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Mapadesuelos_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mapadesuelos_3.addFeatures(features_Mapadesuelos_3);
var lyr_Mapadesuelos_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Mapadesuelos_3, 
                style: style_Mapadesuelos_3,
                popuplayertitle: 'Mapa de suelos',
                interactive: true,
    title: 'Mapa de suelos<br />\
    <img src="styles/legend/Mapadesuelos_3_0.png" /> Arcilloso<br />\
    <img src="styles/legend/Mapadesuelos_3_1.png" /> Arenoso<br />\
    <img src="styles/legend/Mapadesuelos_3_2.png" /> Franco arcilloso<br />\
    <img src="styles/legend/Mapadesuelos_3_3.png" /> Franco arenoso<br />' });
var format_Mapadecosecha_4 = new ol.format.GeoJSON();
var features_Mapadecosecha_4 = format_Mapadecosecha_4.readFeatures(json_Mapadecosecha_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Mapadecosecha_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mapadecosecha_4.addFeatures(features_Mapadecosecha_4);
var lyr_Mapadecosecha_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Mapadecosecha_4, 
                style: style_Mapadecosecha_4,
                popuplayertitle: 'Mapa de cosecha',
                interactive: true,
    title: 'Mapa de cosecha<br />\
    <img src="styles/legend/Mapadecosecha_4_0.png" /> COSECHADO<br />\
    <img src="styles/legend/Mapadecosecha_4_1.png" /> NO SE CORTA<br />\
    <img src="styles/legend/Mapadecosecha_4_2.png" /> SEMILLERO<br />\
    <img src="styles/legend/Mapadecosecha_4_3.png" /> <br />' });

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_GoogleTerrainHybrid_1.setVisible(true);lyr_Mapadeinundabilidad_2.setVisible(true);lyr_Mapadesuelos_3.setVisible(true);lyr_Mapadecosecha_4.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_GoogleTerrainHybrid_1,lyr_Mapadeinundabilidad_2,lyr_Mapadesuelos_3,lyr_Mapadecosecha_4];
lyr_Mapadeinundabilidad_2.set('fieldAliases', {'ID': 'ID', 'Poligono': 'Poligono', 'Nombre de': 'Nombre de', 'Unidad tec': 'Unidad tec', 'Estado': 'Estado', 'Area': 'Area', 'Area back': 'Area back', 'Ciclo': 'Ciclo', 'Variedad': 'Variedad', 'Clasificac': 'Clasificac', 'Topografia': 'Topografia', 'Inundabili': 'Inundabili', 'Tipo de ri': 'Tipo de ri', 'Equipo': 'Equipo', 'Fuente': 'Fuente', 'Estatus de': 'Estatus de', 'Clase de s': 'Clase de s', 'Clase de t': 'Clase de t', 'Clase de i': 'Clase de i', 'Clase de e': 'Clase de e', 'Clase': 'Clase', 'Max': 'Max', 'Min': 'Min', 'Promedio': 'Promedio', 'Superficie': 'Superficie', 'TCH MAC': 'TCH MAC', 'Toneladas': 'Toneladas', 'Superfic_1': 'Superfic_1', 'TCH 1er': 'TCH 1er', 'Tonelada_1': 'Tonelada_1', 'Superfic_2': 'Superfic_2', 'TCH 2do': 'TCH 2do', 'Tonelada_2': 'Tonelada_2', });
lyr_Mapadesuelos_3.set('fieldAliases', {'ID': 'ID', 'Poligono': 'Poligono', 'Nombre de': 'Nombre de', 'Unidad tec': 'Unidad tec', 'Estado': 'Estado', 'Area': 'Area', 'Area back': 'Area back', 'Ciclo': 'Ciclo', 'Variedad': 'Variedad', 'Clasificac': 'Clasificac', 'Topografia': 'Topografia', 'Inundabili': 'Inundabili', 'Tipo de ri': 'Tipo de ri', 'Equipo': 'Equipo', 'Fuente': 'Fuente', 'Estatus de': 'Estatus de', 'Clase de s': 'Clase de s', 'Clase de t': 'Clase de t', 'Clase de i': 'Clase de i', 'Clase de e': 'Clase de e', 'Clase': 'Clase', 'Max': 'Max', 'Min': 'Min', 'Promedio': 'Promedio', 'Superficie': 'Superficie', 'TCH MAC': 'TCH MAC', 'Toneladas': 'Toneladas', 'Superfic_1': 'Superfic_1', 'TCH 1er': 'TCH 1er', 'Tonelada_1': 'Tonelada_1', 'Superfic_2': 'Superfic_2', 'TCH 2do': 'TCH 2do', 'Tonelada_2': 'Tonelada_2', });
lyr_Mapadecosecha_4.set('fieldAliases', {'ID': 'ID', 'Poligono': 'Poligono', 'Nombre de': 'Nombre de', 'Unidad tec': 'Unidad tec', 'Estado': 'Estado', 'Area': 'Area', 'Area back': 'Area back', 'Ciclo': 'Ciclo', 'Variedad': 'Variedad', 'Clasificac': 'Clasificac', 'Topografia': 'Topografia', 'Inundabili': 'Inundabili', 'Tipo de ri': 'Tipo de ri', 'Equipo': 'Equipo', 'Fuente': 'Fuente', 'Estatus de': 'Estatus de', 'Clase de s': 'Clase de s', 'Clase de t': 'Clase de t', 'Clase de i': 'Clase de i', 'Clase de e': 'Clase de e', 'Clase': 'Clase', 'Max': 'Max', 'Min': 'Min', 'Promedio': 'Promedio', 'Superficie': 'Superficie', 'TCH MAC': 'TCH MAC', 'Toneladas': 'Toneladas', 'Superfic_1': 'Superfic_1', 'TCH 1er': 'TCH 1er', 'Tonelada_1': 'Tonelada_1', 'Superfic_2': 'Superfic_2', 'TCH 2do': 'TCH 2do', 'Tonelada_2': 'Tonelada_2', });
lyr_Mapadeinundabilidad_2.set('fieldImages', {'ID': 'TextEdit', 'Poligono': 'TextEdit', 'Nombre de': 'TextEdit', 'Unidad tec': 'TextEdit', 'Estado': 'TextEdit', 'Area': 'TextEdit', 'Area back': 'TextEdit', 'Ciclo': 'TextEdit', 'Variedad': 'TextEdit', 'Clasificac': 'TextEdit', 'Topografia': 'TextEdit', 'Inundabili': 'TextEdit', 'Tipo de ri': 'TextEdit', 'Equipo': 'TextEdit', 'Fuente': 'TextEdit', 'Estatus de': 'TextEdit', 'Clase de s': 'TextEdit', 'Clase de t': 'TextEdit', 'Clase de i': 'TextEdit', 'Clase de e': 'TextEdit', 'Clase': 'TextEdit', 'Max': 'TextEdit', 'Min': 'TextEdit', 'Promedio': 'TextEdit', 'Superficie': 'TextEdit', 'TCH MAC': 'TextEdit', 'Toneladas': 'TextEdit', 'Superfic_1': 'TextEdit', 'TCH 1er': 'TextEdit', 'Tonelada_1': 'TextEdit', 'Superfic_2': 'TextEdit', 'TCH 2do': 'TextEdit', 'Tonelada_2': 'TextEdit', });
lyr_Mapadesuelos_3.set('fieldImages', {'ID': 'TextEdit', 'Poligono': 'TextEdit', 'Nombre de': 'TextEdit', 'Unidad tec': 'TextEdit', 'Estado': 'TextEdit', 'Area': 'TextEdit', 'Area back': 'TextEdit', 'Ciclo': 'TextEdit', 'Variedad': 'TextEdit', 'Clasificac': 'TextEdit', 'Topografia': 'TextEdit', 'Inundabili': 'TextEdit', 'Tipo de ri': 'TextEdit', 'Equipo': 'TextEdit', 'Fuente': 'TextEdit', 'Estatus de': 'TextEdit', 'Clase de s': 'TextEdit', 'Clase de t': 'TextEdit', 'Clase de i': 'TextEdit', 'Clase de e': 'TextEdit', 'Clase': 'TextEdit', 'Max': 'TextEdit', 'Min': 'TextEdit', 'Promedio': 'TextEdit', 'Superficie': 'TextEdit', 'TCH MAC': 'TextEdit', 'Toneladas': 'TextEdit', 'Superfic_1': 'TextEdit', 'TCH 1er': 'TextEdit', 'Tonelada_1': 'TextEdit', 'Superfic_2': 'TextEdit', 'TCH 2do': 'TextEdit', 'Tonelada_2': 'TextEdit', });
lyr_Mapadecosecha_4.set('fieldImages', {'ID': 'TextEdit', 'Poligono': 'TextEdit', 'Nombre de': 'TextEdit', 'Unidad tec': 'TextEdit', 'Estado': 'TextEdit', 'Area': 'TextEdit', 'Area back': 'TextEdit', 'Ciclo': 'TextEdit', 'Variedad': 'TextEdit', 'Clasificac': 'TextEdit', 'Topografia': 'TextEdit', 'Inundabili': 'TextEdit', 'Tipo de ri': 'TextEdit', 'Equipo': 'TextEdit', 'Fuente': 'TextEdit', 'Estatus de': 'TextEdit', 'Clase de s': 'TextEdit', 'Clase de t': 'TextEdit', 'Clase de i': 'TextEdit', 'Clase de e': 'TextEdit', 'Clase': 'TextEdit', 'Max': 'TextEdit', 'Min': 'TextEdit', 'Promedio': 'TextEdit', 'Superficie': 'TextEdit', 'TCH MAC': 'TextEdit', 'Toneladas': 'TextEdit', 'Superfic_1': 'TextEdit', 'TCH 1er': 'TextEdit', 'Tonelada_1': 'TextEdit', 'Superfic_2': 'TextEdit', 'TCH 2do': 'TextEdit', 'Tonelada_2': 'TextEdit', });
lyr_Mapadeinundabilidad_2.set('fieldLabels', {'ID': 'header label - always visible', 'Poligono': 'no label', 'Nombre de': 'header label - always visible', 'Unidad tec': 'no label', 'Estado': 'no label', 'Area': 'no label', 'Area back': 'no label', 'Ciclo': 'header label - always visible', 'Variedad': 'header label - always visible', 'Clasificac': 'no label', 'Topografia': 'no label', 'Inundabili': 'header label - always visible', 'Tipo de ri': 'no label', 'Equipo': 'no label', 'Fuente': 'no label', 'Estatus de': 'no label', 'Clase de s': 'no label', 'Clase de t': 'no label', 'Clase de i': 'no label', 'Clase de e': 'no label', 'Clase': 'no label', 'Max': 'no label', 'Min': 'no label', 'Promedio': 'no label', 'Superficie': 'header label - always visible', 'TCH MAC': 'no label', 'Toneladas': 'no label', 'Superfic_1': 'no label', 'TCH 1er': 'no label', 'Tonelada_1': 'no label', 'Superfic_2': 'no label', 'TCH 2do': 'no label', 'Tonelada_2': 'no label', });
lyr_Mapadesuelos_3.set('fieldLabels', {'ID': 'header label - always visible', 'Poligono': 'no label', 'Nombre de': 'inline label - visible with data', 'Unidad tec': 'no label', 'Estado': 'no label', 'Area': 'no label', 'Area back': 'no label', 'Ciclo': 'header label - always visible', 'Variedad': 'header label - always visible', 'Clasificac': 'header label - always visible', 'Topografia': 'no label', 'Inundabili': 'no label', 'Tipo de ri': 'no label', 'Equipo': 'no label', 'Fuente': 'no label', 'Estatus de': 'no label', 'Clase de s': 'no label', 'Clase de t': 'no label', 'Clase de i': 'no label', 'Clase de e': 'no label', 'Clase': 'no label', 'Max': 'no label', 'Min': 'no label', 'Promedio': 'no label', 'Superficie': 'header label - always visible', 'TCH MAC': 'no label', 'Toneladas': 'no label', 'Superfic_1': 'no label', 'TCH 1er': 'no label', 'Tonelada_1': 'no label', 'Superfic_2': 'no label', 'TCH 2do': 'no label', 'Tonelada_2': 'no label', });
lyr_Mapadecosecha_4.set('fieldLabels', {'ID': 'header label - always visible', 'Poligono': 'no label', 'Nombre de': 'header label - always visible', 'Unidad tec': 'no label', 'Estado': 'header label - always visible', 'Area': 'no label', 'Area back': 'no label', 'Ciclo': 'header label - always visible', 'Variedad': 'header label - always visible', 'Clasificac': 'no label', 'Topografia': 'no label', 'Inundabili': 'no label', 'Tipo de ri': 'no label', 'Equipo': 'no label', 'Fuente': 'no label', 'Estatus de': 'no label', 'Clase de s': 'no label', 'Clase de t': 'no label', 'Clase de i': 'no label', 'Clase de e': 'no label', 'Clase': 'no label', 'Max': 'no label', 'Min': 'no label', 'Promedio': 'no label', 'Superficie': 'header label - always visible', 'TCH MAC': 'header label - always visible', 'Toneladas': 'no label', 'Superfic_1': 'no label', 'TCH 1er': 'header label - always visible', 'Tonelada_1': 'no label', 'Superfic_2': 'no label', 'TCH 2do': 'header label - always visible', 'Tonelada_2': 'no label', });
lyr_Mapadecosecha_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});