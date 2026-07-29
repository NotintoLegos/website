# website
personal website

# Needs
* docker container (done)
* start.sh file for running npm

* Change dashboard system to "hidden" sections on one page that can dropdown on pan or click.
    - under my photo, line with word in middle, down arrow after title:
        -------- About Me ---------
        -------- Projects ---------
        -------- Contact  ---------
    - projects will have slideshow that goes through pics uploaded to 'public' folder
    - contact will have section to put in 'valid' email address, 

* Hidden Needs:
    - Reveal logic on App page
    - HiddenSection interface?? idk if this is too OOP for react but instinct is to make HiddenSection interface that be extended by AboutMe, Projects, Contact. Do they share enough logic for this to make sense?
      
# docker command lines needed
docker compose up --build -d

docker ps //checks if docker is running

docker compose down


