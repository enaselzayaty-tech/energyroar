/**
* Seller Inbox
* ----------------
* Sellers do NOT have a separate conversation system.
* They share the same conversations as buyers.
*
* This page simply routes the seller to the global inbox.
*/
export default function SellerInboxPage() {
redirect("/messages");
}