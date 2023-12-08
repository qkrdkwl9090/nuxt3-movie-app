export interface IMoviesResponse {
  status: Stat
  status_message: string
  data: Data
  '@meta': Meta
}

export interface Meta {
  server_time: number
  server_timezone: string
  api_version: number
  execution_time: string
}
interface Data {
  movie_count: number
  limit: number
  page_number: number
  movies: IMovie[]
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
  summary: string
  description_full: string
  synopsis: string
  yt_trailer_code: string
  language: string
  mpa_rating: MpaRating
  background_image: string
  background_image_original: string
  small_cover_image: string
  medium_cover_image: string
  large_cover_image: string
  state: Stat
  torrents: Torrent[]
  date_uploaded: Date
  date_uploaded_unix: number
}

enum MpaRating {
  Empty = '',
  PG = 'PG',
  PG13 = 'PG-13',
  R = 'R',
}

enum Stat {
  Ok = 'ok',
}

interface Torrent {
  url: string
  hash: string
  quality: Quality
  type: Type
  is_repack: string
  video_codec: VideoCodec
  bit_depth: string
  audio_channels: string
  seeds: number
  peers: number
  size: string
  size_bytes: number
  date_uploaded: Date
  date_uploaded_unix: number
}
enum Quality {
  The1080P = '1080p',
  The2160P = '2160p',
  The720P = '720p',
}
enum Type {
  Bluray = 'bluray',
  Web = 'web',
}
enum VideoCodec {
  X264 = 'x264',
  X265 = 'x265',
}
