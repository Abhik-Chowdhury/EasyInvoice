export const formatInvoiceData = (invoiceData) => {
  const {
    title = "",
    company = {},
    invoice = {},
    account = {},
    billing = {},
    shipping = {},
    tax = 0,
    notes = "",
    items = [],
    logo = "",
  } = invoiceData || {};

  const formattedItems = items.map((item) => ({
    ...item,
    qty: Number(item.qty || 0),
    amount: Number(item.amount || 0),
    total: Number(item.qty || 0) * Number(item.amount || 0),
  }));

  const subtotal = formattedItems.reduce(
    (acc, item) => acc + item.total,
    0
  );

  const taxRate = Number(tax || 0);
  const taxAmount = (subtotal * taxRate) / 100;
  const total = subtotal + taxAmount;

  return {
    title,

    companyName: company.name || "",
    companyAddress: company.address || "",
    companyPhone: company.phone || "",
    companyLogo: logo || "",

    invoiceNumber: invoice.number || "",
    invoiceDate: invoice.date || "",
    paymentDate: invoice.dueDate || "",

    accountName: account.name || "",
    accountNumber: account.number || "",
    accountIfscCode: account.ifsccode || "",

    billingName: billing.name || "",
    billingAddress: billing.address || "",
    billingPhone: billing.phone || "",

    shippingName: shipping.name || "",
    shippingAddress: shipping.address || "",
    shippingPhone: shipping.phone || "",

    currencySymbol: "₹",

    tax: taxRate,
    items: formattedItems,
    notes,

    subtotal,
    taxAmount,
    total,
  };
};

export const formatDate = (dateStr) => {
  if (!dateStr) return "N/A";

  const date = new Date(dateStr);

  return date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
};