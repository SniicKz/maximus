package streama

class File {

  def uploadService

  Date dateCreated
  Date lastUpdated

  String sha256Hex
  String name
  String extension
  String contentType
  String originalFilename
  Long size
  String externalLink
  String quality

  static constraints = {
    sha256Hex maxSize: 64
    quality inList: ['1080p', '720p', '480p', '360p']
  }
  static transients = ['uploadService']

  def getImagePath(){
    uploadService.getPath(sha256Hex, extension)
  }

  def getSrc(){
    if(externalLink){
      return externalLink
    }
    def res = uploadService.getFileSrc(this)
    return res
  }

  def getFileExists(){
    if(this.imagePath){
      java.io.File rawFile = new java.io.File(this.imagePath)
      return rawFile.exists()
    }else{
      return false
    }
  }

  def getAssociatedVideos(){
    def videos = Video.withCriteria {
      ne("deleted", true)
      files{
        idEq(this.id)
      }
    }

    return videos
  }

  def getAssociatedVideosInclDeleted(){
    def videos = Video.withCriteria {
      files{
        idEq(this.id)
      }
    }

    return videos
  }

  def getIsInUse(){
    if(this.associatedVideos){
      return true
    }
    else if(TvShow.findByDeletedNotEqualAndBackdrop_image(true, this)){
      return true
    }
    else if(TvShow.findByDeletedNotEqualAndPoster_image(true, this)){
      return true
    }
  }
}
