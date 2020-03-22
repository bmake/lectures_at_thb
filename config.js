export default Object.freeze({
  query:
    'PREFIX vidp: <https://bmake.th-brandenburg.de/vidp#>\n' +
    'PREFIX schema: <https://schema.org/>\n' +
    'PREFIX vide: <https://bmake.th-brandenburg.de/vide#>\n' +
    'PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\n' +
    '\n' +
    'SELECT ?url ?label ?thumbnailName ?description\n' +
    'WHERE {\n' +
    '\t?videoLecture\ta\tvidp:VideoLecture ;\n' +
    '               schema:url ?url;\n' +
    '               rdfs:label ?label ;\n' +
    '               schema:thumbnail ?thumbnail;\n' +
    '               schema:description ?description .\n' +
    '  \t?thumbnail schema:name ?thumbnailName .\n' +
    '  \tFILTER ( lang(?description) = "en" )\n' +
    '}'
});
