import { ResponsiveImageType } from 'react-datocms'

export interface ICMSType {
  createdAt?: string
  updatedAt?: string
}

export interface IResponsiveImage {
  responsiveImage?: ResponsiveImageType
}

export interface IColor {
  hex?: string
  red?: number
  blue?: number
  green?: number
  alpha?: number
}
