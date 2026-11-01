/**
 * Dual-Currency USD/INR Programmatic Invoicing Engine for Price Intelligence Retainers ($500 / $1,500 / $3,000)
 */

export interface InvoiceLineItem {
  description: string;
  usdRate: number;
  quantity: number;
}

export class PriceInvoicingEngine {
  public static calculateInvoice(
    clientName: string,
    clientCountry: string,
    items: InvoiceLineItem[],
    usdToInrRate: number = 83.25
  ): {
    subtotalUsd: number;
    subtotalInr: number;
    gstAmountInr: number;
    totalInr: number;
    isZeroRatedExport: boolean;
    lutReference: string;
  } {
    const isExport = clientCountry.toUpperCase() !== 'IN' && clientCountry.toUpperCase() !== 'INDIA';
    const subtotalUsd = items.reduce((acc, item) => acc + item.usdRate * item.quantity, 0);
    const subtotalInr = Math.round(subtotalUsd * usdToInrRate * 100) / 100;

    const gstRate = isExport ? 0.0 : 0.18;
    const gstAmountInr = Math.round(subtotalInr * gstRate * 100) / 100;
    const totalInr = subtotalInr + gstAmountInr;

    return {
      subtotalUsd,
      subtotalInr,
      gstAmountInr,
      totalInr,
      isZeroRatedExport: isExport,
      lutReference: isExport ? 'GST-LUT-ARN-AD2703240019241' : 'DOMESTIC-GSTIN-APPLICABLE'
    };
  }
}
