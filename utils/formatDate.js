export function formatDate(value) {
 if (value) {
   return new Date(value).toLocaleDateString('ja-JP', {
     year: 'numeric',
     month: 'long',
     day: 'numeric'
   })
 }
}
