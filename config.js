export default Object.freeze({
  query: `PREFIX vidp: <https://bmake.th-brandenburg.de/vidp#>
          PREFIX schema: <https://schema.org/>
          PREFIX vide: <https://bmake.th-brandenburg.de/vide#>
          PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>

          SELECT ?videoLecture ?url ?label ?thumbnailName ?description
          WHERE {
              ?videoLecture a vidp:VideoLecture ;
                              schema:url ?url;
                              rdfs:label ?label ;
                              schema:thumbnail ?thumbnail;
                              schema:description ?description .
              ?thumbnail schema:name ?thumbnailName .
              FILTER ( lang(?description) = "en" )
          }
  `,
  clipCount: `PREFIX vidp: <https://bmake.th-brandenburg.de/vidp#>
              PREFIX schema: <https://schema.org/>
              PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>

              SELECT (COUNT(?clip) AS ?clipCount)
              WHERE {
                ?clip a vidp:DoubleClip ;
                        schema:isPartOf <%videoLecture%> ;
                        schema:duration ?clipDuration .
              }
    `
});
