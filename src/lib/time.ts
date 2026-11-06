export interface AcademyStatus {
  isOpen: boolean;
  statusLabelEn: string;
  statusLabelTa: string;
  detailEn: string;
  detailTa: string;
  currentIstTime: string;
}

export function getAcademyStatus(): AcademyStatus {
  try {
    // Determine the current time in Indian Standard Time (IST)
    const now = new Date();
    const formatter = new Intl.DateTimeFormat('en-US', {
      timeZone: 'Asia/Kolkata',
      hour12: false,
      weekday: 'short',
      hour: 'numeric',
      minute: 'numeric',
    });

    const parts = formatter.formatToParts(now);
    const weekdayPart = parts.find((p) => p.type === 'weekday')?.value || 'Mon';
    const hourPart = parseInt(parts.find((p) => p.type === 'hour')?.value || '12', 10);
    const minutePart = parseInt(parts.find((p) => p.type === 'minute')?.value || '0', 10);

    const isSunday = weekdayPart.toLowerCase().startsWith('sun');
    const decimalHours = hourPart + minutePart / 60;

    // Operating hours:
    // Mon-Sat: 5:00 AM - 9:00 PM (5.0 to 21.0)
    // Sun: 10:00 AM - 9:00 PM (10.0 to 21.0)
    const openHour = isSunday ? 10.0 : 5.0;
    const closeHour = 21.0;

    const isOpen = decimalHours >= openHour && decimalHours < closeHour;

    const timeStringFormatter = new Intl.DateTimeFormat('en-IN', {
      timeZone: 'Asia/Kolkata',
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
    });
    const currentIstTime = timeStringFormatter.format(now);

    if (isOpen) {
      return {
        isOpen: true,
        statusLabelEn: 'Open Now',
        statusLabelTa: 'தற்போது திறந்துள்ளது',
        detailEn: `Classes ongoing • Closes today at 9:00 PM IST (Now: ${currentIstTime} IST)`,
        detailTa: `வகுப்புகள் நடைபெறுகின்றன • இரவு 9:00 மணிக்கு நிறைவு (தற்போது: ${currentIstTime} IST)`,
        currentIstTime,
      };
    } else {
      const nextOpenTextEn = isSunday ? 'Opens Mon at 5:00 AM IST' : (decimalHours >= closeHour ? 'Opens tomorrow at 5:00 AM IST' : `Opens today at ${isSunday ? '10:00 AM' : '5:00 AM'} IST`);
      const nextOpenTextTa = isSunday ? 'திங்கள் காலை 5:00 மணிக்கு திறக்கும்' : (decimalHours >= closeHour ? 'நாளை காலை 5:00 மணிக்கு திறக்கும்' : `இன்று காலை ${isSunday ? '10:00' : '5:00'} மணிக்கு திறக்கும்`);

      return {
        isOpen: false,
        statusLabelEn: 'Closed Now',
        statusLabelTa: 'தற்போது மூடப்பட்டுள்ளது',
        detailEn: `${nextOpenTextEn} • Call / WhatsApp anytime (Now: ${currentIstTime} IST)`,
        detailTa: `${nextOpenTextTa} • அழைப்பு அல்லது வாட்ஸ்அப் செய்யலாம்`,
        currentIstTime,
      };
    }
  } catch (e) {
    // Fallback safe defaults if Intl fails in unusual environments
    return {
      isOpen: true,
      statusLabelEn: 'Open for Inquiries',
      statusLabelTa: 'விசாரணைக்கு திறந்துள்ளது',
      detailEn: 'Mon–Sat: 5 AM – 9 PM | Sun: 10 AM – 9 PM IST',
      detailTa: 'திங்கள்–சனி: காலை 5 – இரவு 9 | ஞாயிறு: காலை 10 – இரவு 9',
      currentIstTime: 'IST',
    };
  }
}
