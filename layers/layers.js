var wms_layers = [];


        var lyr_GoogleTerrainHybrid_0 = new ol.layer.Tile({
            'title': 'Google Terrain Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=p&x={x}&y={y}&z={z}'
            })
        });
var format_Propias_1 = new ol.format.GeoJSON();
var features_Propias_1 = format_Propias_1.readFeatures(json_Propias_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Propias_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Propias_1.addFeatures(features_Propias_1);
var lyr_Propias_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Propias_1, 
                style: style_Propias_1,
                popuplayertitle: 'Propias',
                interactive: true,
    title: 'Propias<br />\
    <img src="styles/legend/Propias_1_0.png" /> 1<br />' });
var format_Productores_2 = new ol.format.GeoJSON();
var features_Productores_2 = format_Productores_2.readFeatures(json_Productores_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Productores_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Productores_2.addFeatures(features_Productores_2);
var lyr_Productores_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Productores_2, 
                style: style_Productores_2,
                popuplayertitle: 'Productores',
                interactive: true,
    title: 'Productores<br />\
    <img src="styles/legend/Productores_2_0.png" /> 1<br />\
    <img src="styles/legend/Productores_2_1.png" /> 2<br />' });

lyr_GoogleTerrainHybrid_0.setVisible(true);lyr_Propias_1.setVisible(true);lyr_Productores_2.setVisible(true);
var layersList = [lyr_GoogleTerrainHybrid_0,lyr_Propias_1,lyr_Productores_2];
lyr_Propias_1.set('fieldAliases', {'Area': 'Area', 'ID Crowise': 'ID Crowise', 'Area Back': 'Area Back', 'Orden de c': 'Orden de c', 'Clave prod': 'Clave prod', 'Nombre pro': 'Nombre pro', 'Propias/Pr': 'Propias/Pr', 'Superficie': 'Superficie', 'TCH Estima': 'TCH Estima', 'Calse TCH': 'Calse TCH', 'Toneladas': 'Toneladas', 'Ciclo': 'Ciclo', 'Clase Cicl': 'Clase Cicl', 'Tenencia': 'Tenencia', 'AvÃ­o': 'AvÃ­o', 'CLASE AVIO': 'CLASE AVIO', 'Organizaci': 'Organizaci', 'Origen Org': 'Origen Org', 'Municipio': 'Municipio', 'Calse Muni': 'Calse Muni', 'Municipi_1': 'Municipi_1', 'No. Zona': 'No. Zona', 'Nombre Zon': 'Nombre Zon', 'Supervisor': 'Supervisor', 'Supervis_1': 'Supervis_1', 'Comunidad': 'Comunidad', 'Predio/Ran': 'Predio/Ran', 'Lote': 'Lote', 'Kms Batey': 'Kms Batey', 'Kms Bate_1': 'Kms Bate_1', 'Clase Kms': 'Clase Kms', 'Zafra': 'Zafra', 'PRIORIDAD': 'PRIORIDAD', 'CLASE': 'CLASE', 'Poligono': 'Poligono', });
lyr_Productores_2.set('fieldAliases', {'Area': 'Area', 'ID Crowise': 'ID Crowise', 'Area Back': 'Area Back', 'Orden de corte': 'Orden de corte', 'Clave productor': 'Clave productor', 'Nombre productor': 'Nombre productor', 'Propias/Productores': 'Propias/Productores', 'Superficie': 'Superficie', 'TCH Estimado': 'TCH Estimado', 'Calse TCH': 'Calse TCH', 'Toneladas Estimadas': 'Toneladas Estimadas', 'Ciclo': 'Ciclo', 'Clase Ciclo': 'Clase Ciclo', 'Tenencia': 'Tenencia', 'AvÃ­o': 'AvÃ­o', 'CLASE AVIO': 'CLASE AVIO', 'OrganizaciÃ³n': 'OrganizaciÃ³n', 'Origen OrganizaciÃ³n': 'Origen OrganizaciÃ³n', 'Municipio': 'Municipio', 'Calse Municipio': 'Calse Municipio', 'Municipio Original': 'Municipio Original', 'No. Zona': 'No. Zona', 'Nombre Zona': 'Nombre Zona', 'Supervisor producciÃ³n': 'Supervisor producciÃ³n', 'Supervisor cosecha': 'Supervisor cosecha', 'Comunidad': 'Comunidad', 'Predio/Rancho': 'Predio/Rancho', 'Lote': 'Lote', 'Kms Batey San Pedro': 'Kms Batey San Pedro', 'Kms Batey Modelo': 'Kms Batey Modelo', 'Clase Kms': 'Clase Kms', 'Zafra': 'Zafra', 'PRIORIDAD': 'PRIORIDAD', 'CLASE': 'CLASE', 'Poligono': 'Poligono', });
lyr_Propias_1.set('fieldImages', {'Area': 'TextEdit', 'ID Crowise': 'TextEdit', 'Area Back': 'TextEdit', 'Orden de c': 'TextEdit', 'Clave prod': 'TextEdit', 'Nombre pro': 'TextEdit', 'Propias/Pr': 'TextEdit', 'Superficie': 'TextEdit', 'TCH Estima': 'TextEdit', 'Calse TCH': 'TextEdit', 'Toneladas': 'TextEdit', 'Ciclo': 'TextEdit', 'Clase Cicl': 'TextEdit', 'Tenencia': 'TextEdit', 'AvÃ­o': 'TextEdit', 'CLASE AVIO': 'TextEdit', 'Organizaci': 'TextEdit', 'Origen Org': 'TextEdit', 'Municipio': 'TextEdit', 'Calse Muni': 'TextEdit', 'Municipi_1': 'TextEdit', 'No. Zona': 'TextEdit', 'Nombre Zon': 'TextEdit', 'Supervisor': 'TextEdit', 'Supervis_1': 'TextEdit', 'Comunidad': 'TextEdit', 'Predio/Ran': 'TextEdit', 'Lote': 'TextEdit', 'Kms Batey': 'TextEdit', 'Kms Bate_1': 'TextEdit', 'Clase Kms': 'TextEdit', 'Zafra': 'TextEdit', 'PRIORIDAD': 'TextEdit', 'CLASE': 'TextEdit', 'Poligono': 'TextEdit', });
lyr_Productores_2.set('fieldImages', {'Area': 'TextEdit', 'ID Crowise': 'TextEdit', 'Area Back': 'TextEdit', 'Orden de corte': 'TextEdit', 'Clave productor': 'TextEdit', 'Nombre productor': 'TextEdit', 'Propias/Productores': 'TextEdit', 'Superficie': 'TextEdit', 'TCH Estimado': 'TextEdit', 'Calse TCH': 'TextEdit', 'Toneladas Estimadas': 'TextEdit', 'Ciclo': 'TextEdit', 'Clase Ciclo': 'TextEdit', 'Tenencia': 'TextEdit', 'AvÃ­o': 'TextEdit', 'CLASE AVIO': 'TextEdit', 'OrganizaciÃ³n': 'TextEdit', 'Origen OrganizaciÃ³n': 'TextEdit', 'Municipio': 'TextEdit', 'Calse Municipio': 'TextEdit', 'Municipio Original': 'TextEdit', 'No. Zona': 'TextEdit', 'Nombre Zona': 'TextEdit', 'Supervisor producciÃ³n': 'TextEdit', 'Supervisor cosecha': 'TextEdit', 'Comunidad': 'TextEdit', 'Predio/Rancho': 'TextEdit', 'Lote': 'TextEdit', 'Kms Batey San Pedro': 'TextEdit', 'Kms Batey Modelo': 'TextEdit', 'Clase Kms': 'TextEdit', 'Zafra': 'TextEdit', 'PRIORIDAD': 'TextEdit', 'CLASE': 'TextEdit', 'Poligono': 'TextEdit', });
lyr_Propias_1.set('fieldLabels', {'Area': 'inline label - always visible', 'ID Crowise': 'no label', 'Area Back': 'no label', 'Orden de c': 'inline label - always visible', 'Clave prod': 'no label', 'Nombre pro': 'inline label - always visible', 'Propias/Pr': 'no label', 'Superficie': 'inline label - always visible', 'TCH Estima': 'inline label - always visible', 'Calse TCH': 'no label', 'Toneladas': 'inline label - always visible', 'Ciclo': 'inline label - always visible', 'Clase Cicl': 'no label', 'Tenencia': 'no label', 'AvÃ­o': 'no label', 'CLASE AVIO': 'no label', 'Organizaci': 'inline label - always visible', 'Origen Org': 'no label', 'Municipio': 'inline label - always visible', 'Calse Muni': 'no label', 'Municipi_1': 'no label', 'No. Zona': 'no label', 'Nombre Zon': 'inline label - always visible', 'Supervisor': 'no label', 'Supervis_1': 'no label', 'Comunidad': 'inline label - always visible', 'Predio/Ran': 'inline label - always visible', 'Lote': 'no label', 'Kms Batey': 'no label', 'Kms Bate_1': 'inline label - always visible', 'Clase Kms': 'no label', 'Zafra': 'no label', 'PRIORIDAD': 'no label', 'CLASE': 'no label', 'Poligono': 'no label', });
lyr_Productores_2.set('fieldLabels', {'Area': 'header label - always visible', 'ID Crowise': 'no label', 'Area Back': 'no label', 'Orden de corte': 'inline label - always visible', 'Clave productor': 'no label', 'Nombre productor': 'inline label - always visible', 'Propias/Productores': 'no label', 'Superficie': 'inline label - always visible', 'TCH Estimado': 'inline label - always visible', 'Calse TCH': 'no label', 'Toneladas Estimadas': 'inline label - always visible', 'Ciclo': 'inline label - always visible', 'Clase Ciclo': 'no label', 'Tenencia': 'no label', 'AvÃ­o': 'no label', 'CLASE AVIO': 'no label', 'OrganizaciÃ³n': 'no label', 'Origen OrganizaciÃ³n': 'no label', 'Municipio': 'inline label - always visible', 'Calse Municipio': 'no label', 'Municipio Original': 'no label', 'No. Zona': 'no label', 'Nombre Zona': 'inline label - always visible', 'Supervisor producciÃ³n': 'no label', 'Supervisor cosecha': 'no label', 'Comunidad': 'inline label - always visible', 'Predio/Rancho': 'inline label - always visible', 'Lote': 'no label', 'Kms Batey San Pedro': 'no label', 'Kms Batey Modelo': 'inline label - always visible', 'Clase Kms': 'no label', 'Zafra': 'no label', 'PRIORIDAD': 'no label', 'CLASE': 'no label', 'Poligono': 'no label', });
lyr_Productores_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});