import { X, ShoppingBag, Plus, Minus, Trash2, MessageCircle, ExternalLink } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { useCart } from "@/context/CartContext";
import { RESTAURANT } from "@/data/restaurant";
import { ZelligePattern, ZelligeStar } from "@/components/ZelligePattern";

export default function CartDrawer() {
  const { t, lang } = useLanguage();
  const { items, isOpen, setIsOpen, addItem, decreaseItem, removeItem, clearCart, totalItems, totalPrice } = useCart();

  if (!isOpen) return null;

  const buildWhatsAppMessage = () => {
    let message = lang === "ar" ? "طلب جديد من خمس نجوم 🌟\n\n" : "Nouvelle commande - Five Stars 🌟\n\n";
    items.forEach((item) => {
      const name = lang === "ar" ? item.name_ar : item.name_fr;
      message += `• ${name} x${item.quantity} = ${item.price * item.quantity} MAD\n`;
    });
    message += `\n${t.cart.total}: ${totalPrice} MAD`;
    return encodeURIComponent(message);
  };

  const whatsappOrderUrl = `${RESTAURANT.whatsappUrl}&text=${buildWhatsAppMessage()}`;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm animate-fade-in"
        onClick={() => setIsOpen(false)}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 ${lang === "ar" ? "left-0" : "right-0"} bottom-0 z-[70] w-full max-w-md shadow-2xl flex flex-col animate-slide-in-${
          lang === "ar" ? "left" : "right"
        }`}
        style={{
          backgroundColor: "#FBF8F1",
          border: lang === "ar" ? "1px solid rgba(217, 119, 6, 0.15)" : "1px solid rgba(217, 119, 6, 0.15)",
          borderLeft: lang === "ar" ? "none" : undefined,
          borderRight: lang === "ar" ? undefined : "none",
        }}
      >
        {/* Header */}
        <div
          className="flex items-center justify-between p-5 relative overflow-hidden"
          style={{ backgroundColor: "#1A120B", borderBottom: "1px solid rgba(217, 119, 6, 0.12)" }}
        >
          <div className="absolute inset-0 pointer-events-none opacity-30">
            <ZelligePattern color="#D97706" opacity={0.1} />
          </div>
          <div className="relative flex items-center gap-3">
            <div className="relative">
              <ShoppingBag size={24} className="text-[#FBF8F1]" />
              {totalItems > 0 && (
                <span
                  className="absolute -top-1.5 -right-1.5 flex items-center justify-center w-5 h-5 rounded-full text-xs font-bold text-[#FBF8F1]"
                  style={{ backgroundColor: "#C85A32", border: "1px solid rgba(245, 158, 11, 0.3)" }}
                >
                  {totalItems}
                </span>
              )}
            </div>
            <h3 className="text-lg font-bold text-[#FBF8F1] heading-font">{t.cart.title}</h3>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="relative p-2 rounded-lg transition-colors"
            style={{
              backgroundColor: "rgba(217, 119, 6, 0.1)",
              border: "1px solid rgba(217, 119, 6, 0.15)",
            }}
          >
            <X size={20} className="text-[#FBF8F1]" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-5" style={{ backgroundColor: "#FBF8F1" }}>
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center mb-4"
                style={{
                  backgroundColor: "rgba(200, 90, 50, 0.08)",
                  border: "1px solid rgba(200, 90, 50, 0.12)",
                }}
              >
                <ShoppingBag size={36} style={{ color: "rgba(200, 90, 50, 0.3)" }} />
              </div>
              <p className="font-bold text-lg mb-1 heading-font" style={{ color: "#1A120B" }}>{t.cart.empty}</p>
              <p className="text-sm mb-6 body-font" style={{ color: "#3D2B1E", opacity: 0.4 }}>{t.cart.emptyHint}</p>
              <button
                onClick={() => setIsOpen(false)}
                className="px-6 py-2.5 rounded-xl font-bold text-[#FBF8F1] transition-all body-font btn-terracotta"
              >
                {t.cart.continueShopping}
              </button>
            </div>
          ) : (
            <div className="space-y-3">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-3 p-3 rounded-xl animate-scale-in"
                  style={{
                    backgroundColor: "#F7F1E5",
                    border: "1px solid rgba(200, 90, 50, 0.12)",
                  }}
                >
                  <div className="arch-frame-sm w-16 h-16 flex-shrink-0">
                    <img
                      src={item.image}
                      alt={lang === "ar" ? item.name_ar : item.name_fr}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-sm truncate heading-font" style={{ color: "#1A120B" }}>
                      {lang === "ar" ? item.name_ar : item.name_fr}
                    </h4>
                    <p className="text-xs mb-2 body-font" style={{ color: "#3D2B1E", opacity: 0.4 }}>{item.price} MAD</p>
                    <div className="flex items-center justify-between">
                      {/* Quantity controls */}
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => decreaseItem(item.id)}
                          className="w-7 h-7 rounded-lg flex items-center justify-center transition-colors"
                          style={{
                            backgroundColor: "#FBF8F1",
                            border: "1px solid rgba(200, 90, 50, 0.15)",
                          }}
                        >
                          <Minus size={14} style={{ color: "#3D2B1E" }} />
                        </button>
                        <span className="font-bold text-sm w-6 text-center body-font" style={{ color: "#1A120B" }}>
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => addItem(item)}
                          className="w-7 h-7 rounded-lg flex items-center justify-center text-[#FBF8F1] transition-all"
                          style={{ backgroundColor: "#C85A32" }}
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                      {/* Price + Remove */}
                      <div className="flex items-center gap-3">
                        <span className="font-black text-sm body-font" style={{ color: "#C85A32" }}>
                          {item.price * item.quantity} <span style={{ fontSize: "0.7em", opacity: 0.7 }}>MAD</span>
                        </span>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="transition-colors"
                          style={{ color: "rgba(61, 43, 30, 0.2)" }}
                          onMouseEnter={(e) => (e.currentTarget.style.color = "#C85A32")}
                          onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(61, 43, 30, 0.2)")}
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* Clear cart */}
              <button
                onClick={clearCart}
                className="w-full py-2 text-sm font-medium transition-colors body-font"
                style={{ color: "rgba(61, 43, 30, 0.35)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#C85A32")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(61, 43, 30, 0.35)")}
              >
                {t.cart.clear}
              </button>
            </div>
          )}
        </div>

        {/* Footer with total and checkout */}
        {items.length > 0 && (
          <div
            className="p-5 space-y-3"
            style={{
              backgroundColor: "#F7F1E5",
              borderTop: "1px solid rgba(200, 90, 50, 0.1)",
            }}
          >
            <div className="flex items-center justify-between">
              <span className="font-medium body-font" style={{ color: "#3D2B1E", opacity: 0.5 }}>
                {totalItems} {totalItems === 1 ? t.cart.item : t.cart.items}
              </span>
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-black heading-font" style={{ color: "#1A120B" }}>{totalPrice}</span>
                <span className="text-sm font-bold body-font" style={{ color: "#3D2B1E", opacity: 0.4 }}>
                  {lang === "ar" ? "د.م" : "MAD"}
                </span>
              </div>
            </div>
            <a
              href={whatsappOrderUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold text-[#FBF8F1] text-base transition-all body-font"
              style={{ backgroundColor: "#25D366" }}
            >
              <MessageCircle size={20} />
              {t.cart.orderWhatsApp}
            </a>
            <a
              href={RESTAURANT.glovoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold text-[#FBF8F1] text-base transition-all body-font btn-terracotta shimmer-sweep relative"
            >
              {t.cart.orderGlovo}
              <ExternalLink size={18} />
            </a>
          </div>
        )}
      </div>
    </>
  );
}
