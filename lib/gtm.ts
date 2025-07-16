declare global {
  interface Window {
    dataLayer: any[]
  }
}

export const GTM_ID = 'GTM-MXKF352W'

export const pageview = (url: string) => {
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: 'pageview',
      page: url,
    })
  }
}

export const event = ({ action, category, label, value }: {
  action: string
  category: string
  label?: string
  value?: number
}) => {
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: 'custom_event',
      event_category: category,
      event_action: action,
      event_label: label,
      event_value: value,
    })
  }
}

// Hotel-specific tracking events
export const trackBooking = (roomType: string, price: number) => {
  event({
    action: 'booking_initiated',
    category: 'hotel',
    label: roomType,
    value: price,
  })
}

export const trackRoomView = (roomType: string) => {
  event({
    action: 'room_viewed',
    category: 'hotel',
    label: roomType,
  })
}

export const trackContact = (method: string) => {
  event({
    action: 'contact_clicked',
    category: 'hotel',
    label: method,
  })
} 