// export interface users {
//   id: number,
//   name: string,
//   email: string,
//   password: string,
//   role: string,
//   delivery_address?: string, // Opicional, Para se o cliente tiver registro do endereço
//   delivery_number?: string, // Opicional, Para se o cliente tiver registro do número
// };

// export interface sales {
//   id: number,
//   user_id: number, // Referência ao usuario em users
//   seller_id: number, // Referência ao vendedor em users
//   total_price: number, // Decimal
//   total_price_string?: string, // Opicional, o Decimal em String
//   delivery_address: string,
//   delivery_number: string,
//   sale_date: string, // DATETIME no SQL
//   status: string,
// };

// export interface salesProduct {
//   sale_id: number, // Referência à listagem da compra
//   product_id: number, // Referência ao produto
//   quantity: number,
// };

// export interface products {
//   id: number,
//   name: string,
//   price: number, // Decimal
//   price_string?: string, // Opicional, o Decimal em String
//   url_image: string,
// };