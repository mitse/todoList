export default class DateUtility {
  
    public static formatDate(date: Date): string {
        return Intl.DateTimeFormat('en-GB').format(date);
    }
}