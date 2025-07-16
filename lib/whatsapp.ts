export const openWhatsApp = (phoneNumber: string, message: string = '') => {
  const encodedMessage = encodeURIComponent(message)
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`
  window.open(whatsappUrl, '_blank')
}

export const getBookingMessage = () => {
  return `Hello! I'm interested in booking a room at Decent Luxury Hotel Skardu. Could you please provide me with more information about availability and rates?`
} 