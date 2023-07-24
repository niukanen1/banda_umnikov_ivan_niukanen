export default function share(socialUrl: string) { 
    const pageUrl = encodeURIComponent(document.URL);

    const shareURL = socialUrl+pageUrl; 

    window.open(shareURL, '_blank')?.focus(); 
} 