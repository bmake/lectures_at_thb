#########################
# ENVIRONMENT VARIABLES #
#########################
DATA_DIRECTORY=data
FUSEKI_DIRECTORY=fuseki
LATEST_RDF_FILE=electures_at_thb.ttl

#########################
# TARGETS #
#########################
start:
	if [ ! -d "${FUSEKI_DIRECTORY}/configuration" ]; \
	then mkdir -p ${FUSEKI_DIRECTORY}/configuration/; \
	fi && \
	cp ${DATA_DIRECTORY}/fuseki/configuration/* ${FUSEKI_DIRECTORY}/configuration/ && \
	rm -f ${FUSEKI_DIRECTORY}/databases/lectures_at_thb/tdb.lock && \
	docker-compose up -d

stop:
	docker-compose down && \
 	rm -f ${FUSEKI_DIRECTORY}/databases/lectures_at_thb/tdb.lock

build:
	docker-compose build

pull:
	docker-compose pull
upload:
	until [ "`docker inspect -f {{.State.Health.Status}} fuseki`"=="healthy" ]; \
	do \
    	sleep 0.1; \
    done && \
	curl --request POST --url http://localhost:3030/lectures_at_thb/upload \
	--header 'content-type: multipart/form-data' \
	-F 'file=@${DATA_DIRECTORY}/rdf/${LATEST_RDF_FILE}'

clean-database:
	rm -f -R ${FUSEKI_DIRECTORY}
