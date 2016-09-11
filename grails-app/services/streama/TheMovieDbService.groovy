package streama

import groovy.json.JsonSlurper
import grails.transaction.Transactional

@Transactional
class TheMovieDbService {

  def BASE_URL = "https://api.themoviedb.org/3"

  def getAPI_KEY(){
    return Settings.findBySettingsKey('TheMovieDB API key')?.value
  }


  def validateApiKey(apiKey){
    def JsonContent = new URL(BASE_URL + '/configuration?api_key=' + apiKey).text
    return new JsonSlurper().parseText(JsonContent)
  }


  def getSimilarMovies(movieId){
    def JsonContent = new URL(BASE_URL + "/movie/$movieId/similar?api_key=$API_KEY").text
    return new JsonSlurper().parseText(JsonContent)
  }


  def getExternalLinks(showId){
    def JsonContent = new URL(BASE_URL + "/tv/$showId/external_ids?api_key=$API_KEY").text
    return new JsonSlurper().parseText(JsonContent)
  }

  def getMovieGenres(){
    if(!API_KEY){
      return []
    }
    def JsonContent = new URL(BASE_URL + "/genre/movie/list?api_key=$API_KEY").text
    def genres =  new JsonSlurper().parseText(JsonContent).genres

    genres?.each{ genre ->
      genre["apiId"] = genre.id
      genre.id = null
    }

    return genres
  }

  def getTvGenres(){
    if(!API_KEY){
      return []
    }
    def JsonContent = new URL(BASE_URL + "/genre/tv/list?api_key=$API_KEY").text
    def genres =  new JsonSlurper().parseText(JsonContent).genres

    genres?.each{ genre ->
      genre["apiId"] = genre.id
      genre.id = null
    }

    return genres
  }

  def getTrailerForMovie(movieId){
    def JsonContent = new URL(BASE_URL + "/movie/$movieId/videos?api_key=$API_KEY").text
    def videos =  new JsonSlurper().parseText(JsonContent).results

    def trailer = videos.findAll{it.type == "Trailer"}.max{it.size}
    return trailer
  }

  def getFullMovieMeta(movieId){
    def JsonContent = new URL(BASE_URL + "/movie/$movieId?api_key=$API_KEY").text
    return new JsonSlurper().parseText(JsonContent)
  }

  def getFullTvShowMeta(tvId){
    def JsonContent = new URL(BASE_URL + "/tv/$tvId?api_key=$API_KEY").text
    return new JsonSlurper().parseText(JsonContent)
  }

  def getEpisodeMeta(tvApiId, seasonNumber, episodeNumber){
    def JsonContent = new URL(BASE_URL + "/tv/$tvApiId/season/$seasonNumber/episode/$episodeNumber?api_key=$API_KEY").text
    return new JsonSlurper().parseText(JsonContent)
  }
}
