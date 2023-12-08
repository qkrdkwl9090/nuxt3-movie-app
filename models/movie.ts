export interface IMovieResponse {
  status: string
  status_message: string
  data: Data
  '@meta': Meta
}

interface Meta {
  server_time: number
  server_timezone: string
  api_version: number
  execution_time: string
}

interface Data {
  movie: IMovie
}

export interface IMovie {
  id: number
  url: string
  imdb_code: string
  title: string
  title_english: string
  title_long: string
  slug: string
  year: number
  rating: number
  runtime: number
  genres: string[]
  like_count: number
  description_intro: string
  description_full: string
  yt_trailer_code: string
  language: string
  mpa_rating: string
  background_image: string
  background_image_original: string
  small_cover_image: string
  medium_cover_image: string
  large_cover_image: string
  torrents: Torrent[]
  date_uploaded: Date
  date_uploaded_unix: number
}

interface Torrent {
  url: string
  hash: string
  quality: string
  type: string
  is_repack: string
  video_codec: string
  bit_depth: string
  audio_channels: string
  seeds: number
  peers: number
  size: string
  size_bytes: number
  date_uploaded: Date
  date_uploaded_unix: number
}
