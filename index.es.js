import { defineComponent as E, computed as V, createElementBlock as s, openBlock as t, normalizeClass as S, createCommentVNode as u, renderSlot as z, createElementVNode as r, createTextVNode as L, toDisplayString as h, mergeProps as G, mergeModels as me, useModel as pe, withDirectives as Y, vModelText as H, ref as $, watch as P, onMounted as Q, onBeforeUnmount as K, createVNode as w, unref as k, withCtx as B, createBlock as O, Teleport as W, normalizeStyle as ye, Fragment as D, renderList as M, nextTick as fe, Transition as ve, withModifiers as he } from "vue";
import { Listbox as Z, ListboxButton as ee, ListboxOptions as te, ListboxOption as se } from "@headlessui/vue";
import { ChevronDown as J, Check as oe, AlertCircle as be, ChevronLeft as ge, ChevronRight as we } from "lucide-vue-next";
const ke = ["type", "disabled"], xe = {
  key: 0,
  class: "h-4 w-4 animate-spin text-current",
  fill: "none",
  viewBox: "0 0 24 24"
}, $e = /* @__PURE__ */ r("circle", {
  class: "opacity-25",
  cx: "12",
  cy: "12",
  r: "10",
  stroke: "currentColor",
  "stroke-width": "4"
}, null, -1), _e = /* @__PURE__ */ r("path", {
  class: "opacity-75",
  fill: "currentColor",
  d: "M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
}, null, -1), Be = [
  $e,
  _e
], q = /* @__PURE__ */ E({
  __name: "BaseButton",
  props: {
    type: { default: "button" },
    size: { default: "md" },
    variant: { default: "primary" },
    disabled: { type: Boolean, default: !1 },
    loading: { type: Boolean, default: !1 }
  },
  setup(m) {
    const f = m, n = V(() => {
      switch (f.size) {
        case "sm":
          return "px-3 py-1.5 text-sm";
        case "lg":
          return "px-4 py-4 text-base";
        default:
          return "px-4 py-3 text-sm";
      }
    }), l = V(() => {
      switch (f.variant) {
        case "secondary":
          return "bg-gray-100 text-gray-700 border border-gray-300 hover:bg-gray-200";
        case "danger":
          return "bg-red-500 text-white hover:bg-red-600";
        case "outline":
          return "border border-gray-300 text-gray-700 bg-white hover:bg-gray-50";
        default:
          return "bg-primary text-white hover:bg-primary/90";
      }
    });
    return (e, i) => (t(), s("button", {
      type: e.type,
      disabled: e.disabled || e.loading,
      class: S([
        "inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition focus:ring-2 focus:ring-offset-1 focus:outline-none",
        n.value,
        l.value,
        e.disabled || e.loading ? "cursor-not-allowed opacity-60" : "hover:opacity-90 active:opacity-100"
      ])
    }, [
      e.loading ? (t(), s("svg", xe, Be)) : u("", !0),
      e.loading ? z(e.$slots, "loading", { key: 2 }, () => [
        L("Procesando...")
      ]) : z(e.$slots, "default", { key: 1 })
    ], 10, ke));
  }
}), Ve = {
  key: 0,
  class: "mb-1 block text-sm font-medium text-gray-700"
}, Ce = {
  key: 0,
  class: "text-red-600"
}, De = ["type", "value", "placeholder", "disabled"], Me = {
  key: 1,
  class: "mt-1 flex items-center gap-1 text-sm text-[#f44336]"
}, Se = /* @__PURE__ */ E({
  __name: "BaseInput",
  props: {
    modelValue: {},
    label: {},
    error: {},
    type: { default: "text" },
    required: { type: Boolean },
    size: { default: "md" },
    placeholder: {},
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(m) {
    const f = m, n = V(() => {
      switch (f.size) {
        case "sm":
          return "px-3 py-1.5 text-sm";
        case "lg":
          return "px-4 py-4 text-base";
        default:
          return "px-4 py-3 text-sm";
      }
    });
    return (l, e) => (t(), s("div", null, [
      l.label ? (t(), s("label", Ve, [
        l.required ? (t(), s("span", Ce, "*")) : u("", !0),
        L(" " + h(l.label), 1)
      ])) : u("", !0),
      r("input", G(l.$attrs, {
        type: l.type,
        value: l.modelValue,
        placeholder: l.placeholder,
        disabled: l.disabled,
        class: [
          "w-full appearance-none rounded-lg border placeholder-gray-400 shadow-sm transition duration-200 outline-none",
          n.value,
          l.error ? "border-[#f44336]" : "focus:border-primary focus:ring-primary border-gray-300 focus:ring-1",
          l.disabled ? "cursor-not-allowed bg-gray-100 text-gray-500" : "text-gray-700"
        ],
        onInput: e[0] || (e[0] = (i) => l.$emit("update:modelValue", i.target.value))
      }), null, 16, De),
      l.error ? (t(), s("p", Me, h(l.error), 1)) : u("", !0)
    ]));
  }
}), Le = ["placeholder"], ze = /* @__PURE__ */ E({
  __name: "BaseTextarea",
  props: /* @__PURE__ */ me({
    placeholder: {}
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(m) {
    const f = pe(m, "modelValue"), n = m;
    return (l, e) => Y((t(), s("textarea", G({
      "onUpdate:modelValue": e[0] || (e[0] = (i) => f.value = i),
      placeholder: n.placeholder,
      class: "w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-50"
    }, l.$attrs), null, 16, Le)), [
      [H, f.value]
    ]);
  }
}), Te = { class: "-mb-6" }, Ee = {
  key: 0,
  class: "mb-1 block text-sm font-medium text-gray-800"
}, Oe = {
  key: 0,
  class: "text-red-600"
}, Re = { class: "relative" }, Pe = ["aria-required"], qe = { class: "block truncate" }, Fe = {
  key: 0,
  class: "border-b border-gray-200"
}, Ae = ["disabled"], je = {
  key: 0,
  class: "text-primary absolute inset-y-0 right-4 flex items-center"
}, Ue = {
  key: 1,
  class: "px-4 py-3 text-center text-sm text-gray-500 italic"
}, Ie = /* @__PURE__ */ E({
  __name: "BaseSelect",
  props: {
    modelValue: {},
    label: {},
    placeholder: {},
    options: {},
    error: {},
    searchable: { type: Boolean, default: !1 },
    required: { type: Boolean },
    size: { default: "md" },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(m, { emit: f }) {
    const n = m, l = f, e = $(n.modelValue ?? void 0), i = $(""), a = $(null);
    P(
      () => n.modelValue,
      (d) => {
        e.value = d ?? void 0;
      }
    ), P(e, (d) => {
      l("update:modelValue", d ?? null);
    });
    const o = V(
      () => n.options.find((d) => d.value === e.value)
    ), p = V(() => !n.searchable || !i.value.trim() ? n.options : n.options.filter(
      (d) => d.label.toLowerCase().includes(i.value.trim().toLowerCase())
    )), _ = V(() => {
      switch (n.size) {
        case "sm":
          return "px-3 py-1.5 text-sm";
        case "lg":
          return "px-4 py-4 text-base";
        default:
          return "px-4 py-3 text-sm";
      }
    }), b = $({ top: 0, left: 0, width: 0 });
    function T() {
      if (a.value) {
        const d = a.value.getBoundingClientRect();
        b.value = {
          top: d.bottom + window.scrollY,
          left: d.left + window.scrollX,
          width: d.width
        };
      }
    }
    return Q(() => {
      window.addEventListener("resize", T), window.addEventListener("scroll", T, !0);
    }), K(() => {
      window.removeEventListener("resize", T), window.removeEventListener("scroll", T, !0);
    }), (d, C) => (t(), s("div", Te, [
      d.label ? (t(), s("label", Ee, [
        d.required ? (t(), s("span", Oe, "*")) : u("", !0),
        L(" " + h(d.label), 1)
      ])) : u("", !0),
      w(k(Z), {
        modelValue: e.value,
        "onUpdate:modelValue": C[2] || (C[2] = (v) => e.value = v),
        disabled: d.disabled
      }, {
        default: B(({ open: v }) => [
          r("div", Re, [
            w(k(ee), { as: "template" }, {
              default: B(() => [
                r("div", {
                  ref_key: "buttonRef",
                  ref: a,
                  onClick: C[0] || (C[0] = (x) => !d.disabled && T()),
                  "aria-required": d.required,
                  class: S([
                    "focus:ring-primary focus:border-primary relative w-full cursor-default rounded-lg border bg-white text-left shadow-sm transition duration-200 focus:ring-2 focus:outline-none flex items-center justify-between",
                    _.value,
                    d.error ? "border-red-400" : "border-gray-300",
                    d.disabled ? "cursor-not-allowed border-gray-200 bg-gray-200 text-gray-400" : "text-gray-700"
                  ])
                }, [
                  r("span", qe, h(o.value?.label || d.placeholder || "Seleccionar opción"), 1),
                  w(k(J), { class: "h-4 w-4 shrink-0 text-gray-400 ml-2" })
                ], 10, Pe)
              ]),
              _: 1
            }),
            (t(), O(W, { to: "body" }, [
              v && !d.disabled ? (t(), O(k(te), {
                key: 0,
                style: ye({
                  position: "absolute",
                  top: `${b.value.top}px`,
                  left: `${b.value.left}px`,
                  width: `${b.value.width}px`
                }),
                class: "z-50 mt-1 max-h-60 overflow-y-auto rounded-lg border border-gray-300 bg-white text-sm shadow-lg ring-1 ring-gray-200 focus:outline-none"
              }, {
                default: B(() => [
                  d.searchable ? (t(), s("div", Fe, [
                    Y(r("input", {
                      "onUpdate:modelValue": C[1] || (C[1] = (x) => i.value = x),
                      type: "text",
                      disabled: d.disabled,
                      placeholder: "Buscar...",
                      class: "focus:border-primary w-full px-3 py-2 text-sm outline-none disabled:bg-gray-100 disabled:text-gray-400"
                    }, null, 8, Ae), [
                      [H, i.value]
                    ])
                  ])) : u("", !0),
                  (t(!0), s(D, null, M(p.value, (x) => (t(), O(k(se), {
                    key: x.value,
                    value: x.value,
                    disabled: d.disabled,
                    class: "hover:bg-primary/10 relative cursor-pointer px-4 py-2.5 transition select-none first:rounded-t-lg last:rounded-b-lg"
                  }, {
                    default: B(() => [
                      r("span", {
                        class: S([
                          o.value?.value === x.value && !d.disabled ? "text-primary font-medium" : "text-gray-800",
                          "block truncate"
                        ])
                      }, h(x.label), 3),
                      o.value?.value === x.value && !d.disabled ? (t(), s("span", je, [
                        w(k(oe), { class: "h-4 w-4" })
                      ])) : u("", !0)
                    ]),
                    _: 2
                  }, 1032, ["value", "disabled"]))), 128)),
                  p.value.length === 0 ? (t(), s("div", Ue, " No se encontraron opciones. ")) : u("", !0)
                ]),
                _: 1
              }, 8, ["style"])) : u("", !0)
            ]))
          ])
        ]),
        _: 1
      }, 8, ["modelValue", "disabled"]),
      r("p", {
        class: S(["mt-1 flex min-h-[1.25rem] items-center gap-1 text-xs text-red-400 transition-opacity duration-200", { "opacity-100": !!d.error, "opacity-0": !d.error }])
      }, [
        w(k(be), { class: "h-4 w-4 text-red-400" }),
        r("span", null, h(d.error || "‎"), 1)
      ], 2)
    ]));
  }
}), Ne = {
  key: 0,
  class: "mb-1 block text-sm font-medium text-gray-700"
}, Ye = { class: "relative" }, He = { class: "truncate" }, Ke = {
  key: 0,
  class: "text-primary absolute inset-y-0 right-3 flex items-center"
}, Je = {
  key: 1,
  class: "px-3 py-2 text-center text-sm text-gray-500 italic"
}, Xe = {
  key: 1,
  class: "mt-1 text-sm text-[#f44336]"
}, U = /* @__PURE__ */ E({
  __name: "BaseSelectFlat",
  props: {
    modelValue: {},
    label: {},
    placeholder: {},
    options: {},
    error: {},
    searchable: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(m, { emit: f }) {
    const n = m, l = f, e = $(""), i = $(n.modelValue ?? void 0);
    P(
      () => n.modelValue,
      (p) => {
        i.value = p ?? void 0;
      }
    ), P(i, (p) => {
      l("update:modelValue", p ?? null);
    });
    const a = V(
      () => n.options.find((p) => p.value === i.value)
    ), o = V(() => !n.searchable || !e.value.trim() ? n.options : n.options.filter(
      (p) => p.label.toLowerCase().includes(e.value.trim().toLowerCase())
    ));
    return (p, _) => (t(), s("div", null, [
      p.label ? (t(), s("label", Ne, h(p.label), 1)) : u("", !0),
      w(k(Z), {
        modelValue: i.value,
        "onUpdate:modelValue": _[1] || (_[1] = (b) => i.value = b)
      }, {
        default: B(() => [
          r("div", Ye, [
            w(k(ee), { class: "flex w-14 items-center justify-between rounded-md border border-gray-300 px-2 py-1 text-left text-sm text-gray-700" }, {
              default: B(() => [
                r("span", He, h(a.value?.label || p.placeholder || "Seleccionar"), 1),
                w(k(J), { class: "h-4 w-4 shrink-0 text-gray-400" })
              ]),
              _: 1
            }),
            w(k(te), { class: "absolute z-40 mt-1 max-h-48 max-w-screen-sm min-w-max overflow-y-auto rounded-md border border-gray-200 bg-white text-sm shadow-md focus:outline-none" }, {
              default: B(() => [
                p.searchable ? Y((t(), s("input", {
                  key: 0,
                  "onUpdate:modelValue": _[0] || (_[0] = (b) => e.value = b),
                  type: "text",
                  placeholder: "Buscar...",
                  class: "focus:border-primary w-full border-b border-gray-200 px-3 py-2 text-sm text-gray-700 outline-none"
                }, null, 512)), [
                  [H, e.value]
                ]) : u("", !0),
                (t(!0), s(D, null, M(o.value, (b) => (t(), O(k(se), {
                  key: b.value,
                  value: b.value,
                  class: "hover:bg-primary/10 relative cursor-pointer px-3 py-2 transition select-none"
                }, {
                  default: B(() => [
                    r("span", {
                      class: S([
                        a.value?.value === b.value ? "text-primary font-medium" : "text-gray-800",
                        "block truncate"
                      ])
                    }, h(b.label), 3),
                    a.value?.value === b.value ? (t(), s("span", Ke, " ✓ ")) : u("", !0)
                  ]),
                  _: 2
                }, 1032, ["value"]))), 128)),
                o.value.length === 0 ? (t(), s("div", Je, " No se encontraron opciones. ")) : u("", !0)
              ]),
              _: 1
            })
          ])
        ]),
        _: 1
      }, 8, ["modelValue"]),
      p.error ? (t(), s("p", Xe, h(p.error), 1)) : u("", !0)
    ]));
  }
}), Ge = {
  key: 0,
  class: "sticky top-0 z-10 flex shrink-0 items-start justify-between border-b border-gray-200 bg-white p-4 rounded-none sm:rounded-t-xl"
}, Qe = {
  key: 0,
  class: "text-lg font-semibold text-gray-900"
}, We = { class: "flex-1 min-h-0 overflow-y-auto px-4 sm:px-6 py-4" }, Ze = {
  key: 1,
  class: "sticky bottom-0 z-10 shrink-0 border-t border-gray-200 bg-white p-4 rounded-none sm:rounded-b-xl"
}, et = {
  key: 0,
  class: "flex items-center justify-end gap-3"
}, tt = /* @__PURE__ */ E({
  __name: "BaseModal",
  props: {
    modelValue: { type: Boolean },
    title: {},
    width: { default: "lg" },
    confirm: { type: Boolean, default: !1 },
    confirmText: { default: "Confirmar" },
    cancelText: { default: "Cancelar" },
    destructive: { type: Boolean, default: !1 },
    closeOnBackdrop: { type: Boolean, default: !0 },
    closeOnEsc: { type: Boolean, default: !0 }
  },
  emits: ["update:modelValue", "confirm", "cancel"],
  setup(m, { emit: f }) {
    const n = m, l = f, e = () => l("update:modelValue", !1), i = () => {
      l("confirm"), e();
    }, a = () => {
      l("cancel"), e();
    }, o = () => {
      n.closeOnBackdrop && e();
    }, _ = `sm:${{
      sm: "max-w-sm",
      md: "max-w-md",
      lg: "max-w-lg",
      xl: "max-w-xl",
      "2xl": "max-w-2xl",
      "3xl": "max-w-3xl",
      "4xl": "max-w-4xl",
      "5xl": "max-w-5xl",
      "6xl": "max-w-6xl",
      "7xl": "max-w-7xl"
    }[n.width]}`, b = $(null);
    let T = null;
    const d = (v) => {
      if (v.key !== "Tab" || !b.value) return;
      const x = b.value.querySelectorAll(
        'a[href], button, textarea, input, select, [tabindex]:not([tabindex="-1"])'
      );
      if (!x.length) return;
      const R = x[0], F = x[x.length - 1];
      v.shiftKey && document.activeElement === R ? (v.preventDefault(), F.focus()) : !v.shiftKey && document.activeElement === F && (v.preventDefault(), R.focus());
    }, C = (v) => {
      v.key === "Escape" && n.closeOnEsc && e();
    };
    return P(
      () => n.modelValue,
      async (v) => {
        v ? (T = document.activeElement, document.body.classList.add("overflow-hidden"), await fe(), b.value?.focus(), window.addEventListener("keydown", d), window.addEventListener("keydown", C)) : (document.body.classList.remove("overflow-hidden"), window.removeEventListener("keydown", d), window.removeEventListener("keydown", C), T?.focus());
      }
    ), K(() => {
      window.removeEventListener("keydown", d), window.removeEventListener("keydown", C);
    }), (v, x) => (t(), O(W, { to: "body" }, [
      w(ve, { name: "fade" }, {
        default: B(() => [
          v.modelValue ? (t(), s("div", {
            key: 0,
            class: "fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4",
            tabindex: "-1",
            role: "dialog",
            "aria-modal": "true",
            onClick: he(o, ["self"])
          }, [
            r("div", {
              ref_key: "modalRef",
              ref: b,
              class: S([
                // Mobile: full screen; Desktop: centered card
                "flex w-full h-screen sm:h-auto sm:w-auto max-h-screen sm:max-h-[90vh] flex-col bg-white shadow-xl transform transition-all duration-200 sm:rounded-xl sm:my-8 overflow-hidden rounded-2xl",
                _
              ])
            }, [
              v.title || v.$slots.header ? (t(), s("header", Ge, [
                z(v.$slots, "header", {}, () => [
                  v.title ? (t(), s("h2", Qe, h(v.title), 1)) : u("", !0)
                ], !0),
                r("button", {
                  class: "text-xl leading-none text-gray-500 hover:text-gray-800 focus:outline-none",
                  "aria-label": "Cerrar",
                  onClick: e
                }, " × ")
              ])) : u("", !0),
              r("section", We, [
                z(v.$slots, "default", {}, void 0, !0)
              ]),
              v.$slots.footer || v.confirm ? (t(), s("footer", Ze, [
                z(v.$slots, "footer", {}, () => [
                  v.confirm ? (t(), s("div", et, [
                    w(q, {
                      variant: "outline",
                      onClick: a
                    }, {
                      default: B(() => [
                        L(h(v.cancelText), 1)
                      ]),
                      _: 1
                    }),
                    w(q, {
                      variant: v.destructive ? "danger" : "primary",
                      onClick: i
                    }, {
                      default: B(() => [
                        L(h(v.confirmText), 1)
                      ]),
                      _: 1
                    }, 8, ["variant"])
                  ])) : u("", !0)
                ], !0)
              ])) : u("", !0)
            ], 2)
          ])) : u("", !0)
        ]),
        _: 3
      })
    ]));
  }
}), st = (m, f) => {
  const n = m.__vccOpts || m;
  for (const [l, e] of f)
    n[l] = e;
  return n;
}, ot = /* @__PURE__ */ st(tt, [["__scopeId", "data-v-65e33d42"]]), at = {
  key: 0,
  class: "mb-1 block text-sm font-medium text-gray-800"
}, lt = {
  key: 0,
  class: "text-red-600"
}, rt = { class: "relative w-full" }, nt = ["value"], it = {
  key: 1,
  class: "absolute z-50 mt-2 w-full rounded-xl border border-gray-300 bg-white shadow-lg"
}, dt = { class: "p-4" }, ut = { class: "mb-2 flex items-center justify-between" }, ct = { class: "flex items-center gap-2" }, mt = { class: "text-sm font-medium text-gray-800 capitalize" }, pt = { class: "rounded-md border border-gray-300 px-2 py-0.5 text-xs text-gray-700" }, yt = { class: "mb-1 grid grid-cols-7 text-center text-xs font-medium text-gray-500" }, ft = { class: "grid grid-cols-7 gap-y-1 text-sm" }, vt = ["disabled", "onClick"], ht = { class: "mt-4 mb-3 flex items-center justify-center gap-2" }, bt = /* @__PURE__ */ r("span", { class: "font-medium text-gray-700" }, ":", -1), gt = { class: "mt-2 flex justify-between gap-2" }, wt = {
  key: 2,
  class: "mt-1 text-sm text-[#f44336]"
}, kt = /* @__PURE__ */ E({
  __name: "BaseDateTimePicker",
  props: {
    modelValue: {},
    label: {},
    error: {},
    required: { type: Boolean },
    minDate: {},
    isDisabled: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(m, { emit: f }) {
    const n = f, l = m, e = $(!1), i = $(l.modelValue ? new Date(l.modelValue) : /* @__PURE__ */ new Date()), a = $(i.value.getMonth()), o = $(i.value.getFullYear()), p = $(i.value.getHours() % 12 || 12), _ = $(i.value.getMinutes()), b = $(i.value.getHours() >= 12 ? "PM" : "AM"), T = V(() => l.modelValue ? new Date(l.modelValue).toLocaleString("es-AR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: !0
    }) : "Seleccionar fecha y hora"), d = V(
      () => new Date(o.value, a.value).toLocaleString("es-AR", {
        month: "long"
      })
    ), C = ["Lu", "Ma", "Mi", "Ju", "Vi", "Sa", "Do"], v = V(() => {
      const c = [], y = new Date(o.value, a.value, 1), g = (y.getDay() + 6) % 7, A = new Date(y);
      A.setDate(A.getDate() - g);
      for (let N = 0; N < 42; N++) {
        const j = new Date(A);
        j.setDate(j.getDate() + N), c.push({
          date: j,
          isCurrentMonth: j.getMonth() === a.value
        });
      }
      return c;
    });
    function x(c, y) {
      return c.getDate() === y.getDate() && c.getMonth() === y.getMonth() && c.getFullYear() === y.getFullYear();
    }
    function R(c) {
      if (!l.minDate) return !1;
      const y = new Date(c.getFullYear(), c.getMonth(), c.getDate()), g = new Date(
        l.minDate.getFullYear(),
        l.minDate.getMonth(),
        l.minDate.getDate()
      );
      return y < g;
    }
    function F(c) {
      R(c) || (i.value = new Date(c));
    }
    function le() {
      a.value === 0 ? (a.value = 11, o.value--) : a.value--;
    }
    function re() {
      a.value === 11 ? (a.value = 0, o.value++) : a.value++;
    }
    function ne() {
      const c = new Date(i.value), y = b.value === "PM" && p.value !== 12 ? p.value + 12 : b.value === "AM" && p.value === 12 ? 0 : p.value;
      c.setHours(y), c.setMinutes(_.value), c.setSeconds(0), n("update:modelValue", c.toISOString()), e.value = !1;
    }
    function ie() {
      e.value = !1;
    }
    P(
      () => l.modelValue,
      (c) => {
        if (c) {
          const y = new Date(c);
          i.value = y, a.value = y.getMonth(), o.value = y.getFullYear(), p.value = y.getHours() % 12 || 12, _.value = y.getMinutes(), b.value = y.getHours() >= 12 ? "PM" : "AM";
        }
      }
    );
    const I = $(null);
    function X(c) {
      I.value && !I.value.contains(c.target) && (e.value = !1);
    }
    Q(() => document.addEventListener("click", X)), K(() => document.removeEventListener("click", X));
    const de = Array.from({ length: 12 }, (c, y) => ({
      label: String(y + 1),
      value: y + 1
    })), ue = Array.from({ length: 60 }, (c, y) => ({
      label: y.toString().padStart(2, "0"),
      value: y
    })), ce = [
      { label: "AM", value: "AM" },
      { label: "PM", value: "PM" }
    ];
    return (c, y) => (t(), s("div", {
      ref_key: "pickerRef",
      ref: I,
      class: "relative w-full"
    }, [
      c.label ? (t(), s("label", at, [
        c.required ? (t(), s("span", lt, "*")) : u("", !0),
        L(" " + h(c.label), 1)
      ])) : u("", !0),
      r("div", rt, [
        r("input", {
          type: "text",
          value: T.value,
          readonly: "",
          class: S([
            "w-full appearance-none rounded-lg border px-4 py-3 text-sm placeholder-gray-400 shadow-sm transition duration-200 outline-none",
            "pr-10",
            c.error ? "border-[#f44336]" : "border-gray-300",
            c.isDisabled ? "cursor-not-allowed bg-gray-100 text-gray-500" : "cursor-pointer text-gray-700"
          ]),
          onClick: y[0] || (y[0] = (g) => !c.isDisabled && (e.value = !e.value))
        }, null, 10, nt),
        w(k(J), { class: "pointer-events-none absolute top-1/2 right-3 h-4 w-4 -translate-y-1/2 text-gray-400" })
      ]),
      e.value ? (t(), s("div", it, [
        r("div", dt, [
          r("div", ut, [
            r("div", ct, [
              w(k(ge), {
                class: "hover:text-primary h-4 w-4 cursor-pointer text-gray-600",
                onClick: le
              }),
              r("span", mt, h(d.value), 1),
              w(k(we), {
                class: "hover:text-primary h-4 w-4 cursor-pointer text-gray-600",
                onClick: re
              })
            ]),
            r("span", pt, h(o.value), 1)
          ]),
          r("div", yt, [
            (t(), s(D, null, M(C, (g) => r("span", { key: g }, h(g), 1)), 64))
          ]),
          r("div", ft, [
            (t(!0), s(D, null, M(v.value, (g) => (t(), s("button", {
              key: g.date.toISOString(),
              disabled: R(g.date),
              class: S([
                "flex h-8 w-8 items-center justify-center rounded-full",
                R(g.date) ? "cursor-not-allowed text-gray-300" : x(g.date, i.value) ? "bg-primary text-white" : g.isCurrentMonth ? "text-gray-800 hover:bg-gray-100" : "text-gray-400 hover:bg-gray-100"
              ]),
              onClick: (A) => F(g.date)
            }, h(g.date.getDate()), 11, vt))), 128))
          ]),
          r("div", ht, [
            w(U, {
              modelValue: p.value,
              "onUpdate:modelValue": y[1] || (y[1] = (g) => p.value = g),
              options: k(de),
              class: "w-14"
            }, null, 8, ["modelValue", "options"]),
            bt,
            w(U, {
              modelValue: _.value,
              "onUpdate:modelValue": y[2] || (y[2] = (g) => _.value = g),
              options: k(ue),
              class: "w-14"
            }, null, 8, ["modelValue", "options"]),
            w(U, {
              modelValue: b.value,
              "onUpdate:modelValue": y[3] || (y[3] = (g) => b.value = g),
              options: ce,
              class: "w-16"
            }, null, 8, ["modelValue"])
          ]),
          r("div", gt, [
            w(q, {
              variant: "secondary",
              size: "sm",
              class: "w-full",
              onClick: ie
            }, {
              default: B(() => [
                L(" Cancelar ")
              ]),
              _: 1
            }),
            w(q, {
              variant: "primary",
              size: "sm",
              class: "w-full",
              onClick: ne
            }, {
              default: B(() => [
                L(" Aplicar ")
              ]),
              _: 1
            })
          ])
        ])
      ])) : u("", !0),
      c.error ? (t(), s("p", wt, h(c.error), 1)) : u("", !0)
    ], 512));
  }
}), xt = { class: "min-w-full divide-y divide-gray-200 text-sm" }, $t = {
  key: 0,
  class: "sticky top-0 z-10 bg-gray-50"
}, ae = /* @__PURE__ */ E({
  __name: "BaseSkeletonTable",
  props: {
    headers: { default: () => [] },
    rows: { default: 5 },
    cols: { default: 4 },
    widths: {}
  },
  setup(m) {
    const f = m, n = f.rows, l = f.headers.length ? f.headers.length : f.cols;
    function e(i) {
      return f.widths && f.widths.length > 0 ? f.widths[i % f.widths.length] : "w-24";
    }
    return (i, a) => (t(), s("table", xt, [
      i.headers.length ? (t(), s("thead", $t, [
        r("tr", null, [
          (t(!0), s(D, null, M(i.headers, (o, p) => (t(), s("th", {
            key: p,
            class: "px-4 py-3 text-left font-semibold text-gray-700"
          }, h(o), 1))), 128))
        ])
      ])) : u("", !0),
      r("tbody", null, [
        (t(!0), s(D, null, M(k(n), (o) => (t(), s("tr", { key: o }, [
          (t(!0), s(D, null, M(k(l), (p) => (t(), s("td", {
            key: p,
            class: "px-4 py-2"
          }, [
            r("div", {
              class: S(["h-4 animate-pulse rounded bg-gray-200", e(p - 1)])
            }, null, 2)
          ]))), 128))
        ]))), 128))
      ])
    ]));
  }
}), _t = { class: "hidden sm:block" }, Bt = { class: "relative overflow-x-auto rounded-xl border border-gray-200 shadow" }, Vt = {
  key: 1,
  class: "min-w-full divide-y divide-gray-200 text-sm"
}, Ct = { class: "sticky top-0 z-10 bg-gray-50" }, Dt = {
  key: 0,
  class: "px-4 py-3 font-semibold text-gray-700"
}, Mt = { class: "divide-y divide-gray-100 bg-white" }, St = ["onClick"], Lt = {
  key: 0,
  class: "px-4 py-2 text-center"
}, zt = { key: 0 }, Tt = ["colspan"], Et = { class: "space-y-4 sm:hidden" }, Ot = ["onClick"], Rt = {
  key: 0,
  class: "mt-2 text-right"
}, Pt = {
  key: 0,
  class: "p-6 text-center text-gray-400"
}, qt = /* @__PURE__ */ E({
  __name: "BaseResponsiveTable",
  props: {
    headers: {},
    rows: {},
    loading: { type: Boolean },
    totalCols: {},
    emptyMessage: {},
    formatter: { type: Function }
  },
  emits: ["rowClick"],
  setup(m, { emit: f }) {
    const n = f;
    function l(e) {
      n("rowClick", e);
    }
    return (e, i) => (t(), s("div", null, [
      r("div", _t, [
        r("div", Bt, [
          e.loading ? (t(), O(ae, {
            key: 0,
            headers: e.headers.map((a) => a.label),
            rows: 5
          }, null, 8, ["headers"])) : (t(), s("table", Vt, [
            r("thead", Ct, [
              r("tr", null, [
                (t(!0), s(D, null, M(e.headers, (a) => (t(), s("th", {
                  key: a.key,
                  class: S(["px-4 py-3 text-left font-semibold text-gray-700", a.class])
                }, h(a.label), 3))), 128)),
                e.$slots["header-action"] ? (t(), s("th", Dt, [
                  z(e.$slots, "header-action")
                ])) : u("", !0)
              ])
            ]),
            r("tbody", Mt, [
              (t(!0), s(D, null, M(e.rows, (a) => (t(), s("tr", {
                key: a.id,
                class: "hover:bg-primary/10 group cursor-pointer transition",
                onClick: (o) => l(a)
              }, [
                (t(!0), s(D, null, M(e.headers, (o) => (t(), s("td", {
                  key: o.key,
                  class: S(["px-4 py-2 text-xs text-gray-600", o.class])
                }, [
                  z(e.$slots, `row-${o.key}`, { row: a }, () => [
                    L(h(e.formatter ? e.formatter(o.key, a[o.key], a) : a[o.key]), 1)
                  ])
                ], 2))), 128)),
                e.$slots["row-action"] ? (t(), s("td", Lt, [
                  z(e.$slots, "row-action", { row: a })
                ])) : u("", !0)
              ], 8, St))), 128)),
              !e.loading && !e.rows.length ? (t(), s("tr", zt, [
                r("td", {
                  colspan: e.totalCols || e.headers.length + (e.$slots["row-action"] ? 1 : 0),
                  class: "p-6 text-center text-gray-400"
                }, h(e.emptyMessage || "No se encontraron registros."), 9, Tt)
              ])) : u("", !0)
            ])
          ]))
        ])
      ]),
      r("div", Et, [
        (t(!0), s(D, null, M(e.rows, (a) => (t(), s("div", {
          key: a.id,
          class: "hover:bg-primary/5 cursor-pointer rounded-lg border border-gray-200 p-4 shadow transition",
          onClick: (o) => l(a)
        }, [
          (t(!0), s(D, null, M(e.headers, (o) => (t(), s("div", {
            key: o.key,
            class: "mb-1 text-xs text-gray-600"
          }, [
            r("strong", null, h(o.label) + ":", 1),
            z(e.$slots, `row-${o.key}`, { row: a }, () => [
              L(h(e.formatter ? e.formatter(o.key, a[o.key], a) : a[o.key]), 1)
            ])
          ]))), 128)),
          e.$slots["card-action"] ? (t(), s("div", Rt, [
            z(e.$slots, "card-action", { row: a })
          ])) : u("", !0)
        ], 8, Ot))), 128)),
        !e.loading && !e.rows.length ? (t(), s("div", Pt, h(e.emptyMessage || "No se encontraron registros."), 1)) : u("", !0)
      ])
    ]));
  }
}), Ft = ["for"], At = {
  key: 0,
  class: "text-red-600"
}, jt = { class: "relative inline-flex items-center cursor-pointer" }, Ut = ["id", "checked", "disabled"], It = { class: "flex h-5 w-5 items-center justify-center rounded border-2 border-gray-300 transition duration-200 ease-in-out peer-focus:ring-2 peer-focus:ring-primary/40 peer-hover:border-primary peer-checked:border-primary peer-checked:bg-primary" }, Nt = ["for"], Yt = {
  key: 0,
  class: "text-red-600"
}, Ht = {
  key: 1,
  class: "mt-1 text-sm text-[#f44336]"
}, Kt = /* @__PURE__ */ E({
  __name: "BaseCheckbox",
  props: {
    modelValue: { type: Boolean, default: !1 },
    label: {},
    error: {},
    id: {},
    required: { type: Boolean },
    labelPosition: { default: "right" },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(m, { emit: f }) {
    const n = m, l = f, e = V(
      () => n.id || `checkbox-${Math.random().toString(36).substring(2, 9)}`
    ), i = V(() => n.labelPosition === "top");
    function a(o) {
      n.disabled || l("update:modelValue", o.target.checked);
    }
    return (o, p) => (t(), s("div", null, [
      o.label && i.value ? (t(), s("label", {
        key: 0,
        for: e.value,
        class: "mb-1 block text-sm font-medium text-gray-700"
      }, [
        o.required ? (t(), s("span", At, "*")) : u("", !0),
        L(" " + h(o.label), 1)
      ], 8, Ft)) : u("", !0),
      r("div", {
        class: S([
          "flex",
          i.value ? "flex-row" : "items-center gap-2",
          o.disabled ? "opacity-50 cursor-not-allowed" : ""
        ])
      }, [
        r("label", jt, [
          r("input", {
            id: e.value,
            type: "checkbox",
            checked: o.modelValue,
            disabled: o.disabled,
            onChange: a,
            class: "peer absolute h-5 w-5 opacity-0 cursor-pointer"
          }, null, 40, Ut),
          r("div", It, [
            o.modelValue ? (t(), O(k(oe), {
              key: 0,
              class: "h-3 w-3 text-white"
            })) : u("", !0)
          ])
        ]),
        o.label && !i.value ? (t(), s("label", {
          key: 0,
          for: e.value,
          class: "cursor-pointer text-sm font-medium text-gray-700"
        }, [
          o.required ? (t(), s("span", Yt, "*")) : u("", !0),
          L(" " + h(o.label), 1)
        ], 8, Nt)) : u("", !0),
        z(o.$slots, "default")
      ], 2),
      o.error ? (t(), s("p", Ht, h(o.error), 1)) : u("", !0)
    ]));
  }
}), Qt = {
  install(m) {
    m.component("BaseButton", q), m.component("BaseInput", Se), m.component("BaseTextarea", ze), m.component("BaseSelect", Ie), m.component("BaseSelectFlat", U), m.component("BaseModal", ot), m.component("BaseDateTimePicker", kt), m.component("BaseSkeletonTable", ae), m.component("BaseResponsiveTable", qt), m.component("BaseCheckbox", Kt);
  }
};
export {
  q as BaseButton,
  Kt as BaseCheckbox,
  kt as BaseDateTimePicker,
  Se as BaseInput,
  ot as BaseModal,
  qt as BaseResponsiveTable,
  Ie as BaseSelect,
  U as BaseSelectFlat,
  ae as BaseSkeletonTable,
  ze as BaseTextarea,
  Qt as YacoubUI
};
