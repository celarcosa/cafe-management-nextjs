export function formatCurrency(
    amount: number,
    currency: string = 'USD',
    shortened: boolean = false,
    locale: string = 'en-US'
): string {
    let shortValue: number;
    let suffix = '';

    if (shortened) {
        if (amount >= 1_000_000_000) {
            shortValue = amount / 1_000_000_000;
            suffix = 'B';
        } else if (amount >= 1_000_000) {
            shortValue = amount / 1_000_000;
            suffix = 'M';
        } else if (amount >= 1_000) {
            shortValue = amount / 1_000;
            suffix = 'K';
        } else {
            shortValue = amount;
        }

        const formatted = new Intl.NumberFormat(locale, {
            style: 'currency',
            currency,
            minimumFractionDigits: shortValue < 10 ? 1 : 1,
            maximumFractionDigits: 1,
        }).format(shortValue);

        return suffix ? `${formatted}${suffix}` : formatted;
    } else {
        return new Intl.NumberFormat(locale, {
            style: 'currency',
            currency
        }).format(amount);
    }
}