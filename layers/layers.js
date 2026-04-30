var wms_layers = [];


        var lyr_GoogleTerrainHybrid_0 = new ol.layer.Tile({
            'title': 'Google Terrain Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=p&x={x}&y={y}&z={z}'
            })
        });
var format_Mapadeclases_1 = new ol.format.GeoJSON();
var features_Mapadeclases_1 = format_Mapadeclases_1.readFeatures(json_Mapadeclases_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Mapadeclases_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mapadeclases_1.addFeatures(features_Mapadeclases_1);
var lyr_Mapadeclases_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Mapadeclases_1, 
                style: style_Mapadeclases_1,
                popuplayertitle: 'Mapa de clases',
                interactive: true,
    title: 'Mapa de clases<br />\
    <img src="styles/legend/Mapadeclases_1_0.png" /> 1<br />\
    <img src="styles/legend/Mapadeclases_1_1.png" /> 2<br />' });

lyr_GoogleTerrainHybrid_0.setVisible(true);lyr_Mapadeclases_1.setVisible(true);
var layersList = [lyr_GoogleTerrainHybrid_0,lyr_Mapadeclases_1];
lyr_Mapadeclases_1.set('fieldAliases', {'Area': 'Area', 'ID Crowise': 'ID Crowise', 'Area Back': 'Area Back', 'Orden de corte': 'Orden de corte', 'Clave productor': 'Clave productor', 'Nombre productor': 'Nombre productor', 'Propias/Productores': 'Propias/Productores', 'Superficie': 'Superficie', 'TCH Estimado': 'TCH Estimado', 'Calse TCH': 'Calse TCH', 'Toneladas Estimadas': 'Toneladas Estimadas', 'Ciclo': 'Ciclo', 'Clase Ciclo': 'Clase Ciclo', 'Tenencia': 'Tenencia', 'AvÃ­o': 'AvÃ­o', 'CLASE AVIO': 'CLASE AVIO', 'OrganizaciÃ³n': 'OrganizaciÃ³n', 'Origen OrganizaciÃ³n': 'Origen OrganizaciÃ³n', 'Municipio': 'Municipio', 'Calse Municipio': 'Calse Municipio', 'Municipio Original': 'Municipio Original', 'No. Zona': 'No. Zona', 'Nombre Zona': 'Nombre Zona', 'Supervisor producciÃ³n': 'Supervisor producciÃ³n', 'Supervisor cosecha': 'Supervisor cosecha', 'Comunidad': 'Comunidad', 'Predio/Rancho': 'Predio/Rancho', 'Lote': 'Lote', 'Kms Batey San Pedro': 'Kms Batey San Pedro', 'Kms Batey Modelo': 'Kms Batey Modelo', 'Clase Kms': 'Clase Kms', 'Zafra': 'Zafra', 'PRIORIDAD': 'PRIORIDAD', 'CLASE': 'CLASE', 'Poligono': 'Poligono', });
lyr_Mapadeclases_1.set('fieldImages', {'Area': 'TextEdit', 'ID Crowise': 'TextEdit', 'Area Back': 'TextEdit', 'Orden de corte': 'TextEdit', 'Clave productor': 'TextEdit', 'Nombre productor': 'TextEdit', 'Propias/Productores': 'TextEdit', 'Superficie': 'TextEdit', 'TCH Estimado': 'TextEdit', 'Calse TCH': 'TextEdit', 'Toneladas Estimadas': 'TextEdit', 'Ciclo': 'TextEdit', 'Clase Ciclo': 'TextEdit', 'Tenencia': 'TextEdit', 'AvÃ­o': 'TextEdit', 'CLASE AVIO': 'TextEdit', 'OrganizaciÃ³n': 'TextEdit', 'Origen OrganizaciÃ³n': 'TextEdit', 'Municipio': 'TextEdit', 'Calse Municipio': 'TextEdit', 'Municipio Original': 'TextEdit', 'No. Zona': 'TextEdit', 'Nombre Zona': 'TextEdit', 'Supervisor producciÃ³n': 'TextEdit', 'Supervisor cosecha': 'TextEdit', 'Comunidad': 'TextEdit', 'Predio/Rancho': 'TextEdit', 'Lote': 'TextEdit', 'Kms Batey San Pedro': 'TextEdit', 'Kms Batey Modelo': 'TextEdit', 'Clase Kms': 'TextEdit', 'Zafra': 'TextEdit', 'PRIORIDAD': 'TextEdit', 'CLASE': 'TextEdit', 'Poligono': 'TextEdit', });
lyr_Mapadeclases_1.set('fieldLabels', {'Area': 'inline label - always visible', 'ID Crowise': 'no label', 'Area Back': 'no label', 'Orden de corte': 'inline label - always visible', 'Clave productor': 'no label', 'Nombre productor': 'inline label - always visible', 'Propias/Productores': 'inline label - always visible', 'Superficie': 'inline label - always visible', 'TCH Estimado': 'inline label - always visible', 'Calse TCH': 'no label', 'Toneladas Estimadas': 'inline label - always visible', 'Ciclo': 'inline label - always visible', 'Clase Ciclo': 'no label', 'Tenencia': 'header label - visible with data', 'AvÃ­o': 'inline label - always visible', 'CLASE AVIO': 'no label', 'OrganizaciÃ³n': 'no label', 'Origen OrganizaciÃ³n': 'no label', 'Municipio': 'inline label - always visible', 'Calse Municipio': 'no label', 'Municipio Original': 'no label', 'No. Zona': 'no label', 'Nombre Zona': 'inline label - always visible', 'Supervisor producciÃ³n': 'inline label - always visible', 'Supervisor cosecha': 'inline label - always visible', 'Comunidad': 'inline label - always visible', 'Predio/Rancho': 'inline label - always visible', 'Lote': 'no label', 'Kms Batey San Pedro': 'inline label - always visible', 'Kms Batey Modelo': 'inline label - always visible', 'Clase Kms': 'no label', 'Zafra': 'no label', 'PRIORIDAD': 'no label', 'CLASE': 'inline label - always visible', 'Poligono': 'no label', });
lyr_Mapadeclases_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});