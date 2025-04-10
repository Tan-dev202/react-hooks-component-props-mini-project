export default function Article({ title, date = "January 1, 1970", preview, minutes }) {
    
    const getReadingTimeIndicator = (mins) => {
      if (!mins) return "";
      
      let emoji = "";
      let count = 0;
      
      if (mins < 30) {
        // Coffee cup emoji for less than 30 minutes
        count = Math.ceil(mins / 5);
        emoji = "☕️".repeat(count);
      } else {
        // Bento box emoji for 30 minutes or more
        count = Math.ceil(mins / 10);
        emoji = "🍱".repeat(count);
      }
      
      return `${emoji} ${mins} min read`;
    };
  
    return (
      <article>
        <h3>{title}</h3>
        <small>{date}</small>
        <p>{preview}</p>
        {minutes && <small>{getReadingTimeIndicator(minutes)}</small>}
      </article>
    );
  }
  