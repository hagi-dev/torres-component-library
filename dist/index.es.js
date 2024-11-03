import * as We from "react";
import Ef, { useState as xs, useEffect as Ha, useRef as Z8 } from "react";
var Mg = { exports: {} }, zp = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var wS;
function q8() {
  if (wS) return zp;
  wS = 1;
  var v = Ef, S = Symbol.for("react.element"), g = Symbol.for("react.fragment"), _ = Object.prototype.hasOwnProperty, b = v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, L = { key: !0, ref: !0, __self: !0, __source: !0 };
  function y(Y, V, F) {
    var ee, I = {}, K = null, oe = null;
    F !== void 0 && (K = "" + F), V.key !== void 0 && (K = "" + V.key), V.ref !== void 0 && (oe = V.ref);
    for (ee in V) _.call(V, ee) && !L.hasOwnProperty(ee) && (I[ee] = V[ee]);
    if (Y && Y.defaultProps) for (ee in V = Y.defaultProps, V) I[ee] === void 0 && (I[ee] = V[ee]);
    return { $$typeof: S, type: Y, key: K, ref: oe, props: I, _owner: b.current };
  }
  return zp.Fragment = g, zp.jsx = y, zp.jsxs = y, zp;
}
var Ap = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _S;
function X8() {
  return _S || (_S = 1, process.env.NODE_ENV !== "production" && function() {
    var v = Ef, S = Symbol.for("react.element"), g = Symbol.for("react.portal"), _ = Symbol.for("react.fragment"), b = Symbol.for("react.strict_mode"), L = Symbol.for("react.profiler"), y = Symbol.for("react.provider"), Y = Symbol.for("react.context"), V = Symbol.for("react.forward_ref"), F = Symbol.for("react.suspense"), ee = Symbol.for("react.suspense_list"), I = Symbol.for("react.memo"), K = Symbol.for("react.lazy"), oe = Symbol.for("react.offscreen"), be = Symbol.iterator, Qe = "@@iterator";
    function at(R) {
      if (R === null || typeof R != "object")
        return null;
      var Z = be && R[be] || R[Qe];
      return typeof Z == "function" ? Z : null;
    }
    var kt = v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function ke(R) {
      {
        for (var Z = arguments.length, ne = new Array(Z > 1 ? Z - 1 : 0), xe = 1; xe < Z; xe++)
          ne[xe - 1] = arguments[xe];
        Re("error", R, ne);
      }
    }
    function Re(R, Z, ne) {
      {
        var xe = kt.ReactDebugCurrentFrame, tt = xe.getStackAddendum();
        tt !== "" && (Z += "%s", ne = ne.concat([tt]));
        var it = ne.map(function(Me) {
          return String(Me);
        });
        it.unshift("Warning: " + Z), Function.prototype.apply.call(console[R], console, it);
      }
    }
    var Ae = !1, Ye = !1, mt = !1, $e = !1, Gt = !1, mn;
    mn = Symbol.for("react.module.reference");
    function wt(R) {
      return !!(typeof R == "string" || typeof R == "function" || R === _ || R === L || Gt || R === b || R === F || R === ee || $e || R === oe || Ae || Ye || mt || typeof R == "object" && R !== null && (R.$$typeof === K || R.$$typeof === I || R.$$typeof === y || R.$$typeof === Y || R.$$typeof === V || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      R.$$typeof === mn || R.getModuleId !== void 0));
    }
    function dt(R, Z, ne) {
      var xe = R.displayName;
      if (xe)
        return xe;
      var tt = Z.displayName || Z.name || "";
      return tt !== "" ? ne + "(" + tt + ")" : ne;
    }
    function Dn(R) {
      return R.displayName || "Context";
    }
    function He(R) {
      if (R == null)
        return null;
      if (typeof R.tag == "number" && ke("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof R == "function")
        return R.displayName || R.name || null;
      if (typeof R == "string")
        return R;
      switch (R) {
        case _:
          return "Fragment";
        case g:
          return "Portal";
        case L:
          return "Profiler";
        case b:
          return "StrictMode";
        case F:
          return "Suspense";
        case ee:
          return "SuspenseList";
      }
      if (typeof R == "object")
        switch (R.$$typeof) {
          case Y:
            var Z = R;
            return Dn(Z) + ".Consumer";
          case y:
            var ne = R;
            return Dn(ne._context) + ".Provider";
          case V:
            return dt(R, R.render, "ForwardRef");
          case I:
            var xe = R.displayName || null;
            return xe !== null ? xe : He(R.type) || "Memo";
          case K: {
            var tt = R, it = tt._payload, Me = tt._init;
            try {
              return He(Me(it));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var et = Object.assign, yn = 0, Nt, Jn, te, Ne, fe, lt, ct;
    function kn() {
    }
    kn.__reactDisabledLog = !0;
    function er() {
      {
        if (yn === 0) {
          Nt = console.log, Jn = console.info, te = console.warn, Ne = console.error, fe = console.group, lt = console.groupCollapsed, ct = console.groupEnd;
          var R = {
            configurable: !0,
            enumerable: !0,
            value: kn,
            writable: !0
          };
          Object.defineProperties(console, {
            info: R,
            log: R,
            warn: R,
            error: R,
            group: R,
            groupCollapsed: R,
            groupEnd: R
          });
        }
        yn++;
      }
    }
    function Fa() {
      {
        if (yn--, yn === 0) {
          var R = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: et({}, R, {
              value: Nt
            }),
            info: et({}, R, {
              value: Jn
            }),
            warn: et({}, R, {
              value: te
            }),
            error: et({}, R, {
              value: Ne
            }),
            group: et({}, R, {
              value: fe
            }),
            groupCollapsed: et({}, R, {
              value: lt
            }),
            groupEnd: et({}, R, {
              value: ct
            })
          });
        }
        yn < 0 && ke("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var un = kt.ReactCurrentDispatcher, qr;
    function $n(R, Z, ne) {
      {
        if (qr === void 0)
          try {
            throw Error();
          } catch (tt) {
            var xe = tt.stack.trim().match(/\n( *(at )?)/);
            qr = xe && xe[1] || "";
          }
        return `
` + qr + R;
      }
    }
    var fr = !1, Va;
    {
      var dr = typeof WeakMap == "function" ? WeakMap : Map;
      Va = new dr();
    }
    function Xr(R, Z) {
      if (!R || fr)
        return "";
      {
        var ne = Va.get(R);
        if (ne !== void 0)
          return ne;
      }
      var xe;
      fr = !0;
      var tt = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var it;
      it = un.current, un.current = null, er();
      try {
        if (Z) {
          var Me = function() {
            throw Error();
          };
          if (Object.defineProperty(Me.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(Me, []);
            } catch (Wn) {
              xe = Wn;
            }
            Reflect.construct(R, [], Me);
          } else {
            try {
              Me.call();
            } catch (Wn) {
              xe = Wn;
            }
            R.call(Me.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Wn) {
            xe = Wn;
          }
          R();
        }
      } catch (Wn) {
        if (Wn && xe && typeof Wn.stack == "string") {
          for (var Ze = Wn.stack.split(`
`), Sn = xe.stack.split(`
`), Lt = Ze.length - 1, Vt = Sn.length - 1; Lt >= 1 && Vt >= 0 && Ze[Lt] !== Sn[Vt]; )
            Vt--;
          for (; Lt >= 1 && Vt >= 0; Lt--, Vt--)
            if (Ze[Lt] !== Sn[Vt]) {
              if (Lt !== 1 || Vt !== 1)
                do
                  if (Lt--, Vt--, Vt < 0 || Ze[Lt] !== Sn[Vt]) {
                    var vr = `
` + Ze[Lt].replace(" at new ", " at ");
                    return R.displayName && vr.includes("<anonymous>") && (vr = vr.replace("<anonymous>", R.displayName)), typeof R == "function" && Va.set(R, vr), vr;
                  }
                while (Lt >= 1 && Vt >= 0);
              break;
            }
        }
      } finally {
        fr = !1, un.current = it, Fa(), Error.prepareStackTrace = tt;
      }
      var ji = R ? R.displayName || R.name : "", pt = ji ? $n(ji) : "";
      return typeof R == "function" && Va.set(R, pt), pt;
    }
    function gn(R, Z, ne) {
      return Xr(R, !1);
    }
    function In(R) {
      var Z = R.prototype;
      return !!(Z && Z.isReactComponent);
    }
    function Nn(R, Z, ne) {
      if (R == null)
        return "";
      if (typeof R == "function")
        return Xr(R, In(R));
      if (typeof R == "string")
        return $n(R);
      switch (R) {
        case F:
          return $n("Suspense");
        case ee:
          return $n("SuspenseList");
      }
      if (typeof R == "object")
        switch (R.$$typeof) {
          case V:
            return gn(R.render);
          case I:
            return Nn(R.type, Z, ne);
          case K: {
            var xe = R, tt = xe._payload, it = xe._init;
            try {
              return Nn(it(tt), Z, ne);
            } catch {
            }
          }
        }
      return "";
    }
    var Ln = Object.prototype.hasOwnProperty, Yn = {}, Kr = kt.ReactDebugCurrentFrame;
    function Ta(R) {
      if (R) {
        var Z = R._owner, ne = Nn(R.type, R._source, Z ? Z.type : null);
        Kr.setExtraStackFrame(ne);
      } else
        Kr.setExtraStackFrame(null);
    }
    function ii(R, Z, ne, xe, tt) {
      {
        var it = Function.call.bind(Ln);
        for (var Me in R)
          if (it(R, Me)) {
            var Ze = void 0;
            try {
              if (typeof R[Me] != "function") {
                var Sn = Error((xe || "React class") + ": " + ne + " type `" + Me + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof R[Me] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Sn.name = "Invariant Violation", Sn;
              }
              Ze = R[Me](Z, Me, xe, ne, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Lt) {
              Ze = Lt;
            }
            Ze && !(Ze instanceof Error) && (Ta(tt), ke("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", xe || "React class", ne, Me, typeof Ze), Ta(null)), Ze instanceof Error && !(Ze.message in Yn) && (Yn[Ze.message] = !0, Ta(tt), ke("Failed %s type: %s", ne, Ze.message), Ta(null));
          }
      }
    }
    var Pa = Array.isArray;
    function Ra(R) {
      return Pa(R);
    }
    function Or(R) {
      {
        var Z = typeof Symbol == "function" && Symbol.toStringTag, ne = Z && R[Symbol.toStringTag] || R.constructor.name || "Object";
        return ne;
      }
    }
    function Ba(R) {
      try {
        return Mr(R), !1;
      } catch {
        return !0;
      }
    }
    function Mr(R) {
      return "" + R;
    }
    function wa(R) {
      if (Ba(R))
        return ke("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Or(R)), Mr(R);
    }
    var en = kt.ReactCurrentOwner, Ur = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Mi, _a, ie;
    ie = {};
    function we(R) {
      if (Ln.call(R, "ref")) {
        var Z = Object.getOwnPropertyDescriptor(R, "ref").get;
        if (Z && Z.isReactWarning)
          return !1;
      }
      return R.ref !== void 0;
    }
    function Ge(R) {
      if (Ln.call(R, "key")) {
        var Z = Object.getOwnPropertyDescriptor(R, "key").get;
        if (Z && Z.isReactWarning)
          return !1;
      }
      return R.key !== void 0;
    }
    function yt(R, Z) {
      if (typeof R.ref == "string" && en.current && Z && en.current.stateNode !== Z) {
        var ne = He(en.current.type);
        ie[ne] || (ke('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', He(en.current.type), R.ref), ie[ne] = !0);
      }
    }
    function Ft(R, Z) {
      {
        var ne = function() {
          Mi || (Mi = !0, ke("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", Z));
        };
        ne.isReactWarning = !0, Object.defineProperty(R, "key", {
          get: ne,
          configurable: !0
        });
      }
    }
    function Cn(R, Z) {
      {
        var ne = function() {
          _a || (_a = !0, ke("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", Z));
        };
        ne.isReactWarning = !0, Object.defineProperty(R, "ref", {
          get: ne,
          configurable: !0
        });
      }
    }
    var Zt = function(R, Z, ne, xe, tt, it, Me) {
      var Ze = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: S,
        // Built-in properties that belong on the element
        type: R,
        key: Z,
        ref: ne,
        props: Me,
        // Record the component responsible for creating this element.
        _owner: it
      };
      return Ze._store = {}, Object.defineProperty(Ze._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(Ze, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: xe
      }), Object.defineProperty(Ze, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: tt
      }), Object.freeze && (Object.freeze(Ze.props), Object.freeze(Ze)), Ze;
    };
    function pr(R, Z, ne, xe, tt) {
      {
        var it, Me = {}, Ze = null, Sn = null;
        ne !== void 0 && (wa(ne), Ze = "" + ne), Ge(Z) && (wa(Z.key), Ze = "" + Z.key), we(Z) && (Sn = Z.ref, yt(Z, tt));
        for (it in Z)
          Ln.call(Z, it) && !Ur.hasOwnProperty(it) && (Me[it] = Z[it]);
        if (R && R.defaultProps) {
          var Lt = R.defaultProps;
          for (it in Lt)
            Me[it] === void 0 && (Me[it] = Lt[it]);
        }
        if (Ze || Sn) {
          var Vt = typeof R == "function" ? R.displayName || R.name || "Unknown" : R;
          Ze && Ft(Me, Vt), Sn && Cn(Me, Vt);
        }
        return Zt(R, Ze, Sn, tt, xe, en.current, Me);
      }
    }
    var _t = kt.ReactCurrentOwner, jr = kt.ReactDebugCurrentFrame;
    function Tt(R) {
      if (R) {
        var Z = R._owner, ne = Nn(R.type, R._source, Z ? Z.type : null);
        jr.setExtraStackFrame(ne);
      } else
        jr.setExtraStackFrame(null);
    }
    var bt;
    bt = !1;
    function eu(R) {
      return typeof R == "object" && R !== null && R.$$typeof === S;
    }
    function cl() {
      {
        if (_t.current) {
          var R = He(_t.current.type);
          if (R)
            return `

Check the render method of \`` + R + "`.";
        }
        return "";
      }
    }
    function tu(R) {
      return "";
    }
    var co = {};
    function Ts(R) {
      {
        var Z = cl();
        if (!Z) {
          var ne = typeof R == "string" ? R : R.displayName || R.name;
          ne && (Z = `

Check the top-level render call using <` + ne + ">.");
        }
        return Z;
      }
    }
    function fl(R, Z) {
      {
        if (!R._store || R._store.validated || R.key != null)
          return;
        R._store.validated = !0;
        var ne = Ts(Z);
        if (co[ne])
          return;
        co[ne] = !0;
        var xe = "";
        R && R._owner && R._owner !== _t.current && (xe = " It was passed a child from " + He(R._owner.type) + "."), Tt(R), ke('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', ne, xe), Tt(null);
      }
    }
    function nu(R, Z) {
      {
        if (typeof R != "object")
          return;
        if (Ra(R))
          for (var ne = 0; ne < R.length; ne++) {
            var xe = R[ne];
            eu(xe) && fl(xe, Z);
          }
        else if (eu(R))
          R._store && (R._store.validated = !0);
        else if (R) {
          var tt = at(R);
          if (typeof tt == "function" && tt !== R.entries)
            for (var it = tt.call(R), Me; !(Me = it.next()).done; )
              eu(Me.value) && fl(Me.value, Z);
        }
      }
    }
    function dl(R) {
      {
        var Z = R.type;
        if (Z == null || typeof Z == "string")
          return;
        var ne;
        if (typeof Z == "function")
          ne = Z.propTypes;
        else if (typeof Z == "object" && (Z.$$typeof === V || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        Z.$$typeof === I))
          ne = Z.propTypes;
        else
          return;
        if (ne) {
          var xe = He(Z);
          ii(ne, R.props, "prop", xe, R);
        } else if (Z.PropTypes !== void 0 && !bt) {
          bt = !0;
          var tt = He(Z);
          ke("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", tt || "Unknown");
        }
        typeof Z.getDefaultProps == "function" && !Z.getDefaultProps.isReactClassApproved && ke("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ru(R) {
      {
        for (var Z = Object.keys(R.props), ne = 0; ne < Z.length; ne++) {
          var xe = Z[ne];
          if (xe !== "children" && xe !== "key") {
            Tt(R), ke("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", xe), Tt(null);
            break;
          }
        }
        R.ref !== null && (Tt(R), ke("Invalid attribute `ref` supplied to `React.Fragment`."), Tt(null));
      }
    }
    var $a = {};
    function li(R, Z, ne, xe, tt, it) {
      {
        var Me = wt(R);
        if (!Me) {
          var Ze = "";
          (R === void 0 || typeof R == "object" && R !== null && Object.keys(R).length === 0) && (Ze += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Sn = tu();
          Sn ? Ze += Sn : Ze += cl();
          var Lt;
          R === null ? Lt = "null" : Ra(R) ? Lt = "array" : R !== void 0 && R.$$typeof === S ? (Lt = "<" + (He(R.type) || "Unknown") + " />", Ze = " Did you accidentally export a JSX literal instead of a component?") : Lt = typeof R, ke("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Lt, Ze);
        }
        var Vt = pr(R, Z, ne, tt, it);
        if (Vt == null)
          return Vt;
        if (Me) {
          var vr = Z.children;
          if (vr !== void 0)
            if (xe)
              if (Ra(vr)) {
                for (var ji = 0; ji < vr.length; ji++)
                  nu(vr[ji], R);
                Object.freeze && Object.freeze(vr);
              } else
                ke("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              nu(vr, R);
        }
        if (Ln.call(Z, "key")) {
          var pt = He(R), Wn = Object.keys(Z).filter(function(Ia) {
            return Ia !== "key";
          }), Ar = Wn.length > 0 ? "{key: someKey, " + Wn.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!$a[pt + Ar]) {
            var qe = Wn.length > 0 ? "{" + Wn.join(": ..., ") + ": ...}" : "{}";
            ke(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Ar, pt, qe, pt), $a[pt + Ar] = !0;
          }
        }
        return R === _ ? ru(Vt) : dl(Vt), Vt;
      }
    }
    function zr(R, Z, ne) {
      return li(R, Z, ne, !0);
    }
    function ba(R, Z, ne) {
      return li(R, Z, ne, !1);
    }
    var Ui = ba, pl = zr;
    Ap.Fragment = _, Ap.jsx = Ui, Ap.jsxs = pl;
  }()), Ap;
}
process.env.NODE_ENV === "production" ? Mg.exports = q8() : Mg.exports = X8();
var T = Mg.exports;
const AS = ({ size: v, variant: S = "primary" }) => {
  const g = [
    "arrow-with-tail-left-icon",
    v ? `arrow-with-tail-left-icon--${v}` : "",
    S ? `arrow-with-tail-left-icon--${S}` : ""
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ T.jsxs(
    "svg",
    {
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      className: g,
      children: [
        /* @__PURE__ */ T.jsx(
          "path",
          {
            d: "M5 12H19",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ T.jsx(
          "path",
          {
            d: "M12 5L19 12L12 19",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        )
      ]
    }
  );
}, K8 = ({ size: v, variant: S = "primary" }) => {
  const g = [
    "arrow-with-tail-bottom-icon",
    v ? `arrow-with-tail-bottom-icon--${v}` : "",
    S ? `arrow-with-tail-bottom-icon--${S}` : ""
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ T.jsxs(
    "svg",
    {
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      className: g,
      children: [
        /* @__PURE__ */ T.jsx(
          "path",
          {
            d: "M5 12H19",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ T.jsx(
          "path",
          {
            d: "M12 5L19 12L12 19",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        )
      ]
    }
  );
}, J8 = ({ size: v, variant: S = "primary" }) => {
  const g = [
    "arrow-with-tail-right-icon",
    v ? `arrow-with-tail-right-icon--${v}` : "",
    S ? `arrow-with-tail-right-icon--${S}` : ""
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ T.jsxs(
    "svg",
    {
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      className: g,
      children: [
        /* @__PURE__ */ T.jsx(
          "path",
          {
            d: "M5 12H19",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ T.jsx(
          "path",
          {
            d: "M12 5L19 12L12 19",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        )
      ]
    }
  );
};
function HS(v) {
  var S, g, _ = "";
  if (typeof v == "string" || typeof v == "number") _ += v;
  else if (typeof v == "object") if (Array.isArray(v)) {
    var b = v.length;
    for (S = 0; S < b; S++) v[S] && (g = HS(v[S])) && (_ && (_ += " "), _ += g);
  } else for (g in v) v[g] && (_ && (_ += " "), _ += g);
  return _;
}
function Lr() {
  for (var v, S, g = 0, _ = "", b = arguments.length; g < b; g++) (v = arguments[g]) && (S = HS(v)) && (_ && (_ += " "), _ += S);
  return _;
}
const ex = ({
  size: v,
  variant: S = "primary"
}) => {
  const g = Lr("arrow-with-tail-top-icon", {
    [`arrow-with-tail-top-icon--${S}`]: S,
    [`arrow-with-tail-top-icon--${v}`]: v
  });
  return /* @__PURE__ */ T.jsxs("svg", { width: "24", height: "24", viewBox: "0 0 24 24", className: g, children: [
    /* @__PURE__ */ T.jsx(
      "path",
      {
        d: "M5 12H19",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }
    ),
    /* @__PURE__ */ T.jsx(
      "path",
      {
        d: "M12 5L19 12L12 19",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }
    )
  ] });
}, tx = ({ size: v, variant: S = "primary" }) => {
  const g = Lr("close-icon", {
    [`close-icon--${S}`]: S,
    [`close-icon--${v}`]: v
  });
  return /* @__PURE__ */ T.jsxs(
    "svg",
    {
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      className: g,
      children: [
        /* @__PURE__ */ T.jsx(
          "path",
          {
            d: "M18 6L6 18",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ T.jsx(
          "path",
          {
            d: "M6 6L18 18",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        )
      ]
    }
  );
}, nx = ({ size: v, variant: S = "primary" }) => {
  const g = Lr("filter-icon", {
    [`filter-icon--${S}`]: S,
    [`filter-icon--${v}`]: v
  });
  return /* @__PURE__ */ T.jsx(
    "svg",
    {
      viewBox: "0 0 12 12",
      className: g,
      children: /* @__PURE__ */ T.jsx(
        "path",
        {
          d: "M10 4.09V1.5C10 1.36739 9.94734 1.24021 9.85357 1.14645C9.7598 1.05268 9.63263 1 9.50002 1C9.36741 1 9.24023 1.05268 9.14646 1.14645C9.0527 1.24021 9.00002 1.36739 9.00002 1.5V4.09C8.71044 4.1951 8.46025 4.38681 8.28344 4.63908C8.10663 4.89135 8.01178 5.19194 8.01178 5.5C8.01178 5.80806 8.10663 6.10865 8.28344 6.36092C8.46025 6.61319 8.71044 6.8049 9.00002 6.91V10.5C9.00002 10.6326 9.0527 10.7598 9.14646 10.8536C9.24023 10.9473 9.36741 11 9.50002 11C9.63263 11 9.7598 10.9473 9.85357 10.8536C9.94734 10.7598 10 10.6326 10 10.5V6.91C10.2896 6.8049 10.5398 6.61319 10.7166 6.36092C10.8934 6.10865 10.9883 5.80806 10.9883 5.5C10.9883 5.19194 10.8934 4.89135 10.7166 4.63908C10.5398 4.38681 10.2896 4.1951 10 4.09ZM9.50002 6C9.40113 6 9.30446 5.97068 9.22223 5.91573C9.14001 5.86079 9.07592 5.7827 9.03808 5.69134C9.00023 5.59998 8.99033 5.49945 9.00963 5.40245C9.02892 5.30546 9.07654 5.21637 9.14646 5.14645C9.21639 5.07652 9.30548 5.0289 9.40247 5.00961C9.49946 4.99031 9.6 5.00022 9.69136 5.03806C9.78272 5.0759 9.86081 5.13999 9.91575 5.22221C9.97069 5.30444 10 5.40111 10 5.5C10 5.63261 9.94734 5.75979 9.85357 5.85355C9.7598 5.94732 9.63263 6 9.50002 6ZM6.50002 7.09V1.5C6.50002 1.36739 6.44734 1.24021 6.35357 1.14645C6.2598 1.05268 6.13263 1 6.00002 1C5.86741 1 5.74023 1.05268 5.64646 1.14645C5.5527 1.24021 5.50002 1.36739 5.50002 1.5V7.09C5.21044 7.1951 4.96025 7.38681 4.78344 7.63908C4.60663 7.89135 4.51178 8.19194 4.51178 8.5C4.51178 8.80806 4.60663 9.10865 4.78344 9.36092C4.96025 9.61318 5.21044 9.8049 5.50002 9.91V10.5C5.50002 10.6326 5.5527 10.7598 5.64646 10.8536C5.74023 10.9473 5.86741 11 6.00002 11C6.13263 11 6.2598 10.9473 6.35357 10.8536C6.44734 10.7598 6.50002 10.6326 6.50002 10.5V9.91C6.78959 9.8049 7.03979 9.61318 7.2166 9.36092C7.39341 9.10865 7.48826 8.80806 7.48826 8.5C7.48826 8.19194 7.39341 7.89135 7.2166 7.63908C7.03979 7.38681 6.78959 7.1951 6.50002 7.09ZM6.00002 9C5.90113 9 5.80446 8.97068 5.72223 8.91574C5.64001 8.86079 5.57592 8.7827 5.53808 8.69134C5.50023 8.59998 5.49033 8.49944 5.50963 8.40245C5.52892 8.30546 5.57654 8.21637 5.64646 8.14645C5.71639 8.07652 5.80548 8.0289 5.90247 8.00961C5.99946 7.99031 6.1 8.00022 6.19136 8.03806C6.28272 8.0759 6.36081 8.13999 6.41575 8.22221C6.47069 8.30444 6.50002 8.40111 6.50002 8.5C6.50002 8.63261 6.44734 8.75979 6.35357 8.85355C6.2598 8.94732 6.13263 9 6.00002 9ZM3.00002 3.09V1.5C3.00002 1.36739 2.94734 1.24021 2.85357 1.14645C2.7598 1.05268 2.63263 1 2.50002 1C2.36741 1 2.24023 1.05268 2.14646 1.14645C2.0527 1.24021 2.00002 1.36739 2.00002 1.5V3.09C1.71044 3.1951 1.46025 3.38681 1.28344 3.63908C1.10663 3.89135 1.01178 4.19194 1.01178 4.5C1.01178 4.80806 1.10663 5.10865 1.28344 5.36092C1.46025 5.61319 1.71044 5.8049 2.00002 5.91V10.5C2.00002 10.6326 2.0527 10.7598 2.14646 10.8536C2.24023 10.9473 2.36741 11 2.50002 11C2.63263 11 2.7598 10.9473 2.85357 10.8536C2.94734 10.7598 3.00002 10.6326 3.00002 10.5V5.91C3.28959 5.8049 3.53979 5.61319 3.7166 5.36092C3.89341 5.10865 3.98826 4.80806 3.98826 4.5C3.98826 4.19194 3.89341 3.89135 3.7166 3.63908C3.53979 3.38681 3.28959 3.1951 3.00002 3.09ZM2.50002 5C2.40113 5 2.30446 4.97068 2.22223 4.91573C2.14001 4.86079 2.07592 4.7827 2.03808 4.69134C2.00023 4.59998 1.99033 4.49945 2.00963 4.40245C2.02892 4.30546 2.07654 4.21637 2.14646 4.14645C2.21639 4.07652 2.30548 4.0289 2.40247 4.00961C2.49946 3.99031 2.6 4.00022 2.69136 4.03806C2.78272 4.0759 2.86081 4.13999 2.91575 4.22221C2.97069 4.30444 3.00002 4.40111 3.00002 4.5C3.00002 4.63261 2.94734 4.75979 2.85357 4.85355C2.7598 4.94732 2.63263 5 2.50002 5Z"
        }
      )
    }
  );
}, rx = ({ variant: v, size: S }) => /* @__PURE__ */ T.jsxs(
  "svg",
  {
    width: "24",
    height: "25",
    viewBox: "0 0 24 25",
    className: `trash-icon trash-icon--${v} trash-icon--${S}`,
    children: [
      /* @__PURE__ */ T.jsx(
        "path",
        {
          d: "M18.79 7.5C18.3537 7.5 18 7.85369 18 8.29V17.13C18 18.9912 16.4912 20.5 14.63 20.5H8.95C7.0888 20.5 5.58 18.9912 5.58 17.13V8.29C5.58 7.85369 5.22631 7.5 4.79 7.5C4.3537 7.5 4 7.85369 4 8.29V17.13C4.02742 19.8719 6.25799 22.0801 9 22.08H14.68C17.4025 22.0529 19.6029 19.8525 19.63 17.13V8.29C19.6304 8.07152 19.5404 7.86262 19.3812 7.71294C19.2221 7.56326 19.008 7.48617 18.79 7.5Z"
        }
      ),
      /* @__PURE__ */ T.jsx(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M18.79 6.08H4.79C4.3537 6.08 4 5.72631 4 5.29C4 4.85369 4.3537 4.5 4.79 4.5H7.44L8.62 3.22C9.07107 2.76141 9.68675 2.50218 10.33 2.5H13.25C13.8839 2.49999 14.4918 2.75179 14.94 3.2L16.14 4.5H18.79C19.2263 4.5 19.58 4.85369 19.58 5.29C19.58 5.72631 19.2263 6.08 18.79 6.08ZM13.25 4.08H10.33C10.1301 4.08007 9.93744 4.15499 9.79 4.29L9.6 4.49H13.98L13.79 4.29C13.6436 4.15326 13.4503 4.07807 13.25 4.08Z"
        }
      ),
      /* @__PURE__ */ T.jsx(
        "path",
        {
          d: "M8.04 9.29V12.29C8.04 12.7042 8.37579 13.04 8.79 13.04C9.20421 13.04 9.54 12.7042 9.54 12.29V9.29C9.54 8.87579 9.20421 8.54 8.79 8.54C8.37579 8.54 8.04 8.87579 8.04 9.29Z"
        }
      ),
      /* @__PURE__ */ T.jsx(
        "path",
        {
          d: "M11.04 9.29V17.29C11.04 17.7042 11.3758 18.04 11.79 18.04C12.2042 18.04 12.54 17.7042 12.54 17.29V9.29C12.54 8.87579 12.2042 8.54 11.79 8.54C11.3758 8.54 11.04 8.87579 11.04 9.29Z"
        }
      ),
      /* @__PURE__ */ T.jsx(
        "path",
        {
          d: "M14.04 9.29V12.29C14.04 12.7042 14.3758 13.04 14.79 13.04C15.2042 13.04 15.54 12.7042 15.54 12.29V9.29C15.54 8.87579 15.2042 8.54 14.79 8.54C14.3758 8.54 14.04 8.87579 14.04 9.29Z"
        }
      )
    ]
  }
), ax = ({ size: v, variant: S = "primary" }) => /* @__PURE__ */ T.jsxs(
  "svg",
  {
    viewBox: "0 0 16 17",
    className: `cart-icon cart-icon--${S} cart-icon--${v}`,
    children: [
      /* @__PURE__ */ T.jsx(
        "path",
        {
          d: "M3.49466 3.7065H10.8349C13.044 3.7065 14.8349 5.49736 14.8349 7.7065V7.80144C14.8349 10.0106 13.044 11.8014 10.8349 11.8014H8.29412C6.35774 11.8014 4.69942 10.4144 4.35712 8.50854L3.49466 3.7065ZM3.49466 3.7065L3.14396 2.67743C3.00591 2.27234 2.62539 2 2.19742 2H1.16846",
          strokeWidth: "1.1",
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ T.jsx(
        "path",
        {
          d: "M7.3335 14.166H7.34016",
          strokeWidth: "2.4",
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ T.jsx(
        "path",
        {
          d: "M12.6665 14.166H12.6732",
          strokeWidth: "2.4",
          strokeLinecap: "round"
        }
      )
    ]
  }
), FS = ({ variant: v, size: S = "default" }) => /* @__PURE__ */ T.jsx(
  "svg",
  {
    viewBox: "0 0 34 34",
    fill: "none",
    className: `icon-check icon-check--${v} icon-check--${S}`,
    children: /* @__PURE__ */ T.jsx(
      "path",
      {
        d: "M13.1362 24.6999C12.9037 24.71 12.6745 24.6417 12.4855 24.506L6.26853 19.3691C5.86799 19.0145 5.80769 18.4114 6.13007 17.9845C6.48408 17.5858 7.08249 17.5199 7.51469 17.8322L13.0531 22.346L27.5916 8.90139C28.0216 8.57859 28.6268 8.63733 28.9866 9.03677C29.3465 9.43621 29.342 10.0443 28.9762 10.4383L13.8424 24.4229C13.6496 24.5998 13.3979 24.6985 13.1362 24.6999Z"
      }
    )
  }
), VS = ({ variant: v }) => /* @__PURE__ */ T.jsx(
  "svg",
  {
    width: "20px",
    height: "20px",
    viewBox: "0 0 34 34",
    fill: "none",
    className: `icon-error icon-error--${v}`,
    children: /* @__PURE__ */ T.jsx(
      "path",
      {
        d: "M18.6151 17.0117L29.132 6.53045C29.5714 6.08693 29.5714 5.36844 29.132 4.92493C28.7004 4.47349 27.9876 4.45993 27.5394 4.89464L17.0225 15.3759L6.64084 4.89464C6.428 4.66767 6.13185 4.53906 5.82203 4.53906C5.5122 4.53906 5.21605 4.66767 5.00321 4.89464C4.61364 5.32314 4.61364 5.98077 5.00321 6.40927L15.3849 16.8754L4.86799 27.3416C4.42861 27.7851 4.42861 28.5036 4.86799 28.9471C5.07717 29.1631 5.36485 29.2835 5.66427 29.2803C5.96946 29.3053 6.27201 29.2072 6.50562 29.0077L17.0225 18.5264L27.5394 29.1289C27.7486 29.3449 28.0363 29.4652 28.3357 29.4621C28.6348 29.4635 28.9218 29.3434 29.132 29.1289C29.5714 28.6853 29.5714 27.9669 29.132 27.5233L18.6151 17.0117Z"
      }
    )
  }
), ix = ({ variant: v, size: S }) => /* @__PURE__ */ T.jsxs(
  "svg",
  {
    x: "0px",
    y: "0px",
    viewBox: "0 0 50 50",
    className: `payment-pending-icon ${v && `payment-pending-icon--${v}`} ${S && `payment-pending-icon--${S}`}`,
    children: [
      /* @__PURE__ */ T.jsxs("g", { id: "Layer_1", children: [
        /* @__PURE__ */ T.jsx(
          "path",
          {
            d: `M25,1c-2.872,0-5.68,0.502-8.348,1.492l0.696,1.875C19.792,3.46,22.367,3,25,3c12.131,0,22,9.869,22,22s-9.869,22-22,22\r
		S3,37.131,3,25c0-6.595,2.963-12.795,8-16.958V15h2V5H3v2h6.126C3.993,11.53,1,18.068,1,25c0,13.233,10.767,24,24,24\r
		s24-10.767,24-24S38.233,1,25,1z`
          }
        ),
        /* @__PURE__ */ T.jsx(
          "path",
          {
            d: `M19,33h-2v2h16v-2h-2v-3.414L26.414,25L31,20.414V17h2v-2H17v2h2v3.414L23.586,25L19,29.586V33z M21,19.586V17h8v2.586\r
		l-4,4L21,19.586z M25,26.414l4,4V33h-8v-2.586L25,26.414z`
          }
        ),
        /* @__PURE__ */ T.jsx("rect", { x: "19", y: "39", width: "2", height: "2" }),
        /* @__PURE__ */ T.jsx("rect", { x: "24", y: "39", width: "2", height: "2" }),
        /* @__PURE__ */ T.jsx("rect", { x: "29", y: "39", width: "2", height: "2" })
      ] }),
      /* @__PURE__ */ T.jsx("g", {})
    ]
  }
), lx = ({ variant: v, size: S }) => /* @__PURE__ */ T.jsxs(
  "svg",
  {
    viewBox: "0 0 64 64",
    className: `payment-success-icon ${v && `payment-success-icon--${v}`} ${S && `payment-success-icon--${S}`}`,
    children: [
      /* @__PURE__ */ T.jsx(
        "path",
        {
          d: "M32 16C33.221 16 34 16.592 34 17C34 17.2652 34.1054 17.5196 34.2929 17.7071C34.4804 17.8946 34.7348 18 35 18C35.2652 18 35.5196 17.8946 35.7071 17.7071C35.8946 17.5196 36 17.2652 36 17C36 15.579 34.741 14.429 33 14.1V13C33 12.7348 32.8946 12.4804 32.7071 12.2929C32.5196 12.1054 32.2652 12 32 12C31.7348 12 31.4804 12.1054 31.2929 12.2929C31.1054 12.4804 31 12.7348 31 13V14.1C29.259 14.427 28 15.577 28 17C28 18.682 29.757 20 32 20C33.221 20 34 20.592 34 21C34 21.408 33.221 22 32 22C30.779 22 30 21.408 30 21C30 20.7348 29.8946 20.4804 29.7071 20.2929C29.5196 20.1054 29.2652 20 29 20C28.7348 20 28.4804 20.1054 28.2929 20.2929C28.1054 20.4804 28 20.7348 28 21C28 22.421 29.259 23.571 31 23.9V25C31 25.2652 31.1054 25.5196 31.2929 25.7071C31.4804 25.8946 31.7348 26 32 26C32.2652 26 32.5196 25.8946 32.7071 25.7071C32.8946 25.5196 33 25.2652 33 25V23.9C34.741 23.573 36 22.423 36 21C36 19.318 34.243 18 32 18C30.779 18 30 17.408 30 17C30 16.592 30.779 16 32 16Z"
        }
      ),
      /* @__PURE__ */ T.jsx(
        "path",
        {
          d: "M28 10H36C36.2652 10 36.5196 9.89464 36.7071 9.70711C36.8946 9.51957 37 9.26522 37 9C37 8.73478 36.8946 8.48043 36.7071 8.29289C36.5196 8.10536 36.2652 8 36 8H28C27.7348 8 27.4804 8.10536 27.2929 8.29289C27.1054 8.48043 27 8.73478 27 9C27 9.26522 27.1054 9.51957 27.2929 9.70711C27.4804 9.89464 27.7348 10 28 10Z"
        }
      ),
      /* @__PURE__ */ T.jsx(
        "path",
        {
          d: "M28 30H36C36.2652 30 36.5196 29.8946 36.7071 29.7071C36.8946 29.5196 37 29.2652 37 29C37 28.7348 36.8946 28.4804 36.7071 28.2929C36.5196 28.1054 36.2652 28 36 28H28C27.7348 28 27.4804 28.1054 27.2929 28.2929C27.1054 28.4804 27 28.7348 27 29C27 29.2652 27.1054 29.5196 27.2929 29.7071C27.4804 29.8946 27.7348 30 28 30Z"
        }
      ),
      /* @__PURE__ */ T.jsx(
        "path",
        {
          d: "M20 42H44C44.2652 42 44.5196 41.8946 44.7071 41.7071C44.8946 41.5196 45 41.2652 45 41C45 40.7348 44.8946 40.4804 44.7071 40.2929C44.5196 40.1054 44.2652 40 44 40H20C19.7348 40 19.4804 40.1054 19.2929 40.2929C19.1054 40.4804 19 40.7348 19 41C19 41.2652 19.1054 41.5196 19.2929 41.7071C19.4804 41.8946 19.7348 42 20 42Z"
        }
      ),
      /* @__PURE__ */ T.jsx(
        "path",
        {
          d: "M20 38H44C44.2652 38 44.5196 37.8946 44.7071 37.7071C44.8946 37.5196 45 37.2652 45 37C45 36.7348 44.8946 36.4804 44.7071 36.2929C44.5196 36.1054 44.2652 36 44 36H20C19.7348 36 19.4804 36.1054 19.2929 36.2929C19.1054 36.4804 19 36.7348 19 37C19 37.2652 19.1054 37.5196 19.2929 37.7071C19.4804 37.8946 19.7348 38 20 38Z"
        }
      ),
      /* @__PURE__ */ T.jsx(
        "path",
        {
          d: "M40 44H20C19.7348 44 19.4804 44.1054 19.2929 44.2929C19.1054 44.4804 19 44.7348 19 45C19 45.2652 19.1054 45.5196 19.2929 45.7071C19.4804 45.8946 19.7348 46 20 46H40C40.2652 46 40.5196 45.8946 40.7071 45.7071C40.8946 45.5196 41 45.2652 41 45C41 44.7348 40.8946 44.4804 40.7071 44.2929C40.5196 44.1054 40.2652 44 40 44Z"
        }
      ),
      /* @__PURE__ */ T.jsx(
        "path",
        {
          d: "M40 48H20C19.7348 48 19.4804 48.1054 19.2929 48.2929C19.1054 48.4804 19 48.7348 19 49C19 49.2652 19.1054 49.5196 19.2929 49.7071C19.4804 49.8946 19.7348 50 20 50H40C40.2652 50 40.5196 49.8946 40.7071 49.7071C40.8946 49.5196 41 49.2652 41 49C41 48.7348 40.8946 48.4804 40.7071 48.2929C40.5196 48.1054 40.2652 48 40 48Z"
        }
      ),
      /* @__PURE__ */ T.jsx(
        "path",
        {
          d: "M40 30H41C41.2652 30 41.5196 29.8946 41.7071 29.7071C41.8946 29.5196 42 29.2652 42 29C42 28.7348 41.8946 28.4804 41.7071 28.2929C41.5196 28.1054 41.2652 28 41 28H40C39.7348 28 39.4804 28.1054 39.2929 28.2929C39.1054 28.4804 39 28.7348 39 29C39 29.2652 39.1054 29.5196 39.2929 29.7071C39.4804 29.8946 39.7348 30 40 30Z"
        }
      ),
      /* @__PURE__ */ T.jsx(
        "path",
        {
          d: "M23 30H24C24.2652 30 24.5196 29.8946 24.7071 29.7071C24.8946 29.5196 25 29.2652 25 29C25 28.7348 24.8946 28.4804 24.7071 28.2929C24.5196 28.1054 24.2652 28 24 28H23C22.7348 28 22.4804 28.1054 22.2929 28.2929C22.1054 28.4804 22 28.7348 22 29C22 29.2652 22.1054 29.5196 22.2929 29.7071C22.4804 29.8946 22.7348 30 23 30Z"
        }
      ),
      /* @__PURE__ */ T.jsx(
        "path",
        {
          d: "M40 10H41C41.2652 10 41.5196 9.89464 41.7071 9.70711C41.8946 9.51957 42 9.26522 42 9C42 8.73478 41.8946 8.48043 41.7071 8.29289C41.5196 8.10536 41.2652 8 41 8H40C39.7348 8 39.4804 8.10536 39.2929 8.29289C39.1054 8.48043 39 8.73478 39 9C39 9.26522 39.1054 9.51957 39.2929 9.70711C39.4804 9.89464 39.7348 10 40 10Z"
        }
      ),
      /* @__PURE__ */ T.jsx(
        "path",
        {
          d: "M23 10H24C24.2652 10 24.5196 9.89464 24.7071 9.70711C24.8946 9.51957 25 9.26522 25 9C25 8.73478 24.8946 8.48043 24.7071 8.29289C24.5196 8.10536 24.2652 8 24 8H23C22.7348 8 22.4804 8.10536 22.2929 8.29289C22.1054 8.48043 22 8.73478 22 9C22 9.26522 22.1054 9.51957 22.2929 9.70711C22.4804 9.89464 22.7348 10 23 10Z"
        }
      ),
      /* @__PURE__ */ T.jsx(
        "path",
        {
          d: "M53 42.05V24H60C60.2652 24 60.5196 23.8946 60.7071 23.7071C60.8947 23.5196 61 23.2652 61 23V7C61 5.67392 60.4732 4.40215 59.5355 3.46447C58.5979 2.52678 57.3261 2 56 2H16C14.6739 2 13.4022 2.52678 12.4645 3.46447C11.5268 4.40215 11 5.67392 11 7V61C10.9993 61.1978 11.058 61.3913 11.1685 61.5554C11.2791 61.7194 11.4364 61.8464 11.62 61.92C11.7387 61.9761 11.8688 62.0035 12 62C12.2657 62.0008 12.5209 61.8965 12.71 61.71L16 58.41L19.29 61.71C19.4788 61.8974 19.734 62.0025 20 62.0025C20.266 62.0025 20.5212 61.8974 20.71 61.71L24 58.41L27.29 61.71C27.4788 61.8974 27.734 62.0025 28 62.0025C28.266 62.0025 28.5212 61.8974 28.71 61.71L32 58.41L35.29 61.71C35.4788 61.8974 35.734 62.0025 36 62.0025C36.266 62.0025 36.5212 61.8974 36.71 61.71L40 58.41L43.29 61.71C43.4788 61.8974 43.734 62.0025 44 62.0025C44.266 62.0025 44.5212 61.8974 44.71 61.71L46.25 60.17C47.5005 61.0532 48.9371 61.6374 50.4491 61.8778C51.961 62.1181 53.508 62.0081 54.9707 61.5562C56.4334 61.1043 57.7728 60.3225 58.8858 59.2713C59.9987 58.22 60.8554 56.9272 61.3898 55.4926C61.9242 54.0579 62.1221 52.5198 61.9682 50.9966C61.8143 49.4734 61.3128 48.0059 60.5022 46.7071C59.6916 45.4084 58.5937 44.3131 57.293 43.5057C55.9923 42.6982 54.5236 42.2002 53 42.05ZM53 7C53 6.20435 53.3161 5.44129 53.8787 4.87868C54.4413 4.31607 55.2044 4 56 4C56.7957 4 57.5587 4.31607 58.1213 4.87868C58.6839 5.44129 59 6.20435 59 7V22H53V7ZM44 59.59L40.71 56.29C40.5212 56.1026 40.266 55.9975 40 55.9975C39.734 55.9975 39.4788 56.1026 39.29 56.29L36 59.59L32.71 56.29C32.5212 56.1026 32.266 55.9975 32 55.9975C31.734 55.9975 31.4788 56.1026 31.29 56.29L28 59.59L24.71 56.29C24.5212 56.1026 24.266 55.9975 24 55.9975C23.734 55.9975 23.4788 56.1026 23.29 56.29L20 59.59L16.71 56.29C16.5212 56.1026 16.266 55.9975 16 55.9975C15.734 55.9975 15.4788 56.1026 15.29 56.29L13 58.59V7C13.0024 6.20508 13.3192 5.4434 13.8813 4.8813C14.4434 4.31921 15.2051 4.00237 16 4H52.03C51.3652 4.85902 51.003 5.91376 51 7V42.05C49.141 42.2332 47.3706 42.9345 45.8905 44.0742C44.4104 45.2138 43.2799 46.7461 42.6276 48.4966C41.9753 50.2471 41.8275 52.1455 42.201 53.9758C42.5744 55.8062 43.4541 57.495 44.74 58.85L44 59.59ZM52 60C50.4178 60 48.871 59.5308 47.5554 58.6518C46.2399 57.7727 45.2145 56.5233 44.609 55.0615C44.0035 53.5997 43.845 51.9911 44.1537 50.4393C44.4624 48.8874 45.2243 47.462 46.3432 46.3431C47.462 45.2243 48.8874 44.4624 50.4393 44.1537C51.9911 43.845 53.5997 44.0035 55.0615 44.609C56.5233 45.2145 57.7727 46.2398 58.6518 47.5554C59.5308 48.871 60 50.4177 60 52C59.9971 54.1208 59.1533 56.154 57.6536 57.6536C56.154 59.1533 54.1208 59.9971 52 60V60Z"
        }
      ),
      /* @__PURE__ */ T.jsx(
        "path",
        {
          d: "M57.3641 48.6361C57.1765 48.4486 56.9222 48.3433 56.6571 48.3433C56.3919 48.3433 56.1376 48.4486 55.9501 48.6361L51.0001 53.586L48.8781 51.4641C48.6895 51.2819 48.4369 51.1811 48.1747 51.1834C47.9125 51.1857 47.6616 51.2908 47.4762 51.4762C47.2908 51.6616 47.1857 51.9125 47.1834 52.1746C47.1811 52.4368 47.2819 52.6894 47.4641 52.878L50.2931 55.7071C50.4806 55.8945 50.7349 55.9998 51.0001 55.9998C51.2652 55.9998 51.5195 55.8945 51.7071 55.7071L57.3641 50.05C57.5515 49.8625 57.6568 49.6082 57.6568 49.343C57.6568 49.0779 57.5515 48.8236 57.3641 48.6361V48.6361Z"
        }
      )
    ]
  }
), ux = ({ variant: v, size: S }) => /* @__PURE__ */ T.jsxs(
  "svg",
  {
    className: `payment-verifying-icon ${v && `payment-verifying-icon--${v}`} ${S && `payment-verifying-icon--${S}`}`,
    viewBox: "0 0 48 48",
    children: [
      /* @__PURE__ */ T.jsx("path", { d: "M33.723,36.188c-.111-.044-.213-.085-.3-.126s-.228-.1-.365-.154c-.7-.279-1.055-.478-1.055-.792a.743.743,0,0,1,.458-.51,1.785,1.785,0,0,1,1.931.375A1,1,0,1,0,35.611,33.4,4.479,4.479,0,0,0,34,32.6V32a1,1,0,0,0-2,0v.642a3.349,3.349,0,0,0-.424.17A2.669,2.669,0,0,0,30,35.116c0,1.728,1.563,2.351,2.314,2.65.1.04.191.075.265.11.118.055.253.109.4.168.8.322,1.022.489,1.022.778a.743.743,0,0,1-.459.51,1.79,1.79,0,0,1-1.93-.375,1,1,0,0,0-1.222,1.583A4.462,4.462,0,0,0,32,41.334V42a1,1,0,0,0,2,0v-.723a3.381,3.381,0,0,0,.423-.151A2.668,2.668,0,0,0,36,38.822C36,37.1,34.462,36.484,33.723,36.188Z" }),
      /* @__PURE__ */ T.jsx("path", { d: "M33,27A10,10,0,1,0,43,37,10.011,10.011,0,0,0,33,27Zm0,18a8,8,0,1,1,8-8A8.009,8.009,0,0,1,33,45Z" }),
      /* @__PURE__ */ T.jsx("path", { d: "M16,16a2,2,0,0,0-2-2H12a2,2,0,0,0-2,2v2a2,2,0,0,0,2,2h2a2,2,0,0,0,2-2Zm-4,2V16h2v2Z" }),
      /* @__PURE__ */ T.jsx("path", { d: "M16,24a2,2,0,0,0-2-2H12a2,2,0,0,0-2,2v2a2,2,0,0,0,2,2h2a2,2,0,0,0,2-2Zm-4,2V24h2v2Z" }),
      /* @__PURE__ */ T.jsx("path", { d: "M14,30H12a2,2,0,0,0-2,2v2a2,2,0,0,0,2,2h2a2,2,0,0,0,2-2V32A2,2,0,0,0,14,30Zm-2,4V32h2v2Z" }),
      /* @__PURE__ */ T.jsx("path", { d: "M21,41H10a3,3,0,0,1-3-3V6a3,3,0,0,1,3-3H28.34a2.988,2.988,0,0,1,.66.081V8a3,3,0,0,0,3,3h4.919a2.988,2.988,0,0,1,.081.66V25a1,1,0,0,0,2,0V11.66a5.035,5.035,0,0,0-1.463-3.537l-5.66-5.66A5.035,5.035,0,0,0,28.34,1H10A5.006,5.006,0,0,0,5,6V38a5.006,5.006,0,0,0,5,5H21a1,1,0,0,0,0-2ZM35.586,9H32a1,1,0,0,1-1-1V4.414Z" }),
      /* @__PURE__ */ T.jsx("path", { d: "M24,9a1,1,0,0,0-1-1H11a1,1,0,0,0,0,2H23A1,1,0,0,0,24,9Z" }),
      /* @__PURE__ */ T.jsx("path", { d: "M34,17a1,1,0,0,0-1-1H19a1,1,0,0,0,0,2H33A1,1,0,0,0,34,17Z" }),
      /* @__PURE__ */ T.jsx("path", { d: "M28.99,25a1,1,0,0,0-1-1H19a1,1,0,0,0,0,2h8.99A1,1,0,0,0,28.99,25Z" }),
      /* @__PURE__ */ T.jsx("path", { d: "M19,32a1,1,0,0,0,0,2h1.63a1,1,0,0,0,0-2Z" })
    ]
  }
), ox = ({ variant: v, size: S }) => /* @__PURE__ */ T.jsxs(
  "svg",
  {
    width: "19",
    height: "15",
    viewBox: "0 0 19 15",
    fill: "none",
    className: `truck-icon ${v && `truck-icon--${v}`} ${S && `truck-icon--${S}`}`,
    children: [
      /* @__PURE__ */ T.jsx(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M17.7834 5.12578L16.9084 4.25078C16.4914 3.82911 15.9263 3.58691 15.3334 3.57578H12V3.09245C12 1.8268 10.974 0.800781 9.70835 0.800781H2.83335C2.48818 0.800781 2.20835 1.0806 2.20835 1.42578C2.20835 1.77096 2.48818 2.05078 2.83335 2.05078H9.68335C10.2587 2.05078 10.725 2.51715 10.725 3.09245V8.36745C10.725 8.71263 11.0048 8.99245 11.35 8.99245C11.6952 8.99245 11.975 8.71263 11.975 8.36745V4.82578H15.3084C15.5845 4.82469 15.8493 4.936 16.0417 5.13411L16.9167 5.96745C17.036 6.09117 17.122 6.24313 17.1667 6.40911H13.6667C13.3215 6.40911 13.0417 6.68894 13.0417 7.03411C13.0417 7.37929 13.3215 7.65911 13.6667 7.65911H17.2084V11.2008C17.2197 11.4842 17.115 11.76 16.9184 11.9644C16.7218 12.1689 16.4503 12.2843 16.1667 12.2841H15.2417C15.0366 11.3226 14.1873 10.6354 13.2042 10.6354C12.2211 10.6354 11.3718 11.3226 11.1667 12.2841H6.71669C6.49239 11.2903 5.57728 10.6082 4.5608 10.6772C3.54431 10.7462 2.72974 11.5456 2.64178 12.5606C2.55381 13.5757 3.21868 14.5034 4.20815 14.7462C5.19761 14.989 6.21642 14.4745 6.60835 13.5341H11.2834C11.6082 14.3076 12.3653 14.8108 13.2042 14.8108C14.0431 14.8108 14.8002 14.3076 15.125 13.5341H16.1667C17.4323 13.5341 18.4584 12.5081 18.4584 11.2424V6.75078C18.4595 6.14069 18.2164 5.55552 17.7834 5.12578ZM4.68335 13.4008C4.40358 13.4144 4.14382 13.256 4.02794 13.0009C3.91207 12.7459 3.96355 12.446 4.15784 12.2443C4.35213 12.0425 4.64988 11.9797 4.90908 12.0859C5.16828 12.1921 5.33644 12.4457 5.33335 12.7258C5.3336 13.089 5.04635 13.3873 4.68335 13.4008ZM12.5679 12.977C12.6732 13.2334 12.9229 13.4008 13.2 13.4008C13.5742 13.4008 13.8788 13.0999 13.8834 12.7258C13.8867 12.4487 13.7224 12.197 13.4673 12.0886C13.2123 11.9802 12.917 12.0365 12.7199 12.2313C12.5227 12.4261 12.4627 12.7206 12.5679 12.977Z"
        }
      ),
      /* @__PURE__ */ T.jsx(
        "path",
        {
          d: "M8.45835 5.50078C8.45387 5.15748 8.17666 4.88027 7.83335 4.87578H1.16669C0.821509 4.87578 0.541687 5.1556 0.541687 5.50078C0.541687 5.84596 0.821509 6.12578 1.16669 6.12578H7.83335C8.17666 6.12129 8.45387 5.84408 8.45835 5.50078Z"
        }
      ),
      /* @__PURE__ */ T.jsx(
        "path",
        {
          d: "M7.83335 7.37578H3.66669C3.32151 7.37578 3.04169 7.6556 3.04169 8.00078C3.04169 8.34596 3.32151 8.62578 3.66669 8.62578H7.83335C8.17853 8.62578 8.45835 8.34596 8.45835 8.00078C8.45835 7.6556 8.17853 7.37578 7.83335 7.37578Z"
        }
      )
    ]
  }
), so = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ArrowWithTailBottom: K8,
  ArrowWithTailLeft: AS,
  ArrowWithTailRight: J8,
  ArrowWithTailTop: ex,
  Cart: ax,
  Check: FS,
  Close: tx,
  Error: VS,
  Filter: nx,
  PaymentPending: ix,
  PaymentSuccess: lx,
  PaymentVerifying: ux,
  Trash: rx,
  Truck: ox
}, Symbol.toStringTag, { value: "Module" }));
var Vp = /* @__PURE__ */ ((v) => (v.EMPTY = "Empty", v.ARROW_LEFT_TAIL = "ArrowWithTailLeft", v.ARROW_BOTTOM_TAIL = "ArrowWithTailBottom", v.ARROW_RIGHT_TAIL = "ArrowWithTailRight", v.ARROW_TOP_TAIL = "ArrowWithTailTop", v.CLOSE = "Close", v.FILTER = "Filter", v.TRASH = "Trash", v.CART = "Cart", v.CHECK = "Check", v.ERROR = "Error", v.PAYMENT_PENDING = "PaymentPending", v.PAYMENT_SUCCESS = "PaymentSuccess", v.PAYMENT_VERIFYING = "PaymentVerifying", v.TRUCK = "Truck", v))(Vp || {}), PS = /* @__PURE__ */ ((v) => (v.SUBMIT = "submit", v.BUTTON = "button", v.RESET = "reset", v))(PS || {}), Hp = /* @__PURE__ */ ((v) => (v.PRIMARY = "primary", v.SECONDARY = "secondary", v.TERTIARY = "tertiary", v))(Hp || {});
const sx = 100, cx = {
  PEN: "PEN",
  USD: "USD",
  EUR: "EUR"
};
var fx = /* @__PURE__ */ ((v) => (v.CARD = "71/94", v.BANNER_ONE = "326/395", v.BANNER_TWO = "652/379", v))(fx || {});
const dx = ({
  text: v,
  iconAfter: S,
  iconBefore: g,
  action: _,
  type: b = PS.BUTTON,
  variant: L = Hp.PRIMARY,
  isDisabled: y = !1,
  isWidthAll: Y = !1,
  isWidthAllMobile: V = !1
}) => {
  const F = g && so[g], ee = S && so[S], I = Lr("torres-button", {
    [`torres-button--${L}`]: !!L,
    "torres-button--width-all": Y,
    "torres-button--width-all-mobile": V
  }), K = L === Hp.PRIMARY ? "secondary" : "primary";
  return /* @__PURE__ */ T.jsxs(
    "button",
    {
      type: b,
      onClick: _,
      className: I,
      disabled: y,
      children: [
        F && /* @__PURE__ */ T.jsx(F, { variant: K }),
        v,
        ee && /* @__PURE__ */ T.jsx(ee, { variant: K })
      ]
    }
  );
}, px = ({
  text: v,
  action: S,
  isDisabled: g,
  iconBefore: _,
  iconAfter: b,
  isSelected: L
}) => {
  const y = _ && so[_], Y = b && so[b], V = Lr("torres-button-chip", {
    "torres-button-chip--selected": L
  });
  return /* @__PURE__ */ T.jsxs(
    "button",
    {
      type: "button",
      onClick: S,
      className: V,
      disabled: g,
      children: [
        y && /* @__PURE__ */ T.jsx(y, { variant: "secondary" }),
        v,
        Y && /* @__PURE__ */ T.jsx(Y, { variant: "secondary" })
      ]
    }
  );
}, vx = ({
  id: v,
  color: S,
  name: g,
  action: _,
  isSelected: b = !1
}) => {
  const L = Lr("torres-button-color", {
    "torres-button-color--selected": b
  });
  return /* @__PURE__ */ T.jsx(
    "button",
    {
      id: String(v),
      onClick: _,
      name: g,
      className: L,
      children: /* @__PURE__ */ T.jsx("span", { style: { backgroundColor: S } })
    }
  );
}, BS = ({
  icon: v,
  action: S,
  isDisabled: g,
  variant: _ = Hp.PRIMARY
}) => {
  const b = v && so[v], L = Lr("torres-button-icon", {
    [`torres-button-icon--${_}`]: _,
    "torres-button-icon--disabled": g
  });
  return /* @__PURE__ */ T.jsx(
    "button",
    {
      type: "button",
      onClick: S,
      className: L,
      disabled: g,
      children: b && /* @__PURE__ */ T.jsx(b, { variant: "primary" })
    }
  );
}, $S = ({
  isDisabled: v = !1,
  text: S,
  variant: g = "primary",
  iconAfter: _ = Vp.EMPTY,
  action: b,
  isActionDisabled: L = !1,
  cursorPointerInDisabled: y = !1
}) => {
  const Y = _ && so[_];
  return v ? /* @__PURE__ */ T.jsx(
    "span",
    {
      onClick: L ? b : void 0,
      className: Lr("torres-link-next--disabled", {
        "torres-link-next--disabled--pointer": y
      }),
      children: S
    }
  ) : /* @__PURE__ */ T.jsxs(
    "button",
    {
      onClick: b,
      className: `torres-link-next torres-link-next--${g}`,
      children: [
        S,
        Y && g === "secondary" && /* @__PURE__ */ T.jsx(Y, {})
      ]
    }
  );
}, hx = (v) => v / sx, mx = (v, S, g = "es-PE") => {
  const _ = hx(v);
  if (typeof _ != "number" || isNaN(_))
    throw new Error("El valor proporcionado no es un número válido.");
  return new Intl.NumberFormat(g, {
    style: "currency",
    currency: S,
    currencyDisplay: "symbol",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(_);
}, Fp = ({ value: v, currency: S = cx.PEN, through: g = !1 }) => {
  const _ = Lr("torres-price__value", {
    "torres-price__value--through": g
  });
  return /* @__PURE__ */ T.jsx("div", { className: "torres-price", children: /* @__PURE__ */ T.jsx("span", { className: _, children: mx(v, S) }) });
}, Ag = ({ url: v, alt: S, aspectRatio: g }) => {
  const [_, b] = g.split("/").map(Number);
  return /* @__PURE__ */ T.jsx("div", { className: "torres-image", style: { paddingBottom: `${b / _ * 100}%` }, children: /* @__PURE__ */ T.jsx(
    "img",
    {
      src: v,
      alt: S,
      className: "torres-image__img"
    }
  ) });
}, yx = ({ text: v }) => /* @__PURE__ */ T.jsx("span", { className: "torres-tag", children: v });
var Ea = {}, Qm = { exports: {} }, Dg = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var bS;
function gx() {
  return bS || (bS = 1, function(v) {
    function S(te, Ne) {
      var fe = te.length;
      te.push(Ne);
      e: for (; 0 < fe; ) {
        var lt = fe - 1 >>> 1, ct = te[lt];
        if (0 < b(ct, Ne)) te[lt] = Ne, te[fe] = ct, fe = lt;
        else break e;
      }
    }
    function g(te) {
      return te.length === 0 ? null : te[0];
    }
    function _(te) {
      if (te.length === 0) return null;
      var Ne = te[0], fe = te.pop();
      if (fe !== Ne) {
        te[0] = fe;
        e: for (var lt = 0, ct = te.length, kn = ct >>> 1; lt < kn; ) {
          var er = 2 * (lt + 1) - 1, Fa = te[er], un = er + 1, qr = te[un];
          if (0 > b(Fa, fe)) un < ct && 0 > b(qr, Fa) ? (te[lt] = qr, te[un] = fe, lt = un) : (te[lt] = Fa, te[er] = fe, lt = er);
          else if (un < ct && 0 > b(qr, fe)) te[lt] = qr, te[un] = fe, lt = un;
          else break e;
        }
      }
      return Ne;
    }
    function b(te, Ne) {
      var fe = te.sortIndex - Ne.sortIndex;
      return fe !== 0 ? fe : te.id - Ne.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var L = performance;
      v.unstable_now = function() {
        return L.now();
      };
    } else {
      var y = Date, Y = y.now();
      v.unstable_now = function() {
        return y.now() - Y;
      };
    }
    var V = [], F = [], ee = 1, I = null, K = 3, oe = !1, be = !1, Qe = !1, at = typeof setTimeout == "function" ? setTimeout : null, kt = typeof clearTimeout == "function" ? clearTimeout : null, ke = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function Re(te) {
      for (var Ne = g(F); Ne !== null; ) {
        if (Ne.callback === null) _(F);
        else if (Ne.startTime <= te) _(F), Ne.sortIndex = Ne.expirationTime, S(V, Ne);
        else break;
        Ne = g(F);
      }
    }
    function Ae(te) {
      if (Qe = !1, Re(te), !be) if (g(V) !== null) be = !0, Nt(Ye);
      else {
        var Ne = g(F);
        Ne !== null && Jn(Ae, Ne.startTime - te);
      }
    }
    function Ye(te, Ne) {
      be = !1, Qe && (Qe = !1, kt(Gt), Gt = -1), oe = !0;
      var fe = K;
      try {
        for (Re(Ne), I = g(V); I !== null && (!(I.expirationTime > Ne) || te && !dt()); ) {
          var lt = I.callback;
          if (typeof lt == "function") {
            I.callback = null, K = I.priorityLevel;
            var ct = lt(I.expirationTime <= Ne);
            Ne = v.unstable_now(), typeof ct == "function" ? I.callback = ct : I === g(V) && _(V), Re(Ne);
          } else _(V);
          I = g(V);
        }
        if (I !== null) var kn = !0;
        else {
          var er = g(F);
          er !== null && Jn(Ae, er.startTime - Ne), kn = !1;
        }
        return kn;
      } finally {
        I = null, K = fe, oe = !1;
      }
    }
    var mt = !1, $e = null, Gt = -1, mn = 5, wt = -1;
    function dt() {
      return !(v.unstable_now() - wt < mn);
    }
    function Dn() {
      if ($e !== null) {
        var te = v.unstable_now();
        wt = te;
        var Ne = !0;
        try {
          Ne = $e(!0, te);
        } finally {
          Ne ? He() : (mt = !1, $e = null);
        }
      } else mt = !1;
    }
    var He;
    if (typeof ke == "function") He = function() {
      ke(Dn);
    };
    else if (typeof MessageChannel < "u") {
      var et = new MessageChannel(), yn = et.port2;
      et.port1.onmessage = Dn, He = function() {
        yn.postMessage(null);
      };
    } else He = function() {
      at(Dn, 0);
    };
    function Nt(te) {
      $e = te, mt || (mt = !0, He());
    }
    function Jn(te, Ne) {
      Gt = at(function() {
        te(v.unstable_now());
      }, Ne);
    }
    v.unstable_IdlePriority = 5, v.unstable_ImmediatePriority = 1, v.unstable_LowPriority = 4, v.unstable_NormalPriority = 3, v.unstable_Profiling = null, v.unstable_UserBlockingPriority = 2, v.unstable_cancelCallback = function(te) {
      te.callback = null;
    }, v.unstable_continueExecution = function() {
      be || oe || (be = !0, Nt(Ye));
    }, v.unstable_forceFrameRate = function(te) {
      0 > te || 125 < te ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : mn = 0 < te ? Math.floor(1e3 / te) : 5;
    }, v.unstable_getCurrentPriorityLevel = function() {
      return K;
    }, v.unstable_getFirstCallbackNode = function() {
      return g(V);
    }, v.unstable_next = function(te) {
      switch (K) {
        case 1:
        case 2:
        case 3:
          var Ne = 3;
          break;
        default:
          Ne = K;
      }
      var fe = K;
      K = Ne;
      try {
        return te();
      } finally {
        K = fe;
      }
    }, v.unstable_pauseExecution = function() {
    }, v.unstable_requestPaint = function() {
    }, v.unstable_runWithPriority = function(te, Ne) {
      switch (te) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          te = 3;
      }
      var fe = K;
      K = te;
      try {
        return Ne();
      } finally {
        K = fe;
      }
    }, v.unstable_scheduleCallback = function(te, Ne, fe) {
      var lt = v.unstable_now();
      switch (typeof fe == "object" && fe !== null ? (fe = fe.delay, fe = typeof fe == "number" && 0 < fe ? lt + fe : lt) : fe = lt, te) {
        case 1:
          var ct = -1;
          break;
        case 2:
          ct = 250;
          break;
        case 5:
          ct = 1073741823;
          break;
        case 4:
          ct = 1e4;
          break;
        default:
          ct = 5e3;
      }
      return ct = fe + ct, te = { id: ee++, callback: Ne, priorityLevel: te, startTime: fe, expirationTime: ct, sortIndex: -1 }, fe > lt ? (te.sortIndex = fe, S(F, te), g(V) === null && te === g(F) && (Qe ? (kt(Gt), Gt = -1) : Qe = !0, Jn(Ae, fe - lt))) : (te.sortIndex = ct, S(V, te), be || oe || (be = !0, Nt(Ye))), te;
    }, v.unstable_shouldYield = dt, v.unstable_wrapCallback = function(te) {
      var Ne = K;
      return function() {
        var fe = K;
        K = Ne;
        try {
          return te.apply(this, arguments);
        } finally {
          K = fe;
        }
      };
    };
  }(Dg)), Dg;
}
var kg = {};
/**
 * @license React
 * scheduler.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var DS;
function Cx() {
  return DS || (DS = 1, function(v) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var S = !1, g = !1, _ = 5;
      function b(ie, we) {
        var Ge = ie.length;
        ie.push(we), Y(ie, we, Ge);
      }
      function L(ie) {
        return ie.length === 0 ? null : ie[0];
      }
      function y(ie) {
        if (ie.length === 0)
          return null;
        var we = ie[0], Ge = ie.pop();
        return Ge !== we && (ie[0] = Ge, V(ie, Ge, 0)), we;
      }
      function Y(ie, we, Ge) {
        for (var yt = Ge; yt > 0; ) {
          var Ft = yt - 1 >>> 1, Cn = ie[Ft];
          if (F(Cn, we) > 0)
            ie[Ft] = we, ie[yt] = Cn, yt = Ft;
          else
            return;
        }
      }
      function V(ie, we, Ge) {
        for (var yt = Ge, Ft = ie.length, Cn = Ft >>> 1; yt < Cn; ) {
          var Zt = (yt + 1) * 2 - 1, pr = ie[Zt], _t = Zt + 1, jr = ie[_t];
          if (F(pr, we) < 0)
            _t < Ft && F(jr, pr) < 0 ? (ie[yt] = jr, ie[_t] = we, yt = _t) : (ie[yt] = pr, ie[Zt] = we, yt = Zt);
          else if (_t < Ft && F(jr, we) < 0)
            ie[yt] = jr, ie[_t] = we, yt = _t;
          else
            return;
        }
      }
      function F(ie, we) {
        var Ge = ie.sortIndex - we.sortIndex;
        return Ge !== 0 ? Ge : ie.id - we.id;
      }
      var ee = 1, I = 2, K = 3, oe = 4, be = 5;
      function Qe(ie, we) {
      }
      var at = typeof performance == "object" && typeof performance.now == "function";
      if (at) {
        var kt = performance;
        v.unstable_now = function() {
          return kt.now();
        };
      } else {
        var ke = Date, Re = ke.now();
        v.unstable_now = function() {
          return ke.now() - Re;
        };
      }
      var Ae = 1073741823, Ye = -1, mt = 250, $e = 5e3, Gt = 1e4, mn = Ae, wt = [], dt = [], Dn = 1, He = null, et = K, yn = !1, Nt = !1, Jn = !1, te = typeof setTimeout == "function" ? setTimeout : null, Ne = typeof clearTimeout == "function" ? clearTimeout : null, fe = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function lt(ie) {
        for (var we = L(dt); we !== null; ) {
          if (we.callback === null)
            y(dt);
          else if (we.startTime <= ie)
            y(dt), we.sortIndex = we.expirationTime, b(wt, we);
          else
            return;
          we = L(dt);
        }
      }
      function ct(ie) {
        if (Jn = !1, lt(ie), !Nt)
          if (L(wt) !== null)
            Nt = !0, wa(kn);
          else {
            var we = L(dt);
            we !== null && en(ct, we.startTime - ie);
          }
      }
      function kn(ie, we) {
        Nt = !1, Jn && (Jn = !1, Ur()), yn = !0;
        var Ge = et;
        try {
          var yt;
          if (!g) return er(ie, we);
        } finally {
          He = null, et = Ge, yn = !1;
        }
      }
      function er(ie, we) {
        var Ge = we;
        for (lt(Ge), He = L(wt); He !== null && !S && !(He.expirationTime > Ge && (!ie || Ta())); ) {
          var yt = He.callback;
          if (typeof yt == "function") {
            He.callback = null, et = He.priorityLevel;
            var Ft = He.expirationTime <= Ge, Cn = yt(Ft);
            Ge = v.unstable_now(), typeof Cn == "function" ? He.callback = Cn : He === L(wt) && y(wt), lt(Ge);
          } else
            y(wt);
          He = L(wt);
        }
        if (He !== null)
          return !0;
        var Zt = L(dt);
        return Zt !== null && en(ct, Zt.startTime - Ge), !1;
      }
      function Fa(ie, we) {
        switch (ie) {
          case ee:
          case I:
          case K:
          case oe:
          case be:
            break;
          default:
            ie = K;
        }
        var Ge = et;
        et = ie;
        try {
          return we();
        } finally {
          et = Ge;
        }
      }
      function un(ie) {
        var we;
        switch (et) {
          case ee:
          case I:
          case K:
            we = K;
            break;
          default:
            we = et;
            break;
        }
        var Ge = et;
        et = we;
        try {
          return ie();
        } finally {
          et = Ge;
        }
      }
      function qr(ie) {
        var we = et;
        return function() {
          var Ge = et;
          et = we;
          try {
            return ie.apply(this, arguments);
          } finally {
            et = Ge;
          }
        };
      }
      function $n(ie, we, Ge) {
        var yt = v.unstable_now(), Ft;
        if (typeof Ge == "object" && Ge !== null) {
          var Cn = Ge.delay;
          typeof Cn == "number" && Cn > 0 ? Ft = yt + Cn : Ft = yt;
        } else
          Ft = yt;
        var Zt;
        switch (ie) {
          case ee:
            Zt = Ye;
            break;
          case I:
            Zt = mt;
            break;
          case be:
            Zt = mn;
            break;
          case oe:
            Zt = Gt;
            break;
          case K:
          default:
            Zt = $e;
            break;
        }
        var pr = Ft + Zt, _t = {
          id: Dn++,
          callback: we,
          priorityLevel: ie,
          startTime: Ft,
          expirationTime: pr,
          sortIndex: -1
        };
        return Ft > yt ? (_t.sortIndex = Ft, b(dt, _t), L(wt) === null && _t === L(dt) && (Jn ? Ur() : Jn = !0, en(ct, Ft - yt))) : (_t.sortIndex = pr, b(wt, _t), !Nt && !yn && (Nt = !0, wa(kn))), _t;
      }
      function fr() {
      }
      function Va() {
        !Nt && !yn && (Nt = !0, wa(kn));
      }
      function dr() {
        return L(wt);
      }
      function Xr(ie) {
        ie.callback = null;
      }
      function gn() {
        return et;
      }
      var In = !1, Nn = null, Ln = -1, Yn = _, Kr = -1;
      function Ta() {
        var ie = v.unstable_now() - Kr;
        return !(ie < Yn);
      }
      function ii() {
      }
      function Pa(ie) {
        if (ie < 0 || ie > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          return;
        }
        ie > 0 ? Yn = Math.floor(1e3 / ie) : Yn = _;
      }
      var Ra = function() {
        if (Nn !== null) {
          var ie = v.unstable_now();
          Kr = ie;
          var we = !0, Ge = !0;
          try {
            Ge = Nn(we, ie);
          } finally {
            Ge ? Or() : (In = !1, Nn = null);
          }
        } else
          In = !1;
      }, Or;
      if (typeof fe == "function")
        Or = function() {
          fe(Ra);
        };
      else if (typeof MessageChannel < "u") {
        var Ba = new MessageChannel(), Mr = Ba.port2;
        Ba.port1.onmessage = Ra, Or = function() {
          Mr.postMessage(null);
        };
      } else
        Or = function() {
          te(Ra, 0);
        };
      function wa(ie) {
        Nn = ie, In || (In = !0, Or());
      }
      function en(ie, we) {
        Ln = te(function() {
          ie(v.unstable_now());
        }, we);
      }
      function Ur() {
        Ne(Ln), Ln = -1;
      }
      var Mi = ii, _a = null;
      v.unstable_IdlePriority = be, v.unstable_ImmediatePriority = ee, v.unstable_LowPriority = oe, v.unstable_NormalPriority = K, v.unstable_Profiling = _a, v.unstable_UserBlockingPriority = I, v.unstable_cancelCallback = Xr, v.unstable_continueExecution = Va, v.unstable_forceFrameRate = Pa, v.unstable_getCurrentPriorityLevel = gn, v.unstable_getFirstCallbackNode = dr, v.unstable_next = un, v.unstable_pauseExecution = fr, v.unstable_requestPaint = Mi, v.unstable_runWithPriority = Fa, v.unstable_scheduleCallback = $n, v.unstable_shouldYield = Ta, v.unstable_wrapCallback = qr, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(kg)), kg;
}
var kS;
function IS() {
  return kS || (kS = 1, process.env.NODE_ENV === "production" ? Qm.exports = gx() : Qm.exports = Cx()), Qm.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var NS;
function Sx() {
  if (NS) return Ea;
  NS = 1;
  var v = Ef, S = IS();
  function g(n) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, l = 1; l < arguments.length; l++) r += "&args[]=" + encodeURIComponent(arguments[l]);
    return "Minified React error #" + n + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var _ = /* @__PURE__ */ new Set(), b = {};
  function L(n, r) {
    y(n, r), y(n + "Capture", r);
  }
  function y(n, r) {
    for (b[n] = r, n = 0; n < r.length; n++) _.add(r[n]);
  }
  var Y = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), V = Object.prototype.hasOwnProperty, F = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, ee = {}, I = {};
  function K(n) {
    return V.call(I, n) ? !0 : V.call(ee, n) ? !1 : F.test(n) ? I[n] = !0 : (ee[n] = !0, !1);
  }
  function oe(n, r, l, o) {
    if (l !== null && l.type === 0) return !1;
    switch (typeof r) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return o ? !1 : l !== null ? !l.acceptsBooleans : (n = n.toLowerCase().slice(0, 5), n !== "data-" && n !== "aria-");
      default:
        return !1;
    }
  }
  function be(n, r, l, o) {
    if (r === null || typeof r > "u" || oe(n, r, l, o)) return !0;
    if (o) return !1;
    if (l !== null) switch (l.type) {
      case 3:
        return !r;
      case 4:
        return r === !1;
      case 5:
        return isNaN(r);
      case 6:
        return isNaN(r) || 1 > r;
    }
    return !1;
  }
  function Qe(n, r, l, o, c, d, m) {
    this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = o, this.attributeNamespace = c, this.mustUseProperty = l, this.propertyName = n, this.type = r, this.sanitizeURL = d, this.removeEmptyString = m;
  }
  var at = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    at[n] = new Qe(n, 0, !1, n, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var r = n[0];
    at[r] = new Qe(r, 1, !1, n[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    at[n] = new Qe(n, 2, !1, n.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    at[n] = new Qe(n, 2, !1, n, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    at[n] = new Qe(n, 3, !1, n.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    at[n] = new Qe(n, 3, !0, n, null, !1, !1);
  }), ["capture", "download"].forEach(function(n) {
    at[n] = new Qe(n, 4, !1, n, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    at[n] = new Qe(n, 6, !1, n, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    at[n] = new Qe(n, 5, !1, n.toLowerCase(), null, !1, !1);
  });
  var kt = /[\-:]([a-z])/g;
  function ke(n) {
    return n[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
    var r = n.replace(
      kt,
      ke
    );
    at[r] = new Qe(r, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var r = n.replace(kt, ke);
    at[r] = new Qe(r, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var r = n.replace(kt, ke);
    at[r] = new Qe(r, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    at[n] = new Qe(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), at.xlinkHref = new Qe("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    at[n] = new Qe(n, 1, !1, n.toLowerCase(), null, !0, !0);
  });
  function Re(n, r, l, o) {
    var c = at.hasOwnProperty(r) ? at[r] : null;
    (c !== null ? c.type !== 0 : o || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (be(r, l, c, o) && (l = null), o || c === null ? K(r) && (l === null ? n.removeAttribute(r) : n.setAttribute(r, "" + l)) : c.mustUseProperty ? n[c.propertyName] = l === null ? c.type === 3 ? !1 : "" : l : (r = c.attributeName, o = c.attributeNamespace, l === null ? n.removeAttribute(r) : (c = c.type, l = c === 3 || c === 4 && l === !0 ? "" : "" + l, o ? n.setAttributeNS(o, r, l) : n.setAttribute(r, l))));
  }
  var Ae = v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Ye = Symbol.for("react.element"), mt = Symbol.for("react.portal"), $e = Symbol.for("react.fragment"), Gt = Symbol.for("react.strict_mode"), mn = Symbol.for("react.profiler"), wt = Symbol.for("react.provider"), dt = Symbol.for("react.context"), Dn = Symbol.for("react.forward_ref"), He = Symbol.for("react.suspense"), et = Symbol.for("react.suspense_list"), yn = Symbol.for("react.memo"), Nt = Symbol.for("react.lazy"), Jn = Symbol.for("react.offscreen"), te = Symbol.iterator;
  function Ne(n) {
    return n === null || typeof n != "object" ? null : (n = te && n[te] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var fe = Object.assign, lt;
  function ct(n) {
    if (lt === void 0) try {
      throw Error();
    } catch (l) {
      var r = l.stack.trim().match(/\n( *(at )?)/);
      lt = r && r[1] || "";
    }
    return `
` + lt + n;
  }
  var kn = !1;
  function er(n, r) {
    if (!n || kn) return "";
    kn = !0;
    var l = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (r) if (r = function() {
        throw Error();
      }, Object.defineProperty(r.prototype, "props", { set: function() {
        throw Error();
      } }), typeof Reflect == "object" && Reflect.construct) {
        try {
          Reflect.construct(r, []);
        } catch (A) {
          var o = A;
        }
        Reflect.construct(n, [], r);
      } else {
        try {
          r.call();
        } catch (A) {
          o = A;
        }
        n.call(r.prototype);
      }
      else {
        try {
          throw Error();
        } catch (A) {
          o = A;
        }
        n();
      }
    } catch (A) {
      if (A && o && typeof A.stack == "string") {
        for (var c = A.stack.split(`
`), d = o.stack.split(`
`), m = c.length - 1, x = d.length - 1; 1 <= m && 0 <= x && c[m] !== d[x]; ) x--;
        for (; 1 <= m && 0 <= x; m--, x--) if (c[m] !== d[x]) {
          if (m !== 1 || x !== 1)
            do
              if (m--, x--, 0 > x || c[m] !== d[x]) {
                var w = `
` + c[m].replace(" at new ", " at ");
                return n.displayName && w.includes("<anonymous>") && (w = w.replace("<anonymous>", n.displayName)), w;
              }
            while (1 <= m && 0 <= x);
          break;
        }
      }
    } finally {
      kn = !1, Error.prepareStackTrace = l;
    }
    return (n = n ? n.displayName || n.name : "") ? ct(n) : "";
  }
  function Fa(n) {
    switch (n.tag) {
      case 5:
        return ct(n.type);
      case 16:
        return ct("Lazy");
      case 13:
        return ct("Suspense");
      case 19:
        return ct("SuspenseList");
      case 0:
      case 2:
      case 15:
        return n = er(n.type, !1), n;
      case 11:
        return n = er(n.type.render, !1), n;
      case 1:
        return n = er(n.type, !0), n;
      default:
        return "";
    }
  }
  function un(n) {
    if (n == null) return null;
    if (typeof n == "function") return n.displayName || n.name || null;
    if (typeof n == "string") return n;
    switch (n) {
      case $e:
        return "Fragment";
      case mt:
        return "Portal";
      case mn:
        return "Profiler";
      case Gt:
        return "StrictMode";
      case He:
        return "Suspense";
      case et:
        return "SuspenseList";
    }
    if (typeof n == "object") switch (n.$$typeof) {
      case dt:
        return (n.displayName || "Context") + ".Consumer";
      case wt:
        return (n._context.displayName || "Context") + ".Provider";
      case Dn:
        var r = n.render;
        return n = n.displayName, n || (n = r.displayName || r.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
      case yn:
        return r = n.displayName || null, r !== null ? r : un(n.type) || "Memo";
      case Nt:
        r = n._payload, n = n._init;
        try {
          return un(n(r));
        } catch {
        }
    }
    return null;
  }
  function qr(n) {
    var r = n.type;
    switch (n.tag) {
      case 24:
        return "Cache";
      case 9:
        return (r.displayName || "Context") + ".Consumer";
      case 10:
        return (r._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return n = r.render, n = n.displayName || n.name || "", r.displayName || (n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef");
      case 7:
        return "Fragment";
      case 5:
        return r;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return un(r);
      case 8:
        return r === Gt ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof r == "function") return r.displayName || r.name || null;
        if (typeof r == "string") return r;
    }
    return null;
  }
  function $n(n) {
    switch (typeof n) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return n;
      case "object":
        return n;
      default:
        return "";
    }
  }
  function fr(n) {
    var r = n.type;
    return (n = n.nodeName) && n.toLowerCase() === "input" && (r === "checkbox" || r === "radio");
  }
  function Va(n) {
    var r = fr(n) ? "checked" : "value", l = Object.getOwnPropertyDescriptor(n.constructor.prototype, r), o = "" + n[r];
    if (!n.hasOwnProperty(r) && typeof l < "u" && typeof l.get == "function" && typeof l.set == "function") {
      var c = l.get, d = l.set;
      return Object.defineProperty(n, r, { configurable: !0, get: function() {
        return c.call(this);
      }, set: function(m) {
        o = "" + m, d.call(this, m);
      } }), Object.defineProperty(n, r, { enumerable: l.enumerable }), { getValue: function() {
        return o;
      }, setValue: function(m) {
        o = "" + m;
      }, stopTracking: function() {
        n._valueTracker = null, delete n[r];
      } };
    }
  }
  function dr(n) {
    n._valueTracker || (n._valueTracker = Va(n));
  }
  function Xr(n) {
    if (!n) return !1;
    var r = n._valueTracker;
    if (!r) return !0;
    var l = r.getValue(), o = "";
    return n && (o = fr(n) ? n.checked ? "true" : "false" : n.value), n = o, n !== l ? (r.setValue(n), !0) : !1;
  }
  function gn(n) {
    if (n = n || (typeof document < "u" ? document : void 0), typeof n > "u") return null;
    try {
      return n.activeElement || n.body;
    } catch {
      return n.body;
    }
  }
  function In(n, r) {
    var l = r.checked;
    return fe({}, r, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: l ?? n._wrapperState.initialChecked });
  }
  function Nn(n, r) {
    var l = r.defaultValue == null ? "" : r.defaultValue, o = r.checked != null ? r.checked : r.defaultChecked;
    l = $n(r.value != null ? r.value : l), n._wrapperState = { initialChecked: o, initialValue: l, controlled: r.type === "checkbox" || r.type === "radio" ? r.checked != null : r.value != null };
  }
  function Ln(n, r) {
    r = r.checked, r != null && Re(n, "checked", r, !1);
  }
  function Yn(n, r) {
    Ln(n, r);
    var l = $n(r.value), o = r.type;
    if (l != null) o === "number" ? (l === 0 && n.value === "" || n.value != l) && (n.value = "" + l) : n.value !== "" + l && (n.value = "" + l);
    else if (o === "submit" || o === "reset") {
      n.removeAttribute("value");
      return;
    }
    r.hasOwnProperty("value") ? Ta(n, r.type, l) : r.hasOwnProperty("defaultValue") && Ta(n, r.type, $n(r.defaultValue)), r.checked == null && r.defaultChecked != null && (n.defaultChecked = !!r.defaultChecked);
  }
  function Kr(n, r, l) {
    if (r.hasOwnProperty("value") || r.hasOwnProperty("defaultValue")) {
      var o = r.type;
      if (!(o !== "submit" && o !== "reset" || r.value !== void 0 && r.value !== null)) return;
      r = "" + n._wrapperState.initialValue, l || r === n.value || (n.value = r), n.defaultValue = r;
    }
    l = n.name, l !== "" && (n.name = ""), n.defaultChecked = !!n._wrapperState.initialChecked, l !== "" && (n.name = l);
  }
  function Ta(n, r, l) {
    (r !== "number" || gn(n.ownerDocument) !== n) && (l == null ? n.defaultValue = "" + n._wrapperState.initialValue : n.defaultValue !== "" + l && (n.defaultValue = "" + l));
  }
  var ii = Array.isArray;
  function Pa(n, r, l, o) {
    if (n = n.options, r) {
      r = {};
      for (var c = 0; c < l.length; c++) r["$" + l[c]] = !0;
      for (l = 0; l < n.length; l++) c = r.hasOwnProperty("$" + n[l].value), n[l].selected !== c && (n[l].selected = c), c && o && (n[l].defaultSelected = !0);
    } else {
      for (l = "" + $n(l), r = null, c = 0; c < n.length; c++) {
        if (n[c].value === l) {
          n[c].selected = !0, o && (n[c].defaultSelected = !0);
          return;
        }
        r !== null || n[c].disabled || (r = n[c]);
      }
      r !== null && (r.selected = !0);
    }
  }
  function Ra(n, r) {
    if (r.dangerouslySetInnerHTML != null) throw Error(g(91));
    return fe({}, r, { value: void 0, defaultValue: void 0, children: "" + n._wrapperState.initialValue });
  }
  function Or(n, r) {
    var l = r.value;
    if (l == null) {
      if (l = r.children, r = r.defaultValue, l != null) {
        if (r != null) throw Error(g(92));
        if (ii(l)) {
          if (1 < l.length) throw Error(g(93));
          l = l[0];
        }
        r = l;
      }
      r == null && (r = ""), l = r;
    }
    n._wrapperState = { initialValue: $n(l) };
  }
  function Ba(n, r) {
    var l = $n(r.value), o = $n(r.defaultValue);
    l != null && (l = "" + l, l !== n.value && (n.value = l), r.defaultValue == null && n.defaultValue !== l && (n.defaultValue = l)), o != null && (n.defaultValue = "" + o);
  }
  function Mr(n) {
    var r = n.textContent;
    r === n._wrapperState.initialValue && r !== "" && r !== null && (n.value = r);
  }
  function wa(n) {
    switch (n) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function en(n, r) {
    return n == null || n === "http://www.w3.org/1999/xhtml" ? wa(r) : n === "http://www.w3.org/2000/svg" && r === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n;
  }
  var Ur, Mi = function(n) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(r, l, o, c) {
      MSApp.execUnsafeLocalFunction(function() {
        return n(r, l, o, c);
      });
    } : n;
  }(function(n, r) {
    if (n.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in n) n.innerHTML = r;
    else {
      for (Ur = Ur || document.createElement("div"), Ur.innerHTML = "<svg>" + r.valueOf().toString() + "</svg>", r = Ur.firstChild; n.firstChild; ) n.removeChild(n.firstChild);
      for (; r.firstChild; ) n.appendChild(r.firstChild);
    }
  });
  function _a(n, r) {
    if (r) {
      var l = n.firstChild;
      if (l && l === n.lastChild && l.nodeType === 3) {
        l.nodeValue = r;
        return;
      }
    }
    n.textContent = r;
  }
  var ie = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
  }, we = ["Webkit", "ms", "Moz", "O"];
  Object.keys(ie).forEach(function(n) {
    we.forEach(function(r) {
      r = r + n.charAt(0).toUpperCase() + n.substring(1), ie[r] = ie[n];
    });
  });
  function Ge(n, r, l) {
    return r == null || typeof r == "boolean" || r === "" ? "" : l || typeof r != "number" || r === 0 || ie.hasOwnProperty(n) && ie[n] ? ("" + r).trim() : r + "px";
  }
  function yt(n, r) {
    n = n.style;
    for (var l in r) if (r.hasOwnProperty(l)) {
      var o = l.indexOf("--") === 0, c = Ge(l, r[l], o);
      l === "float" && (l = "cssFloat"), o ? n.setProperty(l, c) : n[l] = c;
    }
  }
  var Ft = fe({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function Cn(n, r) {
    if (r) {
      if (Ft[n] && (r.children != null || r.dangerouslySetInnerHTML != null)) throw Error(g(137, n));
      if (r.dangerouslySetInnerHTML != null) {
        if (r.children != null) throw Error(g(60));
        if (typeof r.dangerouslySetInnerHTML != "object" || !("__html" in r.dangerouslySetInnerHTML)) throw Error(g(61));
      }
      if (r.style != null && typeof r.style != "object") throw Error(g(62));
    }
  }
  function Zt(n, r) {
    if (n.indexOf("-") === -1) return typeof r.is == "string";
    switch (n) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var pr = null;
  function _t(n) {
    return n = n.target || n.srcElement || window, n.correspondingUseElement && (n = n.correspondingUseElement), n.nodeType === 3 ? n.parentNode : n;
  }
  var jr = null, Tt = null, bt = null;
  function eu(n) {
    if (n = Mo(n)) {
      if (typeof jr != "function") throw Error(g(280));
      var r = n.stateNode;
      r && (r = _e(r), jr(n.stateNode, n.type, r));
    }
  }
  function cl(n) {
    Tt ? bt ? bt.push(n) : bt = [n] : Tt = n;
  }
  function tu() {
    if (Tt) {
      var n = Tt, r = bt;
      if (bt = Tt = null, eu(n), r) for (n = 0; n < r.length; n++) eu(r[n]);
    }
  }
  function co(n, r) {
    return n(r);
  }
  function Ts() {
  }
  var fl = !1;
  function nu(n, r, l) {
    if (fl) return n(r, l);
    fl = !0;
    try {
      return co(n, r, l);
    } finally {
      fl = !1, (Tt !== null || bt !== null) && (Ts(), tu());
    }
  }
  function dl(n, r) {
    var l = n.stateNode;
    if (l === null) return null;
    var o = _e(l);
    if (o === null) return null;
    l = o[r];
    e: switch (r) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (o = !o.disabled) || (n = n.type, o = !(n === "button" || n === "input" || n === "select" || n === "textarea")), n = !o;
        break e;
      default:
        n = !1;
    }
    if (n) return null;
    if (l && typeof l != "function") throw Error(g(231, r, typeof l));
    return l;
  }
  var ru = !1;
  if (Y) try {
    var $a = {};
    Object.defineProperty($a, "passive", { get: function() {
      ru = !0;
    } }), window.addEventListener("test", $a, $a), window.removeEventListener("test", $a, $a);
  } catch {
    ru = !1;
  }
  function li(n, r, l, o, c, d, m, x, w) {
    var A = Array.prototype.slice.call(arguments, 3);
    try {
      r.apply(l, A);
    } catch (G) {
      this.onError(G);
    }
  }
  var zr = !1, ba = null, Ui = !1, pl = null, R = { onError: function(n) {
    zr = !0, ba = n;
  } };
  function Z(n, r, l, o, c, d, m, x, w) {
    zr = !1, ba = null, li.apply(R, arguments);
  }
  function ne(n, r, l, o, c, d, m, x, w) {
    if (Z.apply(this, arguments), zr) {
      if (zr) {
        var A = ba;
        zr = !1, ba = null;
      } else throw Error(g(198));
      Ui || (Ui = !0, pl = A);
    }
  }
  function xe(n) {
    var r = n, l = n;
    if (n.alternate) for (; r.return; ) r = r.return;
    else {
      n = r;
      do
        r = n, r.flags & 4098 && (l = r.return), n = r.return;
      while (n);
    }
    return r.tag === 3 ? l : null;
  }
  function tt(n) {
    if (n.tag === 13) {
      var r = n.memoizedState;
      if (r === null && (n = n.alternate, n !== null && (r = n.memoizedState)), r !== null) return r.dehydrated;
    }
    return null;
  }
  function it(n) {
    if (xe(n) !== n) throw Error(g(188));
  }
  function Me(n) {
    var r = n.alternate;
    if (!r) {
      if (r = xe(n), r === null) throw Error(g(188));
      return r !== n ? null : n;
    }
    for (var l = n, o = r; ; ) {
      var c = l.return;
      if (c === null) break;
      var d = c.alternate;
      if (d === null) {
        if (o = c.return, o !== null) {
          l = o;
          continue;
        }
        break;
      }
      if (c.child === d.child) {
        for (d = c.child; d; ) {
          if (d === l) return it(c), n;
          if (d === o) return it(c), r;
          d = d.sibling;
        }
        throw Error(g(188));
      }
      if (l.return !== o.return) l = c, o = d;
      else {
        for (var m = !1, x = c.child; x; ) {
          if (x === l) {
            m = !0, l = c, o = d;
            break;
          }
          if (x === o) {
            m = !0, o = c, l = d;
            break;
          }
          x = x.sibling;
        }
        if (!m) {
          for (x = d.child; x; ) {
            if (x === l) {
              m = !0, l = d, o = c;
              break;
            }
            if (x === o) {
              m = !0, o = d, l = c;
              break;
            }
            x = x.sibling;
          }
          if (!m) throw Error(g(189));
        }
      }
      if (l.alternate !== o) throw Error(g(190));
    }
    if (l.tag !== 3) throw Error(g(188));
    return l.stateNode.current === l ? n : r;
  }
  function Ze(n) {
    return n = Me(n), n !== null ? Sn(n) : null;
  }
  function Sn(n) {
    if (n.tag === 5 || n.tag === 6) return n;
    for (n = n.child; n !== null; ) {
      var r = Sn(n);
      if (r !== null) return r;
      n = n.sibling;
    }
    return null;
  }
  var Lt = S.unstable_scheduleCallback, Vt = S.unstable_cancelCallback, vr = S.unstable_shouldYield, ji = S.unstable_requestPaint, pt = S.unstable_now, Wn = S.unstable_getCurrentPriorityLevel, Ar = S.unstable_ImmediatePriority, qe = S.unstable_UserBlockingPriority, Ia = S.unstable_NormalPriority, Ip = S.unstable_LowPriority, wf = S.unstable_IdlePriority, fo = null, Da = null;
  function Yp(n) {
    if (Da && typeof Da.onCommitFiberRoot == "function") try {
      Da.onCommitFiberRoot(fo, n, void 0, (n.current.flags & 128) === 128);
    } catch {
    }
  }
  var Jr = Math.clz32 ? Math.clz32 : ey, Wp = Math.log, Qp = Math.LN2;
  function ey(n) {
    return n >>>= 0, n === 0 ? 32 : 31 - (Wp(n) / Qp | 0) | 0;
  }
  var Rs = 64, au = 4194304;
  function vl(n) {
    switch (n & -n) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return n & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return n & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return n;
    }
  }
  function ka(n, r) {
    var l = n.pendingLanes;
    if (l === 0) return 0;
    var o = 0, c = n.suspendedLanes, d = n.pingedLanes, m = l & 268435455;
    if (m !== 0) {
      var x = m & ~c;
      x !== 0 ? o = vl(x) : (d &= m, d !== 0 && (o = vl(d)));
    } else m = l & ~c, m !== 0 ? o = vl(m) : d !== 0 && (o = vl(d));
    if (o === 0) return 0;
    if (r !== 0 && r !== o && !(r & c) && (c = o & -o, d = r & -r, c >= d || c === 16 && (d & 4194240) !== 0)) return r;
    if (o & 4 && (o |= l & 16), r = n.entangledLanes, r !== 0) for (n = n.entanglements, r &= o; 0 < r; ) l = 31 - Jr(r), c = 1 << l, o |= n[l], r &= ~c;
    return o;
  }
  function _f(n, r) {
    switch (n) {
      case 1:
      case 2:
      case 4:
        return r + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return r + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function ws(n, r) {
    for (var l = n.suspendedLanes, o = n.pingedLanes, c = n.expirationTimes, d = n.pendingLanes; 0 < d; ) {
      var m = 31 - Jr(d), x = 1 << m, w = c[m];
      w === -1 ? (!(x & l) || x & o) && (c[m] = _f(x, r)) : w <= r && (n.expiredLanes |= x), d &= ~x;
    }
  }
  function bf(n) {
    return n = n.pendingLanes & -1073741825, n !== 0 ? n : n & 1073741824 ? 1073741824 : 0;
  }
  function _s() {
    var n = Rs;
    return Rs <<= 1, !(Rs & 4194240) && (Rs = 64), n;
  }
  function Df(n) {
    for (var r = [], l = 0; 31 > l; l++) r.push(n);
    return r;
  }
  function hl(n, r, l) {
    n.pendingLanes |= r, r !== 536870912 && (n.suspendedLanes = 0, n.pingedLanes = 0), n = n.eventTimes, r = 31 - Jr(r), n[r] = l;
  }
  function ty(n, r) {
    var l = n.pendingLanes & ~r;
    n.pendingLanes = r, n.suspendedLanes = 0, n.pingedLanes = 0, n.expiredLanes &= r, n.mutableReadLanes &= r, n.entangledLanes &= r, r = n.entanglements;
    var o = n.eventTimes;
    for (n = n.expirationTimes; 0 < l; ) {
      var c = 31 - Jr(l), d = 1 << c;
      r[c] = 0, o[c] = -1, n[c] = -1, l &= ~d;
    }
  }
  function po(n, r) {
    var l = n.entangledLanes |= r;
    for (n = n.entanglements; l; ) {
      var o = 31 - Jr(l), c = 1 << o;
      c & r | n[o] & r && (n[o] |= r), l &= ~c;
    }
  }
  var gt = 0;
  function kf(n) {
    return n &= -n, 1 < n ? 4 < n ? n & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var Gp, bs, Ct, Zp, Nf, Pe = !1, vo = [], tn = null, ea = null, ta = null, ho = /* @__PURE__ */ new Map(), on = /* @__PURE__ */ new Map(), St = [], ny = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function Na(n, r) {
    switch (n) {
      case "focusin":
      case "focusout":
        tn = null;
        break;
      case "dragenter":
      case "dragleave":
        ea = null;
        break;
      case "mouseover":
      case "mouseout":
        ta = null;
        break;
      case "pointerover":
      case "pointerout":
        ho.delete(r.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        on.delete(r.pointerId);
    }
  }
  function Qn(n, r, l, o, c, d) {
    return n === null || n.nativeEvent !== d ? (n = { blockedOn: r, domEventName: l, eventSystemFlags: o, nativeEvent: d, targetContainers: [c] }, r !== null && (r = Mo(r), r !== null && bs(r)), n) : (n.eventSystemFlags |= o, r = n.targetContainers, c !== null && r.indexOf(c) === -1 && r.push(c), n);
  }
  function zi(n, r, l, o, c) {
    switch (r) {
      case "focusin":
        return tn = Qn(tn, n, r, l, o, c), !0;
      case "dragenter":
        return ea = Qn(ea, n, r, l, o, c), !0;
      case "mouseover":
        return ta = Qn(ta, n, r, l, o, c), !0;
      case "pointerover":
        var d = c.pointerId;
        return ho.set(d, Qn(ho.get(d) || null, n, r, l, o, c)), !0;
      case "gotpointercapture":
        return d = c.pointerId, on.set(d, Qn(on.get(d) || null, n, r, l, o, c)), !0;
    }
    return !1;
  }
  function qp(n) {
    var r = ra(n.target);
    if (r !== null) {
      var l = xe(r);
      if (l !== null) {
        if (r = l.tag, r === 13) {
          if (r = tt(l), r !== null) {
            n.blockedOn = r, Nf(n.priority, function() {
              Ct(l);
            });
            return;
          }
        } else if (r === 3 && l.stateNode.current.memoizedState.isDehydrated) {
          n.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
          return;
        }
      }
    }
    n.blockedOn = null;
  }
  function iu(n) {
    if (n.blockedOn !== null) return !1;
    for (var r = n.targetContainers; 0 < r.length; ) {
      var l = Ns(n.domEventName, n.eventSystemFlags, r[0], n.nativeEvent);
      if (l === null) {
        l = n.nativeEvent;
        var o = new l.constructor(l.type, l);
        pr = o, l.target.dispatchEvent(o), pr = null;
      } else return r = Mo(l), r !== null && bs(r), n.blockedOn = l, !1;
      r.shift();
    }
    return !0;
  }
  function Lf(n, r, l) {
    iu(n) && l.delete(r);
  }
  function Xp() {
    Pe = !1, tn !== null && iu(tn) && (tn = null), ea !== null && iu(ea) && (ea = null), ta !== null && iu(ta) && (ta = null), ho.forEach(Lf), on.forEach(Lf);
  }
  function mo(n, r) {
    n.blockedOn === r && (n.blockedOn = null, Pe || (Pe = !0, S.unstable_scheduleCallback(S.unstable_NormalPriority, Xp)));
  }
  function yo(n) {
    function r(c) {
      return mo(c, n);
    }
    if (0 < vo.length) {
      mo(vo[0], n);
      for (var l = 1; l < vo.length; l++) {
        var o = vo[l];
        o.blockedOn === n && (o.blockedOn = null);
      }
    }
    for (tn !== null && mo(tn, n), ea !== null && mo(ea, n), ta !== null && mo(ta, n), ho.forEach(r), on.forEach(r), l = 0; l < St.length; l++) o = St[l], o.blockedOn === n && (o.blockedOn = null);
    for (; 0 < St.length && (l = St[0], l.blockedOn === null); ) qp(l), l.blockedOn === null && St.shift();
  }
  var lu = Ae.ReactCurrentBatchConfig, ml = !0;
  function Kp(n, r, l, o) {
    var c = gt, d = lu.transition;
    lu.transition = null;
    try {
      gt = 1, ks(n, r, l, o);
    } finally {
      gt = c, lu.transition = d;
    }
  }
  function Ds(n, r, l, o) {
    var c = gt, d = lu.transition;
    lu.transition = null;
    try {
      gt = 4, ks(n, r, l, o);
    } finally {
      gt = c, lu.transition = d;
    }
  }
  function ks(n, r, l, o) {
    if (ml) {
      var c = Ns(n, r, l, o);
      if (c === null) Bs(n, r, o, go, l), Na(n, o);
      else if (zi(c, n, r, l, o)) o.stopPropagation();
      else if (Na(n, o), r & 4 && -1 < ny.indexOf(n)) {
        for (; c !== null; ) {
          var d = Mo(c);
          if (d !== null && Gp(d), d = Ns(n, r, l, o), d === null && Bs(n, r, o, go, l), d === c) break;
          c = d;
        }
        c !== null && o.stopPropagation();
      } else Bs(n, r, o, null, l);
    }
  }
  var go = null;
  function Ns(n, r, l, o) {
    if (go = null, n = _t(o), n = ra(n), n !== null) if (r = xe(n), r === null) n = null;
    else if (l = r.tag, l === 13) {
      if (n = tt(r), n !== null) return n;
      n = null;
    } else if (l === 3) {
      if (r.stateNode.current.memoizedState.isDehydrated) return r.tag === 3 ? r.stateNode.containerInfo : null;
      n = null;
    } else r !== n && (n = null);
    return go = n, null;
  }
  function Of(n) {
    switch (n) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (Wn()) {
          case Ar:
            return 1;
          case qe:
            return 4;
          case Ia:
          case Ip:
            return 16;
          case wf:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var ui = null, Co = null, So = null;
  function Mf() {
    if (So) return So;
    var n, r = Co, l = r.length, o, c = "value" in ui ? ui.value : ui.textContent, d = c.length;
    for (n = 0; n < l && r[n] === c[n]; n++) ;
    var m = l - n;
    for (o = 1; o <= m && r[l - o] === c[d - o]; o++) ;
    return So = c.slice(n, 1 < o ? 1 - o : void 0);
  }
  function uu(n) {
    var r = n.keyCode;
    return "charCode" in n ? (n = n.charCode, n === 0 && r === 13 && (n = 13)) : n = r, n === 10 && (n = 13), 32 <= n || n === 13 ? n : 0;
  }
  function Eo() {
    return !0;
  }
  function Jp() {
    return !1;
  }
  function Hr(n) {
    function r(l, o, c, d, m) {
      this._reactName = l, this._targetInst = c, this.type = o, this.nativeEvent = d, this.target = m, this.currentTarget = null;
      for (var x in n) n.hasOwnProperty(x) && (l = n[x], this[x] = l ? l(d) : d[x]);
      return this.isDefaultPrevented = (d.defaultPrevented != null ? d.defaultPrevented : d.returnValue === !1) ? Eo : Jp, this.isPropagationStopped = Jp, this;
    }
    return fe(r.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var l = this.nativeEvent;
      l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = !1), this.isDefaultPrevented = Eo);
    }, stopPropagation: function() {
      var l = this.nativeEvent;
      l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0), this.isPropagationStopped = Eo);
    }, persist: function() {
    }, isPersistent: Eo }), r;
  }
  var Ai = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(n) {
    return n.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, Ls = Hr(Ai), ou = fe({}, Ai, { view: 0, detail: 0 }), ev = Hr(ou), Os, Uf, xo, En = fe({}, ou, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Hf, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== xo && (xo && n.type === "mousemove" ? (Os = n.screenX - xo.screenX, Uf = n.screenY - xo.screenY) : Uf = Os = 0, xo = n), Os);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : Uf;
  } }), Ms = Hr(En), tv = fe({}, En, { dataTransfer: 0 }), nv = Hr(tv), ry = fe({}, ou, { relatedTarget: 0 }), Hi = Hr(ry), jf = fe({}, Ai, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), rv = Hr(jf), ay = fe({}, Ai, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), iy = Hr(ay), ly = fe({}, Ai, { data: 0 }), zf = Hr(ly), Af = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, av = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, iv = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function lv(n) {
    var r = this.nativeEvent;
    return r.getModifierState ? r.getModifierState(n) : (n = iv[n]) ? !!r[n] : !1;
  }
  function Hf() {
    return lv;
  }
  var oi = fe({}, ou, { key: function(n) {
    if (n.key) {
      var r = Af[n.key] || n.key;
      if (r !== "Unidentified") return r;
    }
    return n.type === "keypress" ? (n = uu(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? av[n.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Hf, charCode: function(n) {
    return n.type === "keypress" ? uu(n) : 0;
  }, keyCode: function(n) {
    return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  }, which: function(n) {
    return n.type === "keypress" ? uu(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  } }), uy = Hr(oi), Ff = fe({}, En, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Us = Hr(Ff), Vf = fe({}, ou, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Hf }), oy = Hr(Vf), js = fe({}, Ai, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), uv = Hr(js), hr = fe({}, En, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), si = Hr(hr), nn = [9, 13, 27, 32], La = Y && "CompositionEvent" in window, yl = null;
  Y && "documentMode" in document && (yl = document.documentMode);
  var zs = Y && "TextEvent" in window && !yl, ov = Y && (!La || yl && 8 < yl && 11 >= yl), su = " ", sv = !1;
  function cv(n, r) {
    switch (n) {
      case "keyup":
        return nn.indexOf(r.keyCode) !== -1;
      case "keydown":
        return r.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function As(n) {
    return n = n.detail, typeof n == "object" && "data" in n ? n.data : null;
  }
  var cu = !1;
  function sy(n, r) {
    switch (n) {
      case "compositionend":
        return As(r);
      case "keypress":
        return r.which !== 32 ? null : (sv = !0, su);
      case "textInput":
        return n = r.data, n === su && sv ? null : n;
      default:
        return null;
    }
  }
  function cy(n, r) {
    if (cu) return n === "compositionend" || !La && cv(n, r) ? (n = Mf(), So = Co = ui = null, cu = !1, n) : null;
    switch (n) {
      case "paste":
        return null;
      case "keypress":
        if (!(r.ctrlKey || r.altKey || r.metaKey) || r.ctrlKey && r.altKey) {
          if (r.char && 1 < r.char.length) return r.char;
          if (r.which) return String.fromCharCode(r.which);
        }
        return null;
      case "compositionend":
        return ov && r.locale !== "ko" ? null : r.data;
      default:
        return null;
    }
  }
  var fv = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function dv(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r === "input" ? !!fv[n.type] : r === "textarea";
  }
  function pv(n, r, l, o) {
    cl(o), r = No(r, "onChange"), 0 < r.length && (l = new Ls("onChange", "change", null, l, o), n.push({ event: l, listeners: r }));
  }
  var To = null, fu = null;
  function du(n) {
    Ps(n, 0);
  }
  function pu(n) {
    var r = hu(n);
    if (Xr(r)) return n;
  }
  function vv(n, r) {
    if (n === "change") return r;
  }
  var Pf = !1;
  if (Y) {
    var Bf;
    if (Y) {
      var $f = "oninput" in document;
      if (!$f) {
        var hv = document.createElement("div");
        hv.setAttribute("oninput", "return;"), $f = typeof hv.oninput == "function";
      }
      Bf = $f;
    } else Bf = !1;
    Pf = Bf && (!document.documentMode || 9 < document.documentMode);
  }
  function mv() {
    To && (To.detachEvent("onpropertychange", yv), fu = To = null);
  }
  function yv(n) {
    if (n.propertyName === "value" && pu(fu)) {
      var r = [];
      pv(r, fu, n, _t(n)), nu(du, r);
    }
  }
  function fy(n, r, l) {
    n === "focusin" ? (mv(), To = r, fu = l, To.attachEvent("onpropertychange", yv)) : n === "focusout" && mv();
  }
  function dy(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown") return pu(fu);
  }
  function py(n, r) {
    if (n === "click") return pu(r);
  }
  function gv(n, r) {
    if (n === "input" || n === "change") return pu(r);
  }
  function vy(n, r) {
    return n === r && (n !== 0 || 1 / n === 1 / r) || n !== n && r !== r;
  }
  var na = typeof Object.is == "function" ? Object.is : vy;
  function Ro(n, r) {
    if (na(n, r)) return !0;
    if (typeof n != "object" || n === null || typeof r != "object" || r === null) return !1;
    var l = Object.keys(n), o = Object.keys(r);
    if (l.length !== o.length) return !1;
    for (o = 0; o < l.length; o++) {
      var c = l[o];
      if (!V.call(r, c) || !na(n[c], r[c])) return !1;
    }
    return !0;
  }
  function Cv(n) {
    for (; n && n.firstChild; ) n = n.firstChild;
    return n;
  }
  function Sv(n, r) {
    var l = Cv(n);
    n = 0;
    for (var o; l; ) {
      if (l.nodeType === 3) {
        if (o = n + l.textContent.length, n <= r && o >= r) return { node: l, offset: r - n };
        n = o;
      }
      e: {
        for (; l; ) {
          if (l.nextSibling) {
            l = l.nextSibling;
            break e;
          }
          l = l.parentNode;
        }
        l = void 0;
      }
      l = Cv(l);
    }
  }
  function Ev(n, r) {
    return n && r ? n === r ? !0 : n && n.nodeType === 3 ? !1 : r && r.nodeType === 3 ? Ev(n, r.parentNode) : "contains" in n ? n.contains(r) : n.compareDocumentPosition ? !!(n.compareDocumentPosition(r) & 16) : !1 : !1;
  }
  function Hs() {
    for (var n = window, r = gn(); r instanceof n.HTMLIFrameElement; ) {
      try {
        var l = typeof r.contentWindow.location.href == "string";
      } catch {
        l = !1;
      }
      if (l) n = r.contentWindow;
      else break;
      r = gn(n.document);
    }
    return r;
  }
  function ci(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r && (r === "input" && (n.type === "text" || n.type === "search" || n.type === "tel" || n.type === "url" || n.type === "password") || r === "textarea" || n.contentEditable === "true");
  }
  function Fs(n) {
    var r = Hs(), l = n.focusedElem, o = n.selectionRange;
    if (r !== l && l && l.ownerDocument && Ev(l.ownerDocument.documentElement, l)) {
      if (o !== null && ci(l)) {
        if (r = o.start, n = o.end, n === void 0 && (n = r), "selectionStart" in l) l.selectionStart = r, l.selectionEnd = Math.min(n, l.value.length);
        else if (n = (r = l.ownerDocument || document) && r.defaultView || window, n.getSelection) {
          n = n.getSelection();
          var c = l.textContent.length, d = Math.min(o.start, c);
          o = o.end === void 0 ? d : Math.min(o.end, c), !n.extend && d > o && (c = o, o = d, d = c), c = Sv(l, d);
          var m = Sv(
            l,
            o
          );
          c && m && (n.rangeCount !== 1 || n.anchorNode !== c.node || n.anchorOffset !== c.offset || n.focusNode !== m.node || n.focusOffset !== m.offset) && (r = r.createRange(), r.setStart(c.node, c.offset), n.removeAllRanges(), d > o ? (n.addRange(r), n.extend(m.node, m.offset)) : (r.setEnd(m.node, m.offset), n.addRange(r)));
        }
      }
      for (r = [], n = l; n = n.parentNode; ) n.nodeType === 1 && r.push({ element: n, left: n.scrollLeft, top: n.scrollTop });
      for (typeof l.focus == "function" && l.focus(), l = 0; l < r.length; l++) n = r[l], n.element.scrollLeft = n.left, n.element.scrollTop = n.top;
    }
  }
  var xv = Y && "documentMode" in document && 11 >= document.documentMode, Oa = null, If = null, wo = null, Yf = !1;
  function Tv(n, r, l) {
    var o = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    Yf || Oa == null || Oa !== gn(o) || (o = Oa, "selectionStart" in o && ci(o) ? o = { start: o.selectionStart, end: o.selectionEnd } : (o = (o.ownerDocument && o.ownerDocument.defaultView || window).getSelection(), o = { anchorNode: o.anchorNode, anchorOffset: o.anchorOffset, focusNode: o.focusNode, focusOffset: o.focusOffset }), wo && Ro(wo, o) || (wo = o, o = No(If, "onSelect"), 0 < o.length && (r = new Ls("onSelect", "select", null, r, l), n.push({ event: r, listeners: o }), r.target = Oa)));
  }
  function Vs(n, r) {
    var l = {};
    return l[n.toLowerCase()] = r.toLowerCase(), l["Webkit" + n] = "webkit" + r, l["Moz" + n] = "moz" + r, l;
  }
  var gl = { animationend: Vs("Animation", "AnimationEnd"), animationiteration: Vs("Animation", "AnimationIteration"), animationstart: Vs("Animation", "AnimationStart"), transitionend: Vs("Transition", "TransitionEnd") }, Wf = {}, Qf = {};
  Y && (Qf = document.createElement("div").style, "AnimationEvent" in window || (delete gl.animationend.animation, delete gl.animationiteration.animation, delete gl.animationstart.animation), "TransitionEvent" in window || delete gl.transitionend.transition);
  function xn(n) {
    if (Wf[n]) return Wf[n];
    if (!gl[n]) return n;
    var r = gl[n], l;
    for (l in r) if (r.hasOwnProperty(l) && l in Qf) return Wf[n] = r[l];
    return n;
  }
  var Gf = xn("animationend"), Rv = xn("animationiteration"), wv = xn("animationstart"), _v = xn("transitionend"), bv = /* @__PURE__ */ new Map(), Dv = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function fi(n, r) {
    bv.set(n, r), L(r, [n]);
  }
  for (var _o = 0; _o < Dv.length; _o++) {
    var Cl = Dv[_o], hy = Cl.toLowerCase(), bo = Cl[0].toUpperCase() + Cl.slice(1);
    fi(hy, "on" + bo);
  }
  fi(Gf, "onAnimationEnd"), fi(Rv, "onAnimationIteration"), fi(wv, "onAnimationStart"), fi("dblclick", "onDoubleClick"), fi("focusin", "onFocus"), fi("focusout", "onBlur"), fi(_v, "onTransitionEnd"), y("onMouseEnter", ["mouseout", "mouseover"]), y("onMouseLeave", ["mouseout", "mouseover"]), y("onPointerEnter", ["pointerout", "pointerover"]), y("onPointerLeave", ["pointerout", "pointerover"]), L("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), L("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), L("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), L("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), L("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), L("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var Do = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), my = new Set("cancel close invalid load scroll toggle".split(" ").concat(Do));
  function kv(n, r, l) {
    var o = n.type || "unknown-event";
    n.currentTarget = l, ne(o, r, void 0, n), n.currentTarget = null;
  }
  function Ps(n, r) {
    r = (r & 4) !== 0;
    for (var l = 0; l < n.length; l++) {
      var o = n[l], c = o.event;
      o = o.listeners;
      e: {
        var d = void 0;
        if (r) for (var m = o.length - 1; 0 <= m; m--) {
          var x = o[m], w = x.instance, A = x.currentTarget;
          if (x = x.listener, w !== d && c.isPropagationStopped()) break e;
          kv(c, x, A), d = w;
        }
        else for (m = 0; m < o.length; m++) {
          if (x = o[m], w = x.instance, A = x.currentTarget, x = x.listener, w !== d && c.isPropagationStopped()) break e;
          kv(c, x, A), d = w;
        }
      }
    }
    if (Ui) throw n = pl, Ui = !1, pl = null, n;
  }
  function Rt(n, r) {
    var l = r[td];
    l === void 0 && (l = r[td] = /* @__PURE__ */ new Set());
    var o = n + "__bubble";
    l.has(o) || (Nv(r, n, 2, !1), l.add(o));
  }
  function Fi(n, r, l) {
    var o = 0;
    r && (o |= 4), Nv(l, n, o, r);
  }
  var di = "_reactListening" + Math.random().toString(36).slice(2);
  function vu(n) {
    if (!n[di]) {
      n[di] = !0, _.forEach(function(l) {
        l !== "selectionchange" && (my.has(l) || Fi(l, !1, n), Fi(l, !0, n));
      });
      var r = n.nodeType === 9 ? n : n.ownerDocument;
      r === null || r[di] || (r[di] = !0, Fi("selectionchange", !1, r));
    }
  }
  function Nv(n, r, l, o) {
    switch (Of(r)) {
      case 1:
        var c = Kp;
        break;
      case 4:
        c = Ds;
        break;
      default:
        c = ks;
    }
    l = c.bind(null, r, l, n), c = void 0, !ru || r !== "touchstart" && r !== "touchmove" && r !== "wheel" || (c = !0), o ? c !== void 0 ? n.addEventListener(r, l, { capture: !0, passive: c }) : n.addEventListener(r, l, !0) : c !== void 0 ? n.addEventListener(r, l, { passive: c }) : n.addEventListener(r, l, !1);
  }
  function Bs(n, r, l, o, c) {
    var d = o;
    if (!(r & 1) && !(r & 2) && o !== null) e: for (; ; ) {
      if (o === null) return;
      var m = o.tag;
      if (m === 3 || m === 4) {
        var x = o.stateNode.containerInfo;
        if (x === c || x.nodeType === 8 && x.parentNode === c) break;
        if (m === 4) for (m = o.return; m !== null; ) {
          var w = m.tag;
          if ((w === 3 || w === 4) && (w = m.stateNode.containerInfo, w === c || w.nodeType === 8 && w.parentNode === c)) return;
          m = m.return;
        }
        for (; x !== null; ) {
          if (m = ra(x), m === null) return;
          if (w = m.tag, w === 5 || w === 6) {
            o = d = m;
            continue e;
          }
          x = x.parentNode;
        }
      }
      o = o.return;
    }
    nu(function() {
      var A = d, G = _t(l), q = [];
      e: {
        var Q = bv.get(n);
        if (Q !== void 0) {
          var se = Ls, ve = n;
          switch (n) {
            case "keypress":
              if (uu(l) === 0) break e;
            case "keydown":
            case "keyup":
              se = uy;
              break;
            case "focusin":
              ve = "focus", se = Hi;
              break;
            case "focusout":
              ve = "blur", se = Hi;
              break;
            case "beforeblur":
            case "afterblur":
              se = Hi;
              break;
            case "click":
              if (l.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              se = Ms;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              se = nv;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              se = oy;
              break;
            case Gf:
            case Rv:
            case wv:
              se = rv;
              break;
            case _v:
              se = uv;
              break;
            case "scroll":
              se = ev;
              break;
            case "wheel":
              se = si;
              break;
            case "copy":
            case "cut":
            case "paste":
              se = iy;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              se = Us;
          }
          var ye = (r & 4) !== 0, Kt = !ye && n === "scroll", O = ye ? Q !== null ? Q + "Capture" : null : Q;
          ye = [];
          for (var k = A, j; k !== null; ) {
            j = k;
            var J = j.stateNode;
            if (j.tag === 5 && J !== null && (j = J, O !== null && (J = dl(k, O), J != null && ye.push(ko(k, J, j)))), Kt) break;
            k = k.return;
          }
          0 < ye.length && (Q = new se(Q, ve, null, l, G), q.push({ event: Q, listeners: ye }));
        }
      }
      if (!(r & 7)) {
        e: {
          if (Q = n === "mouseover" || n === "pointerover", se = n === "mouseout" || n === "pointerout", Q && l !== pr && (ve = l.relatedTarget || l.fromElement) && (ra(ve) || ve[pi])) break e;
          if ((se || Q) && (Q = G.window === G ? G : (Q = G.ownerDocument) ? Q.defaultView || Q.parentWindow : window, se ? (ve = l.relatedTarget || l.toElement, se = A, ve = ve ? ra(ve) : null, ve !== null && (Kt = xe(ve), ve !== Kt || ve.tag !== 5 && ve.tag !== 6) && (ve = null)) : (se = null, ve = A), se !== ve)) {
            if (ye = Ms, J = "onMouseLeave", O = "onMouseEnter", k = "mouse", (n === "pointerout" || n === "pointerover") && (ye = Us, J = "onPointerLeave", O = "onPointerEnter", k = "pointer"), Kt = se == null ? Q : hu(se), j = ve == null ? Q : hu(ve), Q = new ye(J, k + "leave", se, l, G), Q.target = Kt, Q.relatedTarget = j, J = null, ra(G) === A && (ye = new ye(O, k + "enter", ve, l, G), ye.target = j, ye.relatedTarget = Kt, J = ye), Kt = J, se && ve) t: {
              for (ye = se, O = ve, k = 0, j = ye; j; j = Sl(j)) k++;
              for (j = 0, J = O; J; J = Sl(J)) j++;
              for (; 0 < k - j; ) ye = Sl(ye), k--;
              for (; 0 < j - k; ) O = Sl(O), j--;
              for (; k--; ) {
                if (ye === O || O !== null && ye === O.alternate) break t;
                ye = Sl(ye), O = Sl(O);
              }
              ye = null;
            }
            else ye = null;
            se !== null && Zf(q, Q, se, ye, !1), ve !== null && Kt !== null && Zf(q, Kt, ve, ye, !0);
          }
        }
        e: {
          if (Q = A ? hu(A) : window, se = Q.nodeName && Q.nodeName.toLowerCase(), se === "select" || se === "input" && Q.type === "file") var Ce = vv;
          else if (dv(Q)) if (Pf) Ce = gv;
          else {
            Ce = dy;
            var Le = fy;
          }
          else (se = Q.nodeName) && se.toLowerCase() === "input" && (Q.type === "checkbox" || Q.type === "radio") && (Ce = py);
          if (Ce && (Ce = Ce(n, A))) {
            pv(q, Ce, l, G);
            break e;
          }
          Le && Le(n, Q, A), n === "focusout" && (Le = Q._wrapperState) && Le.controlled && Q.type === "number" && Ta(Q, "number", Q.value);
        }
        switch (Le = A ? hu(A) : window, n) {
          case "focusin":
            (dv(Le) || Le.contentEditable === "true") && (Oa = Le, If = A, wo = null);
            break;
          case "focusout":
            wo = If = Oa = null;
            break;
          case "mousedown":
            Yf = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Yf = !1, Tv(q, l, G);
            break;
          case "selectionchange":
            if (xv) break;
          case "keydown":
          case "keyup":
            Tv(q, l, G);
        }
        var he;
        if (La) e: {
          switch (n) {
            case "compositionstart":
              var Oe = "onCompositionStart";
              break e;
            case "compositionend":
              Oe = "onCompositionEnd";
              break e;
            case "compositionupdate":
              Oe = "onCompositionUpdate";
              break e;
          }
          Oe = void 0;
        }
        else cu ? cv(n, l) && (Oe = "onCompositionEnd") : n === "keydown" && l.keyCode === 229 && (Oe = "onCompositionStart");
        Oe && (ov && l.locale !== "ko" && (cu || Oe !== "onCompositionStart" ? Oe === "onCompositionEnd" && cu && (he = Mf()) : (ui = G, Co = "value" in ui ? ui.value : ui.textContent, cu = !0)), Le = No(A, Oe), 0 < Le.length && (Oe = new zf(Oe, n, null, l, G), q.push({ event: Oe, listeners: Le }), he ? Oe.data = he : (he = As(l), he !== null && (Oe.data = he)))), (he = zs ? sy(n, l) : cy(n, l)) && (A = No(A, "onBeforeInput"), 0 < A.length && (G = new zf("onBeforeInput", "beforeinput", null, l, G), q.push({ event: G, listeners: A }), G.data = he));
      }
      Ps(q, r);
    });
  }
  function ko(n, r, l) {
    return { instance: n, listener: r, currentTarget: l };
  }
  function No(n, r) {
    for (var l = r + "Capture", o = []; n !== null; ) {
      var c = n, d = c.stateNode;
      c.tag === 5 && d !== null && (c = d, d = dl(n, l), d != null && o.unshift(ko(n, d, c)), d = dl(n, r), d != null && o.push(ko(n, d, c))), n = n.return;
    }
    return o;
  }
  function Sl(n) {
    if (n === null) return null;
    do
      n = n.return;
    while (n && n.tag !== 5);
    return n || null;
  }
  function Zf(n, r, l, o, c) {
    for (var d = r._reactName, m = []; l !== null && l !== o; ) {
      var x = l, w = x.alternate, A = x.stateNode;
      if (w !== null && w === o) break;
      x.tag === 5 && A !== null && (x = A, c ? (w = dl(l, d), w != null && m.unshift(ko(l, w, x))) : c || (w = dl(l, d), w != null && m.push(ko(l, w, x)))), l = l.return;
    }
    m.length !== 0 && n.push({ event: r, listeners: m });
  }
  var qf = /\r\n?/g, yy = /\u0000|\uFFFD/g;
  function Xf(n) {
    return (typeof n == "string" ? n : "" + n).replace(qf, `
`).replace(yy, "");
  }
  function $s(n, r, l) {
    if (r = Xf(r), Xf(n) !== r && l) throw Error(g(425));
  }
  function Is() {
  }
  var Kf = null, El = null;
  function Lo(n, r) {
    return n === "textarea" || n === "noscript" || typeof r.children == "string" || typeof r.children == "number" || typeof r.dangerouslySetInnerHTML == "object" && r.dangerouslySetInnerHTML !== null && r.dangerouslySetInnerHTML.__html != null;
  }
  var xl = typeof setTimeout == "function" ? setTimeout : void 0, Lv = typeof clearTimeout == "function" ? clearTimeout : void 0, Jf = typeof Promise == "function" ? Promise : void 0, ed = typeof queueMicrotask == "function" ? queueMicrotask : typeof Jf < "u" ? function(n) {
    return Jf.resolve(null).then(n).catch(gy);
  } : xl;
  function gy(n) {
    setTimeout(function() {
      throw n;
    });
  }
  function Vi(n, r) {
    var l = r, o = 0;
    do {
      var c = l.nextSibling;
      if (n.removeChild(l), c && c.nodeType === 8) if (l = c.data, l === "/$") {
        if (o === 0) {
          n.removeChild(c), yo(r);
          return;
        }
        o--;
      } else l !== "$" && l !== "$?" && l !== "$!" || o++;
      l = c;
    } while (l);
    yo(r);
  }
  function Ma(n) {
    for (; n != null; n = n.nextSibling) {
      var r = n.nodeType;
      if (r === 1 || r === 3) break;
      if (r === 8) {
        if (r = n.data, r === "$" || r === "$!" || r === "$?") break;
        if (r === "/$") return null;
      }
    }
    return n;
  }
  function Oo(n) {
    n = n.previousSibling;
    for (var r = 0; n; ) {
      if (n.nodeType === 8) {
        var l = n.data;
        if (l === "$" || l === "$!" || l === "$?") {
          if (r === 0) return n;
          r--;
        } else l === "/$" && r++;
      }
      n = n.previousSibling;
    }
    return null;
  }
  var Pi = Math.random().toString(36).slice(2), Ya = "__reactFiber$" + Pi, Tl = "__reactProps$" + Pi, pi = "__reactContainer$" + Pi, td = "__reactEvents$" + Pi, Cy = "__reactListeners$" + Pi, nd = "__reactHandles$" + Pi;
  function ra(n) {
    var r = n[Ya];
    if (r) return r;
    for (var l = n.parentNode; l; ) {
      if (r = l[pi] || l[Ya]) {
        if (l = r.alternate, r.child !== null || l !== null && l.child !== null) for (n = Oo(n); n !== null; ) {
          if (l = n[Ya]) return l;
          n = Oo(n);
        }
        return r;
      }
      n = l, l = n.parentNode;
    }
    return null;
  }
  function Mo(n) {
    return n = n[Ya] || n[pi], !n || n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3 ? null : n;
  }
  function hu(n) {
    if (n.tag === 5 || n.tag === 6) return n.stateNode;
    throw Error(g(33));
  }
  function _e(n) {
    return n[Tl] || null;
  }
  var Bi = [], Ot = -1;
  function Ie(n) {
    return { current: n };
  }
  function ft(n) {
    0 > Ot || (n.current = Bi[Ot], Bi[Ot] = null, Ot--);
  }
  function vt(n, r) {
    Ot++, Bi[Ot] = n.current, n.current = r;
  }
  var Wa = {}, je = Ie(Wa), It = Ie(!1), mr = Wa;
  function aa(n, r) {
    var l = n.type.contextTypes;
    if (!l) return Wa;
    var o = n.stateNode;
    if (o && o.__reactInternalMemoizedUnmaskedChildContext === r) return o.__reactInternalMemoizedMaskedChildContext;
    var c = {}, d;
    for (d in l) c[d] = r[d];
    return o && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = r, n.__reactInternalMemoizedMaskedChildContext = c), c;
  }
  function zt(n) {
    return n = n.childContextTypes, n != null;
  }
  function ia() {
    ft(It), ft(je);
  }
  function $i(n, r, l) {
    if (je.current !== Wa) throw Error(g(168));
    vt(je, r), vt(It, l);
  }
  function Uo(n, r, l) {
    var o = n.stateNode;
    if (r = r.childContextTypes, typeof o.getChildContext != "function") return l;
    o = o.getChildContext();
    for (var c in o) if (!(c in r)) throw Error(g(108, qr(n) || "Unknown", c));
    return fe({}, l, o);
  }
  function Ys(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || Wa, mr = je.current, vt(je, n), vt(It, It.current), !0;
  }
  function Ov(n, r, l) {
    var o = n.stateNode;
    if (!o) throw Error(g(169));
    l ? (n = Uo(n, r, mr), o.__reactInternalMemoizedMergedChildContext = n, ft(It), ft(je), vt(je, n)) : ft(It), vt(It, l);
  }
  var Fr = null, Tn = !1, jo = !1;
  function rd(n) {
    Fr === null ? Fr = [n] : Fr.push(n);
  }
  function ad(n) {
    Tn = !0, rd(n);
  }
  function yr() {
    if (!jo && Fr !== null) {
      jo = !0;
      var n = 0, r = gt;
      try {
        var l = Fr;
        for (gt = 1; n < l.length; n++) {
          var o = l[n];
          do
            o = o(!0);
          while (o !== null);
        }
        Fr = null, Tn = !1;
      } catch (c) {
        throw Fr !== null && (Fr = Fr.slice(n + 1)), Lt(Ar, yr), c;
      } finally {
        gt = r, jo = !1;
      }
    }
    return null;
  }
  var Ii = [], gr = 0, Rl = null, mu = 0, Cr = [], Gn = 0, la = null, On = 1, vi = "";
  function Vr(n, r) {
    Ii[gr++] = mu, Ii[gr++] = Rl, Rl = n, mu = r;
  }
  function id(n, r, l) {
    Cr[Gn++] = On, Cr[Gn++] = vi, Cr[Gn++] = la, la = n;
    var o = On;
    n = vi;
    var c = 32 - Jr(o) - 1;
    o &= ~(1 << c), l += 1;
    var d = 32 - Jr(r) + c;
    if (30 < d) {
      var m = c - c % 5;
      d = (o & (1 << m) - 1).toString(32), o >>= m, c -= m, On = 1 << 32 - Jr(r) + c | l << c | o, vi = d + n;
    } else On = 1 << d | l << c | o, vi = n;
  }
  function Ws(n) {
    n.return !== null && (Vr(n, 1), id(n, 1, 0));
  }
  function ld(n) {
    for (; n === Rl; ) Rl = Ii[--gr], Ii[gr] = null, mu = Ii[--gr], Ii[gr] = null;
    for (; n === la; ) la = Cr[--Gn], Cr[Gn] = null, vi = Cr[--Gn], Cr[Gn] = null, On = Cr[--Gn], Cr[Gn] = null;
  }
  var Pr = null, Sr = null, Mt = !1, ua = null;
  function ud(n, r) {
    var l = ha(5, null, null, 0);
    l.elementType = "DELETED", l.stateNode = r, l.return = n, r = n.deletions, r === null ? (n.deletions = [l], n.flags |= 16) : r.push(l);
  }
  function Mv(n, r) {
    switch (n.tag) {
      case 5:
        var l = n.type;
        return r = r.nodeType !== 1 || l.toLowerCase() !== r.nodeName.toLowerCase() ? null : r, r !== null ? (n.stateNode = r, Pr = n, Sr = Ma(r.firstChild), !0) : !1;
      case 6:
        return r = n.pendingProps === "" || r.nodeType !== 3 ? null : r, r !== null ? (n.stateNode = r, Pr = n, Sr = null, !0) : !1;
      case 13:
        return r = r.nodeType !== 8 ? null : r, r !== null ? (l = la !== null ? { id: On, overflow: vi } : null, n.memoizedState = { dehydrated: r, treeContext: l, retryLane: 1073741824 }, l = ha(18, null, null, 0), l.stateNode = r, l.return = n, n.child = l, Pr = n, Sr = null, !0) : !1;
      default:
        return !1;
    }
  }
  function Qs(n) {
    return (n.mode & 1) !== 0 && (n.flags & 128) === 0;
  }
  function Gs(n) {
    if (Mt) {
      var r = Sr;
      if (r) {
        var l = r;
        if (!Mv(n, r)) {
          if (Qs(n)) throw Error(g(418));
          r = Ma(l.nextSibling);
          var o = Pr;
          r && Mv(n, r) ? ud(o, l) : (n.flags = n.flags & -4097 | 2, Mt = !1, Pr = n);
        }
      } else {
        if (Qs(n)) throw Error(g(418));
        n.flags = n.flags & -4097 | 2, Mt = !1, Pr = n;
      }
    }
  }
  function Uv(n) {
    for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; ) n = n.return;
    Pr = n;
  }
  function Zs(n) {
    if (n !== Pr) return !1;
    if (!Mt) return Uv(n), Mt = !0, !1;
    var r;
    if ((r = n.tag !== 3) && !(r = n.tag !== 5) && (r = n.type, r = r !== "head" && r !== "body" && !Lo(n.type, n.memoizedProps)), r && (r = Sr)) {
      if (Qs(n)) throw jv(), Error(g(418));
      for (; r; ) ud(n, r), r = Ma(r.nextSibling);
    }
    if (Uv(n), n.tag === 13) {
      if (n = n.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(g(317));
      e: {
        for (n = n.nextSibling, r = 0; n; ) {
          if (n.nodeType === 8) {
            var l = n.data;
            if (l === "/$") {
              if (r === 0) {
                Sr = Ma(n.nextSibling);
                break e;
              }
              r--;
            } else l !== "$" && l !== "$!" && l !== "$?" || r++;
          }
          n = n.nextSibling;
        }
        Sr = null;
      }
    } else Sr = Pr ? Ma(n.stateNode.nextSibling) : null;
    return !0;
  }
  function jv() {
    for (var n = Sr; n; ) n = Ma(n.nextSibling);
  }
  function Pt() {
    Sr = Pr = null, Mt = !1;
  }
  function od(n) {
    ua === null ? ua = [n] : ua.push(n);
  }
  var qs = Ae.ReactCurrentBatchConfig;
  function wl(n, r, l) {
    if (n = l.ref, n !== null && typeof n != "function" && typeof n != "object") {
      if (l._owner) {
        if (l = l._owner, l) {
          if (l.tag !== 1) throw Error(g(309));
          var o = l.stateNode;
        }
        if (!o) throw Error(g(147, n));
        var c = o, d = "" + n;
        return r !== null && r.ref !== null && typeof r.ref == "function" && r.ref._stringRef === d ? r.ref : (r = function(m) {
          var x = c.refs;
          m === null ? delete x[d] : x[d] = m;
        }, r._stringRef = d, r);
      }
      if (typeof n != "string") throw Error(g(284));
      if (!l._owner) throw Error(g(290, n));
    }
    return n;
  }
  function Qa(n, r) {
    throw n = Object.prototype.toString.call(r), Error(g(31, n === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : n));
  }
  function zv(n) {
    var r = n._init;
    return r(n._payload);
  }
  function Xs(n) {
    function r(O, k) {
      if (n) {
        var j = O.deletions;
        j === null ? (O.deletions = [k], O.flags |= 16) : j.push(k);
      }
    }
    function l(O, k) {
      if (!n) return null;
      for (; k !== null; ) r(O, k), k = k.sibling;
      return null;
    }
    function o(O, k) {
      for (O = /* @__PURE__ */ new Map(); k !== null; ) k.key !== null ? O.set(k.key, k) : O.set(k.index, k), k = k.sibling;
      return O;
    }
    function c(O, k) {
      return O = Ki(O, k), O.index = 0, O.sibling = null, O;
    }
    function d(O, k, j) {
      return O.index = j, n ? (j = O.alternate, j !== null ? (j = j.index, j < k ? (O.flags |= 2, k) : j) : (O.flags |= 2, k)) : (O.flags |= 1048576, k);
    }
    function m(O) {
      return n && O.alternate === null && (O.flags |= 2), O;
    }
    function x(O, k, j, J) {
      return k === null || k.tag !== 6 ? (k = Hc(j, O.mode, J), k.return = O, k) : (k = c(k, j), k.return = O, k);
    }
    function w(O, k, j, J) {
      var Ce = j.type;
      return Ce === $e ? G(O, k, j.props.children, J, j.key) : k !== null && (k.elementType === Ce || typeof Ce == "object" && Ce !== null && Ce.$$typeof === Nt && zv(Ce) === k.type) ? (J = c(k, j.props), J.ref = wl(O, k, j), J.return = O, J) : (J = zc(j.type, j.key, j.props, null, O.mode, J), J.ref = wl(O, k, j), J.return = O, J);
    }
    function A(O, k, j, J) {
      return k === null || k.tag !== 4 || k.stateNode.containerInfo !== j.containerInfo || k.stateNode.implementation !== j.implementation ? (k = Jo(j, O.mode, J), k.return = O, k) : (k = c(k, j.children || []), k.return = O, k);
    }
    function G(O, k, j, J, Ce) {
      return k === null || k.tag !== 7 ? (k = Vl(j, O.mode, J, Ce), k.return = O, k) : (k = c(k, j), k.return = O, k);
    }
    function q(O, k, j) {
      if (typeof k == "string" && k !== "" || typeof k == "number") return k = Hc("" + k, O.mode, j), k.return = O, k;
      if (typeof k == "object" && k !== null) {
        switch (k.$$typeof) {
          case Ye:
            return j = zc(k.type, k.key, k.props, null, O.mode, j), j.ref = wl(O, null, k), j.return = O, j;
          case mt:
            return k = Jo(k, O.mode, j), k.return = O, k;
          case Nt:
            var J = k._init;
            return q(O, J(k._payload), j);
        }
        if (ii(k) || Ne(k)) return k = Vl(k, O.mode, j, null), k.return = O, k;
        Qa(O, k);
      }
      return null;
    }
    function Q(O, k, j, J) {
      var Ce = k !== null ? k.key : null;
      if (typeof j == "string" && j !== "" || typeof j == "number") return Ce !== null ? null : x(O, k, "" + j, J);
      if (typeof j == "object" && j !== null) {
        switch (j.$$typeof) {
          case Ye:
            return j.key === Ce ? w(O, k, j, J) : null;
          case mt:
            return j.key === Ce ? A(O, k, j, J) : null;
          case Nt:
            return Ce = j._init, Q(
              O,
              k,
              Ce(j._payload),
              J
            );
        }
        if (ii(j) || Ne(j)) return Ce !== null ? null : G(O, k, j, J, null);
        Qa(O, j);
      }
      return null;
    }
    function se(O, k, j, J, Ce) {
      if (typeof J == "string" && J !== "" || typeof J == "number") return O = O.get(j) || null, x(k, O, "" + J, Ce);
      if (typeof J == "object" && J !== null) {
        switch (J.$$typeof) {
          case Ye:
            return O = O.get(J.key === null ? j : J.key) || null, w(k, O, J, Ce);
          case mt:
            return O = O.get(J.key === null ? j : J.key) || null, A(k, O, J, Ce);
          case Nt:
            var Le = J._init;
            return se(O, k, j, Le(J._payload), Ce);
        }
        if (ii(J) || Ne(J)) return O = O.get(j) || null, G(k, O, J, Ce, null);
        Qa(k, J);
      }
      return null;
    }
    function ve(O, k, j, J) {
      for (var Ce = null, Le = null, he = k, Oe = k = 0, pn = null; he !== null && Oe < j.length; Oe++) {
        he.index > Oe ? (pn = he, he = null) : pn = he.sibling;
        var ut = Q(O, he, j[Oe], J);
        if (ut === null) {
          he === null && (he = pn);
          break;
        }
        n && he && ut.alternate === null && r(O, he), k = d(ut, k, Oe), Le === null ? Ce = ut : Le.sibling = ut, Le = ut, he = pn;
      }
      if (Oe === j.length) return l(O, he), Mt && Vr(O, Oe), Ce;
      if (he === null) {
        for (; Oe < j.length; Oe++) he = q(O, j[Oe], J), he !== null && (k = d(he, k, Oe), Le === null ? Ce = he : Le.sibling = he, Le = he);
        return Mt && Vr(O, Oe), Ce;
      }
      for (he = o(O, he); Oe < j.length; Oe++) pn = se(he, O, Oe, j[Oe], J), pn !== null && (n && pn.alternate !== null && he.delete(pn.key === null ? Oe : pn.key), k = d(pn, k, Oe), Le === null ? Ce = pn : Le.sibling = pn, Le = pn);
      return n && he.forEach(function(Ei) {
        return r(O, Ei);
      }), Mt && Vr(O, Oe), Ce;
    }
    function ye(O, k, j, J) {
      var Ce = Ne(j);
      if (typeof Ce != "function") throw Error(g(150));
      if (j = Ce.call(j), j == null) throw Error(g(151));
      for (var Le = Ce = null, he = k, Oe = k = 0, pn = null, ut = j.next(); he !== null && !ut.done; Oe++, ut = j.next()) {
        he.index > Oe ? (pn = he, he = null) : pn = he.sibling;
        var Ei = Q(O, he, ut.value, J);
        if (Ei === null) {
          he === null && (he = pn);
          break;
        }
        n && he && Ei.alternate === null && r(O, he), k = d(Ei, k, Oe), Le === null ? Ce = Ei : Le.sibling = Ei, Le = Ei, he = pn;
      }
      if (ut.done) return l(
        O,
        he
      ), Mt && Vr(O, Oe), Ce;
      if (he === null) {
        for (; !ut.done; Oe++, ut = j.next()) ut = q(O, ut.value, J), ut !== null && (k = d(ut, k, Oe), Le === null ? Ce = ut : Le.sibling = ut, Le = ut);
        return Mt && Vr(O, Oe), Ce;
      }
      for (he = o(O, he); !ut.done; Oe++, ut = j.next()) ut = se(he, O, Oe, ut.value, J), ut !== null && (n && ut.alternate !== null && he.delete(ut.key === null ? Oe : ut.key), k = d(ut, k, Oe), Le === null ? Ce = ut : Le.sibling = ut, Le = ut);
      return n && he.forEach(function(Ay) {
        return r(O, Ay);
      }), Mt && Vr(O, Oe), Ce;
    }
    function Kt(O, k, j, J) {
      if (typeof j == "object" && j !== null && j.type === $e && j.key === null && (j = j.props.children), typeof j == "object" && j !== null) {
        switch (j.$$typeof) {
          case Ye:
            e: {
              for (var Ce = j.key, Le = k; Le !== null; ) {
                if (Le.key === Ce) {
                  if (Ce = j.type, Ce === $e) {
                    if (Le.tag === 7) {
                      l(O, Le.sibling), k = c(Le, j.props.children), k.return = O, O = k;
                      break e;
                    }
                  } else if (Le.elementType === Ce || typeof Ce == "object" && Ce !== null && Ce.$$typeof === Nt && zv(Ce) === Le.type) {
                    l(O, Le.sibling), k = c(Le, j.props), k.ref = wl(O, Le, j), k.return = O, O = k;
                    break e;
                  }
                  l(O, Le);
                  break;
                } else r(O, Le);
                Le = Le.sibling;
              }
              j.type === $e ? (k = Vl(j.props.children, O.mode, J, j.key), k.return = O, O = k) : (J = zc(j.type, j.key, j.props, null, O.mode, J), J.ref = wl(O, k, j), J.return = O, O = J);
            }
            return m(O);
          case mt:
            e: {
              for (Le = j.key; k !== null; ) {
                if (k.key === Le) if (k.tag === 4 && k.stateNode.containerInfo === j.containerInfo && k.stateNode.implementation === j.implementation) {
                  l(O, k.sibling), k = c(k, j.children || []), k.return = O, O = k;
                  break e;
                } else {
                  l(O, k);
                  break;
                }
                else r(O, k);
                k = k.sibling;
              }
              k = Jo(j, O.mode, J), k.return = O, O = k;
            }
            return m(O);
          case Nt:
            return Le = j._init, Kt(O, k, Le(j._payload), J);
        }
        if (ii(j)) return ve(O, k, j, J);
        if (Ne(j)) return ye(O, k, j, J);
        Qa(O, j);
      }
      return typeof j == "string" && j !== "" || typeof j == "number" ? (j = "" + j, k !== null && k.tag === 6 ? (l(O, k.sibling), k = c(k, j), k.return = O, O = k) : (l(O, k), k = Hc(j, O.mode, J), k.return = O, O = k), m(O)) : l(O, k);
    }
    return Kt;
  }
  var yu = Xs(!0), Av = Xs(!1), hi = Ie(null), sn = null, re = null, oa = null;
  function Br() {
    oa = re = sn = null;
  }
  function sd(n) {
    var r = hi.current;
    ft(hi), n._currentValue = r;
  }
  function cd(n, r, l) {
    for (; n !== null; ) {
      var o = n.alternate;
      if ((n.childLanes & r) !== r ? (n.childLanes |= r, o !== null && (o.childLanes |= r)) : o !== null && (o.childLanes & r) !== r && (o.childLanes |= r), n === l) break;
      n = n.return;
    }
  }
  function gu(n, r) {
    sn = n, oa = re = null, n = n.dependencies, n !== null && n.firstContext !== null && (n.lanes & r && (Tr = !0), n.firstContext = null);
  }
  function sa(n) {
    var r = n._currentValue;
    if (oa !== n) if (n = { context: n, memoizedValue: r, next: null }, re === null) {
      if (sn === null) throw Error(g(308));
      re = n, sn.dependencies = { lanes: 0, firstContext: n };
    } else re = re.next = n;
    return r;
  }
  var _l = null;
  function rn(n) {
    _l === null ? _l = [n] : _l.push(n);
  }
  function Hv(n, r, l, o) {
    var c = r.interleaved;
    return c === null ? (l.next = l, rn(r)) : (l.next = c.next, c.next = l), r.interleaved = l, mi(n, o);
  }
  function mi(n, r) {
    n.lanes |= r;
    var l = n.alternate;
    for (l !== null && (l.lanes |= r), l = n, n = n.return; n !== null; ) n.childLanes |= r, l = n.alternate, l !== null && (l.childLanes |= r), l = n, n = n.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var Yi = !1;
  function Ks(n) {
    n.updateQueue = { baseState: n.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function Cu(n, r) {
    n = n.updateQueue, r.updateQueue === n && (r.updateQueue = { baseState: n.baseState, firstBaseUpdate: n.firstBaseUpdate, lastBaseUpdate: n.lastBaseUpdate, shared: n.shared, effects: n.effects });
  }
  function Er(n, r) {
    return { eventTime: n, lane: r, tag: 0, payload: null, callback: null, next: null };
  }
  function Wi(n, r, l) {
    var o = n.updateQueue;
    if (o === null) return null;
    if (o = o.shared, Ke & 2) {
      var c = o.pending;
      return c === null ? r.next = r : (r.next = c.next, c.next = r), o.pending = r, mi(n, l);
    }
    return c = o.interleaved, c === null ? (r.next = r, rn(o)) : (r.next = c.next, c.next = r), o.interleaved = r, mi(n, l);
  }
  function Js(n, r, l) {
    if (r = r.updateQueue, r !== null && (r = r.shared, (l & 4194240) !== 0)) {
      var o = r.lanes;
      o &= n.pendingLanes, l |= o, r.lanes = l, po(n, l);
    }
  }
  function Fv(n, r) {
    var l = n.updateQueue, o = n.alternate;
    if (o !== null && (o = o.updateQueue, l === o)) {
      var c = null, d = null;
      if (l = l.firstBaseUpdate, l !== null) {
        do {
          var m = { eventTime: l.eventTime, lane: l.lane, tag: l.tag, payload: l.payload, callback: l.callback, next: null };
          d === null ? c = d = m : d = d.next = m, l = l.next;
        } while (l !== null);
        d === null ? c = d = r : d = d.next = r;
      } else c = d = r;
      l = { baseState: o.baseState, firstBaseUpdate: c, lastBaseUpdate: d, shared: o.shared, effects: o.effects }, n.updateQueue = l;
      return;
    }
    n = l.lastBaseUpdate, n === null ? l.firstBaseUpdate = r : n.next = r, l.lastBaseUpdate = r;
  }
  function ec(n, r, l, o) {
    var c = n.updateQueue;
    Yi = !1;
    var d = c.firstBaseUpdate, m = c.lastBaseUpdate, x = c.shared.pending;
    if (x !== null) {
      c.shared.pending = null;
      var w = x, A = w.next;
      w.next = null, m === null ? d = A : m.next = A, m = w;
      var G = n.alternate;
      G !== null && (G = G.updateQueue, x = G.lastBaseUpdate, x !== m && (x === null ? G.firstBaseUpdate = A : x.next = A, G.lastBaseUpdate = w));
    }
    if (d !== null) {
      var q = c.baseState;
      m = 0, G = A = w = null, x = d;
      do {
        var Q = x.lane, se = x.eventTime;
        if ((o & Q) === Q) {
          G !== null && (G = G.next = {
            eventTime: se,
            lane: 0,
            tag: x.tag,
            payload: x.payload,
            callback: x.callback,
            next: null
          });
          e: {
            var ve = n, ye = x;
            switch (Q = r, se = l, ye.tag) {
              case 1:
                if (ve = ye.payload, typeof ve == "function") {
                  q = ve.call(se, q, Q);
                  break e;
                }
                q = ve;
                break e;
              case 3:
                ve.flags = ve.flags & -65537 | 128;
              case 0:
                if (ve = ye.payload, Q = typeof ve == "function" ? ve.call(se, q, Q) : ve, Q == null) break e;
                q = fe({}, q, Q);
                break e;
              case 2:
                Yi = !0;
            }
          }
          x.callback !== null && x.lane !== 0 && (n.flags |= 64, Q = c.effects, Q === null ? c.effects = [x] : Q.push(x));
        } else se = { eventTime: se, lane: Q, tag: x.tag, payload: x.payload, callback: x.callback, next: null }, G === null ? (A = G = se, w = q) : G = G.next = se, m |= Q;
        if (x = x.next, x === null) {
          if (x = c.shared.pending, x === null) break;
          Q = x, x = Q.next, Q.next = null, c.lastBaseUpdate = Q, c.shared.pending = null;
        }
      } while (!0);
      if (G === null && (w = q), c.baseState = w, c.firstBaseUpdate = A, c.lastBaseUpdate = G, r = c.shared.interleaved, r !== null) {
        c = r;
        do
          m |= c.lane, c = c.next;
        while (c !== r);
      } else d === null && (c.shared.lanes = 0);
      zl |= m, n.lanes = m, n.memoizedState = q;
    }
  }
  function Vv(n, r, l) {
    if (n = r.effects, r.effects = null, n !== null) for (r = 0; r < n.length; r++) {
      var o = n[r], c = o.callback;
      if (c !== null) {
        if (o.callback = null, o = l, typeof c != "function") throw Error(g(191, c));
        c.call(o);
      }
    }
  }
  var zo = {}, Ua = Ie(zo), Su = Ie(zo), Ao = Ie(zo);
  function bl(n) {
    if (n === zo) throw Error(g(174));
    return n;
  }
  function fd(n, r) {
    switch (vt(Ao, r), vt(Su, n), vt(Ua, zo), n = r.nodeType, n) {
      case 9:
      case 11:
        r = (r = r.documentElement) ? r.namespaceURI : en(null, "");
        break;
      default:
        n = n === 8 ? r.parentNode : r, r = n.namespaceURI || null, n = n.tagName, r = en(r, n);
    }
    ft(Ua), vt(Ua, r);
  }
  function Eu() {
    ft(Ua), ft(Su), ft(Ao);
  }
  function Pv(n) {
    bl(Ao.current);
    var r = bl(Ua.current), l = en(r, n.type);
    r !== l && (vt(Su, n), vt(Ua, l));
  }
  function dd(n) {
    Su.current === n && (ft(Ua), ft(Su));
  }
  var At = Ie(0);
  function tc(n) {
    for (var r = n; r !== null; ) {
      if (r.tag === 13) {
        var l = r.memoizedState;
        if (l !== null && (l = l.dehydrated, l === null || l.data === "$?" || l.data === "$!")) return r;
      } else if (r.tag === 19 && r.memoizedProps.revealOrder !== void 0) {
        if (r.flags & 128) return r;
      } else if (r.child !== null) {
        r.child.return = r, r = r.child;
        continue;
      }
      if (r === n) break;
      for (; r.sibling === null; ) {
        if (r.return === null || r.return === n) return null;
        r = r.return;
      }
      r.sibling.return = r.return, r = r.sibling;
    }
    return null;
  }
  var nc = [];
  function pd() {
    for (var n = 0; n < nc.length; n++) nc[n]._workInProgressVersionPrimary = null;
    nc.length = 0;
  }
  var rc = Ae.ReactCurrentDispatcher, Ho = Ae.ReactCurrentBatchConfig, ge = 0, Se = null, ze = null, Xe = null, $r = !1, xu = !1, Fo = 0, Sy = 0;
  function Zn() {
    throw Error(g(321));
  }
  function Vo(n, r) {
    if (r === null) return !1;
    for (var l = 0; l < r.length && l < n.length; l++) if (!na(n[l], r[l])) return !1;
    return !0;
  }
  function W(n, r, l, o, c, d) {
    if (ge = d, Se = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, rc.current = n === null || n.memoizedState === null ? Ey : Dt, n = l(o, c), xu) {
      d = 0;
      do {
        if (xu = !1, Fo = 0, 25 <= d) throw Error(g(301));
        d += 1, Xe = ze = null, r.updateQueue = null, rc.current = gc, n = l(o, c);
      } while (xu);
    }
    if (rc.current = qn, r = ze !== null && ze.next !== null, ge = 0, Xe = ze = Se = null, $r = !1, r) throw Error(g(300));
    return n;
  }
  function an() {
    var n = Fo !== 0;
    return Fo = 0, n;
  }
  function Te() {
    var n = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return Xe === null ? Se.memoizedState = Xe = n : Xe = Xe.next = n, Xe;
  }
  function Mn() {
    if (ze === null) {
      var n = Se.alternate;
      n = n !== null ? n.memoizedState : null;
    } else n = ze.next;
    var r = Xe === null ? Se.memoizedState : Xe.next;
    if (r !== null) Xe = r, ze = n;
    else {
      if (n === null) throw Error(g(310));
      ze = n, n = { memoizedState: ze.memoizedState, baseState: ze.baseState, baseQueue: ze.baseQueue, queue: ze.queue, next: null }, Xe === null ? Se.memoizedState = Xe = n : Xe = Xe.next = n;
    }
    return Xe;
  }
  function Ir(n, r) {
    return typeof r == "function" ? r(n) : r;
  }
  function yi(n) {
    var r = Mn(), l = r.queue;
    if (l === null) throw Error(g(311));
    l.lastRenderedReducer = n;
    var o = ze, c = o.baseQueue, d = l.pending;
    if (d !== null) {
      if (c !== null) {
        var m = c.next;
        c.next = d.next, d.next = m;
      }
      o.baseQueue = c = d, l.pending = null;
    }
    if (c !== null) {
      d = c.next, o = o.baseState;
      var x = m = null, w = null, A = d;
      do {
        var G = A.lane;
        if ((ge & G) === G) w !== null && (w = w.next = { lane: 0, action: A.action, hasEagerState: A.hasEagerState, eagerState: A.eagerState, next: null }), o = A.hasEagerState ? A.eagerState : n(o, A.action);
        else {
          var q = {
            lane: G,
            action: A.action,
            hasEagerState: A.hasEagerState,
            eagerState: A.eagerState,
            next: null
          };
          w === null ? (x = w = q, m = o) : w = w.next = q, Se.lanes |= G, zl |= G;
        }
        A = A.next;
      } while (A !== null && A !== d);
      w === null ? m = o : w.next = x, na(o, r.memoizedState) || (Tr = !0), r.memoizedState = o, r.baseState = m, r.baseQueue = w, l.lastRenderedState = o;
    }
    if (n = l.interleaved, n !== null) {
      c = n;
      do
        d = c.lane, Se.lanes |= d, zl |= d, c = c.next;
      while (c !== n);
    } else c === null && (l.lanes = 0);
    return [r.memoizedState, l.dispatch];
  }
  function ca(n) {
    var r = Mn(), l = r.queue;
    if (l === null) throw Error(g(311));
    l.lastRenderedReducer = n;
    var o = l.dispatch, c = l.pending, d = r.memoizedState;
    if (c !== null) {
      l.pending = null;
      var m = c = c.next;
      do
        d = n(d, m.action), m = m.next;
      while (m !== c);
      na(d, r.memoizedState) || (Tr = !0), r.memoizedState = d, r.baseQueue === null && (r.baseState = d), l.lastRenderedState = d;
    }
    return [d, o];
  }
  function Tu() {
  }
  function Dl(n, r) {
    var l = Se, o = Mn(), c = r(), d = !na(o.memoizedState, c);
    if (d && (o.memoizedState = c, Tr = !0), o = o.queue, Po(ic.bind(null, l, o, n), [n]), o.getSnapshot !== r || d || Xe !== null && Xe.memoizedState.tag & 1) {
      if (l.flags |= 2048, kl(9, ac.bind(null, l, o, c, r), void 0, null), Wt === null) throw Error(g(349));
      ge & 30 || Ru(l, r, c);
    }
    return c;
  }
  function Ru(n, r, l) {
    n.flags |= 16384, n = { getSnapshot: r, value: l }, r = Se.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, Se.updateQueue = r, r.stores = [n]) : (l = r.stores, l === null ? r.stores = [n] : l.push(n));
  }
  function ac(n, r, l, o) {
    r.value = l, r.getSnapshot = o, lc(r) && uc(n);
  }
  function ic(n, r, l) {
    return l(function() {
      lc(r) && uc(n);
    });
  }
  function lc(n) {
    var r = n.getSnapshot;
    n = n.value;
    try {
      var l = r();
      return !na(n, l);
    } catch {
      return !0;
    }
  }
  function uc(n) {
    var r = mi(n, 1);
    r !== null && Bt(r, n, 1, -1);
  }
  function oc(n) {
    var r = Te();
    return typeof n == "function" && (n = n()), r.memoizedState = r.baseState = n, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Ir, lastRenderedState: n }, r.queue = n, n = n.dispatch = Bo.bind(null, Se, n), [r.memoizedState, n];
  }
  function kl(n, r, l, o) {
    return n = { tag: n, create: r, destroy: l, deps: o, next: null }, r = Se.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, Se.updateQueue = r, r.lastEffect = n.next = n) : (l = r.lastEffect, l === null ? r.lastEffect = n.next = n : (o = l.next, l.next = n, n.next = o, r.lastEffect = n)), n;
  }
  function sc() {
    return Mn().memoizedState;
  }
  function wu(n, r, l, o) {
    var c = Te();
    Se.flags |= n, c.memoizedState = kl(1 | r, l, void 0, o === void 0 ? null : o);
  }
  function _u(n, r, l, o) {
    var c = Mn();
    o = o === void 0 ? null : o;
    var d = void 0;
    if (ze !== null) {
      var m = ze.memoizedState;
      if (d = m.destroy, o !== null && Vo(o, m.deps)) {
        c.memoizedState = kl(r, l, d, o);
        return;
      }
    }
    Se.flags |= n, c.memoizedState = kl(1 | r, l, d, o);
  }
  function cc(n, r) {
    return wu(8390656, 8, n, r);
  }
  function Po(n, r) {
    return _u(2048, 8, n, r);
  }
  function fc(n, r) {
    return _u(4, 2, n, r);
  }
  function dc(n, r) {
    return _u(4, 4, n, r);
  }
  function pc(n, r) {
    if (typeof r == "function") return n = n(), r(n), function() {
      r(null);
    };
    if (r != null) return n = n(), r.current = n, function() {
      r.current = null;
    };
  }
  function vc(n, r, l) {
    return l = l != null ? l.concat([n]) : null, _u(4, 4, pc.bind(null, r, n), l);
  }
  function bu() {
  }
  function Nl(n, r) {
    var l = Mn();
    r = r === void 0 ? null : r;
    var o = l.memoizedState;
    return o !== null && r !== null && Vo(r, o[1]) ? o[0] : (l.memoizedState = [n, r], n);
  }
  function hc(n, r) {
    var l = Mn();
    r = r === void 0 ? null : r;
    var o = l.memoizedState;
    return o !== null && r !== null && Vo(r, o[1]) ? o[0] : (n = n(), l.memoizedState = [n, r], n);
  }
  function mc(n, r, l) {
    return ge & 21 ? (na(l, r) || (l = _s(), Se.lanes |= l, zl |= l, n.baseState = !0), r) : (n.baseState && (n.baseState = !1, Tr = !0), n.memoizedState = l);
  }
  function vd(n, r) {
    var l = gt;
    gt = l !== 0 && 4 > l ? l : 4, n(!0);
    var o = Ho.transition;
    Ho.transition = {};
    try {
      n(!1), r();
    } finally {
      gt = l, Ho.transition = o;
    }
  }
  function yc() {
    return Mn().memoizedState;
  }
  function Bv(n, r, l) {
    var o = Si(n);
    if (l = { lane: o, action: l, hasEagerState: !1, eagerState: null, next: null }, hd(n)) Du(r, l);
    else if (l = Hv(n, r, l, o), l !== null) {
      var c = _n();
      Bt(l, n, o, c), Qi(l, r, o);
    }
  }
  function Bo(n, r, l) {
    var o = Si(n), c = { lane: o, action: l, hasEagerState: !1, eagerState: null, next: null };
    if (hd(n)) Du(r, c);
    else {
      var d = n.alternate;
      if (n.lanes === 0 && (d === null || d.lanes === 0) && (d = r.lastRenderedReducer, d !== null)) try {
        var m = r.lastRenderedState, x = d(m, l);
        if (c.hasEagerState = !0, c.eagerState = x, na(x, m)) {
          var w = r.interleaved;
          w === null ? (c.next = c, rn(r)) : (c.next = w.next, w.next = c), r.interleaved = c;
          return;
        }
      } catch {
      } finally {
      }
      l = Hv(n, r, c, o), l !== null && (c = _n(), Bt(l, n, o, c), Qi(l, r, o));
    }
  }
  function hd(n) {
    var r = n.alternate;
    return n === Se || r !== null && r === Se;
  }
  function Du(n, r) {
    xu = $r = !0;
    var l = n.pending;
    l === null ? r.next = r : (r.next = l.next, l.next = r), n.pending = r;
  }
  function Qi(n, r, l) {
    if (l & 4194240) {
      var o = r.lanes;
      o &= n.pendingLanes, l |= o, r.lanes = l, po(n, l);
    }
  }
  var qn = { readContext: sa, useCallback: Zn, useContext: Zn, useEffect: Zn, useImperativeHandle: Zn, useInsertionEffect: Zn, useLayoutEffect: Zn, useMemo: Zn, useReducer: Zn, useRef: Zn, useState: Zn, useDebugValue: Zn, useDeferredValue: Zn, useTransition: Zn, useMutableSource: Zn, useSyncExternalStore: Zn, useId: Zn, unstable_isNewReconciler: !1 }, Ey = { readContext: sa, useCallback: function(n, r) {
    return Te().memoizedState = [n, r === void 0 ? null : r], n;
  }, useContext: sa, useEffect: cc, useImperativeHandle: function(n, r, l) {
    return l = l != null ? l.concat([n]) : null, wu(
      4194308,
      4,
      pc.bind(null, r, n),
      l
    );
  }, useLayoutEffect: function(n, r) {
    return wu(4194308, 4, n, r);
  }, useInsertionEffect: function(n, r) {
    return wu(4, 2, n, r);
  }, useMemo: function(n, r) {
    var l = Te();
    return r = r === void 0 ? null : r, n = n(), l.memoizedState = [n, r], n;
  }, useReducer: function(n, r, l) {
    var o = Te();
    return r = l !== void 0 ? l(r) : r, o.memoizedState = o.baseState = r, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: n, lastRenderedState: r }, o.queue = n, n = n.dispatch = Bv.bind(null, Se, n), [o.memoizedState, n];
  }, useRef: function(n) {
    var r = Te();
    return n = { current: n }, r.memoizedState = n;
  }, useState: oc, useDebugValue: bu, useDeferredValue: function(n) {
    return Te().memoizedState = n;
  }, useTransition: function() {
    var n = oc(!1), r = n[0];
    return n = vd.bind(null, n[1]), Te().memoizedState = n, [r, n];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(n, r, l) {
    var o = Se, c = Te();
    if (Mt) {
      if (l === void 0) throw Error(g(407));
      l = l();
    } else {
      if (l = r(), Wt === null) throw Error(g(349));
      ge & 30 || Ru(o, r, l);
    }
    c.memoizedState = l;
    var d = { value: l, getSnapshot: r };
    return c.queue = d, cc(ic.bind(
      null,
      o,
      d,
      n
    ), [n]), o.flags |= 2048, kl(9, ac.bind(null, o, d, l, r), void 0, null), l;
  }, useId: function() {
    var n = Te(), r = Wt.identifierPrefix;
    if (Mt) {
      var l = vi, o = On;
      l = (o & ~(1 << 32 - Jr(o) - 1)).toString(32) + l, r = ":" + r + "R" + l, l = Fo++, 0 < l && (r += "H" + l.toString(32)), r += ":";
    } else l = Sy++, r = ":" + r + "r" + l.toString(32) + ":";
    return n.memoizedState = r;
  }, unstable_isNewReconciler: !1 }, Dt = {
    readContext: sa,
    useCallback: Nl,
    useContext: sa,
    useEffect: Po,
    useImperativeHandle: vc,
    useInsertionEffect: fc,
    useLayoutEffect: dc,
    useMemo: hc,
    useReducer: yi,
    useRef: sc,
    useState: function() {
      return yi(Ir);
    },
    useDebugValue: bu,
    useDeferredValue: function(n) {
      var r = Mn();
      return mc(r, ze.memoizedState, n);
    },
    useTransition: function() {
      var n = yi(Ir)[0], r = Mn().memoizedState;
      return [n, r];
    },
    useMutableSource: Tu,
    useSyncExternalStore: Dl,
    useId: yc,
    unstable_isNewReconciler: !1
  }, gc = { readContext: sa, useCallback: Nl, useContext: sa, useEffect: Po, useImperativeHandle: vc, useInsertionEffect: fc, useLayoutEffect: dc, useMemo: hc, useReducer: ca, useRef: sc, useState: function() {
    return ca(Ir);
  }, useDebugValue: bu, useDeferredValue: function(n) {
    var r = Mn();
    return ze === null ? r.memoizedState = n : mc(r, ze.memoizedState, n);
  }, useTransition: function() {
    var n = ca(Ir)[0], r = Mn().memoizedState;
    return [n, r];
  }, useMutableSource: Tu, useSyncExternalStore: Dl, useId: yc, unstable_isNewReconciler: !1 };
  function xr(n, r) {
    if (n && n.defaultProps) {
      r = fe({}, r), n = n.defaultProps;
      for (var l in n) r[l] === void 0 && (r[l] = n[l]);
      return r;
    }
    return r;
  }
  function Ll(n, r, l, o) {
    r = n.memoizedState, l = l(o, r), l = l == null ? r : fe({}, r, l), n.memoizedState = l, n.lanes === 0 && (n.updateQueue.baseState = l);
  }
  var Ol = { isMounted: function(n) {
    return (n = n._reactInternals) ? xe(n) === n : !1;
  }, enqueueSetState: function(n, r, l) {
    n = n._reactInternals;
    var o = _n(), c = Si(n), d = Er(o, c);
    d.payload = r, l != null && (d.callback = l), r = Wi(n, d, c), r !== null && (Bt(r, n, c, o), Js(r, n, c));
  }, enqueueReplaceState: function(n, r, l) {
    n = n._reactInternals;
    var o = _n(), c = Si(n), d = Er(o, c);
    d.tag = 1, d.payload = r, l != null && (d.callback = l), r = Wi(n, d, c), r !== null && (Bt(r, n, c, o), Js(r, n, c));
  }, enqueueForceUpdate: function(n, r) {
    n = n._reactInternals;
    var l = _n(), o = Si(n), c = Er(l, o);
    c.tag = 2, r != null && (c.callback = r), r = Wi(n, c, o), r !== null && (Bt(r, n, o, l), Js(r, n, o));
  } };
  function $v(n, r, l, o, c, d, m) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(o, d, m) : r.prototype && r.prototype.isPureReactComponent ? !Ro(l, o) || !Ro(c, d) : !0;
  }
  function Iv(n, r, l) {
    var o = !1, c = Wa, d = r.contextType;
    return typeof d == "object" && d !== null ? d = sa(d) : (c = zt(r) ? mr : je.current, o = r.contextTypes, d = (o = o != null) ? aa(n, c) : Wa), r = new r(l, d), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = Ol, n.stateNode = r, r._reactInternals = n, o && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = c, n.__reactInternalMemoizedMaskedChildContext = d), r;
  }
  function Yv(n, r, l, o) {
    n = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(l, o), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(l, o), r.state !== n && Ol.enqueueReplaceState(r, r.state, null);
  }
  function md(n, r, l, o) {
    var c = n.stateNode;
    c.props = l, c.state = n.memoizedState, c.refs = {}, Ks(n);
    var d = r.contextType;
    typeof d == "object" && d !== null ? c.context = sa(d) : (d = zt(r) ? mr : je.current, c.context = aa(n, d)), c.state = n.memoizedState, d = r.getDerivedStateFromProps, typeof d == "function" && (Ll(n, r, d, l), c.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof c.getSnapshotBeforeUpdate == "function" || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (r = c.state, typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount(), r !== c.state && Ol.enqueueReplaceState(c, c.state, null), ec(n, l, c, o), c.state = n.memoizedState), typeof c.componentDidMount == "function" && (n.flags |= 4194308);
  }
  function Gi(n, r) {
    try {
      var l = "", o = r;
      do
        l += Fa(o), o = o.return;
      while (o);
      var c = l;
    } catch (d) {
      c = `
Error generating stack: ` + d.message + `
` + d.stack;
    }
    return { value: n, source: r, stack: c, digest: null };
  }
  function yd(n, r, l) {
    return { value: n, source: null, stack: l ?? null, digest: r ?? null };
  }
  function $o(n, r) {
    try {
      console.error(r.value);
    } catch (l) {
      setTimeout(function() {
        throw l;
      });
    }
  }
  var Wv = typeof WeakMap == "function" ? WeakMap : Map;
  function Qv(n, r, l) {
    l = Er(-1, l), l.tag = 3, l.payload = { element: null };
    var o = r.value;
    return l.callback = function() {
      Nc || (Nc = !0, _d = o), $o(n, r);
    }, l;
  }
  function Gv(n, r, l) {
    l = Er(-1, l), l.tag = 3;
    var o = n.type.getDerivedStateFromError;
    if (typeof o == "function") {
      var c = r.value;
      l.payload = function() {
        return o(c);
      }, l.callback = function() {
        $o(n, r);
      };
    }
    var d = n.stateNode;
    return d !== null && typeof d.componentDidCatch == "function" && (l.callback = function() {
      $o(n, r), typeof o != "function" && (pa === null ? pa = /* @__PURE__ */ new Set([this]) : pa.add(this));
      var m = r.stack;
      this.componentDidCatch(r.value, { componentStack: m !== null ? m : "" });
    }), l;
  }
  function Io(n, r, l) {
    var o = n.pingCache;
    if (o === null) {
      o = n.pingCache = new Wv();
      var c = /* @__PURE__ */ new Set();
      o.set(r, c);
    } else c = o.get(r), c === void 0 && (c = /* @__PURE__ */ new Set(), o.set(r, c));
    c.has(l) || (c.add(l), n = Ly.bind(null, n, r, l), r.then(n, n));
  }
  function Zv(n) {
    do {
      var r;
      if ((r = n.tag === 13) && (r = n.memoizedState, r = r !== null ? r.dehydrated !== null : !0), r) return n;
      n = n.return;
    } while (n !== null);
    return null;
  }
  function gd(n, r, l, o, c) {
    return n.mode & 1 ? (n.flags |= 65536, n.lanes = c, n) : (n === r ? n.flags |= 65536 : (n.flags |= 128, l.flags |= 131072, l.flags &= -52805, l.tag === 1 && (l.alternate === null ? l.tag = 17 : (r = Er(-1, 1), r.tag = 2, Wi(l, r, 1))), l.lanes |= 1), n);
  }
  var qv = Ae.ReactCurrentOwner, Tr = !1;
  function qt(n, r, l, o) {
    r.child = n === null ? Av(r, null, l, o) : yu(r, n.child, l, o);
  }
  function ku(n, r, l, o, c) {
    l = l.render;
    var d = r.ref;
    return gu(r, c), o = W(n, r, l, o, d, c), l = an(), n !== null && !Tr ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, Xt(n, r, c)) : (Mt && l && Ws(r), r.flags |= 1, qt(n, r, o, c), r.child);
  }
  function Zi(n, r, l, o, c) {
    if (n === null) {
      var d = l.type;
      return typeof d == "function" && !Ld(d) && d.defaultProps === void 0 && l.compare === null && l.defaultProps === void 0 ? (r.tag = 15, r.type = d, Cc(n, r, d, o, c)) : (n = zc(l.type, null, o, r, r.mode, c), n.ref = r.ref, n.return = r, r.child = n);
    }
    if (d = n.child, !(n.lanes & c)) {
      var m = d.memoizedProps;
      if (l = l.compare, l = l !== null ? l : Ro, l(m, o) && n.ref === r.ref) return Xt(n, r, c);
    }
    return r.flags |= 1, n = Ki(d, o), n.ref = r.ref, n.return = r, r.child = n;
  }
  function Cc(n, r, l, o, c) {
    if (n !== null) {
      var d = n.memoizedProps;
      if (Ro(d, o) && n.ref === r.ref) if (Tr = !1, r.pendingProps = o = d, (n.lanes & c) !== 0) n.flags & 131072 && (Tr = !0);
      else return r.lanes = n.lanes, Xt(n, r, c);
    }
    return Be(n, r, l, o, c);
  }
  function Rr(n, r, l) {
    var o = r.pendingProps, c = o.children, d = n !== null ? n.memoizedState : null;
    if (o.mode === "hidden") if (!(r.mode & 1)) r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, vt(Fu, wr), wr |= l;
    else {
      if (!(l & 1073741824)) return n = d !== null ? d.baseLanes | l : l, r.lanes = r.childLanes = 1073741824, r.memoizedState = { baseLanes: n, cachePool: null, transitions: null }, r.updateQueue = null, vt(Fu, wr), wr |= n, null;
      r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, o = d !== null ? d.baseLanes : l, vt(Fu, wr), wr |= o;
    }
    else d !== null ? (o = d.baseLanes | l, r.memoizedState = null) : o = l, vt(Fu, wr), wr |= o;
    return qt(n, r, c, l), r.child;
  }
  function Ml(n, r) {
    var l = r.ref;
    (n === null && l !== null || n !== null && n.ref !== l) && (r.flags |= 512, r.flags |= 2097152);
  }
  function Be(n, r, l, o, c) {
    var d = zt(l) ? mr : je.current;
    return d = aa(r, d), gu(r, c), l = W(n, r, l, o, d, c), o = an(), n !== null && !Tr ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, Xt(n, r, c)) : (Mt && o && Ws(r), r.flags |= 1, qt(n, r, l, c), r.child);
  }
  function Yo(n, r, l, o, c) {
    if (zt(l)) {
      var d = !0;
      Ys(r);
    } else d = !1;
    if (gu(r, c), r.stateNode === null) Qo(n, r), Iv(r, l, o), md(r, l, o, c), o = !0;
    else if (n === null) {
      var m = r.stateNode, x = r.memoizedProps;
      m.props = x;
      var w = m.context, A = l.contextType;
      typeof A == "object" && A !== null ? A = sa(A) : (A = zt(l) ? mr : je.current, A = aa(r, A));
      var G = l.getDerivedStateFromProps, q = typeof G == "function" || typeof m.getSnapshotBeforeUpdate == "function";
      q || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (x !== o || w !== A) && Yv(r, m, o, A), Yi = !1;
      var Q = r.memoizedState;
      m.state = Q, ec(r, o, m, c), w = r.memoizedState, x !== o || Q !== w || It.current || Yi ? (typeof G == "function" && (Ll(r, l, G, o), w = r.memoizedState), (x = Yi || $v(r, l, x, o, Q, w, A)) ? (q || typeof m.UNSAFE_componentWillMount != "function" && typeof m.componentWillMount != "function" || (typeof m.componentWillMount == "function" && m.componentWillMount(), typeof m.UNSAFE_componentWillMount == "function" && m.UNSAFE_componentWillMount()), typeof m.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof m.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = o, r.memoizedState = w), m.props = o, m.state = w, m.context = A, o = x) : (typeof m.componentDidMount == "function" && (r.flags |= 4194308), o = !1);
    } else {
      m = r.stateNode, Cu(n, r), x = r.memoizedProps, A = r.type === r.elementType ? x : xr(r.type, x), m.props = A, q = r.pendingProps, Q = m.context, w = l.contextType, typeof w == "object" && w !== null ? w = sa(w) : (w = zt(l) ? mr : je.current, w = aa(r, w));
      var se = l.getDerivedStateFromProps;
      (G = typeof se == "function" || typeof m.getSnapshotBeforeUpdate == "function") || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (x !== q || Q !== w) && Yv(r, m, o, w), Yi = !1, Q = r.memoizedState, m.state = Q, ec(r, o, m, c);
      var ve = r.memoizedState;
      x !== q || Q !== ve || It.current || Yi ? (typeof se == "function" && (Ll(r, l, se, o), ve = r.memoizedState), (A = Yi || $v(r, l, A, o, Q, ve, w) || !1) ? (G || typeof m.UNSAFE_componentWillUpdate != "function" && typeof m.componentWillUpdate != "function" || (typeof m.componentWillUpdate == "function" && m.componentWillUpdate(o, ve, w), typeof m.UNSAFE_componentWillUpdate == "function" && m.UNSAFE_componentWillUpdate(o, ve, w)), typeof m.componentDidUpdate == "function" && (r.flags |= 4), typeof m.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof m.componentDidUpdate != "function" || x === n.memoizedProps && Q === n.memoizedState || (r.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || x === n.memoizedProps && Q === n.memoizedState || (r.flags |= 1024), r.memoizedProps = o, r.memoizedState = ve), m.props = o, m.state = ve, m.context = w, o = A) : (typeof m.componentDidUpdate != "function" || x === n.memoizedProps && Q === n.memoizedState || (r.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || x === n.memoizedProps && Q === n.memoizedState || (r.flags |= 1024), o = !1);
    }
    return Sc(n, r, l, o, d, c);
  }
  function Sc(n, r, l, o, c, d) {
    Ml(n, r);
    var m = (r.flags & 128) !== 0;
    if (!o && !m) return c && Ov(r, l, !1), Xt(n, r, d);
    o = r.stateNode, qv.current = r;
    var x = m && typeof l.getDerivedStateFromError != "function" ? null : o.render();
    return r.flags |= 1, n !== null && m ? (r.child = yu(r, n.child, null, d), r.child = yu(r, null, x, d)) : qt(n, r, x, d), r.memoizedState = o.state, c && Ov(r, l, !0), r.child;
  }
  function xy(n) {
    var r = n.stateNode;
    r.pendingContext ? $i(n, r.pendingContext, r.pendingContext !== r.context) : r.context && $i(n, r.context, !1), fd(n, r.containerInfo);
  }
  function Xv(n, r, l, o, c) {
    return Pt(), od(c), r.flags |= 256, qt(n, r, l, o), r.child;
  }
  var Wo = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Ul(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function Kv(n, r, l) {
    var o = r.pendingProps, c = At.current, d = !1, m = (r.flags & 128) !== 0, x;
    if ((x = m) || (x = n !== null && n.memoizedState === null ? !1 : (c & 2) !== 0), x ? (d = !0, r.flags &= -129) : (n === null || n.memoizedState !== null) && (c |= 1), vt(At, c & 1), n === null)
      return Gs(r), n = r.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? (r.mode & 1 ? n.data === "$!" ? r.lanes = 8 : r.lanes = 1073741824 : r.lanes = 1, null) : (m = o.children, n = o.fallback, d ? (o = r.mode, d = r.child, m = { mode: "hidden", children: m }, !(o & 1) && d !== null ? (d.childLanes = 0, d.pendingProps = m) : d = Ac(m, o, 0, null), n = Vl(n, o, l, null), d.return = r, n.return = r, d.sibling = n, r.child = d, r.child.memoizedState = Ul(l), r.memoizedState = Wo, n) : Ec(r, m));
    if (c = n.memoizedState, c !== null && (x = c.dehydrated, x !== null)) return Cd(n, r, m, o, x, c, l);
    if (d) {
      d = o.fallback, m = r.mode, c = n.child, x = c.sibling;
      var w = { mode: "hidden", children: o.children };
      return !(m & 1) && r.child !== c ? (o = r.child, o.childLanes = 0, o.pendingProps = w, r.deletions = null) : (o = Ki(c, w), o.subtreeFlags = c.subtreeFlags & 14680064), x !== null ? d = Ki(x, d) : (d = Vl(d, m, l, null), d.flags |= 2), d.return = r, o.return = r, o.sibling = d, r.child = o, o = d, d = r.child, m = n.child.memoizedState, m = m === null ? Ul(l) : { baseLanes: m.baseLanes | l, cachePool: null, transitions: m.transitions }, d.memoizedState = m, d.childLanes = n.childLanes & ~l, r.memoizedState = Wo, o;
    }
    return d = n.child, n = d.sibling, o = Ki(d, { mode: "visible", children: o.children }), !(r.mode & 1) && (o.lanes = l), o.return = r, o.sibling = null, n !== null && (l = r.deletions, l === null ? (r.deletions = [n], r.flags |= 16) : l.push(n)), r.child = o, r.memoizedState = null, o;
  }
  function Ec(n, r) {
    return r = Ac({ mode: "visible", children: r }, n.mode, 0, null), r.return = n, n.child = r;
  }
  function xc(n, r, l, o) {
    return o !== null && od(o), yu(r, n.child, null, l), n = Ec(r, r.pendingProps.children), n.flags |= 2, r.memoizedState = null, n;
  }
  function Cd(n, r, l, o, c, d, m) {
    if (l)
      return r.flags & 256 ? (r.flags &= -257, o = yd(Error(g(422))), xc(n, r, m, o)) : r.memoizedState !== null ? (r.child = n.child, r.flags |= 128, null) : (d = o.fallback, c = r.mode, o = Ac({ mode: "visible", children: o.children }, c, 0, null), d = Vl(d, c, m, null), d.flags |= 2, o.return = r, d.return = r, o.sibling = d, r.child = o, r.mode & 1 && yu(r, n.child, null, m), r.child.memoizedState = Ul(m), r.memoizedState = Wo, d);
    if (!(r.mode & 1)) return xc(n, r, m, null);
    if (c.data === "$!") {
      if (o = c.nextSibling && c.nextSibling.dataset, o) var x = o.dgst;
      return o = x, d = Error(g(419)), o = yd(d, o, void 0), xc(n, r, m, o);
    }
    if (x = (m & n.childLanes) !== 0, Tr || x) {
      if (o = Wt, o !== null) {
        switch (m & -m) {
          case 4:
            c = 2;
            break;
          case 16:
            c = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            c = 32;
            break;
          case 536870912:
            c = 268435456;
            break;
          default:
            c = 0;
        }
        c = c & (o.suspendedLanes | m) ? 0 : c, c !== 0 && c !== d.retryLane && (d.retryLane = c, mi(n, c), Bt(o, n, c, -1));
      }
      return Ko(), o = yd(Error(g(421))), xc(n, r, m, o);
    }
    return c.data === "$?" ? (r.flags |= 128, r.child = n.child, r = Nd.bind(null, n), c._reactRetry = r, null) : (n = d.treeContext, Sr = Ma(c.nextSibling), Pr = r, Mt = !0, ua = null, n !== null && (Cr[Gn++] = On, Cr[Gn++] = vi, Cr[Gn++] = la, On = n.id, vi = n.overflow, la = r), r = Ec(r, o.children), r.flags |= 4096, r);
  }
  function Jv(n, r, l) {
    n.lanes |= r;
    var o = n.alternate;
    o !== null && (o.lanes |= r), cd(n.return, r, l);
  }
  function Tc(n, r, l, o, c) {
    var d = n.memoizedState;
    d === null ? n.memoizedState = { isBackwards: r, rendering: null, renderingStartTime: 0, last: o, tail: l, tailMode: c } : (d.isBackwards = r, d.rendering = null, d.renderingStartTime = 0, d.last = o, d.tail = l, d.tailMode = c);
  }
  function Sd(n, r, l) {
    var o = r.pendingProps, c = o.revealOrder, d = o.tail;
    if (qt(n, r, o.children, l), o = At.current, o & 2) o = o & 1 | 2, r.flags |= 128;
    else {
      if (n !== null && n.flags & 128) e: for (n = r.child; n !== null; ) {
        if (n.tag === 13) n.memoizedState !== null && Jv(n, l, r);
        else if (n.tag === 19) Jv(n, l, r);
        else if (n.child !== null) {
          n.child.return = n, n = n.child;
          continue;
        }
        if (n === r) break e;
        for (; n.sibling === null; ) {
          if (n.return === null || n.return === r) break e;
          n = n.return;
        }
        n.sibling.return = n.return, n = n.sibling;
      }
      o &= 1;
    }
    if (vt(At, o), !(r.mode & 1)) r.memoizedState = null;
    else switch (c) {
      case "forwards":
        for (l = r.child, c = null; l !== null; ) n = l.alternate, n !== null && tc(n) === null && (c = l), l = l.sibling;
        l = c, l === null ? (c = r.child, r.child = null) : (c = l.sibling, l.sibling = null), Tc(r, !1, c, l, d);
        break;
      case "backwards":
        for (l = null, c = r.child, r.child = null; c !== null; ) {
          if (n = c.alternate, n !== null && tc(n) === null) {
            r.child = c;
            break;
          }
          n = c.sibling, c.sibling = l, l = c, c = n;
        }
        Tc(r, !0, l, null, d);
        break;
      case "together":
        Tc(r, !1, null, null, void 0);
        break;
      default:
        r.memoizedState = null;
    }
    return r.child;
  }
  function Qo(n, r) {
    !(r.mode & 1) && n !== null && (n.alternate = null, r.alternate = null, r.flags |= 2);
  }
  function Xt(n, r, l) {
    if (n !== null && (r.dependencies = n.dependencies), zl |= r.lanes, !(l & r.childLanes)) return null;
    if (n !== null && r.child !== n.child) throw Error(g(153));
    if (r.child !== null) {
      for (n = r.child, l = Ki(n, n.pendingProps), r.child = l, l.return = r; n.sibling !== null; ) n = n.sibling, l = l.sibling = Ki(n, n.pendingProps), l.return = r;
      l.sibling = null;
    }
    return r.child;
  }
  function gi(n, r, l) {
    switch (r.tag) {
      case 3:
        xy(r), Pt();
        break;
      case 5:
        Pv(r);
        break;
      case 1:
        zt(r.type) && Ys(r);
        break;
      case 4:
        fd(r, r.stateNode.containerInfo);
        break;
      case 10:
        var o = r.type._context, c = r.memoizedProps.value;
        vt(hi, o._currentValue), o._currentValue = c;
        break;
      case 13:
        if (o = r.memoizedState, o !== null)
          return o.dehydrated !== null ? (vt(At, At.current & 1), r.flags |= 128, null) : l & r.child.childLanes ? Kv(n, r, l) : (vt(At, At.current & 1), n = Xt(n, r, l), n !== null ? n.sibling : null);
        vt(At, At.current & 1);
        break;
      case 19:
        if (o = (l & r.childLanes) !== 0, n.flags & 128) {
          if (o) return Sd(n, r, l);
          r.flags |= 128;
        }
        if (c = r.memoizedState, c !== null && (c.rendering = null, c.tail = null, c.lastEffect = null), vt(At, At.current), o) break;
        return null;
      case 22:
      case 23:
        return r.lanes = 0, Rr(n, r, l);
    }
    return Xt(n, r, l);
  }
  var Ga, Nu, Lu, fa;
  Ga = function(n, r) {
    for (var l = r.child; l !== null; ) {
      if (l.tag === 5 || l.tag === 6) n.appendChild(l.stateNode);
      else if (l.tag !== 4 && l.child !== null) {
        l.child.return = l, l = l.child;
        continue;
      }
      if (l === r) break;
      for (; l.sibling === null; ) {
        if (l.return === null || l.return === r) return;
        l = l.return;
      }
      l.sibling.return = l.return, l = l.sibling;
    }
  }, Nu = function() {
  }, Lu = function(n, r, l, o) {
    var c = n.memoizedProps;
    if (c !== o) {
      n = r.stateNode, bl(Ua.current);
      var d = null;
      switch (l) {
        case "input":
          c = In(n, c), o = In(n, o), d = [];
          break;
        case "select":
          c = fe({}, c, { value: void 0 }), o = fe({}, o, { value: void 0 }), d = [];
          break;
        case "textarea":
          c = Ra(n, c), o = Ra(n, o), d = [];
          break;
        default:
          typeof c.onClick != "function" && typeof o.onClick == "function" && (n.onclick = Is);
      }
      Cn(l, o);
      var m;
      l = null;
      for (A in c) if (!o.hasOwnProperty(A) && c.hasOwnProperty(A) && c[A] != null) if (A === "style") {
        var x = c[A];
        for (m in x) x.hasOwnProperty(m) && (l || (l = {}), l[m] = "");
      } else A !== "dangerouslySetInnerHTML" && A !== "children" && A !== "suppressContentEditableWarning" && A !== "suppressHydrationWarning" && A !== "autoFocus" && (b.hasOwnProperty(A) ? d || (d = []) : (d = d || []).push(A, null));
      for (A in o) {
        var w = o[A];
        if (x = c != null ? c[A] : void 0, o.hasOwnProperty(A) && w !== x && (w != null || x != null)) if (A === "style") if (x) {
          for (m in x) !x.hasOwnProperty(m) || w && w.hasOwnProperty(m) || (l || (l = {}), l[m] = "");
          for (m in w) w.hasOwnProperty(m) && x[m] !== w[m] && (l || (l = {}), l[m] = w[m]);
        } else l || (d || (d = []), d.push(
          A,
          l
        )), l = w;
        else A === "dangerouslySetInnerHTML" ? (w = w ? w.__html : void 0, x = x ? x.__html : void 0, w != null && x !== w && (d = d || []).push(A, w)) : A === "children" ? typeof w != "string" && typeof w != "number" || (d = d || []).push(A, "" + w) : A !== "suppressContentEditableWarning" && A !== "suppressHydrationWarning" && (b.hasOwnProperty(A) ? (w != null && A === "onScroll" && Rt("scroll", n), d || x === w || (d = [])) : (d = d || []).push(A, w));
      }
      l && (d = d || []).push("style", l);
      var A = d;
      (r.updateQueue = A) && (r.flags |= 4);
    }
  }, fa = function(n, r, l, o) {
    l !== o && (r.flags |= 4);
  };
  function Yt(n, r) {
    if (!Mt) switch (n.tailMode) {
      case "hidden":
        r = n.tail;
        for (var l = null; r !== null; ) r.alternate !== null && (l = r), r = r.sibling;
        l === null ? n.tail = null : l.sibling = null;
        break;
      case "collapsed":
        l = n.tail;
        for (var o = null; l !== null; ) l.alternate !== null && (o = l), l = l.sibling;
        o === null ? r || n.tail === null ? n.tail = null : n.tail.sibling = null : o.sibling = null;
    }
  }
  function Xn(n) {
    var r = n.alternate !== null && n.alternate.child === n.child, l = 0, o = 0;
    if (r) for (var c = n.child; c !== null; ) l |= c.lanes | c.childLanes, o |= c.subtreeFlags & 14680064, o |= c.flags & 14680064, c.return = n, c = c.sibling;
    else for (c = n.child; c !== null; ) l |= c.lanes | c.childLanes, o |= c.subtreeFlags, o |= c.flags, c.return = n, c = c.sibling;
    return n.subtreeFlags |= o, n.childLanes = l, r;
  }
  function Ty(n, r, l) {
    var o = r.pendingProps;
    switch (ld(r), r.tag) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Xn(r), null;
      case 1:
        return zt(r.type) && ia(), Xn(r), null;
      case 3:
        return o = r.stateNode, Eu(), ft(It), ft(je), pd(), o.pendingContext && (o.context = o.pendingContext, o.pendingContext = null), (n === null || n.child === null) && (Zs(r) ? r.flags |= 4 : n === null || n.memoizedState.isDehydrated && !(r.flags & 256) || (r.flags |= 1024, ua !== null && (bd(ua), ua = null))), Nu(n, r), Xn(r), null;
      case 5:
        dd(r);
        var c = bl(Ao.current);
        if (l = r.type, n !== null && r.stateNode != null) Lu(n, r, l, o, c), n.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
        else {
          if (!o) {
            if (r.stateNode === null) throw Error(g(166));
            return Xn(r), null;
          }
          if (n = bl(Ua.current), Zs(r)) {
            o = r.stateNode, l = r.type;
            var d = r.memoizedProps;
            switch (o[Ya] = r, o[Tl] = d, n = (r.mode & 1) !== 0, l) {
              case "dialog":
                Rt("cancel", o), Rt("close", o);
                break;
              case "iframe":
              case "object":
              case "embed":
                Rt("load", o);
                break;
              case "video":
              case "audio":
                for (c = 0; c < Do.length; c++) Rt(Do[c], o);
                break;
              case "source":
                Rt("error", o);
                break;
              case "img":
              case "image":
              case "link":
                Rt(
                  "error",
                  o
                ), Rt("load", o);
                break;
              case "details":
                Rt("toggle", o);
                break;
              case "input":
                Nn(o, d), Rt("invalid", o);
                break;
              case "select":
                o._wrapperState = { wasMultiple: !!d.multiple }, Rt("invalid", o);
                break;
              case "textarea":
                Or(o, d), Rt("invalid", o);
            }
            Cn(l, d), c = null;
            for (var m in d) if (d.hasOwnProperty(m)) {
              var x = d[m];
              m === "children" ? typeof x == "string" ? o.textContent !== x && (d.suppressHydrationWarning !== !0 && $s(o.textContent, x, n), c = ["children", x]) : typeof x == "number" && o.textContent !== "" + x && (d.suppressHydrationWarning !== !0 && $s(
                o.textContent,
                x,
                n
              ), c = ["children", "" + x]) : b.hasOwnProperty(m) && x != null && m === "onScroll" && Rt("scroll", o);
            }
            switch (l) {
              case "input":
                dr(o), Kr(o, d, !0);
                break;
              case "textarea":
                dr(o), Mr(o);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof d.onClick == "function" && (o.onclick = Is);
            }
            o = c, r.updateQueue = o, o !== null && (r.flags |= 4);
          } else {
            m = c.nodeType === 9 ? c : c.ownerDocument, n === "http://www.w3.org/1999/xhtml" && (n = wa(l)), n === "http://www.w3.org/1999/xhtml" ? l === "script" ? (n = m.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild)) : typeof o.is == "string" ? n = m.createElement(l, { is: o.is }) : (n = m.createElement(l), l === "select" && (m = n, o.multiple ? m.multiple = !0 : o.size && (m.size = o.size))) : n = m.createElementNS(n, l), n[Ya] = r, n[Tl] = o, Ga(n, r, !1, !1), r.stateNode = n;
            e: {
              switch (m = Zt(l, o), l) {
                case "dialog":
                  Rt("cancel", n), Rt("close", n), c = o;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  Rt("load", n), c = o;
                  break;
                case "video":
                case "audio":
                  for (c = 0; c < Do.length; c++) Rt(Do[c], n);
                  c = o;
                  break;
                case "source":
                  Rt("error", n), c = o;
                  break;
                case "img":
                case "image":
                case "link":
                  Rt(
                    "error",
                    n
                  ), Rt("load", n), c = o;
                  break;
                case "details":
                  Rt("toggle", n), c = o;
                  break;
                case "input":
                  Nn(n, o), c = In(n, o), Rt("invalid", n);
                  break;
                case "option":
                  c = o;
                  break;
                case "select":
                  n._wrapperState = { wasMultiple: !!o.multiple }, c = fe({}, o, { value: void 0 }), Rt("invalid", n);
                  break;
                case "textarea":
                  Or(n, o), c = Ra(n, o), Rt("invalid", n);
                  break;
                default:
                  c = o;
              }
              Cn(l, c), x = c;
              for (d in x) if (x.hasOwnProperty(d)) {
                var w = x[d];
                d === "style" ? yt(n, w) : d === "dangerouslySetInnerHTML" ? (w = w ? w.__html : void 0, w != null && Mi(n, w)) : d === "children" ? typeof w == "string" ? (l !== "textarea" || w !== "") && _a(n, w) : typeof w == "number" && _a(n, "" + w) : d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && d !== "autoFocus" && (b.hasOwnProperty(d) ? w != null && d === "onScroll" && Rt("scroll", n) : w != null && Re(n, d, w, m));
              }
              switch (l) {
                case "input":
                  dr(n), Kr(n, o, !1);
                  break;
                case "textarea":
                  dr(n), Mr(n);
                  break;
                case "option":
                  o.value != null && n.setAttribute("value", "" + $n(o.value));
                  break;
                case "select":
                  n.multiple = !!o.multiple, d = o.value, d != null ? Pa(n, !!o.multiple, d, !1) : o.defaultValue != null && Pa(
                    n,
                    !!o.multiple,
                    o.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof c.onClick == "function" && (n.onclick = Is);
              }
              switch (l) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  o = !!o.autoFocus;
                  break e;
                case "img":
                  o = !0;
                  break e;
                default:
                  o = !1;
              }
            }
            o && (r.flags |= 4);
          }
          r.ref !== null && (r.flags |= 512, r.flags |= 2097152);
        }
        return Xn(r), null;
      case 6:
        if (n && r.stateNode != null) fa(n, r, n.memoizedProps, o);
        else {
          if (typeof o != "string" && r.stateNode === null) throw Error(g(166));
          if (l = bl(Ao.current), bl(Ua.current), Zs(r)) {
            if (o = r.stateNode, l = r.memoizedProps, o[Ya] = r, (d = o.nodeValue !== l) && (n = Pr, n !== null)) switch (n.tag) {
              case 3:
                $s(o.nodeValue, l, (n.mode & 1) !== 0);
                break;
              case 5:
                n.memoizedProps.suppressHydrationWarning !== !0 && $s(o.nodeValue, l, (n.mode & 1) !== 0);
            }
            d && (r.flags |= 4);
          } else o = (l.nodeType === 9 ? l : l.ownerDocument).createTextNode(o), o[Ya] = r, r.stateNode = o;
        }
        return Xn(r), null;
      case 13:
        if (ft(At), o = r.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
          if (Mt && Sr !== null && r.mode & 1 && !(r.flags & 128)) jv(), Pt(), r.flags |= 98560, d = !1;
          else if (d = Zs(r), o !== null && o.dehydrated !== null) {
            if (n === null) {
              if (!d) throw Error(g(318));
              if (d = r.memoizedState, d = d !== null ? d.dehydrated : null, !d) throw Error(g(317));
              d[Ya] = r;
            } else Pt(), !(r.flags & 128) && (r.memoizedState = null), r.flags |= 4;
            Xn(r), d = !1;
          } else ua !== null && (bd(ua), ua = null), d = !0;
          if (!d) return r.flags & 65536 ? r : null;
        }
        return r.flags & 128 ? (r.lanes = l, r) : (o = o !== null, o !== (n !== null && n.memoizedState !== null) && o && (r.child.flags |= 8192, r.mode & 1 && (n === null || At.current & 1 ? fn === 0 && (fn = 3) : Ko())), r.updateQueue !== null && (r.flags |= 4), Xn(r), null);
      case 4:
        return Eu(), Nu(n, r), n === null && vu(r.stateNode.containerInfo), Xn(r), null;
      case 10:
        return sd(r.type._context), Xn(r), null;
      case 17:
        return zt(r.type) && ia(), Xn(r), null;
      case 19:
        if (ft(At), d = r.memoizedState, d === null) return Xn(r), null;
        if (o = (r.flags & 128) !== 0, m = d.rendering, m === null) if (o) Yt(d, !1);
        else {
          if (fn !== 0 || n !== null && n.flags & 128) for (n = r.child; n !== null; ) {
            if (m = tc(n), m !== null) {
              for (r.flags |= 128, Yt(d, !1), o = m.updateQueue, o !== null && (r.updateQueue = o, r.flags |= 4), r.subtreeFlags = 0, o = l, l = r.child; l !== null; ) d = l, n = o, d.flags &= 14680066, m = d.alternate, m === null ? (d.childLanes = 0, d.lanes = n, d.child = null, d.subtreeFlags = 0, d.memoizedProps = null, d.memoizedState = null, d.updateQueue = null, d.dependencies = null, d.stateNode = null) : (d.childLanes = m.childLanes, d.lanes = m.lanes, d.child = m.child, d.subtreeFlags = 0, d.deletions = null, d.memoizedProps = m.memoizedProps, d.memoizedState = m.memoizedState, d.updateQueue = m.updateQueue, d.type = m.type, n = m.dependencies, d.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), l = l.sibling;
              return vt(At, At.current & 1 | 2), r.child;
            }
            n = n.sibling;
          }
          d.tail !== null && pt() > Pu && (r.flags |= 128, o = !0, Yt(d, !1), r.lanes = 4194304);
        }
        else {
          if (!o) if (n = tc(m), n !== null) {
            if (r.flags |= 128, o = !0, l = n.updateQueue, l !== null && (r.updateQueue = l, r.flags |= 4), Yt(d, !0), d.tail === null && d.tailMode === "hidden" && !m.alternate && !Mt) return Xn(r), null;
          } else 2 * pt() - d.renderingStartTime > Pu && l !== 1073741824 && (r.flags |= 128, o = !0, Yt(d, !1), r.lanes = 4194304);
          d.isBackwards ? (m.sibling = r.child, r.child = m) : (l = d.last, l !== null ? l.sibling = m : r.child = m, d.last = m);
        }
        return d.tail !== null ? (r = d.tail, d.rendering = r, d.tail = r.sibling, d.renderingStartTime = pt(), r.sibling = null, l = At.current, vt(At, o ? l & 1 | 2 : l & 1), r) : (Xn(r), null);
      case 22:
      case 23:
        return Uc(), o = r.memoizedState !== null, n !== null && n.memoizedState !== null !== o && (r.flags |= 8192), o && r.mode & 1 ? wr & 1073741824 && (Xn(r), r.subtreeFlags & 6 && (r.flags |= 8192)) : Xn(r), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(g(156, r.tag));
  }
  function Ry(n, r) {
    switch (ld(r), r.tag) {
      case 1:
        return zt(r.type) && ia(), n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 3:
        return Eu(), ft(It), ft(je), pd(), n = r.flags, n & 65536 && !(n & 128) ? (r.flags = n & -65537 | 128, r) : null;
      case 5:
        return dd(r), null;
      case 13:
        if (ft(At), n = r.memoizedState, n !== null && n.dehydrated !== null) {
          if (r.alternate === null) throw Error(g(340));
          Pt();
        }
        return n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 19:
        return ft(At), null;
      case 4:
        return Eu(), null;
      case 10:
        return sd(r.type._context), null;
      case 22:
      case 23:
        return Uc(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Ou = !1, Un = !1, Rc = typeof WeakSet == "function" ? WeakSet : Set, pe = null;
  function Mu(n, r) {
    var l = n.ref;
    if (l !== null) if (typeof l == "function") try {
      l(null);
    } catch (o) {
      Qt(n, r, o);
    }
    else l.current = null;
  }
  function Ed(n, r, l) {
    try {
      l();
    } catch (o) {
      Qt(n, r, o);
    }
  }
  var wc = !1;
  function wy(n, r) {
    if (Kf = ml, n = Hs(), ci(n)) {
      if ("selectionStart" in n) var l = { start: n.selectionStart, end: n.selectionEnd };
      else e: {
        l = (l = n.ownerDocument) && l.defaultView || window;
        var o = l.getSelection && l.getSelection();
        if (o && o.rangeCount !== 0) {
          l = o.anchorNode;
          var c = o.anchorOffset, d = o.focusNode;
          o = o.focusOffset;
          try {
            l.nodeType, d.nodeType;
          } catch {
            l = null;
            break e;
          }
          var m = 0, x = -1, w = -1, A = 0, G = 0, q = n, Q = null;
          t: for (; ; ) {
            for (var se; q !== l || c !== 0 && q.nodeType !== 3 || (x = m + c), q !== d || o !== 0 && q.nodeType !== 3 || (w = m + o), q.nodeType === 3 && (m += q.nodeValue.length), (se = q.firstChild) !== null; )
              Q = q, q = se;
            for (; ; ) {
              if (q === n) break t;
              if (Q === l && ++A === c && (x = m), Q === d && ++G === o && (w = m), (se = q.nextSibling) !== null) break;
              q = Q, Q = q.parentNode;
            }
            q = se;
          }
          l = x === -1 || w === -1 ? null : { start: x, end: w };
        } else l = null;
      }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (El = { focusedElem: n, selectionRange: l }, ml = !1, pe = r; pe !== null; ) if (r = pe, n = r.child, (r.subtreeFlags & 1028) !== 0 && n !== null) n.return = r, pe = n;
    else for (; pe !== null; ) {
      r = pe;
      try {
        var ve = r.alternate;
        if (r.flags & 1024) switch (r.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (ve !== null) {
              var ye = ve.memoizedProps, Kt = ve.memoizedState, O = r.stateNode, k = O.getSnapshotBeforeUpdate(r.elementType === r.type ? ye : xr(r.type, ye), Kt);
              O.__reactInternalSnapshotBeforeUpdate = k;
            }
            break;
          case 3:
            var j = r.stateNode.containerInfo;
            j.nodeType === 1 ? j.textContent = "" : j.nodeType === 9 && j.documentElement && j.removeChild(j.documentElement);
            break;
          case 5:
          case 6:
          case 4:
          case 17:
            break;
          default:
            throw Error(g(163));
        }
      } catch (J) {
        Qt(r, r.return, J);
      }
      if (n = r.sibling, n !== null) {
        n.return = r.return, pe = n;
        break;
      }
      pe = r.return;
    }
    return ve = wc, wc = !1, ve;
  }
  function Uu(n, r, l) {
    var o = r.updateQueue;
    if (o = o !== null ? o.lastEffect : null, o !== null) {
      var c = o = o.next;
      do {
        if ((c.tag & n) === n) {
          var d = c.destroy;
          c.destroy = void 0, d !== void 0 && Ed(r, l, d);
        }
        c = c.next;
      } while (c !== o);
    }
  }
  function _c(n, r) {
    if (r = r.updateQueue, r = r !== null ? r.lastEffect : null, r !== null) {
      var l = r = r.next;
      do {
        if ((l.tag & n) === n) {
          var o = l.create;
          l.destroy = o();
        }
        l = l.next;
      } while (l !== r);
    }
  }
  function bc(n) {
    var r = n.ref;
    if (r !== null) {
      var l = n.stateNode;
      switch (n.tag) {
        case 5:
          n = l;
          break;
        default:
          n = l;
      }
      typeof r == "function" ? r(n) : r.current = n;
    }
  }
  function eh(n) {
    var r = n.alternate;
    r !== null && (n.alternate = null, eh(r)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (r = n.stateNode, r !== null && (delete r[Ya], delete r[Tl], delete r[td], delete r[Cy], delete r[nd])), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
  }
  function xd(n) {
    return n.tag === 5 || n.tag === 3 || n.tag === 4;
  }
  function th(n) {
    e: for (; ; ) {
      for (; n.sibling === null; ) {
        if (n.return === null || xd(n.return)) return null;
        n = n.return;
      }
      for (n.sibling.return = n.return, n = n.sibling; n.tag !== 5 && n.tag !== 6 && n.tag !== 18; ) {
        if (n.flags & 2 || n.child === null || n.tag === 4) continue e;
        n.child.return = n, n = n.child;
      }
      if (!(n.flags & 2)) return n.stateNode;
    }
  }
  function Go(n, r, l) {
    var o = n.tag;
    if (o === 5 || o === 6) n = n.stateNode, r ? l.nodeType === 8 ? l.parentNode.insertBefore(n, r) : l.insertBefore(n, r) : (l.nodeType === 8 ? (r = l.parentNode, r.insertBefore(n, l)) : (r = l, r.appendChild(n)), l = l._reactRootContainer, l != null || r.onclick !== null || (r.onclick = Is));
    else if (o !== 4 && (n = n.child, n !== null)) for (Go(n, r, l), n = n.sibling; n !== null; ) Go(n, r, l), n = n.sibling;
  }
  function ju(n, r, l) {
    var o = n.tag;
    if (o === 5 || o === 6) n = n.stateNode, r ? l.insertBefore(n, r) : l.appendChild(n);
    else if (o !== 4 && (n = n.child, n !== null)) for (ju(n, r, l), n = n.sibling; n !== null; ) ju(n, r, l), n = n.sibling;
  }
  var Ht = null, Rn = !1;
  function tr(n, r, l) {
    for (l = l.child; l !== null; ) zu(n, r, l), l = l.sibling;
  }
  function zu(n, r, l) {
    if (Da && typeof Da.onCommitFiberUnmount == "function") try {
      Da.onCommitFiberUnmount(fo, l);
    } catch {
    }
    switch (l.tag) {
      case 5:
        Un || Mu(l, r);
      case 6:
        var o = Ht, c = Rn;
        Ht = null, tr(n, r, l), Ht = o, Rn = c, Ht !== null && (Rn ? (n = Ht, l = l.stateNode, n.nodeType === 8 ? n.parentNode.removeChild(l) : n.removeChild(l)) : Ht.removeChild(l.stateNode));
        break;
      case 18:
        Ht !== null && (Rn ? (n = Ht, l = l.stateNode, n.nodeType === 8 ? Vi(n.parentNode, l) : n.nodeType === 1 && Vi(n, l), yo(n)) : Vi(Ht, l.stateNode));
        break;
      case 4:
        o = Ht, c = Rn, Ht = l.stateNode.containerInfo, Rn = !0, tr(n, r, l), Ht = o, Rn = c;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!Un && (o = l.updateQueue, o !== null && (o = o.lastEffect, o !== null))) {
          c = o = o.next;
          do {
            var d = c, m = d.destroy;
            d = d.tag, m !== void 0 && (d & 2 || d & 4) && Ed(l, r, m), c = c.next;
          } while (c !== o);
        }
        tr(n, r, l);
        break;
      case 1:
        if (!Un && (Mu(l, r), o = l.stateNode, typeof o.componentWillUnmount == "function")) try {
          o.props = l.memoizedProps, o.state = l.memoizedState, o.componentWillUnmount();
        } catch (x) {
          Qt(l, r, x);
        }
        tr(n, r, l);
        break;
      case 21:
        tr(n, r, l);
        break;
      case 22:
        l.mode & 1 ? (Un = (o = Un) || l.memoizedState !== null, tr(n, r, l), Un = o) : tr(n, r, l);
        break;
      default:
        tr(n, r, l);
    }
  }
  function Au(n) {
    var r = n.updateQueue;
    if (r !== null) {
      n.updateQueue = null;
      var l = n.stateNode;
      l === null && (l = n.stateNode = new Rc()), r.forEach(function(o) {
        var c = Oy.bind(null, n, o);
        l.has(o) || (l.add(o), o.then(c, c));
      });
    }
  }
  function wn(n, r) {
    var l = r.deletions;
    if (l !== null) for (var o = 0; o < l.length; o++) {
      var c = l[o];
      try {
        var d = n, m = r, x = m;
        e: for (; x !== null; ) {
          switch (x.tag) {
            case 5:
              Ht = x.stateNode, Rn = !1;
              break e;
            case 3:
              Ht = x.stateNode.containerInfo, Rn = !0;
              break e;
            case 4:
              Ht = x.stateNode.containerInfo, Rn = !0;
              break e;
          }
          x = x.return;
        }
        if (Ht === null) throw Error(g(160));
        zu(d, m, c), Ht = null, Rn = !1;
        var w = c.alternate;
        w !== null && (w.return = null), c.return = null;
      } catch (A) {
        Qt(c, r, A);
      }
    }
    if (r.subtreeFlags & 12854) for (r = r.child; r !== null; ) nh(r, n), r = r.sibling;
  }
  function nh(n, r) {
    var l = n.alternate, o = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (wn(r, n), Za(n), o & 4) {
          try {
            Uu(3, n, n.return), _c(3, n);
          } catch (ye) {
            Qt(n, n.return, ye);
          }
          try {
            Uu(5, n, n.return);
          } catch (ye) {
            Qt(n, n.return, ye);
          }
        }
        break;
      case 1:
        wn(r, n), Za(n), o & 512 && l !== null && Mu(l, l.return);
        break;
      case 5:
        if (wn(r, n), Za(n), o & 512 && l !== null && Mu(l, l.return), n.flags & 32) {
          var c = n.stateNode;
          try {
            _a(c, "");
          } catch (ye) {
            Qt(n, n.return, ye);
          }
        }
        if (o & 4 && (c = n.stateNode, c != null)) {
          var d = n.memoizedProps, m = l !== null ? l.memoizedProps : d, x = n.type, w = n.updateQueue;
          if (n.updateQueue = null, w !== null) try {
            x === "input" && d.type === "radio" && d.name != null && Ln(c, d), Zt(x, m);
            var A = Zt(x, d);
            for (m = 0; m < w.length; m += 2) {
              var G = w[m], q = w[m + 1];
              G === "style" ? yt(c, q) : G === "dangerouslySetInnerHTML" ? Mi(c, q) : G === "children" ? _a(c, q) : Re(c, G, q, A);
            }
            switch (x) {
              case "input":
                Yn(c, d);
                break;
              case "textarea":
                Ba(c, d);
                break;
              case "select":
                var Q = c._wrapperState.wasMultiple;
                c._wrapperState.wasMultiple = !!d.multiple;
                var se = d.value;
                se != null ? Pa(c, !!d.multiple, se, !1) : Q !== !!d.multiple && (d.defaultValue != null ? Pa(
                  c,
                  !!d.multiple,
                  d.defaultValue,
                  !0
                ) : Pa(c, !!d.multiple, d.multiple ? [] : "", !1));
            }
            c[Tl] = d;
          } catch (ye) {
            Qt(n, n.return, ye);
          }
        }
        break;
      case 6:
        if (wn(r, n), Za(n), o & 4) {
          if (n.stateNode === null) throw Error(g(162));
          c = n.stateNode, d = n.memoizedProps;
          try {
            c.nodeValue = d;
          } catch (ye) {
            Qt(n, n.return, ye);
          }
        }
        break;
      case 3:
        if (wn(r, n), Za(n), o & 4 && l !== null && l.memoizedState.isDehydrated) try {
          yo(r.containerInfo);
        } catch (ye) {
          Qt(n, n.return, ye);
        }
        break;
      case 4:
        wn(r, n), Za(n);
        break;
      case 13:
        wn(r, n), Za(n), c = n.child, c.flags & 8192 && (d = c.memoizedState !== null, c.stateNode.isHidden = d, !d || c.alternate !== null && c.alternate.memoizedState !== null || (kc = pt())), o & 4 && Au(n);
        break;
      case 22:
        if (G = l !== null && l.memoizedState !== null, n.mode & 1 ? (Un = (A = Un) || G, wn(r, n), Un = A) : wn(r, n), Za(n), o & 8192) {
          if (A = n.memoizedState !== null, (n.stateNode.isHidden = A) && !G && n.mode & 1) for (pe = n, G = n.child; G !== null; ) {
            for (q = pe = G; pe !== null; ) {
              switch (Q = pe, se = Q.child, Q.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Uu(4, Q, Q.return);
                  break;
                case 1:
                  Mu(Q, Q.return);
                  var ve = Q.stateNode;
                  if (typeof ve.componentWillUnmount == "function") {
                    o = Q, l = Q.return;
                    try {
                      r = o, ve.props = r.memoizedProps, ve.state = r.memoizedState, ve.componentWillUnmount();
                    } catch (ye) {
                      Qt(o, l, ye);
                    }
                  }
                  break;
                case 5:
                  Mu(Q, Q.return);
                  break;
                case 22:
                  if (Q.memoizedState !== null) {
                    rh(q);
                    continue;
                  }
              }
              se !== null ? (se.return = Q, pe = se) : rh(q);
            }
            G = G.sibling;
          }
          e: for (G = null, q = n; ; ) {
            if (q.tag === 5) {
              if (G === null) {
                G = q;
                try {
                  c = q.stateNode, A ? (d = c.style, typeof d.setProperty == "function" ? d.setProperty("display", "none", "important") : d.display = "none") : (x = q.stateNode, w = q.memoizedProps.style, m = w != null && w.hasOwnProperty("display") ? w.display : null, x.style.display = Ge("display", m));
                } catch (ye) {
                  Qt(n, n.return, ye);
                }
              }
            } else if (q.tag === 6) {
              if (G === null) try {
                q.stateNode.nodeValue = A ? "" : q.memoizedProps;
              } catch (ye) {
                Qt(n, n.return, ye);
              }
            } else if ((q.tag !== 22 && q.tag !== 23 || q.memoizedState === null || q === n) && q.child !== null) {
              q.child.return = q, q = q.child;
              continue;
            }
            if (q === n) break e;
            for (; q.sibling === null; ) {
              if (q.return === null || q.return === n) break e;
              G === q && (G = null), q = q.return;
            }
            G === q && (G = null), q.sibling.return = q.return, q = q.sibling;
          }
        }
        break;
      case 19:
        wn(r, n), Za(n), o & 4 && Au(n);
        break;
      case 21:
        break;
      default:
        wn(
          r,
          n
        ), Za(n);
    }
  }
  function Za(n) {
    var r = n.flags;
    if (r & 2) {
      try {
        e: {
          for (var l = n.return; l !== null; ) {
            if (xd(l)) {
              var o = l;
              break e;
            }
            l = l.return;
          }
          throw Error(g(160));
        }
        switch (o.tag) {
          case 5:
            var c = o.stateNode;
            o.flags & 32 && (_a(c, ""), o.flags &= -33);
            var d = th(n);
            ju(n, d, c);
            break;
          case 3:
          case 4:
            var m = o.stateNode.containerInfo, x = th(n);
            Go(n, x, m);
            break;
          default:
            throw Error(g(161));
        }
      } catch (w) {
        Qt(n, n.return, w);
      }
      n.flags &= -3;
    }
    r & 4096 && (n.flags &= -4097);
  }
  function _y(n, r, l) {
    pe = n, Td(n);
  }
  function Td(n, r, l) {
    for (var o = (n.mode & 1) !== 0; pe !== null; ) {
      var c = pe, d = c.child;
      if (c.tag === 22 && o) {
        var m = c.memoizedState !== null || Ou;
        if (!m) {
          var x = c.alternate, w = x !== null && x.memoizedState !== null || Un;
          x = Ou;
          var A = Un;
          if (Ou = m, (Un = w) && !A) for (pe = c; pe !== null; ) m = pe, w = m.child, m.tag === 22 && m.memoizedState !== null ? Rd(c) : w !== null ? (w.return = m, pe = w) : Rd(c);
          for (; d !== null; ) pe = d, Td(d), d = d.sibling;
          pe = c, Ou = x, Un = A;
        }
        Hu(n);
      } else c.subtreeFlags & 8772 && d !== null ? (d.return = c, pe = d) : Hu(n);
    }
  }
  function Hu(n) {
    for (; pe !== null; ) {
      var r = pe;
      if (r.flags & 8772) {
        var l = r.alternate;
        try {
          if (r.flags & 8772) switch (r.tag) {
            case 0:
            case 11:
            case 15:
              Un || _c(5, r);
              break;
            case 1:
              var o = r.stateNode;
              if (r.flags & 4 && !Un) if (l === null) o.componentDidMount();
              else {
                var c = r.elementType === r.type ? l.memoizedProps : xr(r.type, l.memoizedProps);
                o.componentDidUpdate(c, l.memoizedState, o.__reactInternalSnapshotBeforeUpdate);
              }
              var d = r.updateQueue;
              d !== null && Vv(r, d, o);
              break;
            case 3:
              var m = r.updateQueue;
              if (m !== null) {
                if (l = null, r.child !== null) switch (r.child.tag) {
                  case 5:
                    l = r.child.stateNode;
                    break;
                  case 1:
                    l = r.child.stateNode;
                }
                Vv(r, m, l);
              }
              break;
            case 5:
              var x = r.stateNode;
              if (l === null && r.flags & 4) {
                l = x;
                var w = r.memoizedProps;
                switch (r.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    w.autoFocus && l.focus();
                    break;
                  case "img":
                    w.src && (l.src = w.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (r.memoizedState === null) {
                var A = r.alternate;
                if (A !== null) {
                  var G = A.memoizedState;
                  if (G !== null) {
                    var q = G.dehydrated;
                    q !== null && yo(q);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(g(163));
          }
          Un || r.flags & 512 && bc(r);
        } catch (Q) {
          Qt(r, r.return, Q);
        }
      }
      if (r === n) {
        pe = null;
        break;
      }
      if (l = r.sibling, l !== null) {
        l.return = r.return, pe = l;
        break;
      }
      pe = r.return;
    }
  }
  function rh(n) {
    for (; pe !== null; ) {
      var r = pe;
      if (r === n) {
        pe = null;
        break;
      }
      var l = r.sibling;
      if (l !== null) {
        l.return = r.return, pe = l;
        break;
      }
      pe = r.return;
    }
  }
  function Rd(n) {
    for (; pe !== null; ) {
      var r = pe;
      try {
        switch (r.tag) {
          case 0:
          case 11:
          case 15:
            var l = r.return;
            try {
              _c(4, r);
            } catch (w) {
              Qt(r, l, w);
            }
            break;
          case 1:
            var o = r.stateNode;
            if (typeof o.componentDidMount == "function") {
              var c = r.return;
              try {
                o.componentDidMount();
              } catch (w) {
                Qt(r, c, w);
              }
            }
            var d = r.return;
            try {
              bc(r);
            } catch (w) {
              Qt(r, d, w);
            }
            break;
          case 5:
            var m = r.return;
            try {
              bc(r);
            } catch (w) {
              Qt(r, m, w);
            }
        }
      } catch (w) {
        Qt(r, r.return, w);
      }
      if (r === n) {
        pe = null;
        break;
      }
      var x = r.sibling;
      if (x !== null) {
        x.return = r.return, pe = x;
        break;
      }
      pe = r.return;
    }
  }
  var by = Math.ceil, jl = Ae.ReactCurrentDispatcher, Dc = Ae.ReactCurrentOwner, da = Ae.ReactCurrentBatchConfig, Ke = 0, Wt = null, Ut = null, cn = 0, wr = 0, Fu = Ie(0), fn = 0, Zo = null, zl = 0, Vu = 0, wd = 0, qi = null, Kn = null, kc = 0, Pu = 1 / 0, Ci = null, Nc = !1, _d = null, pa = null, Bu = !1, va = null, Lc = 0, qo = 0, Oc = null, Xo = -1, Al = 0;
  function _n() {
    return Ke & 6 ? pt() : Xo !== -1 ? Xo : Xo = pt();
  }
  function Si(n) {
    return n.mode & 1 ? Ke & 2 && cn !== 0 ? cn & -cn : qs.transition !== null ? (Al === 0 && (Al = _s()), Al) : (n = gt, n !== 0 || (n = window.event, n = n === void 0 ? 16 : Of(n.type)), n) : 1;
  }
  function Bt(n, r, l, o) {
    if (50 < qo) throw qo = 0, Oc = null, Error(g(185));
    hl(n, l, o), (!(Ke & 2) || n !== Wt) && (n === Wt && (!(Ke & 2) && (Vu |= l), fn === 4 && qa(n, cn)), dn(n, o), l === 1 && Ke === 0 && !(r.mode & 1) && (Pu = pt() + 500, Tn && yr()));
  }
  function dn(n, r) {
    var l = n.callbackNode;
    ws(n, r);
    var o = ka(n, n === Wt ? cn : 0);
    if (o === 0) l !== null && Vt(l), n.callbackNode = null, n.callbackPriority = 0;
    else if (r = o & -o, n.callbackPriority !== r) {
      if (l != null && Vt(l), r === 1) n.tag === 0 ? ad($u.bind(null, n)) : rd($u.bind(null, n)), ed(function() {
        !(Ke & 6) && yr();
      }), l = null;
      else {
        switch (kf(o)) {
          case 1:
            l = Ar;
            break;
          case 4:
            l = qe;
            break;
          case 16:
            l = Ia;
            break;
          case 536870912:
            l = wf;
            break;
          default:
            l = Ia;
        }
        l = fh(l, Mc.bind(null, n));
      }
      n.callbackPriority = r, n.callbackNode = l;
    }
  }
  function Mc(n, r) {
    if (Xo = -1, Al = 0, Ke & 6) throw Error(g(327));
    var l = n.callbackNode;
    if (Iu() && n.callbackNode !== l) return null;
    var o = ka(n, n === Wt ? cn : 0);
    if (o === 0) return null;
    if (o & 30 || o & n.expiredLanes || r) r = jc(n, o);
    else {
      r = o;
      var c = Ke;
      Ke |= 2;
      var d = ih();
      (Wt !== n || cn !== r) && (Ci = null, Pu = pt() + 500, Fl(n, r));
      do
        try {
          ky();
          break;
        } catch (x) {
          ah(n, x);
        }
      while (!0);
      Br(), jl.current = d, Ke = c, Ut !== null ? r = 0 : (Wt = null, cn = 0, r = fn);
    }
    if (r !== 0) {
      if (r === 2 && (c = bf(n), c !== 0 && (o = c, r = Hl(n, c))), r === 1) throw l = Zo, Fl(n, 0), qa(n, o), dn(n, pt()), l;
      if (r === 6) qa(n, o);
      else {
        if (c = n.current.alternate, !(o & 30) && !Dd(c) && (r = jc(n, o), r === 2 && (d = bf(n), d !== 0 && (o = d, r = Hl(n, d))), r === 1)) throw l = Zo, Fl(n, 0), qa(n, o), dn(n, pt()), l;
        switch (n.finishedWork = c, n.finishedLanes = o, r) {
          case 0:
          case 1:
            throw Error(g(345));
          case 2:
            Xi(n, Kn, Ci);
            break;
          case 3:
            if (qa(n, o), (o & 130023424) === o && (r = kc + 500 - pt(), 10 < r)) {
              if (ka(n, 0) !== 0) break;
              if (c = n.suspendedLanes, (c & o) !== o) {
                _n(), n.pingedLanes |= n.suspendedLanes & c;
                break;
              }
              n.timeoutHandle = xl(Xi.bind(null, n, Kn, Ci), r);
              break;
            }
            Xi(n, Kn, Ci);
            break;
          case 4:
            if (qa(n, o), (o & 4194240) === o) break;
            for (r = n.eventTimes, c = -1; 0 < o; ) {
              var m = 31 - Jr(o);
              d = 1 << m, m = r[m], m > c && (c = m), o &= ~d;
            }
            if (o = c, o = pt() - o, o = (120 > o ? 120 : 480 > o ? 480 : 1080 > o ? 1080 : 1920 > o ? 1920 : 3e3 > o ? 3e3 : 4320 > o ? 4320 : 1960 * by(o / 1960)) - o, 10 < o) {
              n.timeoutHandle = xl(Xi.bind(null, n, Kn, Ci), o);
              break;
            }
            Xi(n, Kn, Ci);
            break;
          case 5:
            Xi(n, Kn, Ci);
            break;
          default:
            throw Error(g(329));
        }
      }
    }
    return dn(n, pt()), n.callbackNode === l ? Mc.bind(null, n) : null;
  }
  function Hl(n, r) {
    var l = qi;
    return n.current.memoizedState.isDehydrated && (Fl(n, r).flags |= 256), n = jc(n, r), n !== 2 && (r = Kn, Kn = l, r !== null && bd(r)), n;
  }
  function bd(n) {
    Kn === null ? Kn = n : Kn.push.apply(Kn, n);
  }
  function Dd(n) {
    for (var r = n; ; ) {
      if (r.flags & 16384) {
        var l = r.updateQueue;
        if (l !== null && (l = l.stores, l !== null)) for (var o = 0; o < l.length; o++) {
          var c = l[o], d = c.getSnapshot;
          c = c.value;
          try {
            if (!na(d(), c)) return !1;
          } catch {
            return !1;
          }
        }
      }
      if (l = r.child, r.subtreeFlags & 16384 && l !== null) l.return = r, r = l;
      else {
        if (r === n) break;
        for (; r.sibling === null; ) {
          if (r.return === null || r.return === n) return !0;
          r = r.return;
        }
        r.sibling.return = r.return, r = r.sibling;
      }
    }
    return !0;
  }
  function qa(n, r) {
    for (r &= ~wd, r &= ~Vu, n.suspendedLanes |= r, n.pingedLanes &= ~r, n = n.expirationTimes; 0 < r; ) {
      var l = 31 - Jr(r), o = 1 << l;
      n[l] = -1, r &= ~o;
    }
  }
  function $u(n) {
    if (Ke & 6) throw Error(g(327));
    Iu();
    var r = ka(n, 0);
    if (!(r & 1)) return dn(n, pt()), null;
    var l = jc(n, r);
    if (n.tag !== 0 && l === 2) {
      var o = bf(n);
      o !== 0 && (r = o, l = Hl(n, o));
    }
    if (l === 1) throw l = Zo, Fl(n, 0), qa(n, r), dn(n, pt()), l;
    if (l === 6) throw Error(g(345));
    return n.finishedWork = n.current.alternate, n.finishedLanes = r, Xi(n, Kn, Ci), dn(n, pt()), null;
  }
  function kd(n, r) {
    var l = Ke;
    Ke |= 1;
    try {
      return n(r);
    } finally {
      Ke = l, Ke === 0 && (Pu = pt() + 500, Tn && yr());
    }
  }
  function Xa(n) {
    va !== null && va.tag === 0 && !(Ke & 6) && Iu();
    var r = Ke;
    Ke |= 1;
    var l = da.transition, o = gt;
    try {
      if (da.transition = null, gt = 1, n) return n();
    } finally {
      gt = o, da.transition = l, Ke = r, !(Ke & 6) && yr();
    }
  }
  function Uc() {
    wr = Fu.current, ft(Fu);
  }
  function Fl(n, r) {
    n.finishedWork = null, n.finishedLanes = 0;
    var l = n.timeoutHandle;
    if (l !== -1 && (n.timeoutHandle = -1, Lv(l)), Ut !== null) for (l = Ut.return; l !== null; ) {
      var o = l;
      switch (ld(o), o.tag) {
        case 1:
          o = o.type.childContextTypes, o != null && ia();
          break;
        case 3:
          Eu(), ft(It), ft(je), pd();
          break;
        case 5:
          dd(o);
          break;
        case 4:
          Eu();
          break;
        case 13:
          ft(At);
          break;
        case 19:
          ft(At);
          break;
        case 10:
          sd(o.type._context);
          break;
        case 22:
        case 23:
          Uc();
      }
      l = l.return;
    }
    if (Wt = n, Ut = n = Ki(n.current, null), cn = wr = r, fn = 0, Zo = null, wd = Vu = zl = 0, Kn = qi = null, _l !== null) {
      for (r = 0; r < _l.length; r++) if (l = _l[r], o = l.interleaved, o !== null) {
        l.interleaved = null;
        var c = o.next, d = l.pending;
        if (d !== null) {
          var m = d.next;
          d.next = c, o.next = m;
        }
        l.pending = o;
      }
      _l = null;
    }
    return n;
  }
  function ah(n, r) {
    do {
      var l = Ut;
      try {
        if (Br(), rc.current = qn, $r) {
          for (var o = Se.memoizedState; o !== null; ) {
            var c = o.queue;
            c !== null && (c.pending = null), o = o.next;
          }
          $r = !1;
        }
        if (ge = 0, Xe = ze = Se = null, xu = !1, Fo = 0, Dc.current = null, l === null || l.return === null) {
          fn = 1, Zo = r, Ut = null;
          break;
        }
        e: {
          var d = n, m = l.return, x = l, w = r;
          if (r = cn, x.flags |= 32768, w !== null && typeof w == "object" && typeof w.then == "function") {
            var A = w, G = x, q = G.tag;
            if (!(G.mode & 1) && (q === 0 || q === 11 || q === 15)) {
              var Q = G.alternate;
              Q ? (G.updateQueue = Q.updateQueue, G.memoizedState = Q.memoizedState, G.lanes = Q.lanes) : (G.updateQueue = null, G.memoizedState = null);
            }
            var se = Zv(m);
            if (se !== null) {
              se.flags &= -257, gd(se, m, x, d, r), se.mode & 1 && Io(d, A, r), r = se, w = A;
              var ve = r.updateQueue;
              if (ve === null) {
                var ye = /* @__PURE__ */ new Set();
                ye.add(w), r.updateQueue = ye;
              } else ve.add(w);
              break e;
            } else {
              if (!(r & 1)) {
                Io(d, A, r), Ko();
                break e;
              }
              w = Error(g(426));
            }
          } else if (Mt && x.mode & 1) {
            var Kt = Zv(m);
            if (Kt !== null) {
              !(Kt.flags & 65536) && (Kt.flags |= 256), gd(Kt, m, x, d, r), od(Gi(w, x));
              break e;
            }
          }
          d = w = Gi(w, x), fn !== 4 && (fn = 2), qi === null ? qi = [d] : qi.push(d), d = m;
          do {
            switch (d.tag) {
              case 3:
                d.flags |= 65536, r &= -r, d.lanes |= r;
                var O = Qv(d, w, r);
                Fv(d, O);
                break e;
              case 1:
                x = w;
                var k = d.type, j = d.stateNode;
                if (!(d.flags & 128) && (typeof k.getDerivedStateFromError == "function" || j !== null && typeof j.componentDidCatch == "function" && (pa === null || !pa.has(j)))) {
                  d.flags |= 65536, r &= -r, d.lanes |= r;
                  var J = Gv(d, x, r);
                  Fv(d, J);
                  break e;
                }
            }
            d = d.return;
          } while (d !== null);
        }
        uh(l);
      } catch (Ce) {
        r = Ce, Ut === l && l !== null && (Ut = l = l.return);
        continue;
      }
      break;
    } while (!0);
  }
  function ih() {
    var n = jl.current;
    return jl.current = qn, n === null ? qn : n;
  }
  function Ko() {
    (fn === 0 || fn === 3 || fn === 2) && (fn = 4), Wt === null || !(zl & 268435455) && !(Vu & 268435455) || qa(Wt, cn);
  }
  function jc(n, r) {
    var l = Ke;
    Ke |= 2;
    var o = ih();
    (Wt !== n || cn !== r) && (Ci = null, Fl(n, r));
    do
      try {
        Dy();
        break;
      } catch (c) {
        ah(n, c);
      }
    while (!0);
    if (Br(), Ke = l, jl.current = o, Ut !== null) throw Error(g(261));
    return Wt = null, cn = 0, fn;
  }
  function Dy() {
    for (; Ut !== null; ) lh(Ut);
  }
  function ky() {
    for (; Ut !== null && !vr(); ) lh(Ut);
  }
  function lh(n) {
    var r = ch(n.alternate, n, wr);
    n.memoizedProps = n.pendingProps, r === null ? uh(n) : Ut = r, Dc.current = null;
  }
  function uh(n) {
    var r = n;
    do {
      var l = r.alternate;
      if (n = r.return, r.flags & 32768) {
        if (l = Ry(l, r), l !== null) {
          l.flags &= 32767, Ut = l;
          return;
        }
        if (n !== null) n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null;
        else {
          fn = 6, Ut = null;
          return;
        }
      } else if (l = Ty(l, r, wr), l !== null) {
        Ut = l;
        return;
      }
      if (r = r.sibling, r !== null) {
        Ut = r;
        return;
      }
      Ut = r = n;
    } while (r !== null);
    fn === 0 && (fn = 5);
  }
  function Xi(n, r, l) {
    var o = gt, c = da.transition;
    try {
      da.transition = null, gt = 1, Ny(n, r, l, o);
    } finally {
      da.transition = c, gt = o;
    }
    return null;
  }
  function Ny(n, r, l, o) {
    do
      Iu();
    while (va !== null);
    if (Ke & 6) throw Error(g(327));
    l = n.finishedWork;
    var c = n.finishedLanes;
    if (l === null) return null;
    if (n.finishedWork = null, n.finishedLanes = 0, l === n.current) throw Error(g(177));
    n.callbackNode = null, n.callbackPriority = 0;
    var d = l.lanes | l.childLanes;
    if (ty(n, d), n === Wt && (Ut = Wt = null, cn = 0), !(l.subtreeFlags & 2064) && !(l.flags & 2064) || Bu || (Bu = !0, fh(Ia, function() {
      return Iu(), null;
    })), d = (l.flags & 15990) !== 0, l.subtreeFlags & 15990 || d) {
      d = da.transition, da.transition = null;
      var m = gt;
      gt = 1;
      var x = Ke;
      Ke |= 4, Dc.current = null, wy(n, l), nh(l, n), Fs(El), ml = !!Kf, El = Kf = null, n.current = l, _y(l), ji(), Ke = x, gt = m, da.transition = d;
    } else n.current = l;
    if (Bu && (Bu = !1, va = n, Lc = c), d = n.pendingLanes, d === 0 && (pa = null), Yp(l.stateNode), dn(n, pt()), r !== null) for (o = n.onRecoverableError, l = 0; l < r.length; l++) c = r[l], o(c.value, { componentStack: c.stack, digest: c.digest });
    if (Nc) throw Nc = !1, n = _d, _d = null, n;
    return Lc & 1 && n.tag !== 0 && Iu(), d = n.pendingLanes, d & 1 ? n === Oc ? qo++ : (qo = 0, Oc = n) : qo = 0, yr(), null;
  }
  function Iu() {
    if (va !== null) {
      var n = kf(Lc), r = da.transition, l = gt;
      try {
        if (da.transition = null, gt = 16 > n ? 16 : n, va === null) var o = !1;
        else {
          if (n = va, va = null, Lc = 0, Ke & 6) throw Error(g(331));
          var c = Ke;
          for (Ke |= 4, pe = n.current; pe !== null; ) {
            var d = pe, m = d.child;
            if (pe.flags & 16) {
              var x = d.deletions;
              if (x !== null) {
                for (var w = 0; w < x.length; w++) {
                  var A = x[w];
                  for (pe = A; pe !== null; ) {
                    var G = pe;
                    switch (G.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Uu(8, G, d);
                    }
                    var q = G.child;
                    if (q !== null) q.return = G, pe = q;
                    else for (; pe !== null; ) {
                      G = pe;
                      var Q = G.sibling, se = G.return;
                      if (eh(G), G === A) {
                        pe = null;
                        break;
                      }
                      if (Q !== null) {
                        Q.return = se, pe = Q;
                        break;
                      }
                      pe = se;
                    }
                  }
                }
                var ve = d.alternate;
                if (ve !== null) {
                  var ye = ve.child;
                  if (ye !== null) {
                    ve.child = null;
                    do {
                      var Kt = ye.sibling;
                      ye.sibling = null, ye = Kt;
                    } while (ye !== null);
                  }
                }
                pe = d;
              }
            }
            if (d.subtreeFlags & 2064 && m !== null) m.return = d, pe = m;
            else e: for (; pe !== null; ) {
              if (d = pe, d.flags & 2048) switch (d.tag) {
                case 0:
                case 11:
                case 15:
                  Uu(9, d, d.return);
              }
              var O = d.sibling;
              if (O !== null) {
                O.return = d.return, pe = O;
                break e;
              }
              pe = d.return;
            }
          }
          var k = n.current;
          for (pe = k; pe !== null; ) {
            m = pe;
            var j = m.child;
            if (m.subtreeFlags & 2064 && j !== null) j.return = m, pe = j;
            else e: for (m = k; pe !== null; ) {
              if (x = pe, x.flags & 2048) try {
                switch (x.tag) {
                  case 0:
                  case 11:
                  case 15:
                    _c(9, x);
                }
              } catch (Ce) {
                Qt(x, x.return, Ce);
              }
              if (x === m) {
                pe = null;
                break e;
              }
              var J = x.sibling;
              if (J !== null) {
                J.return = x.return, pe = J;
                break e;
              }
              pe = x.return;
            }
          }
          if (Ke = c, yr(), Da && typeof Da.onPostCommitFiberRoot == "function") try {
            Da.onPostCommitFiberRoot(fo, n);
          } catch {
          }
          o = !0;
        }
        return o;
      } finally {
        gt = l, da.transition = r;
      }
    }
    return !1;
  }
  function oh(n, r, l) {
    r = Gi(l, r), r = Qv(n, r, 1), n = Wi(n, r, 1), r = _n(), n !== null && (hl(n, 1, r), dn(n, r));
  }
  function Qt(n, r, l) {
    if (n.tag === 3) oh(n, n, l);
    else for (; r !== null; ) {
      if (r.tag === 3) {
        oh(r, n, l);
        break;
      } else if (r.tag === 1) {
        var o = r.stateNode;
        if (typeof r.type.getDerivedStateFromError == "function" || typeof o.componentDidCatch == "function" && (pa === null || !pa.has(o))) {
          n = Gi(l, n), n = Gv(r, n, 1), r = Wi(r, n, 1), n = _n(), r !== null && (hl(r, 1, n), dn(r, n));
          break;
        }
      }
      r = r.return;
    }
  }
  function Ly(n, r, l) {
    var o = n.pingCache;
    o !== null && o.delete(r), r = _n(), n.pingedLanes |= n.suspendedLanes & l, Wt === n && (cn & l) === l && (fn === 4 || fn === 3 && (cn & 130023424) === cn && 500 > pt() - kc ? Fl(n, 0) : wd |= l), dn(n, r);
  }
  function sh(n, r) {
    r === 0 && (n.mode & 1 ? (r = au, au <<= 1, !(au & 130023424) && (au = 4194304)) : r = 1);
    var l = _n();
    n = mi(n, r), n !== null && (hl(n, r, l), dn(n, l));
  }
  function Nd(n) {
    var r = n.memoizedState, l = 0;
    r !== null && (l = r.retryLane), sh(n, l);
  }
  function Oy(n, r) {
    var l = 0;
    switch (n.tag) {
      case 13:
        var o = n.stateNode, c = n.memoizedState;
        c !== null && (l = c.retryLane);
        break;
      case 19:
        o = n.stateNode;
        break;
      default:
        throw Error(g(314));
    }
    o !== null && o.delete(r), sh(n, l);
  }
  var ch;
  ch = function(n, r, l) {
    if (n !== null) if (n.memoizedProps !== r.pendingProps || It.current) Tr = !0;
    else {
      if (!(n.lanes & l) && !(r.flags & 128)) return Tr = !1, gi(n, r, l);
      Tr = !!(n.flags & 131072);
    }
    else Tr = !1, Mt && r.flags & 1048576 && id(r, mu, r.index);
    switch (r.lanes = 0, r.tag) {
      case 2:
        var o = r.type;
        Qo(n, r), n = r.pendingProps;
        var c = aa(r, je.current);
        gu(r, l), c = W(null, r, o, n, c, l);
        var d = an();
        return r.flags |= 1, typeof c == "object" && c !== null && typeof c.render == "function" && c.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, zt(o) ? (d = !0, Ys(r)) : d = !1, r.memoizedState = c.state !== null && c.state !== void 0 ? c.state : null, Ks(r), c.updater = Ol, r.stateNode = c, c._reactInternals = r, md(r, o, n, l), r = Sc(null, r, o, !0, d, l)) : (r.tag = 0, Mt && d && Ws(r), qt(null, r, c, l), r = r.child), r;
      case 16:
        o = r.elementType;
        e: {
          switch (Qo(n, r), n = r.pendingProps, c = o._init, o = c(o._payload), r.type = o, c = r.tag = My(o), n = xr(o, n), c) {
            case 0:
              r = Be(null, r, o, n, l);
              break e;
            case 1:
              r = Yo(null, r, o, n, l);
              break e;
            case 11:
              r = ku(null, r, o, n, l);
              break e;
            case 14:
              r = Zi(null, r, o, xr(o.type, n), l);
              break e;
          }
          throw Error(g(
            306,
            o,
            ""
          ));
        }
        return r;
      case 0:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : xr(o, c), Be(n, r, o, c, l);
      case 1:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : xr(o, c), Yo(n, r, o, c, l);
      case 3:
        e: {
          if (xy(r), n === null) throw Error(g(387));
          o = r.pendingProps, d = r.memoizedState, c = d.element, Cu(n, r), ec(r, o, null, l);
          var m = r.memoizedState;
          if (o = m.element, d.isDehydrated) if (d = { element: o, isDehydrated: !1, cache: m.cache, pendingSuspenseBoundaries: m.pendingSuspenseBoundaries, transitions: m.transitions }, r.updateQueue.baseState = d, r.memoizedState = d, r.flags & 256) {
            c = Gi(Error(g(423)), r), r = Xv(n, r, o, l, c);
            break e;
          } else if (o !== c) {
            c = Gi(Error(g(424)), r), r = Xv(n, r, o, l, c);
            break e;
          } else for (Sr = Ma(r.stateNode.containerInfo.firstChild), Pr = r, Mt = !0, ua = null, l = Av(r, null, o, l), r.child = l; l; ) l.flags = l.flags & -3 | 4096, l = l.sibling;
          else {
            if (Pt(), o === c) {
              r = Xt(n, r, l);
              break e;
            }
            qt(n, r, o, l);
          }
          r = r.child;
        }
        return r;
      case 5:
        return Pv(r), n === null && Gs(r), o = r.type, c = r.pendingProps, d = n !== null ? n.memoizedProps : null, m = c.children, Lo(o, c) ? m = null : d !== null && Lo(o, d) && (r.flags |= 32), Ml(n, r), qt(n, r, m, l), r.child;
      case 6:
        return n === null && Gs(r), null;
      case 13:
        return Kv(n, r, l);
      case 4:
        return fd(r, r.stateNode.containerInfo), o = r.pendingProps, n === null ? r.child = yu(r, null, o, l) : qt(n, r, o, l), r.child;
      case 11:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : xr(o, c), ku(n, r, o, c, l);
      case 7:
        return qt(n, r, r.pendingProps, l), r.child;
      case 8:
        return qt(n, r, r.pendingProps.children, l), r.child;
      case 12:
        return qt(n, r, r.pendingProps.children, l), r.child;
      case 10:
        e: {
          if (o = r.type._context, c = r.pendingProps, d = r.memoizedProps, m = c.value, vt(hi, o._currentValue), o._currentValue = m, d !== null) if (na(d.value, m)) {
            if (d.children === c.children && !It.current) {
              r = Xt(n, r, l);
              break e;
            }
          } else for (d = r.child, d !== null && (d.return = r); d !== null; ) {
            var x = d.dependencies;
            if (x !== null) {
              m = d.child;
              for (var w = x.firstContext; w !== null; ) {
                if (w.context === o) {
                  if (d.tag === 1) {
                    w = Er(-1, l & -l), w.tag = 2;
                    var A = d.updateQueue;
                    if (A !== null) {
                      A = A.shared;
                      var G = A.pending;
                      G === null ? w.next = w : (w.next = G.next, G.next = w), A.pending = w;
                    }
                  }
                  d.lanes |= l, w = d.alternate, w !== null && (w.lanes |= l), cd(
                    d.return,
                    l,
                    r
                  ), x.lanes |= l;
                  break;
                }
                w = w.next;
              }
            } else if (d.tag === 10) m = d.type === r.type ? null : d.child;
            else if (d.tag === 18) {
              if (m = d.return, m === null) throw Error(g(341));
              m.lanes |= l, x = m.alternate, x !== null && (x.lanes |= l), cd(m, l, r), m = d.sibling;
            } else m = d.child;
            if (m !== null) m.return = d;
            else for (m = d; m !== null; ) {
              if (m === r) {
                m = null;
                break;
              }
              if (d = m.sibling, d !== null) {
                d.return = m.return, m = d;
                break;
              }
              m = m.return;
            }
            d = m;
          }
          qt(n, r, c.children, l), r = r.child;
        }
        return r;
      case 9:
        return c = r.type, o = r.pendingProps.children, gu(r, l), c = sa(c), o = o(c), r.flags |= 1, qt(n, r, o, l), r.child;
      case 14:
        return o = r.type, c = xr(o, r.pendingProps), c = xr(o.type, c), Zi(n, r, o, c, l);
      case 15:
        return Cc(n, r, r.type, r.pendingProps, l);
      case 17:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : xr(o, c), Qo(n, r), r.tag = 1, zt(o) ? (n = !0, Ys(r)) : n = !1, gu(r, l), Iv(r, o, c), md(r, o, c, l), Sc(null, r, o, !0, n, l);
      case 19:
        return Sd(n, r, l);
      case 22:
        return Rr(n, r, l);
    }
    throw Error(g(156, r.tag));
  };
  function fh(n, r) {
    return Lt(n, r);
  }
  function dh(n, r, l, o) {
    this.tag = n, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = r, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = o, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function ha(n, r, l, o) {
    return new dh(n, r, l, o);
  }
  function Ld(n) {
    return n = n.prototype, !(!n || !n.isReactComponent);
  }
  function My(n) {
    if (typeof n == "function") return Ld(n) ? 1 : 0;
    if (n != null) {
      if (n = n.$$typeof, n === Dn) return 11;
      if (n === yn) return 14;
    }
    return 2;
  }
  function Ki(n, r) {
    var l = n.alternate;
    return l === null ? (l = ha(n.tag, r, n.key, n.mode), l.elementType = n.elementType, l.type = n.type, l.stateNode = n.stateNode, l.alternate = n, n.alternate = l) : (l.pendingProps = r, l.type = n.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = n.flags & 14680064, l.childLanes = n.childLanes, l.lanes = n.lanes, l.child = n.child, l.memoizedProps = n.memoizedProps, l.memoizedState = n.memoizedState, l.updateQueue = n.updateQueue, r = n.dependencies, l.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }, l.sibling = n.sibling, l.index = n.index, l.ref = n.ref, l;
  }
  function zc(n, r, l, o, c, d) {
    var m = 2;
    if (o = n, typeof n == "function") Ld(n) && (m = 1);
    else if (typeof n == "string") m = 5;
    else e: switch (n) {
      case $e:
        return Vl(l.children, c, d, r);
      case Gt:
        m = 8, c |= 8;
        break;
      case mn:
        return n = ha(12, l, r, c | 2), n.elementType = mn, n.lanes = d, n;
      case He:
        return n = ha(13, l, r, c), n.elementType = He, n.lanes = d, n;
      case et:
        return n = ha(19, l, r, c), n.elementType = et, n.lanes = d, n;
      case Jn:
        return Ac(l, c, d, r);
      default:
        if (typeof n == "object" && n !== null) switch (n.$$typeof) {
          case wt:
            m = 10;
            break e;
          case dt:
            m = 9;
            break e;
          case Dn:
            m = 11;
            break e;
          case yn:
            m = 14;
            break e;
          case Nt:
            m = 16, o = null;
            break e;
        }
        throw Error(g(130, n == null ? n : typeof n, ""));
    }
    return r = ha(m, l, r, c), r.elementType = n, r.type = o, r.lanes = d, r;
  }
  function Vl(n, r, l, o) {
    return n = ha(7, n, o, r), n.lanes = l, n;
  }
  function Ac(n, r, l, o) {
    return n = ha(22, n, o, r), n.elementType = Jn, n.lanes = l, n.stateNode = { isHidden: !1 }, n;
  }
  function Hc(n, r, l) {
    return n = ha(6, n, null, r), n.lanes = l, n;
  }
  function Jo(n, r, l) {
    return r = ha(4, n.children !== null ? n.children : [], n.key, r), r.lanes = l, r.stateNode = { containerInfo: n.containerInfo, pendingChildren: null, implementation: n.implementation }, r;
  }
  function es(n, r, l, o, c) {
    this.tag = r, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Df(0), this.expirationTimes = Df(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Df(0), this.identifierPrefix = o, this.onRecoverableError = c, this.mutableSourceEagerHydrationData = null;
  }
  function Od(n, r, l, o, c, d, m, x, w) {
    return n = new es(n, r, l, x, w), r === 1 ? (r = 1, d === !0 && (r |= 8)) : r = 0, d = ha(3, null, null, r), n.current = d, d.stateNode = n, d.memoizedState = { element: o, isDehydrated: l, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Ks(d), n;
  }
  function ph(n, r, l) {
    var o = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: mt, key: o == null ? null : "" + o, children: n, containerInfo: r, implementation: l };
  }
  function Md(n) {
    if (!n) return Wa;
    n = n._reactInternals;
    e: {
      if (xe(n) !== n || n.tag !== 1) throw Error(g(170));
      var r = n;
      do {
        switch (r.tag) {
          case 3:
            r = r.stateNode.context;
            break e;
          case 1:
            if (zt(r.type)) {
              r = r.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        r = r.return;
      } while (r !== null);
      throw Error(g(171));
    }
    if (n.tag === 1) {
      var l = n.type;
      if (zt(l)) return Uo(n, l, r);
    }
    return r;
  }
  function Ud(n, r, l, o, c, d, m, x, w) {
    return n = Od(l, o, !0, n, c, d, m, x, w), n.context = Md(null), l = n.current, o = _n(), c = Si(l), d = Er(o, c), d.callback = r ?? null, Wi(l, d, c), n.current.lanes = c, hl(n, c, o), dn(n, o), n;
  }
  function Fc(n, r, l, o) {
    var c = r.current, d = _n(), m = Si(c);
    return l = Md(l), r.context === null ? r.context = l : r.pendingContext = l, r = Er(d, m), r.payload = { element: n }, o = o === void 0 ? null : o, o !== null && (r.callback = o), n = Wi(c, r, m), n !== null && (Bt(n, c, m, d), Js(n, c, m)), m;
  }
  function ts(n) {
    if (n = n.current, !n.child) return null;
    switch (n.child.tag) {
      case 5:
        return n.child.stateNode;
      default:
        return n.child.stateNode;
    }
  }
  function vh(n, r) {
    if (n = n.memoizedState, n !== null && n.dehydrated !== null) {
      var l = n.retryLane;
      n.retryLane = l !== 0 && l < r ? l : r;
    }
  }
  function jd(n, r) {
    vh(n, r), (n = n.alternate) && vh(n, r);
  }
  function Uy() {
    return null;
  }
  var zd = typeof reportError == "function" ? reportError : function(n) {
    console.error(n);
  };
  function Vc(n) {
    this._internalRoot = n;
  }
  ns.prototype.render = Vc.prototype.render = function(n) {
    var r = this._internalRoot;
    if (r === null) throw Error(g(409));
    Fc(n, r, null, null);
  }, ns.prototype.unmount = Vc.prototype.unmount = function() {
    var n = this._internalRoot;
    if (n !== null) {
      this._internalRoot = null;
      var r = n.containerInfo;
      Xa(function() {
        Fc(null, n, null, null);
      }), r[pi] = null;
    }
  };
  function ns(n) {
    this._internalRoot = n;
  }
  ns.prototype.unstable_scheduleHydration = function(n) {
    if (n) {
      var r = Zp();
      n = { blockedOn: null, target: n, priority: r };
      for (var l = 0; l < St.length && r !== 0 && r < St[l].priority; l++) ;
      St.splice(l, 0, n), l === 0 && qp(n);
    }
  };
  function Ji(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11);
  }
  function Pc(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11 && (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable "));
  }
  function hh() {
  }
  function jy(n, r, l, o, c) {
    if (c) {
      if (typeof o == "function") {
        var d = o;
        o = function() {
          var A = ts(m);
          d.call(A);
        };
      }
      var m = Ud(r, o, n, 0, null, !1, !1, "", hh);
      return n._reactRootContainer = m, n[pi] = m.current, vu(n.nodeType === 8 ? n.parentNode : n), Xa(), m;
    }
    for (; c = n.lastChild; ) n.removeChild(c);
    if (typeof o == "function") {
      var x = o;
      o = function() {
        var A = ts(w);
        x.call(A);
      };
    }
    var w = Od(n, 0, !1, null, null, !1, !1, "", hh);
    return n._reactRootContainer = w, n[pi] = w.current, vu(n.nodeType === 8 ? n.parentNode : n), Xa(function() {
      Fc(r, w, l, o);
    }), w;
  }
  function Bc(n, r, l, o, c) {
    var d = l._reactRootContainer;
    if (d) {
      var m = d;
      if (typeof c == "function") {
        var x = c;
        c = function() {
          var w = ts(m);
          x.call(w);
        };
      }
      Fc(r, m, n, c);
    } else m = jy(l, r, n, c, o);
    return ts(m);
  }
  Gp = function(n) {
    switch (n.tag) {
      case 3:
        var r = n.stateNode;
        if (r.current.memoizedState.isDehydrated) {
          var l = vl(r.pendingLanes);
          l !== 0 && (po(r, l | 1), dn(r, pt()), !(Ke & 6) && (Pu = pt() + 500, yr()));
        }
        break;
      case 13:
        Xa(function() {
          var o = mi(n, 1);
          if (o !== null) {
            var c = _n();
            Bt(o, n, 1, c);
          }
        }), jd(n, 1);
    }
  }, bs = function(n) {
    if (n.tag === 13) {
      var r = mi(n, 134217728);
      if (r !== null) {
        var l = _n();
        Bt(r, n, 134217728, l);
      }
      jd(n, 134217728);
    }
  }, Ct = function(n) {
    if (n.tag === 13) {
      var r = Si(n), l = mi(n, r);
      if (l !== null) {
        var o = _n();
        Bt(l, n, r, o);
      }
      jd(n, r);
    }
  }, Zp = function() {
    return gt;
  }, Nf = function(n, r) {
    var l = gt;
    try {
      return gt = n, r();
    } finally {
      gt = l;
    }
  }, jr = function(n, r, l) {
    switch (r) {
      case "input":
        if (Yn(n, l), r = l.name, l.type === "radio" && r != null) {
          for (l = n; l.parentNode; ) l = l.parentNode;
          for (l = l.querySelectorAll("input[name=" + JSON.stringify("" + r) + '][type="radio"]'), r = 0; r < l.length; r++) {
            var o = l[r];
            if (o !== n && o.form === n.form) {
              var c = _e(o);
              if (!c) throw Error(g(90));
              Xr(o), Yn(o, c);
            }
          }
        }
        break;
      case "textarea":
        Ba(n, l);
        break;
      case "select":
        r = l.value, r != null && Pa(n, !!l.multiple, r, !1);
    }
  }, co = kd, Ts = Xa;
  var zy = { usingClientEntryPoint: !1, Events: [Mo, hu, _e, cl, tu, kd] }, rs = { findFiberByHostInstance: ra, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, mh = { bundleType: rs.bundleType, version: rs.version, rendererPackageName: rs.rendererPackageName, rendererConfig: rs.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Ae.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = Ze(n), n === null ? null : n.stateNode;
  }, findFiberByHostInstance: rs.findFiberByHostInstance || Uy, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var $c = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!$c.isDisabled && $c.supportsFiber) try {
      fo = $c.inject(mh), Da = $c;
    } catch {
    }
  }
  return Ea.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = zy, Ea.createPortal = function(n, r) {
    var l = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Ji(r)) throw Error(g(200));
    return ph(n, r, null, l);
  }, Ea.createRoot = function(n, r) {
    if (!Ji(n)) throw Error(g(299));
    var l = !1, o = "", c = zd;
    return r != null && (r.unstable_strictMode === !0 && (l = !0), r.identifierPrefix !== void 0 && (o = r.identifierPrefix), r.onRecoverableError !== void 0 && (c = r.onRecoverableError)), r = Od(n, 1, !1, null, null, l, !1, o, c), n[pi] = r.current, vu(n.nodeType === 8 ? n.parentNode : n), new Vc(r);
  }, Ea.findDOMNode = function(n) {
    if (n == null) return null;
    if (n.nodeType === 1) return n;
    var r = n._reactInternals;
    if (r === void 0)
      throw typeof n.render == "function" ? Error(g(188)) : (n = Object.keys(n).join(","), Error(g(268, n)));
    return n = Ze(r), n = n === null ? null : n.stateNode, n;
  }, Ea.flushSync = function(n) {
    return Xa(n);
  }, Ea.hydrate = function(n, r, l) {
    if (!Pc(r)) throw Error(g(200));
    return Bc(null, n, r, !0, l);
  }, Ea.hydrateRoot = function(n, r, l) {
    if (!Ji(n)) throw Error(g(405));
    var o = l != null && l.hydratedSources || null, c = !1, d = "", m = zd;
    if (l != null && (l.unstable_strictMode === !0 && (c = !0), l.identifierPrefix !== void 0 && (d = l.identifierPrefix), l.onRecoverableError !== void 0 && (m = l.onRecoverableError)), r = Ud(r, null, n, 1, l ?? null, c, !1, d, m), n[pi] = r.current, vu(n), o) for (n = 0; n < o.length; n++) l = o[n], c = l._getVersion, c = c(l._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [l, c] : r.mutableSourceEagerHydrationData.push(
      l,
      c
    );
    return new ns(r);
  }, Ea.render = function(n, r, l) {
    if (!Pc(r)) throw Error(g(200));
    return Bc(null, n, r, !1, l);
  }, Ea.unmountComponentAtNode = function(n) {
    if (!Pc(n)) throw Error(g(40));
    return n._reactRootContainer ? (Xa(function() {
      Bc(null, null, n, !1, function() {
        n._reactRootContainer = null, n[pi] = null;
      });
    }), !0) : !1;
  }, Ea.unstable_batchedUpdates = kd, Ea.unstable_renderSubtreeIntoContainer = function(n, r, l, o) {
    if (!Pc(l)) throw Error(g(200));
    if (n == null || n._reactInternals === void 0) throw Error(g(38));
    return Bc(n, r, l, !1, o);
  }, Ea.version = "18.3.1-next-f1338f8080-20240426", Ea;
}
var xa = {};
/**
 * @license React
 * react-dom.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var LS;
function Ex() {
  return LS || (LS = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var v = Ef, S = IS(), g = v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, _ = !1;
    function b(e) {
      _ = e;
    }
    function L(e) {
      if (!_) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        Y("warn", e, a);
      }
    }
    function y(e) {
      if (!_) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        Y("error", e, a);
      }
    }
    function Y(e, t, a) {
      {
        var i = g.ReactDebugCurrentFrame, u = i.getStackAddendum();
        u !== "" && (t += "%s", a = a.concat([u]));
        var s = a.map(function(f) {
          return String(f);
        });
        s.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var V = 0, F = 1, ee = 2, I = 3, K = 4, oe = 5, be = 6, Qe = 7, at = 8, kt = 9, ke = 10, Re = 11, Ae = 12, Ye = 13, mt = 14, $e = 15, Gt = 16, mn = 17, wt = 18, dt = 19, Dn = 21, He = 22, et = 23, yn = 24, Nt = 25, Jn = !0, te = !1, Ne = !1, fe = !1, lt = !1, ct = !0, kn = !1, er = !0, Fa = !0, un = !0, qr = !0, $n = /* @__PURE__ */ new Set(), fr = {}, Va = {};
    function dr(e, t) {
      Xr(e, t), Xr(e + "Capture", t);
    }
    function Xr(e, t) {
      fr[e] && y("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), fr[e] = t;
      {
        var a = e.toLowerCase();
        Va[a] = e, e === "onDoubleClick" && (Va.ondblclick = e);
      }
      for (var i = 0; i < t.length; i++)
        $n.add(t[i]);
    }
    var gn = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", In = Object.prototype.hasOwnProperty;
    function Nn(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, a = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return a;
      }
    }
    function Ln(e) {
      try {
        return Yn(e), !1;
      } catch {
        return !0;
      }
    }
    function Yn(e) {
      return "" + e;
    }
    function Kr(e, t) {
      if (Ln(e))
        return y("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Nn(e)), Yn(e);
    }
    function Ta(e) {
      if (Ln(e))
        return y("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Nn(e)), Yn(e);
    }
    function ii(e, t) {
      if (Ln(e))
        return y("The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Nn(e)), Yn(e);
    }
    function Pa(e, t) {
      if (Ln(e))
        return y("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Nn(e)), Yn(e);
    }
    function Ra(e) {
      if (Ln(e))
        return y("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", Nn(e)), Yn(e);
    }
    function Or(e) {
      if (Ln(e))
        return y("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.", Nn(e)), Yn(e);
    }
    var Ba = 0, Mr = 1, wa = 2, en = 3, Ur = 4, Mi = 5, _a = 6, ie = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", we = ie + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", Ge = new RegExp("^[" + ie + "][" + we + "]*$"), yt = {}, Ft = {};
    function Cn(e) {
      return In.call(Ft, e) ? !0 : In.call(yt, e) ? !1 : Ge.test(e) ? (Ft[e] = !0, !0) : (yt[e] = !0, y("Invalid attribute name: `%s`", e), !1);
    }
    function Zt(e, t, a) {
      return t !== null ? t.type === Ba : a ? !1 : e.length > 2 && (e[0] === "o" || e[0] === "O") && (e[1] === "n" || e[1] === "N");
    }
    function pr(e, t, a, i) {
      if (a !== null && a.type === Ba)
        return !1;
      switch (typeof t) {
        case "function":
        case "symbol":
          return !0;
        case "boolean": {
          if (i)
            return !1;
          if (a !== null)
            return !a.acceptsBooleans;
          var u = e.toLowerCase().slice(0, 5);
          return u !== "data-" && u !== "aria-";
        }
        default:
          return !1;
      }
    }
    function _t(e, t, a, i) {
      if (t === null || typeof t > "u" || pr(e, t, a, i))
        return !0;
      if (i)
        return !1;
      if (a !== null)
        switch (a.type) {
          case en:
            return !t;
          case Ur:
            return t === !1;
          case Mi:
            return isNaN(t);
          case _a:
            return isNaN(t) || t < 1;
        }
      return !1;
    }
    function jr(e) {
      return bt.hasOwnProperty(e) ? bt[e] : null;
    }
    function Tt(e, t, a, i, u, s, f) {
      this.acceptsBooleans = t === wa || t === en || t === Ur, this.attributeName = i, this.attributeNamespace = u, this.mustUseProperty = a, this.propertyName = e, this.type = t, this.sanitizeURL = s, this.removeEmptyString = f;
    }
    var bt = {}, eu = [
      "children",
      "dangerouslySetInnerHTML",
      // TODO: This prevents the assignment of defaultValue to regular
      // elements (not just inputs). Now that ReactDOMInput assigns to the
      // defaultValue property -- do we need this?
      "defaultValue",
      "defaultChecked",
      "innerHTML",
      "suppressContentEditableWarning",
      "suppressHydrationWarning",
      "style"
    ];
    eu.forEach(function(e) {
      bt[e] = new Tt(
        e,
        Ba,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
      var t = e[0], a = e[1];
      bt[t] = new Tt(
        t,
        Mr,
        !1,
        // mustUseProperty
        a,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
      bt[e] = new Tt(
        e,
        wa,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
      bt[e] = new Tt(
        e,
        wa,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "allowFullScreen",
      "async",
      // Note: there is a special case that prevents it from being written to the DOM
      // on the client side because the browsers are inconsistent. Instead we call focus().
      "autoFocus",
      "autoPlay",
      "controls",
      "default",
      "defer",
      "disabled",
      "disablePictureInPicture",
      "disableRemotePlayback",
      "formNoValidate",
      "hidden",
      "loop",
      "noModule",
      "noValidate",
      "open",
      "playsInline",
      "readOnly",
      "required",
      "reversed",
      "scoped",
      "seamless",
      // Microdata
      "itemScope"
    ].forEach(function(e) {
      bt[e] = new Tt(
        e,
        en,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "checked",
      // Note: `option.selected` is not updated if `select.multiple` is
      // disabled with `removeAttribute`. We have special logic for handling this.
      "multiple",
      "muted",
      "selected"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      bt[e] = new Tt(
        e,
        en,
        !0,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "capture",
      "download"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      bt[e] = new Tt(
        e,
        Ur,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "cols",
      "rows",
      "size",
      "span"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      bt[e] = new Tt(
        e,
        _a,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["rowSpan", "start"].forEach(function(e) {
      bt[e] = new Tt(
        e,
        Mi,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var cl = /[\-\:]([a-z])/g, tu = function(e) {
      return e[1].toUpperCase();
    };
    [
      "accent-height",
      "alignment-baseline",
      "arabic-form",
      "baseline-shift",
      "cap-height",
      "clip-path",
      "clip-rule",
      "color-interpolation",
      "color-interpolation-filters",
      "color-profile",
      "color-rendering",
      "dominant-baseline",
      "enable-background",
      "fill-opacity",
      "fill-rule",
      "flood-color",
      "flood-opacity",
      "font-family",
      "font-size",
      "font-size-adjust",
      "font-stretch",
      "font-style",
      "font-variant",
      "font-weight",
      "glyph-name",
      "glyph-orientation-horizontal",
      "glyph-orientation-vertical",
      "horiz-adv-x",
      "horiz-origin-x",
      "image-rendering",
      "letter-spacing",
      "lighting-color",
      "marker-end",
      "marker-mid",
      "marker-start",
      "overline-position",
      "overline-thickness",
      "paint-order",
      "panose-1",
      "pointer-events",
      "rendering-intent",
      "shape-rendering",
      "stop-color",
      "stop-opacity",
      "strikethrough-position",
      "strikethrough-thickness",
      "stroke-dasharray",
      "stroke-dashoffset",
      "stroke-linecap",
      "stroke-linejoin",
      "stroke-miterlimit",
      "stroke-opacity",
      "stroke-width",
      "text-anchor",
      "text-decoration",
      "text-rendering",
      "underline-position",
      "underline-thickness",
      "unicode-bidi",
      "unicode-range",
      "units-per-em",
      "v-alphabetic",
      "v-hanging",
      "v-ideographic",
      "v-mathematical",
      "vector-effect",
      "vert-adv-y",
      "vert-origin-x",
      "vert-origin-y",
      "word-spacing",
      "writing-mode",
      "xmlns:xlink",
      "x-height"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(cl, tu);
      bt[t] = new Tt(
        t,
        Mr,
        !1,
        // mustUseProperty
        e,
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xlink:actuate",
      "xlink:arcrole",
      "xlink:role",
      "xlink:show",
      "xlink:title",
      "xlink:type"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(cl, tu);
      bt[t] = new Tt(
        t,
        Mr,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/1999/xlink",
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xml:base",
      "xml:lang",
      "xml:space"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(cl, tu);
      bt[t] = new Tt(
        t,
        Mr,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        // sanitizeURL
        !1
      );
    }), ["tabIndex", "crossOrigin"].forEach(function(e) {
      bt[e] = new Tt(
        e,
        Mr,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var co = "xlinkHref";
    bt[co] = new Tt(
      "xlinkHref",
      Mr,
      !1,
      // mustUseProperty
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      // sanitizeURL
      !1
    ), ["src", "href", "action", "formAction"].forEach(function(e) {
      bt[e] = new Tt(
        e,
        Mr,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !0,
        // sanitizeURL
        !0
      );
    });
    var Ts = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, fl = !1;
    function nu(e) {
      !fl && Ts.test(e) && (fl = !0, y("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    function dl(e, t, a, i) {
      if (i.mustUseProperty) {
        var u = i.propertyName;
        return e[u];
      } else {
        Kr(a, t), i.sanitizeURL && nu("" + a);
        var s = i.attributeName, f = null;
        if (i.type === Ur) {
          if (e.hasAttribute(s)) {
            var p = e.getAttribute(s);
            return p === "" ? !0 : _t(t, a, i, !1) ? p : p === "" + a ? a : p;
          }
        } else if (e.hasAttribute(s)) {
          if (_t(t, a, i, !1))
            return e.getAttribute(s);
          if (i.type === en)
            return a;
          f = e.getAttribute(s);
        }
        return _t(t, a, i, !1) ? f === null ? a : f : f === "" + a ? a : f;
      }
    }
    function ru(e, t, a, i) {
      {
        if (!Cn(t))
          return;
        if (!e.hasAttribute(t))
          return a === void 0 ? void 0 : null;
        var u = e.getAttribute(t);
        return Kr(a, t), u === "" + a ? a : u;
      }
    }
    function $a(e, t, a, i) {
      var u = jr(t);
      if (!Zt(t, u, i)) {
        if (_t(t, a, u, i) && (a = null), i || u === null) {
          if (Cn(t)) {
            var s = t;
            a === null ? e.removeAttribute(s) : (Kr(a, t), e.setAttribute(s, "" + a));
          }
          return;
        }
        var f = u.mustUseProperty;
        if (f) {
          var p = u.propertyName;
          if (a === null) {
            var h = u.type;
            e[p] = h === en ? !1 : "";
          } else
            e[p] = a;
          return;
        }
        var C = u.attributeName, E = u.attributeNamespace;
        if (a === null)
          e.removeAttribute(C);
        else {
          var N = u.type, D;
          N === en || N === Ur && a === !0 ? D = "" : (Kr(a, C), D = "" + a, u.sanitizeURL && nu(D.toString())), E ? e.setAttributeNS(E, C, D) : e.setAttribute(C, D);
        }
      }
    }
    var li = Symbol.for("react.element"), zr = Symbol.for("react.portal"), ba = Symbol.for("react.fragment"), Ui = Symbol.for("react.strict_mode"), pl = Symbol.for("react.profiler"), R = Symbol.for("react.provider"), Z = Symbol.for("react.context"), ne = Symbol.for("react.forward_ref"), xe = Symbol.for("react.suspense"), tt = Symbol.for("react.suspense_list"), it = Symbol.for("react.memo"), Me = Symbol.for("react.lazy"), Ze = Symbol.for("react.scope"), Sn = Symbol.for("react.debug_trace_mode"), Lt = Symbol.for("react.offscreen"), Vt = Symbol.for("react.legacy_hidden"), vr = Symbol.for("react.cache"), ji = Symbol.for("react.tracing_marker"), pt = Symbol.iterator, Wn = "@@iterator";
    function Ar(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = pt && e[pt] || e[Wn];
      return typeof t == "function" ? t : null;
    }
    var qe = Object.assign, Ia = 0, Ip, wf, fo, Da, Yp, Jr, Wp;
    function Qp() {
    }
    Qp.__reactDisabledLog = !0;
    function ey() {
      {
        if (Ia === 0) {
          Ip = console.log, wf = console.info, fo = console.warn, Da = console.error, Yp = console.group, Jr = console.groupCollapsed, Wp = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Qp,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        Ia++;
      }
    }
    function Rs() {
      {
        if (Ia--, Ia === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: qe({}, e, {
              value: Ip
            }),
            info: qe({}, e, {
              value: wf
            }),
            warn: qe({}, e, {
              value: fo
            }),
            error: qe({}, e, {
              value: Da
            }),
            group: qe({}, e, {
              value: Yp
            }),
            groupCollapsed: qe({}, e, {
              value: Jr
            }),
            groupEnd: qe({}, e, {
              value: Wp
            })
          });
        }
        Ia < 0 && y("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var au = g.ReactCurrentDispatcher, vl;
    function ka(e, t, a) {
      {
        if (vl === void 0)
          try {
            throw Error();
          } catch (u) {
            var i = u.stack.trim().match(/\n( *(at )?)/);
            vl = i && i[1] || "";
          }
        return `
` + vl + e;
      }
    }
    var _f = !1, ws;
    {
      var bf = typeof WeakMap == "function" ? WeakMap : Map;
      ws = new bf();
    }
    function _s(e, t) {
      if (!e || _f)
        return "";
      {
        var a = ws.get(e);
        if (a !== void 0)
          return a;
      }
      var i;
      _f = !0;
      var u = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var s;
      s = au.current, au.current = null, ey();
      try {
        if (t) {
          var f = function() {
            throw Error();
          };
          if (Object.defineProperty(f.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(f, []);
            } catch (H) {
              i = H;
            }
            Reflect.construct(e, [], f);
          } else {
            try {
              f.call();
            } catch (H) {
              i = H;
            }
            e.call(f.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (H) {
            i = H;
          }
          e();
        }
      } catch (H) {
        if (H && i && typeof H.stack == "string") {
          for (var p = H.stack.split(`
`), h = i.stack.split(`
`), C = p.length - 1, E = h.length - 1; C >= 1 && E >= 0 && p[C] !== h[E]; )
            E--;
          for (; C >= 1 && E >= 0; C--, E--)
            if (p[C] !== h[E]) {
              if (C !== 1 || E !== 1)
                do
                  if (C--, E--, E < 0 || p[C] !== h[E]) {
                    var N = `
` + p[C].replace(" at new ", " at ");
                    return e.displayName && N.includes("<anonymous>") && (N = N.replace("<anonymous>", e.displayName)), typeof e == "function" && ws.set(e, N), N;
                  }
                while (C >= 1 && E >= 0);
              break;
            }
        }
      } finally {
        _f = !1, au.current = s, Rs(), Error.prepareStackTrace = u;
      }
      var D = e ? e.displayName || e.name : "", z = D ? ka(D) : "";
      return typeof e == "function" && ws.set(e, z), z;
    }
    function Df(e, t, a) {
      return _s(e, !0);
    }
    function hl(e, t, a) {
      return _s(e, !1);
    }
    function ty(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function po(e, t, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return _s(e, ty(e));
      if (typeof e == "string")
        return ka(e);
      switch (e) {
        case xe:
          return ka("Suspense");
        case tt:
          return ka("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case ne:
            return hl(e.render);
          case it:
            return po(e.type, t, a);
          case Me: {
            var i = e, u = i._payload, s = i._init;
            try {
              return po(s(u), t, a);
            } catch {
            }
          }
        }
      return "";
    }
    function gt(e) {
      switch (e._debugOwner && e._debugOwner.type, e._debugSource, e.tag) {
        case oe:
          return ka(e.type);
        case Gt:
          return ka("Lazy");
        case Ye:
          return ka("Suspense");
        case dt:
          return ka("SuspenseList");
        case V:
        case ee:
        case $e:
          return hl(e.type);
        case Re:
          return hl(e.type.render);
        case F:
          return Df(e.type);
        default:
          return "";
      }
    }
    function kf(e) {
      try {
        var t = "", a = e;
        do
          t += gt(a), a = a.return;
        while (a);
        return t;
      } catch (i) {
        return `
Error generating stack: ` + i.message + `
` + i.stack;
      }
    }
    function Gp(e, t, a) {
      var i = e.displayName;
      if (i)
        return i;
      var u = t.displayName || t.name || "";
      return u !== "" ? a + "(" + u + ")" : a;
    }
    function bs(e) {
      return e.displayName || "Context";
    }
    function Ct(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && y("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case ba:
          return "Fragment";
        case zr:
          return "Portal";
        case pl:
          return "Profiler";
        case Ui:
          return "StrictMode";
        case xe:
          return "Suspense";
        case tt:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case Z:
            var t = e;
            return bs(t) + ".Consumer";
          case R:
            var a = e;
            return bs(a._context) + ".Provider";
          case ne:
            return Gp(e, e.render, "ForwardRef");
          case it:
            var i = e.displayName || null;
            return i !== null ? i : Ct(e.type) || "Memo";
          case Me: {
            var u = e, s = u._payload, f = u._init;
            try {
              return Ct(f(s));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    function Zp(e, t, a) {
      var i = t.displayName || t.name || "";
      return e.displayName || (i !== "" ? a + "(" + i + ")" : a);
    }
    function Nf(e) {
      return e.displayName || "Context";
    }
    function Pe(e) {
      var t = e.tag, a = e.type;
      switch (t) {
        case yn:
          return "Cache";
        case kt:
          var i = a;
          return Nf(i) + ".Consumer";
        case ke:
          var u = a;
          return Nf(u._context) + ".Provider";
        case wt:
          return "DehydratedFragment";
        case Re:
          return Zp(a, a.render, "ForwardRef");
        case Qe:
          return "Fragment";
        case oe:
          return a;
        case K:
          return "Portal";
        case I:
          return "Root";
        case be:
          return "Text";
        case Gt:
          return Ct(a);
        case at:
          return a === Ui ? "StrictMode" : "Mode";
        case He:
          return "Offscreen";
        case Ae:
          return "Profiler";
        case Dn:
          return "Scope";
        case Ye:
          return "Suspense";
        case dt:
          return "SuspenseList";
        case Nt:
          return "TracingMarker";
        case F:
        case V:
        case mn:
        case ee:
        case mt:
        case $e:
          if (typeof a == "function")
            return a.displayName || a.name || null;
          if (typeof a == "string")
            return a;
          break;
      }
      return null;
    }
    var vo = g.ReactDebugCurrentFrame, tn = null, ea = !1;
    function ta() {
      {
        if (tn === null)
          return null;
        var e = tn._debugOwner;
        if (e !== null && typeof e < "u")
          return Pe(e);
      }
      return null;
    }
    function ho() {
      return tn === null ? "" : kf(tn);
    }
    function on() {
      vo.getCurrentStack = null, tn = null, ea = !1;
    }
    function St(e) {
      vo.getCurrentStack = e === null ? null : ho, tn = e, ea = !1;
    }
    function ny() {
      return tn;
    }
    function Na(e) {
      ea = e;
    }
    function Qn(e) {
      return "" + e;
    }
    function zi(e) {
      switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return e;
        case "object":
          return Or(e), e;
        default:
          return "";
      }
    }
    var qp = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function iu(e, t) {
      qp[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || y("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || y("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function Lf(e) {
      var t = e.type, a = e.nodeName;
      return a && a.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function Xp(e) {
      return e._valueTracker;
    }
    function mo(e) {
      e._valueTracker = null;
    }
    function yo(e) {
      var t = "";
      return e && (Lf(e) ? t = e.checked ? "true" : "false" : t = e.value), t;
    }
    function lu(e) {
      var t = Lf(e) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
      Or(e[t]);
      var i = "" + e[t];
      if (!(e.hasOwnProperty(t) || typeof a > "u" || typeof a.get != "function" || typeof a.set != "function")) {
        var u = a.get, s = a.set;
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
            return u.call(this);
          },
          set: function(p) {
            Or(p), i = "" + p, s.call(this, p);
          }
        }), Object.defineProperty(e, t, {
          enumerable: a.enumerable
        });
        var f = {
          getValue: function() {
            return i;
          },
          setValue: function(p) {
            Or(p), i = "" + p;
          },
          stopTracking: function() {
            mo(e), delete e[t];
          }
        };
        return f;
      }
    }
    function ml(e) {
      Xp(e) || (e._valueTracker = lu(e));
    }
    function Kp(e) {
      if (!e)
        return !1;
      var t = Xp(e);
      if (!t)
        return !0;
      var a = t.getValue(), i = yo(e);
      return i !== a ? (t.setValue(i), !0) : !1;
    }
    function Ds(e) {
      if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
        return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    var ks = !1, go = !1, Ns = !1, Of = !1;
    function ui(e) {
      var t = e.type === "checkbox" || e.type === "radio";
      return t ? e.checked != null : e.value != null;
    }
    function Co(e, t) {
      var a = e, i = t.checked, u = qe({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: i ?? a._wrapperState.initialChecked
      });
      return u;
    }
    function So(e, t) {
      iu("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !go && (y("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", ta() || "A component", t.type), go = !0), t.value !== void 0 && t.defaultValue !== void 0 && !ks && (y("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", ta() || "A component", t.type), ks = !0);
      var a = e, i = t.defaultValue == null ? "" : t.defaultValue;
      a._wrapperState = {
        initialChecked: t.checked != null ? t.checked : t.defaultChecked,
        initialValue: zi(t.value != null ? t.value : i),
        controlled: ui(t)
      };
    }
    function Mf(e, t) {
      var a = e, i = t.checked;
      i != null && $a(a, "checked", i, !1);
    }
    function uu(e, t) {
      var a = e;
      {
        var i = ui(t);
        !a._wrapperState.controlled && i && !Of && (y("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), Of = !0), a._wrapperState.controlled && !i && !Ns && (y("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), Ns = !0);
      }
      Mf(e, t);
      var u = zi(t.value), s = t.type;
      if (u != null)
        s === "number" ? (u === 0 && a.value === "" || // We explicitly want to coerce to number here if possible.
        // eslint-disable-next-line
        a.value != u) && (a.value = Qn(u)) : a.value !== Qn(u) && (a.value = Qn(u));
      else if (s === "submit" || s === "reset") {
        a.removeAttribute("value");
        return;
      }
      t.hasOwnProperty("value") ? Ai(a, t.type, u) : t.hasOwnProperty("defaultValue") && Ai(a, t.type, zi(t.defaultValue)), t.checked == null && t.defaultChecked != null && (a.defaultChecked = !!t.defaultChecked);
    }
    function Eo(e, t, a) {
      var i = e;
      if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var u = t.type, s = u === "submit" || u === "reset";
        if (s && (t.value === void 0 || t.value === null))
          return;
        var f = Qn(i._wrapperState.initialValue);
        a || f !== i.value && (i.value = f), i.defaultValue = f;
      }
      var p = i.name;
      p !== "" && (i.name = ""), i.defaultChecked = !i.defaultChecked, i.defaultChecked = !!i._wrapperState.initialChecked, p !== "" && (i.name = p);
    }
    function Jp(e, t) {
      var a = e;
      uu(a, t), Hr(a, t);
    }
    function Hr(e, t) {
      var a = t.name;
      if (t.type === "radio" && a != null) {
        for (var i = e; i.parentNode; )
          i = i.parentNode;
        Kr(a, "name");
        for (var u = i.querySelectorAll("input[name=" + JSON.stringify("" + a) + '][type="radio"]'), s = 0; s < u.length; s++) {
          var f = u[s];
          if (!(f === e || f.form !== e.form)) {
            var p = Mh(f);
            if (!p)
              throw new Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
            Kp(f), uu(f, p);
          }
        }
      }
    }
    function Ai(e, t, a) {
      // Focused number inputs synchronize on blur. See ChangeEventPlugin.js
      (t !== "number" || Ds(e.ownerDocument) !== e) && (a == null ? e.defaultValue = Qn(e._wrapperState.initialValue) : e.defaultValue !== Qn(a) && (e.defaultValue = Qn(a)));
    }
    var Ls = !1, ou = !1, ev = !1;
    function Os(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? v.Children.forEach(t.children, function(a) {
        a != null && (typeof a == "string" || typeof a == "number" || ou || (ou = !0, y("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }) : t.dangerouslySetInnerHTML != null && (ev || (ev = !0, y("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), t.selected != null && !Ls && (y("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), Ls = !0);
    }
    function Uf(e, t) {
      t.value != null && e.setAttribute("value", Qn(zi(t.value)));
    }
    var xo = Array.isArray;
    function En(e) {
      return xo(e);
    }
    var Ms;
    Ms = !1;
    function tv() {
      var e = ta();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    var nv = ["value", "defaultValue"];
    function ry(e) {
      {
        iu("select", e);
        for (var t = 0; t < nv.length; t++) {
          var a = nv[t];
          if (e[a] != null) {
            var i = En(e[a]);
            e.multiple && !i ? y("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", a, tv()) : !e.multiple && i && y("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", a, tv());
          }
        }
      }
    }
    function Hi(e, t, a, i) {
      var u = e.options;
      if (t) {
        for (var s = a, f = {}, p = 0; p < s.length; p++)
          f["$" + s[p]] = !0;
        for (var h = 0; h < u.length; h++) {
          var C = f.hasOwnProperty("$" + u[h].value);
          u[h].selected !== C && (u[h].selected = C), C && i && (u[h].defaultSelected = !0);
        }
      } else {
        for (var E = Qn(zi(a)), N = null, D = 0; D < u.length; D++) {
          if (u[D].value === E) {
            u[D].selected = !0, i && (u[D].defaultSelected = !0);
            return;
          }
          N === null && !u[D].disabled && (N = u[D]);
        }
        N !== null && (N.selected = !0);
      }
    }
    function jf(e, t) {
      return qe({}, t, {
        value: void 0
      });
    }
    function rv(e, t) {
      var a = e;
      ry(t), a._wrapperState = {
        wasMultiple: !!t.multiple
      }, t.value !== void 0 && t.defaultValue !== void 0 && !Ms && (y("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), Ms = !0);
    }
    function ay(e, t) {
      var a = e;
      a.multiple = !!t.multiple;
      var i = t.value;
      i != null ? Hi(a, !!t.multiple, i, !1) : t.defaultValue != null && Hi(a, !!t.multiple, t.defaultValue, !0);
    }
    function iy(e, t) {
      var a = e, i = a._wrapperState.wasMultiple;
      a._wrapperState.wasMultiple = !!t.multiple;
      var u = t.value;
      u != null ? Hi(a, !!t.multiple, u, !1) : i !== !!t.multiple && (t.defaultValue != null ? Hi(a, !!t.multiple, t.defaultValue, !0) : Hi(a, !!t.multiple, t.multiple ? [] : "", !1));
    }
    function ly(e, t) {
      var a = e, i = t.value;
      i != null && Hi(a, !!t.multiple, i, !1);
    }
    var zf = !1;
    function Af(e, t) {
      var a = e;
      if (t.dangerouslySetInnerHTML != null)
        throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
      var i = qe({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: Qn(a._wrapperState.initialValue)
      });
      return i;
    }
    function av(e, t) {
      var a = e;
      iu("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !zf && (y("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", ta() || "A component"), zf = !0);
      var i = t.value;
      if (i == null) {
        var u = t.children, s = t.defaultValue;
        if (u != null) {
          y("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
          {
            if (s != null)
              throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
            if (En(u)) {
              if (u.length > 1)
                throw new Error("<textarea> can only have at most one child.");
              u = u[0];
            }
            s = u;
          }
        }
        s == null && (s = ""), i = s;
      }
      a._wrapperState = {
        initialValue: zi(i)
      };
    }
    function iv(e, t) {
      var a = e, i = zi(t.value), u = zi(t.defaultValue);
      if (i != null) {
        var s = Qn(i);
        s !== a.value && (a.value = s), t.defaultValue == null && a.defaultValue !== s && (a.defaultValue = s);
      }
      u != null && (a.defaultValue = Qn(u));
    }
    function lv(e, t) {
      var a = e, i = a.textContent;
      i === a._wrapperState.initialValue && i !== "" && i !== null && (a.value = i);
    }
    function Hf(e, t) {
      iv(e, t);
    }
    var oi = "http://www.w3.org/1999/xhtml", uy = "http://www.w3.org/1998/Math/MathML", Ff = "http://www.w3.org/2000/svg";
    function Us(e) {
      switch (e) {
        case "svg":
          return Ff;
        case "math":
          return uy;
        default:
          return oi;
      }
    }
    function Vf(e, t) {
      return e == null || e === oi ? Us(t) : e === Ff && t === "foreignObject" ? oi : e;
    }
    var oy = function(e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, a, i, u) {
        MSApp.execUnsafeLocalFunction(function() {
          return e(t, a, i, u);
        });
      } : e;
    }, js, uv = oy(function(e, t) {
      if (e.namespaceURI === Ff && !("innerHTML" in e)) {
        js = js || document.createElement("div"), js.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
        for (var a = js.firstChild; e.firstChild; )
          e.removeChild(e.firstChild);
        for (; a.firstChild; )
          e.appendChild(a.firstChild);
        return;
      }
      e.innerHTML = t;
    }), hr = 1, si = 3, nn = 8, La = 9, yl = 11, zs = function(e, t) {
      if (t) {
        var a = e.firstChild;
        if (a && a === e.lastChild && a.nodeType === si) {
          a.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }, ov = {
      animation: ["animationDelay", "animationDirection", "animationDuration", "animationFillMode", "animationIterationCount", "animationName", "animationPlayState", "animationTimingFunction"],
      background: ["backgroundAttachment", "backgroundClip", "backgroundColor", "backgroundImage", "backgroundOrigin", "backgroundPositionX", "backgroundPositionY", "backgroundRepeat", "backgroundSize"],
      backgroundPosition: ["backgroundPositionX", "backgroundPositionY"],
      border: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth", "borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth", "borderLeftColor", "borderLeftStyle", "borderLeftWidth", "borderRightColor", "borderRightStyle", "borderRightWidth", "borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderBlockEnd: ["borderBlockEndColor", "borderBlockEndStyle", "borderBlockEndWidth"],
      borderBlockStart: ["borderBlockStartColor", "borderBlockStartStyle", "borderBlockStartWidth"],
      borderBottom: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth"],
      borderColor: ["borderBottomColor", "borderLeftColor", "borderRightColor", "borderTopColor"],
      borderImage: ["borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth"],
      borderInlineEnd: ["borderInlineEndColor", "borderInlineEndStyle", "borderInlineEndWidth"],
      borderInlineStart: ["borderInlineStartColor", "borderInlineStartStyle", "borderInlineStartWidth"],
      borderLeft: ["borderLeftColor", "borderLeftStyle", "borderLeftWidth"],
      borderRadius: ["borderBottomLeftRadius", "borderBottomRightRadius", "borderTopLeftRadius", "borderTopRightRadius"],
      borderRight: ["borderRightColor", "borderRightStyle", "borderRightWidth"],
      borderStyle: ["borderBottomStyle", "borderLeftStyle", "borderRightStyle", "borderTopStyle"],
      borderTop: ["borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderWidth: ["borderBottomWidth", "borderLeftWidth", "borderRightWidth", "borderTopWidth"],
      columnRule: ["columnRuleColor", "columnRuleStyle", "columnRuleWidth"],
      columns: ["columnCount", "columnWidth"],
      flex: ["flexBasis", "flexGrow", "flexShrink"],
      flexFlow: ["flexDirection", "flexWrap"],
      font: ["fontFamily", "fontFeatureSettings", "fontKerning", "fontLanguageOverride", "fontSize", "fontSizeAdjust", "fontStretch", "fontStyle", "fontVariant", "fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition", "fontWeight", "lineHeight"],
      fontVariant: ["fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition"],
      gap: ["columnGap", "rowGap"],
      grid: ["gridAutoColumns", "gridAutoFlow", "gridAutoRows", "gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      gridArea: ["gridColumnEnd", "gridColumnStart", "gridRowEnd", "gridRowStart"],
      gridColumn: ["gridColumnEnd", "gridColumnStart"],
      gridColumnGap: ["columnGap"],
      gridGap: ["columnGap", "rowGap"],
      gridRow: ["gridRowEnd", "gridRowStart"],
      gridRowGap: ["rowGap"],
      gridTemplate: ["gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      listStyle: ["listStyleImage", "listStylePosition", "listStyleType"],
      margin: ["marginBottom", "marginLeft", "marginRight", "marginTop"],
      marker: ["markerEnd", "markerMid", "markerStart"],
      mask: ["maskClip", "maskComposite", "maskImage", "maskMode", "maskOrigin", "maskPositionX", "maskPositionY", "maskRepeat", "maskSize"],
      maskPosition: ["maskPositionX", "maskPositionY"],
      outline: ["outlineColor", "outlineStyle", "outlineWidth"],
      overflow: ["overflowX", "overflowY"],
      padding: ["paddingBottom", "paddingLeft", "paddingRight", "paddingTop"],
      placeContent: ["alignContent", "justifyContent"],
      placeItems: ["alignItems", "justifyItems"],
      placeSelf: ["alignSelf", "justifySelf"],
      textDecoration: ["textDecorationColor", "textDecorationLine", "textDecorationStyle"],
      textEmphasis: ["textEmphasisColor", "textEmphasisStyle"],
      transition: ["transitionDelay", "transitionDuration", "transitionProperty", "transitionTimingFunction"],
      wordWrap: ["overflowWrap"]
    }, su = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      // SVG-related properties
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0
    };
    function sv(e, t) {
      return e + t.charAt(0).toUpperCase() + t.substring(1);
    }
    var cv = ["Webkit", "ms", "Moz", "O"];
    Object.keys(su).forEach(function(e) {
      cv.forEach(function(t) {
        su[sv(t, e)] = su[e];
      });
    });
    function As(e, t, a) {
      var i = t == null || typeof t == "boolean" || t === "";
      return i ? "" : !a && typeof t == "number" && t !== 0 && !(su.hasOwnProperty(e) && su[e]) ? t + "px" : (Pa(t, e), ("" + t).trim());
    }
    var cu = /([A-Z])/g, sy = /^ms-/;
    function cy(e) {
      return e.replace(cu, "-$1").toLowerCase().replace(sy, "-ms-");
    }
    var fv = function() {
    };
    {
      var dv = /^(?:webkit|moz|o)[A-Z]/, pv = /^-ms-/, To = /-(.)/g, fu = /;\s*$/, du = {}, pu = {}, vv = !1, Pf = !1, Bf = function(e) {
        return e.replace(To, function(t, a) {
          return a.toUpperCase();
        });
      }, $f = function(e) {
        du.hasOwnProperty(e) && du[e] || (du[e] = !0, y(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          Bf(e.replace(pv, "ms-"))
        ));
      }, hv = function(e) {
        du.hasOwnProperty(e) && du[e] || (du[e] = !0, y("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, mv = function(e, t) {
        pu.hasOwnProperty(t) && pu[t] || (pu[t] = !0, y(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(fu, "")));
      }, yv = function(e, t) {
        vv || (vv = !0, y("`NaN` is an invalid value for the `%s` css style property.", e));
      }, fy = function(e, t) {
        Pf || (Pf = !0, y("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      fv = function(e, t) {
        e.indexOf("-") > -1 ? $f(e) : dv.test(e) ? hv(e) : fu.test(t) && mv(e, t), typeof t == "number" && (isNaN(t) ? yv(e, t) : isFinite(t) || fy(e, t));
      };
    }
    var dy = fv;
    function py(e) {
      {
        var t = "", a = "";
        for (var i in e)
          if (e.hasOwnProperty(i)) {
            var u = e[i];
            if (u != null) {
              var s = i.indexOf("--") === 0;
              t += a + (s ? i : cy(i)) + ":", t += As(i, u, s), a = ";";
            }
          }
        return t || null;
      }
    }
    function gv(e, t) {
      var a = e.style;
      for (var i in t)
        if (t.hasOwnProperty(i)) {
          var u = i.indexOf("--") === 0;
          u || dy(i, t[i]);
          var s = As(i, t[i], u);
          i === "float" && (i = "cssFloat"), u ? a.setProperty(i, s) : a[i] = s;
        }
    }
    function vy(e) {
      return e == null || typeof e == "boolean" || e === "";
    }
    function na(e) {
      var t = {};
      for (var a in e)
        for (var i = ov[a] || [a], u = 0; u < i.length; u++)
          t[i[u]] = a;
      return t;
    }
    function Ro(e, t) {
      {
        if (!t)
          return;
        var a = na(e), i = na(t), u = {};
        for (var s in a) {
          var f = a[s], p = i[s];
          if (p && f !== p) {
            var h = f + "," + p;
            if (u[h])
              continue;
            u[h] = !0, y("%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.", vy(e[f]) ? "Removing" : "Updating", f, p);
          }
        }
      }
    }
    var Cv = {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0
      // NOTE: menuitem's close tag should be omitted, but that causes problems.
    }, Sv = qe({
      menuitem: !0
    }, Cv), Ev = "__html";
    function Hs(e, t) {
      if (t) {
        if (Sv[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
          throw new Error(e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null)
            throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
          if (typeof t.dangerouslySetInnerHTML != "object" || !(Ev in t.dangerouslySetInnerHTML))
            throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        }
        if (!t.suppressContentEditableWarning && t.contentEditable && t.children != null && y("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), t.style != null && typeof t.style != "object")
          throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      }
    }
    function ci(e, t) {
      if (e.indexOf("-") === -1)
        return typeof t.is == "string";
      switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return !1;
        default:
          return !0;
      }
    }
    var Fs = {
      // HTML
      accept: "accept",
      acceptcharset: "acceptCharset",
      "accept-charset": "acceptCharset",
      accesskey: "accessKey",
      action: "action",
      allowfullscreen: "allowFullScreen",
      alt: "alt",
      as: "as",
      async: "async",
      autocapitalize: "autoCapitalize",
      autocomplete: "autoComplete",
      autocorrect: "autoCorrect",
      autofocus: "autoFocus",
      autoplay: "autoPlay",
      autosave: "autoSave",
      capture: "capture",
      cellpadding: "cellPadding",
      cellspacing: "cellSpacing",
      challenge: "challenge",
      charset: "charSet",
      checked: "checked",
      children: "children",
      cite: "cite",
      class: "className",
      classid: "classID",
      classname: "className",
      cols: "cols",
      colspan: "colSpan",
      content: "content",
      contenteditable: "contentEditable",
      contextmenu: "contextMenu",
      controls: "controls",
      controlslist: "controlsList",
      coords: "coords",
      crossorigin: "crossOrigin",
      dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
      data: "data",
      datetime: "dateTime",
      default: "default",
      defaultchecked: "defaultChecked",
      defaultvalue: "defaultValue",
      defer: "defer",
      dir: "dir",
      disabled: "disabled",
      disablepictureinpicture: "disablePictureInPicture",
      disableremoteplayback: "disableRemotePlayback",
      download: "download",
      draggable: "draggable",
      enctype: "encType",
      enterkeyhint: "enterKeyHint",
      for: "htmlFor",
      form: "form",
      formmethod: "formMethod",
      formaction: "formAction",
      formenctype: "formEncType",
      formnovalidate: "formNoValidate",
      formtarget: "formTarget",
      frameborder: "frameBorder",
      headers: "headers",
      height: "height",
      hidden: "hidden",
      high: "high",
      href: "href",
      hreflang: "hrefLang",
      htmlfor: "htmlFor",
      httpequiv: "httpEquiv",
      "http-equiv": "httpEquiv",
      icon: "icon",
      id: "id",
      imagesizes: "imageSizes",
      imagesrcset: "imageSrcSet",
      innerhtml: "innerHTML",
      inputmode: "inputMode",
      integrity: "integrity",
      is: "is",
      itemid: "itemID",
      itemprop: "itemProp",
      itemref: "itemRef",
      itemscope: "itemScope",
      itemtype: "itemType",
      keyparams: "keyParams",
      keytype: "keyType",
      kind: "kind",
      label: "label",
      lang: "lang",
      list: "list",
      loop: "loop",
      low: "low",
      manifest: "manifest",
      marginwidth: "marginWidth",
      marginheight: "marginHeight",
      max: "max",
      maxlength: "maxLength",
      media: "media",
      mediagroup: "mediaGroup",
      method: "method",
      min: "min",
      minlength: "minLength",
      multiple: "multiple",
      muted: "muted",
      name: "name",
      nomodule: "noModule",
      nonce: "nonce",
      novalidate: "noValidate",
      open: "open",
      optimum: "optimum",
      pattern: "pattern",
      placeholder: "placeholder",
      playsinline: "playsInline",
      poster: "poster",
      preload: "preload",
      profile: "profile",
      radiogroup: "radioGroup",
      readonly: "readOnly",
      referrerpolicy: "referrerPolicy",
      rel: "rel",
      required: "required",
      reversed: "reversed",
      role: "role",
      rows: "rows",
      rowspan: "rowSpan",
      sandbox: "sandbox",
      scope: "scope",
      scoped: "scoped",
      scrolling: "scrolling",
      seamless: "seamless",
      selected: "selected",
      shape: "shape",
      size: "size",
      sizes: "sizes",
      span: "span",
      spellcheck: "spellCheck",
      src: "src",
      srcdoc: "srcDoc",
      srclang: "srcLang",
      srcset: "srcSet",
      start: "start",
      step: "step",
      style: "style",
      summary: "summary",
      tabindex: "tabIndex",
      target: "target",
      title: "title",
      type: "type",
      usemap: "useMap",
      value: "value",
      width: "width",
      wmode: "wmode",
      wrap: "wrap",
      // SVG
      about: "about",
      accentheight: "accentHeight",
      "accent-height": "accentHeight",
      accumulate: "accumulate",
      additive: "additive",
      alignmentbaseline: "alignmentBaseline",
      "alignment-baseline": "alignmentBaseline",
      allowreorder: "allowReorder",
      alphabetic: "alphabetic",
      amplitude: "amplitude",
      arabicform: "arabicForm",
      "arabic-form": "arabicForm",
      ascent: "ascent",
      attributename: "attributeName",
      attributetype: "attributeType",
      autoreverse: "autoReverse",
      azimuth: "azimuth",
      basefrequency: "baseFrequency",
      baselineshift: "baselineShift",
      "baseline-shift": "baselineShift",
      baseprofile: "baseProfile",
      bbox: "bbox",
      begin: "begin",
      bias: "bias",
      by: "by",
      calcmode: "calcMode",
      capheight: "capHeight",
      "cap-height": "capHeight",
      clip: "clip",
      clippath: "clipPath",
      "clip-path": "clipPath",
      clippathunits: "clipPathUnits",
      cliprule: "clipRule",
      "clip-rule": "clipRule",
      color: "color",
      colorinterpolation: "colorInterpolation",
      "color-interpolation": "colorInterpolation",
      colorinterpolationfilters: "colorInterpolationFilters",
      "color-interpolation-filters": "colorInterpolationFilters",
      colorprofile: "colorProfile",
      "color-profile": "colorProfile",
      colorrendering: "colorRendering",
      "color-rendering": "colorRendering",
      contentscripttype: "contentScriptType",
      contentstyletype: "contentStyleType",
      cursor: "cursor",
      cx: "cx",
      cy: "cy",
      d: "d",
      datatype: "datatype",
      decelerate: "decelerate",
      descent: "descent",
      diffuseconstant: "diffuseConstant",
      direction: "direction",
      display: "display",
      divisor: "divisor",
      dominantbaseline: "dominantBaseline",
      "dominant-baseline": "dominantBaseline",
      dur: "dur",
      dx: "dx",
      dy: "dy",
      edgemode: "edgeMode",
      elevation: "elevation",
      enablebackground: "enableBackground",
      "enable-background": "enableBackground",
      end: "end",
      exponent: "exponent",
      externalresourcesrequired: "externalResourcesRequired",
      fill: "fill",
      fillopacity: "fillOpacity",
      "fill-opacity": "fillOpacity",
      fillrule: "fillRule",
      "fill-rule": "fillRule",
      filter: "filter",
      filterres: "filterRes",
      filterunits: "filterUnits",
      floodopacity: "floodOpacity",
      "flood-opacity": "floodOpacity",
      floodcolor: "floodColor",
      "flood-color": "floodColor",
      focusable: "focusable",
      fontfamily: "fontFamily",
      "font-family": "fontFamily",
      fontsize: "fontSize",
      "font-size": "fontSize",
      fontsizeadjust: "fontSizeAdjust",
      "font-size-adjust": "fontSizeAdjust",
      fontstretch: "fontStretch",
      "font-stretch": "fontStretch",
      fontstyle: "fontStyle",
      "font-style": "fontStyle",
      fontvariant: "fontVariant",
      "font-variant": "fontVariant",
      fontweight: "fontWeight",
      "font-weight": "fontWeight",
      format: "format",
      from: "from",
      fx: "fx",
      fy: "fy",
      g1: "g1",
      g2: "g2",
      glyphname: "glyphName",
      "glyph-name": "glyphName",
      glyphorientationhorizontal: "glyphOrientationHorizontal",
      "glyph-orientation-horizontal": "glyphOrientationHorizontal",
      glyphorientationvertical: "glyphOrientationVertical",
      "glyph-orientation-vertical": "glyphOrientationVertical",
      glyphref: "glyphRef",
      gradienttransform: "gradientTransform",
      gradientunits: "gradientUnits",
      hanging: "hanging",
      horizadvx: "horizAdvX",
      "horiz-adv-x": "horizAdvX",
      horizoriginx: "horizOriginX",
      "horiz-origin-x": "horizOriginX",
      ideographic: "ideographic",
      imagerendering: "imageRendering",
      "image-rendering": "imageRendering",
      in2: "in2",
      in: "in",
      inlist: "inlist",
      intercept: "intercept",
      k1: "k1",
      k2: "k2",
      k3: "k3",
      k4: "k4",
      k: "k",
      kernelmatrix: "kernelMatrix",
      kernelunitlength: "kernelUnitLength",
      kerning: "kerning",
      keypoints: "keyPoints",
      keysplines: "keySplines",
      keytimes: "keyTimes",
      lengthadjust: "lengthAdjust",
      letterspacing: "letterSpacing",
      "letter-spacing": "letterSpacing",
      lightingcolor: "lightingColor",
      "lighting-color": "lightingColor",
      limitingconeangle: "limitingConeAngle",
      local: "local",
      markerend: "markerEnd",
      "marker-end": "markerEnd",
      markerheight: "markerHeight",
      markermid: "markerMid",
      "marker-mid": "markerMid",
      markerstart: "markerStart",
      "marker-start": "markerStart",
      markerunits: "markerUnits",
      markerwidth: "markerWidth",
      mask: "mask",
      maskcontentunits: "maskContentUnits",
      maskunits: "maskUnits",
      mathematical: "mathematical",
      mode: "mode",
      numoctaves: "numOctaves",
      offset: "offset",
      opacity: "opacity",
      operator: "operator",
      order: "order",
      orient: "orient",
      orientation: "orientation",
      origin: "origin",
      overflow: "overflow",
      overlineposition: "overlinePosition",
      "overline-position": "overlinePosition",
      overlinethickness: "overlineThickness",
      "overline-thickness": "overlineThickness",
      paintorder: "paintOrder",
      "paint-order": "paintOrder",
      panose1: "panose1",
      "panose-1": "panose1",
      pathlength: "pathLength",
      patterncontentunits: "patternContentUnits",
      patterntransform: "patternTransform",
      patternunits: "patternUnits",
      pointerevents: "pointerEvents",
      "pointer-events": "pointerEvents",
      points: "points",
      pointsatx: "pointsAtX",
      pointsaty: "pointsAtY",
      pointsatz: "pointsAtZ",
      prefix: "prefix",
      preservealpha: "preserveAlpha",
      preserveaspectratio: "preserveAspectRatio",
      primitiveunits: "primitiveUnits",
      property: "property",
      r: "r",
      radius: "radius",
      refx: "refX",
      refy: "refY",
      renderingintent: "renderingIntent",
      "rendering-intent": "renderingIntent",
      repeatcount: "repeatCount",
      repeatdur: "repeatDur",
      requiredextensions: "requiredExtensions",
      requiredfeatures: "requiredFeatures",
      resource: "resource",
      restart: "restart",
      result: "result",
      results: "results",
      rotate: "rotate",
      rx: "rx",
      ry: "ry",
      scale: "scale",
      security: "security",
      seed: "seed",
      shaperendering: "shapeRendering",
      "shape-rendering": "shapeRendering",
      slope: "slope",
      spacing: "spacing",
      specularconstant: "specularConstant",
      specularexponent: "specularExponent",
      speed: "speed",
      spreadmethod: "spreadMethod",
      startoffset: "startOffset",
      stddeviation: "stdDeviation",
      stemh: "stemh",
      stemv: "stemv",
      stitchtiles: "stitchTiles",
      stopcolor: "stopColor",
      "stop-color": "stopColor",
      stopopacity: "stopOpacity",
      "stop-opacity": "stopOpacity",
      strikethroughposition: "strikethroughPosition",
      "strikethrough-position": "strikethroughPosition",
      strikethroughthickness: "strikethroughThickness",
      "strikethrough-thickness": "strikethroughThickness",
      string: "string",
      stroke: "stroke",
      strokedasharray: "strokeDasharray",
      "stroke-dasharray": "strokeDasharray",
      strokedashoffset: "strokeDashoffset",
      "stroke-dashoffset": "strokeDashoffset",
      strokelinecap: "strokeLinecap",
      "stroke-linecap": "strokeLinecap",
      strokelinejoin: "strokeLinejoin",
      "stroke-linejoin": "strokeLinejoin",
      strokemiterlimit: "strokeMiterlimit",
      "stroke-miterlimit": "strokeMiterlimit",
      strokewidth: "strokeWidth",
      "stroke-width": "strokeWidth",
      strokeopacity: "strokeOpacity",
      "stroke-opacity": "strokeOpacity",
      suppresscontenteditablewarning: "suppressContentEditableWarning",
      suppresshydrationwarning: "suppressHydrationWarning",
      surfacescale: "surfaceScale",
      systemlanguage: "systemLanguage",
      tablevalues: "tableValues",
      targetx: "targetX",
      targety: "targetY",
      textanchor: "textAnchor",
      "text-anchor": "textAnchor",
      textdecoration: "textDecoration",
      "text-decoration": "textDecoration",
      textlength: "textLength",
      textrendering: "textRendering",
      "text-rendering": "textRendering",
      to: "to",
      transform: "transform",
      typeof: "typeof",
      u1: "u1",
      u2: "u2",
      underlineposition: "underlinePosition",
      "underline-position": "underlinePosition",
      underlinethickness: "underlineThickness",
      "underline-thickness": "underlineThickness",
      unicode: "unicode",
      unicodebidi: "unicodeBidi",
      "unicode-bidi": "unicodeBidi",
      unicoderange: "unicodeRange",
      "unicode-range": "unicodeRange",
      unitsperem: "unitsPerEm",
      "units-per-em": "unitsPerEm",
      unselectable: "unselectable",
      valphabetic: "vAlphabetic",
      "v-alphabetic": "vAlphabetic",
      values: "values",
      vectoreffect: "vectorEffect",
      "vector-effect": "vectorEffect",
      version: "version",
      vertadvy: "vertAdvY",
      "vert-adv-y": "vertAdvY",
      vertoriginx: "vertOriginX",
      "vert-origin-x": "vertOriginX",
      vertoriginy: "vertOriginY",
      "vert-origin-y": "vertOriginY",
      vhanging: "vHanging",
      "v-hanging": "vHanging",
      videographic: "vIdeographic",
      "v-ideographic": "vIdeographic",
      viewbox: "viewBox",
      viewtarget: "viewTarget",
      visibility: "visibility",
      vmathematical: "vMathematical",
      "v-mathematical": "vMathematical",
      vocab: "vocab",
      widths: "widths",
      wordspacing: "wordSpacing",
      "word-spacing": "wordSpacing",
      writingmode: "writingMode",
      "writing-mode": "writingMode",
      x1: "x1",
      x2: "x2",
      x: "x",
      xchannelselector: "xChannelSelector",
      xheight: "xHeight",
      "x-height": "xHeight",
      xlinkactuate: "xlinkActuate",
      "xlink:actuate": "xlinkActuate",
      xlinkarcrole: "xlinkArcrole",
      "xlink:arcrole": "xlinkArcrole",
      xlinkhref: "xlinkHref",
      "xlink:href": "xlinkHref",
      xlinkrole: "xlinkRole",
      "xlink:role": "xlinkRole",
      xlinkshow: "xlinkShow",
      "xlink:show": "xlinkShow",
      xlinktitle: "xlinkTitle",
      "xlink:title": "xlinkTitle",
      xlinktype: "xlinkType",
      "xlink:type": "xlinkType",
      xmlbase: "xmlBase",
      "xml:base": "xmlBase",
      xmllang: "xmlLang",
      "xml:lang": "xmlLang",
      xmlns: "xmlns",
      "xml:space": "xmlSpace",
      xmlnsxlink: "xmlnsXlink",
      "xmlns:xlink": "xmlnsXlink",
      xmlspace: "xmlSpace",
      y1: "y1",
      y2: "y2",
      y: "y",
      ychannelselector: "yChannelSelector",
      z: "z",
      zoomandpan: "zoomAndPan"
    }, xv = {
      "aria-current": 0,
      // state
      "aria-description": 0,
      "aria-details": 0,
      "aria-disabled": 0,
      // state
      "aria-hidden": 0,
      // state
      "aria-invalid": 0,
      // state
      "aria-keyshortcuts": 0,
      "aria-label": 0,
      "aria-roledescription": 0,
      // Widget Attributes
      "aria-autocomplete": 0,
      "aria-checked": 0,
      "aria-expanded": 0,
      "aria-haspopup": 0,
      "aria-level": 0,
      "aria-modal": 0,
      "aria-multiline": 0,
      "aria-multiselectable": 0,
      "aria-orientation": 0,
      "aria-placeholder": 0,
      "aria-pressed": 0,
      "aria-readonly": 0,
      "aria-required": 0,
      "aria-selected": 0,
      "aria-sort": 0,
      "aria-valuemax": 0,
      "aria-valuemin": 0,
      "aria-valuenow": 0,
      "aria-valuetext": 0,
      // Live Region Attributes
      "aria-atomic": 0,
      "aria-busy": 0,
      "aria-live": 0,
      "aria-relevant": 0,
      // Drag-and-Drop Attributes
      "aria-dropeffect": 0,
      "aria-grabbed": 0,
      // Relationship Attributes
      "aria-activedescendant": 0,
      "aria-colcount": 0,
      "aria-colindex": 0,
      "aria-colspan": 0,
      "aria-controls": 0,
      "aria-describedby": 0,
      "aria-errormessage": 0,
      "aria-flowto": 0,
      "aria-labelledby": 0,
      "aria-owns": 0,
      "aria-posinset": 0,
      "aria-rowcount": 0,
      "aria-rowindex": 0,
      "aria-rowspan": 0,
      "aria-setsize": 0
    }, Oa = {}, If = new RegExp("^(aria)-[" + we + "]*$"), wo = new RegExp("^(aria)[A-Z][" + we + "]*$");
    function Yf(e, t) {
      {
        if (In.call(Oa, t) && Oa[t])
          return !0;
        if (wo.test(t)) {
          var a = "aria-" + t.slice(4).toLowerCase(), i = xv.hasOwnProperty(a) ? a : null;
          if (i == null)
            return y("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), Oa[t] = !0, !0;
          if (t !== i)
            return y("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, i), Oa[t] = !0, !0;
        }
        if (If.test(t)) {
          var u = t.toLowerCase(), s = xv.hasOwnProperty(u) ? u : null;
          if (s == null)
            return Oa[t] = !0, !1;
          if (t !== s)
            return y("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, s), Oa[t] = !0, !0;
        }
      }
      return !0;
    }
    function Tv(e, t) {
      {
        var a = [];
        for (var i in t) {
          var u = Yf(e, i);
          u || a.push(i);
        }
        var s = a.map(function(f) {
          return "`" + f + "`";
        }).join(", ");
        a.length === 1 ? y("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e) : a.length > 1 && y("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e);
      }
    }
    function Vs(e, t) {
      ci(e, t) || Tv(e, t);
    }
    var gl = !1;
    function Wf(e, t) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        t != null && t.value === null && !gl && (gl = !0, e === "select" && t.multiple ? y("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : y("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var Qf = function() {
    };
    {
      var xn = {}, Gf = /^on./, Rv = /^on[^A-Z]/, wv = new RegExp("^(aria)-[" + we + "]*$"), _v = new RegExp("^(aria)[A-Z][" + we + "]*$");
      Qf = function(e, t, a, i) {
        if (In.call(xn, t) && xn[t])
          return !0;
        var u = t.toLowerCase();
        if (u === "onfocusin" || u === "onfocusout")
          return y("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), xn[t] = !0, !0;
        if (i != null) {
          var s = i.registrationNameDependencies, f = i.possibleRegistrationNames;
          if (s.hasOwnProperty(t))
            return !0;
          var p = f.hasOwnProperty(u) ? f[u] : null;
          if (p != null)
            return y("Invalid event handler property `%s`. Did you mean `%s`?", t, p), xn[t] = !0, !0;
          if (Gf.test(t))
            return y("Unknown event handler property `%s`. It will be ignored.", t), xn[t] = !0, !0;
        } else if (Gf.test(t))
          return Rv.test(t) && y("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), xn[t] = !0, !0;
        if (wv.test(t) || _v.test(t))
          return !0;
        if (u === "innerhtml")
          return y("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), xn[t] = !0, !0;
        if (u === "aria")
          return y("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), xn[t] = !0, !0;
        if (u === "is" && a !== null && a !== void 0 && typeof a != "string")
          return y("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof a), xn[t] = !0, !0;
        if (typeof a == "number" && isNaN(a))
          return y("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), xn[t] = !0, !0;
        var h = jr(t), C = h !== null && h.type === Ba;
        if (Fs.hasOwnProperty(u)) {
          var E = Fs[u];
          if (E !== t)
            return y("Invalid DOM property `%s`. Did you mean `%s`?", t, E), xn[t] = !0, !0;
        } else if (!C && t !== u)
          return y("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, u), xn[t] = !0, !0;
        return typeof a == "boolean" && pr(t, a, h, !1) ? (a ? y('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', a, t, t, a, t) : y('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', a, t, t, a, t, t, t), xn[t] = !0, !0) : C ? !0 : pr(t, a, h, !1) ? (xn[t] = !0, !1) : ((a === "false" || a === "true") && h !== null && h.type === en && (y("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", a, t, a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, a), xn[t] = !0), !0);
      };
    }
    var bv = function(e, t, a) {
      {
        var i = [];
        for (var u in t) {
          var s = Qf(e, u, t[u], a);
          s || i.push(u);
        }
        var f = i.map(function(p) {
          return "`" + p + "`";
        }).join(", ");
        i.length === 1 ? y("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e) : i.length > 1 && y("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e);
      }
    };
    function Dv(e, t, a) {
      ci(e, t) || bv(e, t, a);
    }
    var fi = 1, _o = 2, Cl = 4, hy = fi | _o | Cl, bo = null;
    function Do(e) {
      bo !== null && y("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."), bo = e;
    }
    function my() {
      bo === null && y("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."), bo = null;
    }
    function kv(e) {
      return e === bo;
    }
    function Ps(e) {
      var t = e.target || e.srcElement || window;
      return t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === si ? t.parentNode : t;
    }
    var Rt = null, Fi = null, di = null;
    function vu(e) {
      var t = Qu(e);
      if (t) {
        if (typeof Rt != "function")
          throw new Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");
        var a = t.stateNode;
        if (a) {
          var i = Mh(a);
          Rt(t.stateNode, t.type, i);
        }
      }
    }
    function Nv(e) {
      Rt = e;
    }
    function Bs(e) {
      Fi ? di ? di.push(e) : di = [e] : Fi = e;
    }
    function ko() {
      return Fi !== null || di !== null;
    }
    function No() {
      if (Fi) {
        var e = Fi, t = di;
        if (Fi = null, di = null, vu(e), t)
          for (var a = 0; a < t.length; a++)
            vu(t[a]);
      }
    }
    var Sl = function(e, t) {
      return e(t);
    }, Zf = function() {
    }, qf = !1;
    function yy() {
      var e = ko();
      e && (Zf(), No());
    }
    function Xf(e, t, a) {
      if (qf)
        return e(t, a);
      qf = !0;
      try {
        return Sl(e, t, a);
      } finally {
        qf = !1, yy();
      }
    }
    function $s(e, t, a) {
      Sl = e, Zf = a;
    }
    function Is(e) {
      return e === "button" || e === "input" || e === "select" || e === "textarea";
    }
    function Kf(e, t, a) {
      switch (e) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          return !!(a.disabled && Is(t));
        default:
          return !1;
      }
    }
    function El(e, t) {
      var a = e.stateNode;
      if (a === null)
        return null;
      var i = Mh(a);
      if (i === null)
        return null;
      var u = i[t];
      if (Kf(t, e.type, i))
        return null;
      if (u && typeof u != "function")
        throw new Error("Expected `" + t + "` listener to be a function, instead got a value of `" + typeof u + "` type.");
      return u;
    }
    var Lo = !1;
    if (gn)
      try {
        var xl = {};
        Object.defineProperty(xl, "passive", {
          get: function() {
            Lo = !0;
          }
        }), window.addEventListener("test", xl, xl), window.removeEventListener("test", xl, xl);
      } catch {
        Lo = !1;
      }
    function Lv(e, t, a, i, u, s, f, p, h) {
      var C = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(a, C);
      } catch (E) {
        this.onError(E);
      }
    }
    var Jf = Lv;
    if (typeof window < "u" && typeof window.dispatchEvent == "function" && typeof document < "u" && typeof document.createEvent == "function") {
      var ed = document.createElement("react");
      Jf = function(t, a, i, u, s, f, p, h, C) {
        if (typeof document > "u" || document === null)
          throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
        var E = document.createEvent("Event"), N = !1, D = !0, z = window.event, H = Object.getOwnPropertyDescriptor(window, "event");
        function P() {
          ed.removeEventListener(B, De, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = z);
        }
        var le = Array.prototype.slice.call(arguments, 3);
        function De() {
          N = !0, P(), a.apply(i, le), D = !1;
        }
        var Ee, rt = !1, Je = !1;
        function M(U) {
          if (Ee = U.error, rt = !0, Ee === null && U.colno === 0 && U.lineno === 0 && (Je = !0), U.defaultPrevented && Ee != null && typeof Ee == "object")
            try {
              Ee._suppressLogging = !0;
            } catch {
            }
        }
        var B = "react-" + (t || "invokeguardedcallback");
        if (window.addEventListener("error", M), ed.addEventListener(B, De, !1), E.initEvent(B, !1, !1), ed.dispatchEvent(E), H && Object.defineProperty(window, "event", H), N && D && (rt ? Je && (Ee = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : Ee = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(Ee)), window.removeEventListener("error", M), !N)
          return P(), Lv.apply(this, arguments);
      };
    }
    var gy = Jf, Vi = !1, Ma = null, Oo = !1, Pi = null, Ya = {
      onError: function(e) {
        Vi = !0, Ma = e;
      }
    };
    function Tl(e, t, a, i, u, s, f, p, h) {
      Vi = !1, Ma = null, gy.apply(Ya, arguments);
    }
    function pi(e, t, a, i, u, s, f, p, h) {
      if (Tl.apply(this, arguments), Vi) {
        var C = nd();
        Oo || (Oo = !0, Pi = C);
      }
    }
    function td() {
      if (Oo) {
        var e = Pi;
        throw Oo = !1, Pi = null, e;
      }
    }
    function Cy() {
      return Vi;
    }
    function nd() {
      if (Vi) {
        var e = Ma;
        return Vi = !1, Ma = null, e;
      } else
        throw new Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
    }
    function ra(e) {
      return e._reactInternals;
    }
    function Mo(e) {
      return e._reactInternals !== void 0;
    }
    function hu(e, t) {
      e._reactInternals = t;
    }
    var _e = (
      /*                      */
      0
    ), Bi = (
      /*                */
      1
    ), Ot = (
      /*                    */
      2
    ), Ie = (
      /*                       */
      4
    ), ft = (
      /*                */
      16
    ), vt = (
      /*                 */
      32
    ), Wa = (
      /*                     */
      64
    ), je = (
      /*                   */
      128
    ), It = (
      /*            */
      256
    ), mr = (
      /*                          */
      512
    ), aa = (
      /*                     */
      1024
    ), zt = (
      /*                      */
      2048
    ), ia = (
      /*                    */
      4096
    ), $i = (
      /*                   */
      8192
    ), Uo = (
      /*             */
      16384
    ), Ys = zt | Ie | Wa | mr | aa | Uo, Ov = (
      /*               */
      32767
    ), Fr = (
      /*                   */
      32768
    ), Tn = (
      /*                */
      65536
    ), jo = (
      /* */
      131072
    ), rd = (
      /*                       */
      1048576
    ), ad = (
      /*                    */
      2097152
    ), yr = (
      /*                 */
      4194304
    ), Ii = (
      /*                */
      8388608
    ), gr = (
      /*               */
      16777216
    ), Rl = (
      /*              */
      33554432
    ), mu = (
      // TODO: Remove Update flag from before mutation phase by re-landing Visibility
      // flag logic (see #20043)
      Ie | aa | 0
    ), Cr = Ot | Ie | ft | vt | mr | ia | $i, Gn = Ie | Wa | mr | $i, la = zt | ft, On = yr | Ii | ad, vi = g.ReactCurrentOwner;
    function Vr(e) {
      var t = e, a = e;
      if (e.alternate)
        for (; t.return; )
          t = t.return;
      else {
        var i = t;
        do
          t = i, (t.flags & (Ot | ia)) !== _e && (a = t.return), i = t.return;
        while (i);
      }
      return t.tag === I ? a : null;
    }
    function id(e) {
      if (e.tag === Ye) {
        var t = e.memoizedState;
        if (t === null) {
          var a = e.alternate;
          a !== null && (t = a.memoizedState);
        }
        if (t !== null)
          return t.dehydrated;
      }
      return null;
    }
    function Ws(e) {
      return e.tag === I ? e.stateNode.containerInfo : null;
    }
    function ld(e) {
      return Vr(e) === e;
    }
    function Pr(e) {
      {
        var t = vi.current;
        if (t !== null && t.tag === F) {
          var a = t, i = a.stateNode;
          i._warnedAboutRefsInRender || y("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", Pe(a) || "A component"), i._warnedAboutRefsInRender = !0;
        }
      }
      var u = ra(e);
      return u ? Vr(u) === u : !1;
    }
    function Sr(e) {
      if (Vr(e) !== e)
        throw new Error("Unable to find node on an unmounted component.");
    }
    function Mt(e) {
      var t = e.alternate;
      if (!t) {
        var a = Vr(e);
        if (a === null)
          throw new Error("Unable to find node on an unmounted component.");
        return a !== e ? null : e;
      }
      for (var i = e, u = t; ; ) {
        var s = i.return;
        if (s === null)
          break;
        var f = s.alternate;
        if (f === null) {
          var p = s.return;
          if (p !== null) {
            i = u = p;
            continue;
          }
          break;
        }
        if (s.child === f.child) {
          for (var h = s.child; h; ) {
            if (h === i)
              return Sr(s), e;
            if (h === u)
              return Sr(s), t;
            h = h.sibling;
          }
          throw new Error("Unable to find node on an unmounted component.");
        }
        if (i.return !== u.return)
          i = s, u = f;
        else {
          for (var C = !1, E = s.child; E; ) {
            if (E === i) {
              C = !0, i = s, u = f;
              break;
            }
            if (E === u) {
              C = !0, u = s, i = f;
              break;
            }
            E = E.sibling;
          }
          if (!C) {
            for (E = f.child; E; ) {
              if (E === i) {
                C = !0, i = f, u = s;
                break;
              }
              if (E === u) {
                C = !0, u = f, i = s;
                break;
              }
              E = E.sibling;
            }
            if (!C)
              throw new Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.");
          }
        }
        if (i.alternate !== u)
          throw new Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.");
      }
      if (i.tag !== I)
        throw new Error("Unable to find node on an unmounted component.");
      return i.stateNode.current === i ? e : t;
    }
    function ua(e) {
      var t = Mt(e);
      return t !== null ? ud(t) : null;
    }
    function ud(e) {
      if (e.tag === oe || e.tag === be)
        return e;
      for (var t = e.child; t !== null; ) {
        var a = ud(t);
        if (a !== null)
          return a;
        t = t.sibling;
      }
      return null;
    }
    function Mv(e) {
      var t = Mt(e);
      return t !== null ? Qs(t) : null;
    }
    function Qs(e) {
      if (e.tag === oe || e.tag === be)
        return e;
      for (var t = e.child; t !== null; ) {
        if (t.tag !== K) {
          var a = Qs(t);
          if (a !== null)
            return a;
        }
        t = t.sibling;
      }
      return null;
    }
    var Gs = S.unstable_scheduleCallback, Uv = S.unstable_cancelCallback, Zs = S.unstable_shouldYield, jv = S.unstable_requestPaint, Pt = S.unstable_now, od = S.unstable_getCurrentPriorityLevel, qs = S.unstable_ImmediatePriority, wl = S.unstable_UserBlockingPriority, Qa = S.unstable_NormalPriority, zv = S.unstable_LowPriority, Xs = S.unstable_IdlePriority, yu = S.unstable_yieldValue, Av = S.unstable_setDisableYieldValue, hi = null, sn = null, re = null, oa = !1, Br = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
    function sd(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
        return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled)
        return !0;
      if (!t.supportsFiber)
        return y("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
      try {
        Fa && (e = qe({}, e, {
          getLaneLabelMap: mi,
          injectProfilingHooks: Hv
        })), hi = t.inject(e), sn = t;
      } catch (a) {
        y("React instrumentation encountered an error: %s.", a);
      }
      return !!t.checkDCE;
    }
    function cd(e, t) {
      if (sn && typeof sn.onScheduleFiberRoot == "function")
        try {
          sn.onScheduleFiberRoot(hi, e, t);
        } catch (a) {
          oa || (oa = !0, y("React instrumentation encountered an error: %s", a));
        }
    }
    function gu(e, t) {
      if (sn && typeof sn.onCommitFiberRoot == "function")
        try {
          var a = (e.current.flags & je) === je;
          if (un) {
            var i;
            switch (t) {
              case Xt:
                i = qs;
                break;
              case gi:
                i = wl;
                break;
              case Ga:
                i = Qa;
                break;
              case Nu:
                i = Xs;
                break;
              default:
                i = Qa;
                break;
            }
            sn.onCommitFiberRoot(hi, e, i, a);
          }
        } catch (u) {
          oa || (oa = !0, y("React instrumentation encountered an error: %s", u));
        }
    }
    function sa(e) {
      if (sn && typeof sn.onPostCommitFiberRoot == "function")
        try {
          sn.onPostCommitFiberRoot(hi, e);
        } catch (t) {
          oa || (oa = !0, y("React instrumentation encountered an error: %s", t));
        }
    }
    function _l(e) {
      if (sn && typeof sn.onCommitFiberUnmount == "function")
        try {
          sn.onCommitFiberUnmount(hi, e);
        } catch (t) {
          oa || (oa = !0, y("React instrumentation encountered an error: %s", t));
        }
    }
    function rn(e) {
      if (typeof yu == "function" && (Av(e), b(e)), sn && typeof sn.setStrictMode == "function")
        try {
          sn.setStrictMode(hi, e);
        } catch (t) {
          oa || (oa = !0, y("React instrumentation encountered an error: %s", t));
        }
    }
    function Hv(e) {
      re = e;
    }
    function mi() {
      {
        for (var e = /* @__PURE__ */ new Map(), t = 1, a = 0; a < Vo; a++) {
          var i = Ey(t);
          e.set(t, i), t *= 2;
        }
        return e;
      }
    }
    function Yi(e) {
      re !== null && typeof re.markCommitStarted == "function" && re.markCommitStarted(e);
    }
    function Ks() {
      re !== null && typeof re.markCommitStopped == "function" && re.markCommitStopped();
    }
    function Cu(e) {
      re !== null && typeof re.markComponentRenderStarted == "function" && re.markComponentRenderStarted(e);
    }
    function Er() {
      re !== null && typeof re.markComponentRenderStopped == "function" && re.markComponentRenderStopped();
    }
    function Wi(e) {
      re !== null && typeof re.markComponentPassiveEffectMountStarted == "function" && re.markComponentPassiveEffectMountStarted(e);
    }
    function Js() {
      re !== null && typeof re.markComponentPassiveEffectMountStopped == "function" && re.markComponentPassiveEffectMountStopped();
    }
    function Fv(e) {
      re !== null && typeof re.markComponentPassiveEffectUnmountStarted == "function" && re.markComponentPassiveEffectUnmountStarted(e);
    }
    function ec() {
      re !== null && typeof re.markComponentPassiveEffectUnmountStopped == "function" && re.markComponentPassiveEffectUnmountStopped();
    }
    function Vv(e) {
      re !== null && typeof re.markComponentLayoutEffectMountStarted == "function" && re.markComponentLayoutEffectMountStarted(e);
    }
    function zo() {
      re !== null && typeof re.markComponentLayoutEffectMountStopped == "function" && re.markComponentLayoutEffectMountStopped();
    }
    function Ua(e) {
      re !== null && typeof re.markComponentLayoutEffectUnmountStarted == "function" && re.markComponentLayoutEffectUnmountStarted(e);
    }
    function Su() {
      re !== null && typeof re.markComponentLayoutEffectUnmountStopped == "function" && re.markComponentLayoutEffectUnmountStopped();
    }
    function Ao(e, t, a) {
      re !== null && typeof re.markComponentErrored == "function" && re.markComponentErrored(e, t, a);
    }
    function bl(e, t, a) {
      re !== null && typeof re.markComponentSuspended == "function" && re.markComponentSuspended(e, t, a);
    }
    function fd(e) {
      re !== null && typeof re.markLayoutEffectsStarted == "function" && re.markLayoutEffectsStarted(e);
    }
    function Eu() {
      re !== null && typeof re.markLayoutEffectsStopped == "function" && re.markLayoutEffectsStopped();
    }
    function Pv(e) {
      re !== null && typeof re.markPassiveEffectsStarted == "function" && re.markPassiveEffectsStarted(e);
    }
    function dd() {
      re !== null && typeof re.markPassiveEffectsStopped == "function" && re.markPassiveEffectsStopped();
    }
    function At(e) {
      re !== null && typeof re.markRenderStarted == "function" && re.markRenderStarted(e);
    }
    function tc() {
      re !== null && typeof re.markRenderYielded == "function" && re.markRenderYielded();
    }
    function nc() {
      re !== null && typeof re.markRenderStopped == "function" && re.markRenderStopped();
    }
    function pd(e) {
      re !== null && typeof re.markRenderScheduled == "function" && re.markRenderScheduled(e);
    }
    function rc(e, t) {
      re !== null && typeof re.markForceUpdateScheduled == "function" && re.markForceUpdateScheduled(e, t);
    }
    function Ho(e, t) {
      re !== null && typeof re.markStateUpdateScheduled == "function" && re.markStateUpdateScheduled(e, t);
    }
    var ge = (
      /*                         */
      0
    ), Se = (
      /*                 */
      1
    ), ze = (
      /*                    */
      2
    ), Xe = (
      /*               */
      8
    ), $r = (
      /*              */
      16
    ), xu = Math.clz32 ? Math.clz32 : Zn, Fo = Math.log, Sy = Math.LN2;
    function Zn(e) {
      var t = e >>> 0;
      return t === 0 ? 32 : 31 - (Fo(t) / Sy | 0) | 0;
    }
    var Vo = 31, W = (
      /*                        */
      0
    ), an = (
      /*                          */
      0
    ), Te = (
      /*                        */
      1
    ), Mn = (
      /*    */
      2
    ), Ir = (
      /*             */
      4
    ), yi = (
      /*            */
      8
    ), ca = (
      /*                     */
      16
    ), Tu = (
      /*                */
      32
    ), Dl = (
      /*                       */
      4194240
    ), Ru = (
      /*                        */
      64
    ), ac = (
      /*                        */
      128
    ), ic = (
      /*                        */
      256
    ), lc = (
      /*                        */
      512
    ), uc = (
      /*                        */
      1024
    ), oc = (
      /*                        */
      2048
    ), kl = (
      /*                        */
      4096
    ), sc = (
      /*                        */
      8192
    ), wu = (
      /*                        */
      16384
    ), _u = (
      /*                       */
      32768
    ), cc = (
      /*                       */
      65536
    ), Po = (
      /*                       */
      131072
    ), fc = (
      /*                       */
      262144
    ), dc = (
      /*                       */
      524288
    ), pc = (
      /*                       */
      1048576
    ), vc = (
      /*                       */
      2097152
    ), bu = (
      /*                            */
      130023424
    ), Nl = (
      /*                             */
      4194304
    ), hc = (
      /*                             */
      8388608
    ), mc = (
      /*                             */
      16777216
    ), vd = (
      /*                             */
      33554432
    ), yc = (
      /*                             */
      67108864
    ), Bv = Nl, Bo = (
      /*          */
      134217728
    ), hd = (
      /*                          */
      268435455
    ), Du = (
      /*               */
      268435456
    ), Qi = (
      /*                        */
      536870912
    ), qn = (
      /*                   */
      1073741824
    );
    function Ey(e) {
      {
        if (e & Te)
          return "Sync";
        if (e & Mn)
          return "InputContinuousHydration";
        if (e & Ir)
          return "InputContinuous";
        if (e & yi)
          return "DefaultHydration";
        if (e & ca)
          return "Default";
        if (e & Tu)
          return "TransitionHydration";
        if (e & Dl)
          return "Transition";
        if (e & bu)
          return "Retry";
        if (e & Bo)
          return "SelectiveHydration";
        if (e & Du)
          return "IdleHydration";
        if (e & Qi)
          return "Idle";
        if (e & qn)
          return "Offscreen";
      }
    }
    var Dt = -1, gc = Ru, xr = Nl;
    function Ll(e) {
      switch (qt(e)) {
        case Te:
          return Te;
        case Mn:
          return Mn;
        case Ir:
          return Ir;
        case yi:
          return yi;
        case ca:
          return ca;
        case Tu:
          return Tu;
        case Ru:
        case ac:
        case ic:
        case lc:
        case uc:
        case oc:
        case kl:
        case sc:
        case wu:
        case _u:
        case cc:
        case Po:
        case fc:
        case dc:
        case pc:
        case vc:
          return e & Dl;
        case Nl:
        case hc:
        case mc:
        case vd:
        case yc:
          return e & bu;
        case Bo:
          return Bo;
        case Du:
          return Du;
        case Qi:
          return Qi;
        case qn:
          return qn;
        default:
          return y("Should have found matching lanes. This is a bug in React."), e;
      }
    }
    function Ol(e, t) {
      var a = e.pendingLanes;
      if (a === W)
        return W;
      var i = W, u = e.suspendedLanes, s = e.pingedLanes, f = a & hd;
      if (f !== W) {
        var p = f & ~u;
        if (p !== W)
          i = Ll(p);
        else {
          var h = f & s;
          h !== W && (i = Ll(h));
        }
      } else {
        var C = a & ~u;
        C !== W ? i = Ll(C) : s !== W && (i = Ll(s));
      }
      if (i === W)
        return W;
      if (t !== W && t !== i && // If we already suspended with a delay, then interrupting is fine. Don't
      // bother waiting until the root is complete.
      (t & u) === W) {
        var E = qt(i), N = qt(t);
        if (
          // Tests whether the next lane is equal or lower priority than the wip
          // one. This works because the bits decrease in priority as you go left.
          E >= N || // Default priority updates should not interrupt transition updates. The
          // only difference between default updates and transition updates is that
          // default updates do not support refresh transitions.
          E === ca && (N & Dl) !== W
        )
          return t;
      }
      (i & Ir) !== W && (i |= a & ca);
      var D = e.entangledLanes;
      if (D !== W)
        for (var z = e.entanglements, H = i & D; H > 0; ) {
          var P = Zi(H), le = 1 << P;
          i |= z[P], H &= ~le;
        }
      return i;
    }
    function $v(e, t) {
      for (var a = e.eventTimes, i = Dt; t > 0; ) {
        var u = Zi(t), s = 1 << u, f = a[u];
        f > i && (i = f), t &= ~s;
      }
      return i;
    }
    function Iv(e, t) {
      switch (e) {
        case Te:
        case Mn:
        case Ir:
          return t + 250;
        case yi:
        case ca:
        case Tu:
        case Ru:
        case ac:
        case ic:
        case lc:
        case uc:
        case oc:
        case kl:
        case sc:
        case wu:
        case _u:
        case cc:
        case Po:
        case fc:
        case dc:
        case pc:
        case vc:
          return t + 5e3;
        case Nl:
        case hc:
        case mc:
        case vd:
        case yc:
          return Dt;
        case Bo:
        case Du:
        case Qi:
        case qn:
          return Dt;
        default:
          return y("Should have found matching lanes. This is a bug in React."), Dt;
      }
    }
    function Yv(e, t) {
      for (var a = e.pendingLanes, i = e.suspendedLanes, u = e.pingedLanes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = Zi(f), h = 1 << p, C = s[p];
        C === Dt ? ((h & i) === W || (h & u) !== W) && (s[p] = Iv(h, t)) : C <= t && (e.expiredLanes |= h), f &= ~h;
      }
    }
    function md(e) {
      return Ll(e.pendingLanes);
    }
    function Gi(e) {
      var t = e.pendingLanes & ~qn;
      return t !== W ? t : t & qn ? qn : W;
    }
    function yd(e) {
      return (e & Te) !== W;
    }
    function $o(e) {
      return (e & hd) !== W;
    }
    function Wv(e) {
      return (e & bu) === e;
    }
    function Qv(e) {
      var t = Te | Ir | ca;
      return (e & t) === W;
    }
    function Gv(e) {
      return (e & Dl) === e;
    }
    function Io(e, t) {
      var a = Mn | Ir | yi | ca;
      return (t & a) !== W;
    }
    function Zv(e, t) {
      return (t & e.expiredLanes) !== W;
    }
    function gd(e) {
      return (e & Dl) !== W;
    }
    function qv() {
      var e = gc;
      return gc <<= 1, (gc & Dl) === W && (gc = Ru), e;
    }
    function Tr() {
      var e = xr;
      return xr <<= 1, (xr & bu) === W && (xr = Nl), e;
    }
    function qt(e) {
      return e & -e;
    }
    function ku(e) {
      return qt(e);
    }
    function Zi(e) {
      return 31 - xu(e);
    }
    function Cc(e) {
      return Zi(e);
    }
    function Rr(e, t) {
      return (e & t) !== W;
    }
    function Ml(e, t) {
      return (e & t) === t;
    }
    function Be(e, t) {
      return e | t;
    }
    function Yo(e, t) {
      return e & ~t;
    }
    function Sc(e, t) {
      return e & t;
    }
    function xy(e) {
      return e;
    }
    function Xv(e, t) {
      return e !== an && e < t ? e : t;
    }
    function Wo(e) {
      for (var t = [], a = 0; a < Vo; a++)
        t.push(e);
      return t;
    }
    function Ul(e, t, a) {
      e.pendingLanes |= t, t !== Qi && (e.suspendedLanes = W, e.pingedLanes = W);
      var i = e.eventTimes, u = Cc(t);
      i[u] = a;
    }
    function Kv(e, t) {
      e.suspendedLanes |= t, e.pingedLanes &= ~t;
      for (var a = e.expirationTimes, i = t; i > 0; ) {
        var u = Zi(i), s = 1 << u;
        a[u] = Dt, i &= ~s;
      }
    }
    function Ec(e, t, a) {
      e.pingedLanes |= e.suspendedLanes & t;
    }
    function xc(e, t) {
      var a = e.pendingLanes & ~t;
      e.pendingLanes = t, e.suspendedLanes = W, e.pingedLanes = W, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t;
      for (var i = e.entanglements, u = e.eventTimes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = Zi(f), h = 1 << p;
        i[p] = W, u[p] = Dt, s[p] = Dt, f &= ~h;
      }
    }
    function Cd(e, t) {
      for (var a = e.entangledLanes |= t, i = e.entanglements, u = a; u; ) {
        var s = Zi(u), f = 1 << s;
        // Is this one of the newly entangled lanes?
        f & t | // Is this lane transitively entangled with the newly entangled lanes?
        i[s] & t && (i[s] |= t), u &= ~f;
      }
    }
    function Jv(e, t) {
      var a = qt(t), i;
      switch (a) {
        case Ir:
          i = Mn;
          break;
        case ca:
          i = yi;
          break;
        case Ru:
        case ac:
        case ic:
        case lc:
        case uc:
        case oc:
        case kl:
        case sc:
        case wu:
        case _u:
        case cc:
        case Po:
        case fc:
        case dc:
        case pc:
        case vc:
        case Nl:
        case hc:
        case mc:
        case vd:
        case yc:
          i = Tu;
          break;
        case Qi:
          i = Du;
          break;
        default:
          i = an;
          break;
      }
      return (i & (e.suspendedLanes | t)) !== an ? an : i;
    }
    function Tc(e, t, a) {
      if (Br)
        for (var i = e.pendingUpdatersLaneMap; a > 0; ) {
          var u = Cc(a), s = 1 << u, f = i[u];
          f.add(t), a &= ~s;
        }
    }
    function Sd(e, t) {
      if (Br)
        for (var a = e.pendingUpdatersLaneMap, i = e.memoizedUpdaters; t > 0; ) {
          var u = Cc(t), s = 1 << u, f = a[u];
          f.size > 0 && (f.forEach(function(p) {
            var h = p.alternate;
            (h === null || !i.has(h)) && i.add(p);
          }), f.clear()), t &= ~s;
        }
    }
    function Qo(e, t) {
      return null;
    }
    var Xt = Te, gi = Ir, Ga = ca, Nu = Qi, Lu = an;
    function fa() {
      return Lu;
    }
    function Yt(e) {
      Lu = e;
    }
    function Xn(e, t) {
      var a = Lu;
      try {
        return Lu = e, t();
      } finally {
        Lu = a;
      }
    }
    function Ty(e, t) {
      return e !== 0 && e < t ? e : t;
    }
    function Ry(e, t) {
      return e > t ? e : t;
    }
    function Ou(e, t) {
      return e !== 0 && e < t;
    }
    function Un(e) {
      var t = qt(e);
      return Ou(Xt, t) ? Ou(gi, t) ? $o(t) ? Ga : Nu : gi : Xt;
    }
    function Rc(e) {
      var t = e.current.memoizedState;
      return t.isDehydrated;
    }
    var pe;
    function Mu(e) {
      pe = e;
    }
    function Ed(e) {
      pe(e);
    }
    var wc;
    function wy(e) {
      wc = e;
    }
    var Uu;
    function _c(e) {
      Uu = e;
    }
    var bc;
    function eh(e) {
      bc = e;
    }
    var xd;
    function th(e) {
      xd = e;
    }
    var Go = !1, ju = [], Ht = null, Rn = null, tr = null, zu = /* @__PURE__ */ new Map(), Au = /* @__PURE__ */ new Map(), wn = [], nh = [
      "mousedown",
      "mouseup",
      "touchcancel",
      "touchend",
      "touchstart",
      "auxclick",
      "dblclick",
      "pointercancel",
      "pointerdown",
      "pointerup",
      "dragend",
      "dragstart",
      "drop",
      "compositionend",
      "compositionstart",
      "keydown",
      "keypress",
      "keyup",
      "input",
      "textInput",
      // Intentionally camelCase
      "copy",
      "cut",
      "paste",
      "click",
      "change",
      "contextmenu",
      "reset",
      "submit"
    ];
    function Za(e) {
      return nh.indexOf(e) > -1;
    }
    function _y(e, t, a, i, u) {
      return {
        blockedOn: e,
        domEventName: t,
        eventSystemFlags: a,
        nativeEvent: u,
        targetContainers: [i]
      };
    }
    function Td(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          Ht = null;
          break;
        case "dragenter":
        case "dragleave":
          Rn = null;
          break;
        case "mouseover":
        case "mouseout":
          tr = null;
          break;
        case "pointerover":
        case "pointerout": {
          var a = t.pointerId;
          zu.delete(a);
          break;
        }
        case "gotpointercapture":
        case "lostpointercapture": {
          var i = t.pointerId;
          Au.delete(i);
          break;
        }
      }
    }
    function Hu(e, t, a, i, u, s) {
      if (e === null || e.nativeEvent !== s) {
        var f = _y(t, a, i, u, s);
        if (t !== null) {
          var p = Qu(t);
          p !== null && wc(p);
        }
        return f;
      }
      e.eventSystemFlags |= i;
      var h = e.targetContainers;
      return u !== null && h.indexOf(u) === -1 && h.push(u), e;
    }
    function rh(e, t, a, i, u) {
      switch (t) {
        case "focusin": {
          var s = u;
          return Ht = Hu(Ht, e, t, a, i, s), !0;
        }
        case "dragenter": {
          var f = u;
          return Rn = Hu(Rn, e, t, a, i, f), !0;
        }
        case "mouseover": {
          var p = u;
          return tr = Hu(tr, e, t, a, i, p), !0;
        }
        case "pointerover": {
          var h = u, C = h.pointerId;
          return zu.set(C, Hu(zu.get(C) || null, e, t, a, i, h)), !0;
        }
        case "gotpointercapture": {
          var E = u, N = E.pointerId;
          return Au.set(N, Hu(Au.get(N) || null, e, t, a, i, E)), !0;
        }
      }
      return !1;
    }
    function Rd(e) {
      var t = ls(e.target);
      if (t !== null) {
        var a = Vr(t);
        if (a !== null) {
          var i = a.tag;
          if (i === Ye) {
            var u = id(a);
            if (u !== null) {
              e.blockedOn = u, xd(e.priority, function() {
                Uu(a);
              });
              return;
            }
          } else if (i === I) {
            var s = a.stateNode;
            if (Rc(s)) {
              e.blockedOn = Ws(a);
              return;
            }
          }
        }
      }
      e.blockedOn = null;
    }
    function by(e) {
      for (var t = bc(), a = {
        blockedOn: null,
        target: e,
        priority: t
      }, i = 0; i < wn.length && Ou(t, wn[i].priority); i++)
        ;
      wn.splice(i, 0, a), i === 0 && Rd(a);
    }
    function jl(e) {
      if (e.blockedOn !== null)
        return !1;
      for (var t = e.targetContainers; t.length > 0; ) {
        var a = t[0], i = Kn(e.domEventName, e.eventSystemFlags, a, e.nativeEvent);
        if (i === null) {
          var u = e.nativeEvent, s = new u.constructor(u.type, u);
          Do(s), u.target.dispatchEvent(s), my();
        } else {
          var f = Qu(i);
          return f !== null && wc(f), e.blockedOn = i, !1;
        }
        t.shift();
      }
      return !0;
    }
    function Dc(e, t, a) {
      jl(e) && a.delete(t);
    }
    function da() {
      Go = !1, Ht !== null && jl(Ht) && (Ht = null), Rn !== null && jl(Rn) && (Rn = null), tr !== null && jl(tr) && (tr = null), zu.forEach(Dc), Au.forEach(Dc);
    }
    function Ke(e, t) {
      e.blockedOn === t && (e.blockedOn = null, Go || (Go = !0, S.unstable_scheduleCallback(S.unstable_NormalPriority, da)));
    }
    function Wt(e) {
      if (ju.length > 0) {
        Ke(ju[0], e);
        for (var t = 1; t < ju.length; t++) {
          var a = ju[t];
          a.blockedOn === e && (a.blockedOn = null);
        }
      }
      Ht !== null && Ke(Ht, e), Rn !== null && Ke(Rn, e), tr !== null && Ke(tr, e);
      var i = function(p) {
        return Ke(p, e);
      };
      zu.forEach(i), Au.forEach(i);
      for (var u = 0; u < wn.length; u++) {
        var s = wn[u];
        s.blockedOn === e && (s.blockedOn = null);
      }
      for (; wn.length > 0; ) {
        var f = wn[0];
        if (f.blockedOn !== null)
          break;
        Rd(f), f.blockedOn === null && wn.shift();
      }
    }
    var Ut = g.ReactCurrentBatchConfig, cn = !0;
    function wr(e) {
      cn = !!e;
    }
    function Fu() {
      return cn;
    }
    function fn(e, t, a) {
      var i = kc(t), u;
      switch (i) {
        case Xt:
          u = Zo;
          break;
        case gi:
          u = zl;
          break;
        case Ga:
        default:
          u = Vu;
          break;
      }
      return u.bind(null, t, a, e);
    }
    function Zo(e, t, a, i) {
      var u = fa(), s = Ut.transition;
      Ut.transition = null;
      try {
        Yt(Xt), Vu(e, t, a, i);
      } finally {
        Yt(u), Ut.transition = s;
      }
    }
    function zl(e, t, a, i) {
      var u = fa(), s = Ut.transition;
      Ut.transition = null;
      try {
        Yt(gi), Vu(e, t, a, i);
      } finally {
        Yt(u), Ut.transition = s;
      }
    }
    function Vu(e, t, a, i) {
      cn && wd(e, t, a, i);
    }
    function wd(e, t, a, i) {
      var u = Kn(e, t, a, i);
      if (u === null) {
        Iy(e, t, i, qi, a), Td(e, i);
        return;
      }
      if (rh(u, e, t, a, i)) {
        i.stopPropagation();
        return;
      }
      if (Td(e, i), t & Cl && Za(e)) {
        for (; u !== null; ) {
          var s = Qu(u);
          s !== null && Ed(s);
          var f = Kn(e, t, a, i);
          if (f === null && Iy(e, t, i, qi, a), f === u)
            break;
          u = f;
        }
        u !== null && i.stopPropagation();
        return;
      }
      Iy(e, t, i, null, a);
    }
    var qi = null;
    function Kn(e, t, a, i) {
      qi = null;
      var u = Ps(i), s = ls(u);
      if (s !== null) {
        var f = Vr(s);
        if (f === null)
          s = null;
        else {
          var p = f.tag;
          if (p === Ye) {
            var h = id(f);
            if (h !== null)
              return h;
            s = null;
          } else if (p === I) {
            var C = f.stateNode;
            if (Rc(C))
              return Ws(f);
            s = null;
          } else f !== s && (s = null);
        }
      }
      return qi = s, null;
    }
    function kc(e) {
      switch (e) {
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
          return Xt;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
          return gi;
        case "message": {
          var t = od();
          switch (t) {
            case qs:
              return Xt;
            case wl:
              return gi;
            case Qa:
            case zv:
              return Ga;
            case Xs:
              return Nu;
            default:
              return Ga;
          }
        }
        default:
          return Ga;
      }
    }
    function Pu(e, t, a) {
      return e.addEventListener(t, a, !1), a;
    }
    function Ci(e, t, a) {
      return e.addEventListener(t, a, !0), a;
    }
    function Nc(e, t, a, i) {
      return e.addEventListener(t, a, {
        capture: !0,
        passive: i
      }), a;
    }
    function _d(e, t, a, i) {
      return e.addEventListener(t, a, {
        passive: i
      }), a;
    }
    var pa = null, Bu = null, va = null;
    function Lc(e) {
      return pa = e, Bu = Xo(), !0;
    }
    function qo() {
      pa = null, Bu = null, va = null;
    }
    function Oc() {
      if (va)
        return va;
      var e, t = Bu, a = t.length, i, u = Xo(), s = u.length;
      for (e = 0; e < a && t[e] === u[e]; e++)
        ;
      var f = a - e;
      for (i = 1; i <= f && t[a - i] === u[s - i]; i++)
        ;
      var p = i > 1 ? 1 - i : void 0;
      return va = u.slice(e, p), va;
    }
    function Xo() {
      return "value" in pa ? pa.value : pa.textContent;
    }
    function Al(e) {
      var t, a = e.keyCode;
      return "charCode" in e ? (t = e.charCode, t === 0 && a === 13 && (t = 13)) : t = a, t === 10 && (t = 13), t >= 32 || t === 13 ? t : 0;
    }
    function _n() {
      return !0;
    }
    function Si() {
      return !1;
    }
    function Bt(e) {
      function t(a, i, u, s, f) {
        this._reactName = a, this._targetInst = u, this.type = i, this.nativeEvent = s, this.target = f, this.currentTarget = null;
        for (var p in e)
          if (e.hasOwnProperty(p)) {
            var h = e[p];
            h ? this[p] = h(s) : this[p] = s[p];
          }
        var C = s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1;
        return C ? this.isDefaultPrevented = _n : this.isDefaultPrevented = Si, this.isPropagationStopped = Si, this;
      }
      return qe(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = _n);
        },
        stopPropagation: function() {
          var a = this.nativeEvent;
          a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = _n);
        },
        /**
         * We release all dispatched `SyntheticEvent`s after each event loop, adding
         * them back into the pool. This allows a way to hold onto a reference that
         * won't be added back into the pool.
         */
        persist: function() {
        },
        /**
         * Checks if this event should be released back into the pool.
         *
         * @return {boolean} True if this should not be released, false otherwise.
         */
        isPersistent: _n
      }), t;
    }
    var dn = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, Mc = Bt(dn), Hl = qe({}, dn, {
      view: 0,
      detail: 0
    }), bd = Bt(Hl), Dd, qa, $u;
    function kd(e) {
      e !== $u && ($u && e.type === "mousemove" ? (Dd = e.screenX - $u.screenX, qa = e.screenY - $u.screenY) : (Dd = 0, qa = 0), $u = e);
    }
    var Xa = qe({}, Hl, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: Nd,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (kd(e), Dd);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : qa;
      }
    }), Uc = Bt(Xa), Fl = qe({}, Xa, {
      dataTransfer: 0
    }), ah = Bt(Fl), ih = qe({}, Hl, {
      relatedTarget: 0
    }), Ko = Bt(ih), jc = qe({}, dn, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Dy = Bt(jc), ky = qe({}, dn, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), lh = Bt(ky), uh = qe({}, dn, {
      data: 0
    }), Xi = Bt(uh), Ny = Xi, Iu = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified"
    }, oh = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta"
    };
    function Qt(e) {
      if (e.key) {
        var t = Iu[e.key] || e.key;
        if (t !== "Unidentified")
          return t;
      }
      if (e.type === "keypress") {
        var a = Al(e);
        return a === 13 ? "Enter" : String.fromCharCode(a);
      }
      return e.type === "keydown" || e.type === "keyup" ? oh[e.keyCode] || "Unidentified" : "";
    }
    var Ly = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function sh(e) {
      var t = this, a = t.nativeEvent;
      if (a.getModifierState)
        return a.getModifierState(e);
      var i = Ly[e];
      return i ? !!a[i] : !1;
    }
    function Nd(e) {
      return sh;
    }
    var Oy = qe({}, Hl, {
      key: Qt,
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Nd,
      // Legacy Interface
      charCode: function(e) {
        return e.type === "keypress" ? Al(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress" ? Al(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }
    }), ch = Bt(Oy), fh = qe({}, Xa, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0
    }), dh = Bt(fh), ha = qe({}, Hl, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Nd
    }), Ld = Bt(ha), My = qe({}, dn, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Ki = Bt(My), zc = qe({}, Xa, {
      deltaX: function(e) {
        return "deltaX" in e ? e.deltaX : (
          // Fallback to `wheelDeltaX` for Webkit and normalize (right is positive).
          "wheelDeltaX" in e ? -e.wheelDeltaX : 0
        );
      },
      deltaY: function(e) {
        return "deltaY" in e ? e.deltaY : (
          // Fallback to `wheelDeltaY` for Webkit and normalize (down is positive).
          "wheelDeltaY" in e ? -e.wheelDeltaY : (
            // Fallback to `wheelDelta` for IE<9 and normalize (down is positive).
            "wheelDelta" in e ? -e.wheelDelta : 0
          )
        );
      },
      deltaZ: 0,
      // Browsers without "deltaMode" is reporting in raw wheel delta where one
      // notch on the scroll is always +/- 120, roughly equivalent to pixels.
      // A good approximation of DOM_DELTA_LINE (1) is 5% of viewport size or
      // ~40 pixels, for DOM_DELTA_SCREEN (2) it is 87.5% of viewport size.
      deltaMode: 0
    }), Vl = Bt(zc), Ac = [9, 13, 27, 32], Hc = 229, Jo = gn && "CompositionEvent" in window, es = null;
    gn && "documentMode" in document && (es = document.documentMode);
    var Od = gn && "TextEvent" in window && !es, ph = gn && (!Jo || es && es > 8 && es <= 11), Md = 32, Ud = String.fromCharCode(Md);
    function Fc() {
      dr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), dr("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), dr("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), dr("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
    }
    var ts = !1;
    function vh(e) {
      return (e.ctrlKey || e.altKey || e.metaKey) && // ctrlKey && altKey is equivalent to AltGr, and is not a command.
      !(e.ctrlKey && e.altKey);
    }
    function jd(e) {
      switch (e) {
        case "compositionstart":
          return "onCompositionStart";
        case "compositionend":
          return "onCompositionEnd";
        case "compositionupdate":
          return "onCompositionUpdate";
      }
    }
    function Uy(e, t) {
      return e === "keydown" && t.keyCode === Hc;
    }
    function zd(e, t) {
      switch (e) {
        case "keyup":
          return Ac.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== Hc;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function Vc(e) {
      var t = e.detail;
      return typeof t == "object" && "data" in t ? t.data : null;
    }
    function ns(e) {
      return e.locale === "ko";
    }
    var Ji = !1;
    function Pc(e, t, a, i, u) {
      var s, f;
      if (Jo ? s = jd(t) : Ji ? zd(t, i) && (s = "onCompositionEnd") : Uy(t, i) && (s = "onCompositionStart"), !s)
        return null;
      ph && !ns(i) && (!Ji && s === "onCompositionStart" ? Ji = Lc(u) : s === "onCompositionEnd" && Ji && (f = Oc()));
      var p = Sh(a, s);
      if (p.length > 0) {
        var h = new Xi(s, t, null, i, u);
        if (e.push({
          event: h,
          listeners: p
        }), f)
          h.data = f;
        else {
          var C = Vc(i);
          C !== null && (h.data = C);
        }
      }
    }
    function hh(e, t) {
      switch (e) {
        case "compositionend":
          return Vc(t);
        case "keypress":
          var a = t.which;
          return a !== Md ? null : (ts = !0, Ud);
        case "textInput":
          var i = t.data;
          return i === Ud && ts ? null : i;
        default:
          return null;
      }
    }
    function jy(e, t) {
      if (Ji) {
        if (e === "compositionend" || !Jo && zd(e, t)) {
          var a = Oc();
          return qo(), Ji = !1, a;
        }
        return null;
      }
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!vh(t)) {
            if (t.char && t.char.length > 1)
              return t.char;
            if (t.which)
              return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return ph && !ns(t) ? null : t.data;
        default:
          return null;
      }
    }
    function Bc(e, t, a, i, u) {
      var s;
      if (Od ? s = hh(t, i) : s = jy(t, i), !s)
        return null;
      var f = Sh(a, "onBeforeInput");
      if (f.length > 0) {
        var p = new Ny("onBeforeInput", "beforeinput", null, i, u);
        e.push({
          event: p,
          listeners: f
        }), p.data = s;
      }
    }
    function zy(e, t, a, i, u, s, f) {
      Pc(e, t, a, i, u), Bc(e, t, a, i, u);
    }
    var rs = {
      color: !0,
      date: !0,
      datetime: !0,
      "datetime-local": !0,
      email: !0,
      month: !0,
      number: !0,
      password: !0,
      range: !0,
      search: !0,
      tel: !0,
      text: !0,
      time: !0,
      url: !0,
      week: !0
    };
    function mh(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!rs[e.type] : t === "textarea";
    }
    /**
     * Checks if an event is supported in the current execution environment.
     *
     * NOTE: This will not work correctly for non-generic events such as `change`,
     * `reset`, `load`, `error`, and `select`.
     *
     * Borrows from Modernizr.
     *
     * @param {string} eventNameSuffix Event name, e.g. "click".
     * @return {boolean} True if the event is supported.
     * @internal
     * @license Modernizr 3.0.0pre (Custom Build) | MIT
     */
    function $c(e) {
      if (!gn)
        return !1;
      var t = "on" + e, a = t in document;
      if (!a) {
        var i = document.createElement("div");
        i.setAttribute(t, "return;"), a = typeof i[t] == "function";
      }
      return a;
    }
    function n() {
      dr("onChange", ["change", "click", "focusin", "focusout", "input", "keydown", "keyup", "selectionchange"]);
    }
    function r(e, t, a, i) {
      Bs(i);
      var u = Sh(t, "onChange");
      if (u.length > 0) {
        var s = new Mc("onChange", "change", null, a, i);
        e.push({
          event: s,
          listeners: u
        });
      }
    }
    var l = null, o = null;
    function c(e) {
      var t = e.nodeName && e.nodeName.toLowerCase();
      return t === "select" || t === "input" && e.type === "file";
    }
    function d(e) {
      var t = [];
      r(t, o, e, Ps(e)), Xf(m, t);
    }
    function m(e) {
      n2(e, 0);
    }
    function x(e) {
      var t = Zc(e);
      if (Kp(t))
        return e;
    }
    function w(e, t) {
      if (e === "change")
        return t;
    }
    var A = !1;
    gn && (A = $c("input") && (!document.documentMode || document.documentMode > 9));
    function G(e, t) {
      l = e, o = t, l.attachEvent("onpropertychange", Q);
    }
    function q() {
      l && (l.detachEvent("onpropertychange", Q), l = null, o = null);
    }
    function Q(e) {
      e.propertyName === "value" && x(o) && d(e);
    }
    function se(e, t, a) {
      e === "focusin" ? (q(), G(t, a)) : e === "focusout" && q();
    }
    function ve(e, t) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return x(o);
    }
    function ye(e) {
      var t = e.nodeName;
      return t && t.toLowerCase() === "input" && (e.type === "checkbox" || e.type === "radio");
    }
    function Kt(e, t) {
      if (e === "click")
        return x(t);
    }
    function O(e, t) {
      if (e === "input" || e === "change")
        return x(t);
    }
    function k(e) {
      var t = e._wrapperState;
      !t || !t.controlled || e.type !== "number" || Ai(e, "number", e.value);
    }
    function j(e, t, a, i, u, s, f) {
      var p = a ? Zc(a) : window, h, C;
      if (c(p) ? h = w : mh(p) ? A ? h = O : (h = ve, C = se) : ye(p) && (h = Kt), h) {
        var E = h(t, a);
        if (E) {
          r(e, E, i, u);
          return;
        }
      }
      C && C(t, p, a), t === "focusout" && k(p);
    }
    function J() {
      Xr("onMouseEnter", ["mouseout", "mouseover"]), Xr("onMouseLeave", ["mouseout", "mouseover"]), Xr("onPointerEnter", ["pointerout", "pointerover"]), Xr("onPointerLeave", ["pointerout", "pointerover"]);
    }
    function Ce(e, t, a, i, u, s, f) {
      var p = t === "mouseover" || t === "pointerover", h = t === "mouseout" || t === "pointerout";
      if (p && !kv(i)) {
        var C = i.relatedTarget || i.fromElement;
        if (C && (ls(C) || qd(C)))
          return;
      }
      if (!(!h && !p)) {
        var E;
        if (u.window === u)
          E = u;
        else {
          var N = u.ownerDocument;
          N ? E = N.defaultView || N.parentWindow : E = window;
        }
        var D, z;
        if (h) {
          var H = i.relatedTarget || i.toElement;
          if (D = a, z = H ? ls(H) : null, z !== null) {
            var P = Vr(z);
            (z !== P || z.tag !== oe && z.tag !== be) && (z = null);
          }
        } else
          D = null, z = a;
        if (D !== z) {
          var le = Uc, De = "onMouseLeave", Ee = "onMouseEnter", rt = "mouse";
          (t === "pointerout" || t === "pointerover") && (le = dh, De = "onPointerLeave", Ee = "onPointerEnter", rt = "pointer");
          var Je = D == null ? E : Zc(D), M = z == null ? E : Zc(z), B = new le(De, rt + "leave", D, i, u);
          B.target = Je, B.relatedTarget = M;
          var U = null, X = ls(u);
          if (X === a) {
            var de = new le(Ee, rt + "enter", z, i, u);
            de.target = M, de.relatedTarget = Je, U = de;
          }
          b3(e, B, U, D, z);
        }
      }
    }
    function Le(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var he = typeof Object.is == "function" ? Object.is : Le;
    function Oe(e, t) {
      if (he(e, t))
        return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var a = Object.keys(e), i = Object.keys(t);
      if (a.length !== i.length)
        return !1;
      for (var u = 0; u < a.length; u++) {
        var s = a[u];
        if (!In.call(t, s) || !he(e[s], t[s]))
          return !1;
      }
      return !0;
    }
    function pn(e) {
      for (; e && e.firstChild; )
        e = e.firstChild;
      return e;
    }
    function ut(e) {
      for (; e; ) {
        if (e.nextSibling)
          return e.nextSibling;
        e = e.parentNode;
      }
    }
    function Ei(e, t) {
      for (var a = pn(e), i = 0, u = 0; a; ) {
        if (a.nodeType === si) {
          if (u = i + a.textContent.length, i <= t && u >= t)
            return {
              node: a,
              offset: t - i
            };
          i = u;
        }
        a = pn(ut(a));
      }
    }
    function Ay(e) {
      var t = e.ownerDocument, a = t && t.defaultView || window, i = a.getSelection && a.getSelection();
      if (!i || i.rangeCount === 0)
        return null;
      var u = i.anchorNode, s = i.anchorOffset, f = i.focusNode, p = i.focusOffset;
      try {
        u.nodeType, f.nodeType;
      } catch {
        return null;
      }
      return u3(e, u, s, f, p);
    }
    function u3(e, t, a, i, u) {
      var s = 0, f = -1, p = -1, h = 0, C = 0, E = e, N = null;
      e: for (; ; ) {
        for (var D = null; E === t && (a === 0 || E.nodeType === si) && (f = s + a), E === i && (u === 0 || E.nodeType === si) && (p = s + u), E.nodeType === si && (s += E.nodeValue.length), (D = E.firstChild) !== null; )
          N = E, E = D;
        for (; ; ) {
          if (E === e)
            break e;
          if (N === t && ++h === a && (f = s), N === i && ++C === u && (p = s), (D = E.nextSibling) !== null)
            break;
          E = N, N = E.parentNode;
        }
        E = D;
      }
      return f === -1 || p === -1 ? null : {
        start: f,
        end: p
      };
    }
    function o3(e, t) {
      var a = e.ownerDocument || document, i = a && a.defaultView || window;
      if (i.getSelection) {
        var u = i.getSelection(), s = e.textContent.length, f = Math.min(t.start, s), p = t.end === void 0 ? f : Math.min(t.end, s);
        if (!u.extend && f > p) {
          var h = p;
          p = f, f = h;
        }
        var C = Ei(e, f), E = Ei(e, p);
        if (C && E) {
          if (u.rangeCount === 1 && u.anchorNode === C.node && u.anchorOffset === C.offset && u.focusNode === E.node && u.focusOffset === E.offset)
            return;
          var N = a.createRange();
          N.setStart(C.node, C.offset), u.removeAllRanges(), f > p ? (u.addRange(N), u.extend(E.node, E.offset)) : (N.setEnd(E.node, E.offset), u.addRange(N));
        }
      }
    }
    function Ig(e) {
      return e && e.nodeType === si;
    }
    function Yg(e, t) {
      return !e || !t ? !1 : e === t ? !0 : Ig(e) ? !1 : Ig(t) ? Yg(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
    }
    function s3(e) {
      return e && e.ownerDocument && Yg(e.ownerDocument.documentElement, e);
    }
    function c3(e) {
      try {
        return typeof e.contentWindow.location.href == "string";
      } catch {
        return !1;
      }
    }
    function Wg() {
      for (var e = window, t = Ds(); t instanceof e.HTMLIFrameElement; ) {
        if (c3(t))
          e = t.contentWindow;
        else
          return t;
        t = Ds(e.document);
      }
      return t;
    }
    function Hy(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function f3() {
      var e = Wg();
      return {
        focusedElem: e,
        selectionRange: Hy(e) ? p3(e) : null
      };
    }
    function d3(e) {
      var t = Wg(), a = e.focusedElem, i = e.selectionRange;
      if (t !== a && s3(a)) {
        i !== null && Hy(a) && v3(a, i);
        for (var u = [], s = a; s = s.parentNode; )
          s.nodeType === hr && u.push({
            element: s,
            left: s.scrollLeft,
            top: s.scrollTop
          });
        typeof a.focus == "function" && a.focus();
        for (var f = 0; f < u.length; f++) {
          var p = u[f];
          p.element.scrollLeft = p.left, p.element.scrollTop = p.top;
        }
      }
    }
    function p3(e) {
      var t;
      return "selectionStart" in e ? t = {
        start: e.selectionStart,
        end: e.selectionEnd
      } : t = Ay(e), t || {
        start: 0,
        end: 0
      };
    }
    function v3(e, t) {
      var a = t.start, i = t.end;
      i === void 0 && (i = a), "selectionStart" in e ? (e.selectionStart = a, e.selectionEnd = Math.min(i, e.value.length)) : o3(e, t);
    }
    var h3 = gn && "documentMode" in document && document.documentMode <= 11;
    function m3() {
      dr("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
    }
    var Ic = null, Fy = null, Ad = null, Vy = !1;
    function y3(e) {
      if ("selectionStart" in e && Hy(e))
        return {
          start: e.selectionStart,
          end: e.selectionEnd
        };
      var t = e.ownerDocument && e.ownerDocument.defaultView || window, a = t.getSelection();
      return {
        anchorNode: a.anchorNode,
        anchorOffset: a.anchorOffset,
        focusNode: a.focusNode,
        focusOffset: a.focusOffset
      };
    }
    function g3(e) {
      return e.window === e ? e.document : e.nodeType === La ? e : e.ownerDocument;
    }
    function Qg(e, t, a) {
      var i = g3(a);
      if (!(Vy || Ic == null || Ic !== Ds(i))) {
        var u = y3(Ic);
        if (!Ad || !Oe(Ad, u)) {
          Ad = u;
          var s = Sh(Fy, "onSelect");
          if (s.length > 0) {
            var f = new Mc("onSelect", "select", null, t, a);
            e.push({
              event: f,
              listeners: s
            }), f.target = Ic;
          }
        }
      }
    }
    function C3(e, t, a, i, u, s, f) {
      var p = a ? Zc(a) : window;
      switch (t) {
        case "focusin":
          (mh(p) || p.contentEditable === "true") && (Ic = p, Fy = a, Ad = null);
          break;
        case "focusout":
          Ic = null, Fy = null, Ad = null;
          break;
        case "mousedown":
          Vy = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Vy = !1, Qg(e, i, u);
          break;
        case "selectionchange":
          if (h3)
            break;
        case "keydown":
        case "keyup":
          Qg(e, i, u);
      }
    }
    function yh(e, t) {
      var a = {};
      return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
    }
    var Yc = {
      animationend: yh("Animation", "AnimationEnd"),
      animationiteration: yh("Animation", "AnimationIteration"),
      animationstart: yh("Animation", "AnimationStart"),
      transitionend: yh("Transition", "TransitionEnd")
    }, Py = {}, Gg = {};
    gn && (Gg = document.createElement("div").style, "AnimationEvent" in window || (delete Yc.animationend.animation, delete Yc.animationiteration.animation, delete Yc.animationstart.animation), "TransitionEvent" in window || delete Yc.transitionend.transition);
    function gh(e) {
      if (Py[e])
        return Py[e];
      if (!Yc[e])
        return e;
      var t = Yc[e];
      for (var a in t)
        if (t.hasOwnProperty(a) && a in Gg)
          return Py[e] = t[a];
      return e;
    }
    var Zg = gh("animationend"), qg = gh("animationiteration"), Xg = gh("animationstart"), Kg = gh("transitionend"), Jg = /* @__PURE__ */ new Map(), e2 = ["abort", "auxClick", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "pointerCancel", "pointerDown", "pointerMove", "pointerOut", "pointerOver", "pointerUp", "progress", "rateChange", "reset", "resize", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchStart", "volumeChange", "scroll", "toggle", "touchMove", "waiting", "wheel"];
    function Yu(e, t) {
      Jg.set(e, t), dr(t, [e]);
    }
    function S3() {
      for (var e = 0; e < e2.length; e++) {
        var t = e2[e], a = t.toLowerCase(), i = t[0].toUpperCase() + t.slice(1);
        Yu(a, "on" + i);
      }
      Yu(Zg, "onAnimationEnd"), Yu(qg, "onAnimationIteration"), Yu(Xg, "onAnimationStart"), Yu("dblclick", "onDoubleClick"), Yu("focusin", "onFocus"), Yu("focusout", "onBlur"), Yu(Kg, "onTransitionEnd");
    }
    function E3(e, t, a, i, u, s, f) {
      var p = Jg.get(t);
      if (p !== void 0) {
        var h = Mc, C = t;
        switch (t) {
          case "keypress":
            if (Al(i) === 0)
              return;
          case "keydown":
          case "keyup":
            h = ch;
            break;
          case "focusin":
            C = "focus", h = Ko;
            break;
          case "focusout":
            C = "blur", h = Ko;
            break;
          case "beforeblur":
          case "afterblur":
            h = Ko;
            break;
          case "click":
            if (i.button === 2)
              return;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            h = Uc;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            h = ah;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            h = Ld;
            break;
          case Zg:
          case qg:
          case Xg:
            h = Dy;
            break;
          case Kg:
            h = Ki;
            break;
          case "scroll":
            h = bd;
            break;
          case "wheel":
            h = Vl;
            break;
          case "copy":
          case "cut":
          case "paste":
            h = lh;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            h = dh;
            break;
        }
        var E = (s & Cl) !== 0;
        {
          var N = !E && // TODO: ideally, we'd eventually add all events from
          // nonDelegatedEvents list in DOMPluginEventSystem.
          // Then we can remove this special list.
          // This is a breaking change that can wait until React 18.
          t === "scroll", D = w3(a, p, i.type, E, N);
          if (D.length > 0) {
            var z = new h(p, C, null, i, u);
            e.push({
              event: z,
              listeners: D
            });
          }
        }
      }
    }
    S3(), J(), n(), m3(), Fc();
    function x3(e, t, a, i, u, s, f) {
      E3(e, t, a, i, u, s);
      var p = (s & hy) === 0;
      p && (Ce(e, t, a, i, u), j(e, t, a, i, u), C3(e, t, a, i, u), zy(e, t, a, i, u));
    }
    var Hd = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], By = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(Hd));
    function t2(e, t, a) {
      var i = e.type || "unknown-event";
      e.currentTarget = a, pi(i, t, void 0, e), e.currentTarget = null;
    }
    function T3(e, t, a) {
      var i;
      if (a)
        for (var u = t.length - 1; u >= 0; u--) {
          var s = t[u], f = s.instance, p = s.currentTarget, h = s.listener;
          if (f !== i && e.isPropagationStopped())
            return;
          t2(e, h, p), i = f;
        }
      else
        for (var C = 0; C < t.length; C++) {
          var E = t[C], N = E.instance, D = E.currentTarget, z = E.listener;
          if (N !== i && e.isPropagationStopped())
            return;
          t2(e, z, D), i = N;
        }
    }
    function n2(e, t) {
      for (var a = (t & Cl) !== 0, i = 0; i < e.length; i++) {
        var u = e[i], s = u.event, f = u.listeners;
        T3(s, f, a);
      }
      td();
    }
    function R3(e, t, a, i, u) {
      var s = Ps(a), f = [];
      x3(f, e, i, a, s, t), n2(f, t);
    }
    function $t(e, t) {
      By.has(e) || y('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
      var a = !1, i = eE(t), u = D3(e);
      i.has(u) || (r2(t, e, _o, a), i.add(u));
    }
    function $y(e, t, a) {
      By.has(e) && !t && y('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
      var i = 0;
      t && (i |= Cl), r2(a, e, i, t);
    }
    var Ch = "_reactListening" + Math.random().toString(36).slice(2);
    function Fd(e) {
      if (!e[Ch]) {
        e[Ch] = !0, $n.forEach(function(a) {
          a !== "selectionchange" && (By.has(a) || $y(a, !1, e), $y(a, !0, e));
        });
        var t = e.nodeType === La ? e : e.ownerDocument;
        t !== null && (t[Ch] || (t[Ch] = !0, $y("selectionchange", !1, t)));
      }
    }
    function r2(e, t, a, i, u) {
      var s = fn(e, t, a), f = void 0;
      Lo && (t === "touchstart" || t === "touchmove" || t === "wheel") && (f = !0), e = e, i ? f !== void 0 ? Nc(e, t, s, f) : Ci(e, t, s) : f !== void 0 ? _d(e, t, s, f) : Pu(e, t, s);
    }
    function a2(e, t) {
      return e === t || e.nodeType === nn && e.parentNode === t;
    }
    function Iy(e, t, a, i, u) {
      var s = i;
      if (!(t & fi) && !(t & _o)) {
        var f = u;
        if (i !== null) {
          var p = i;
          e: for (; ; ) {
            if (p === null)
              return;
            var h = p.tag;
            if (h === I || h === K) {
              var C = p.stateNode.containerInfo;
              if (a2(C, f))
                break;
              if (h === K)
                for (var E = p.return; E !== null; ) {
                  var N = E.tag;
                  if (N === I || N === K) {
                    var D = E.stateNode.containerInfo;
                    if (a2(D, f))
                      return;
                  }
                  E = E.return;
                }
              for (; C !== null; ) {
                var z = ls(C);
                if (z === null)
                  return;
                var H = z.tag;
                if (H === oe || H === be) {
                  p = s = z;
                  continue e;
                }
                C = C.parentNode;
              }
            }
            p = p.return;
          }
        }
      }
      Xf(function() {
        return R3(e, t, a, s);
      });
    }
    function Vd(e, t, a) {
      return {
        instance: e,
        listener: t,
        currentTarget: a
      };
    }
    function w3(e, t, a, i, u, s) {
      for (var f = t !== null ? t + "Capture" : null, p = i ? f : t, h = [], C = e, E = null; C !== null; ) {
        var N = C, D = N.stateNode, z = N.tag;
        if (z === oe && D !== null && (E = D, p !== null)) {
          var H = El(C, p);
          H != null && h.push(Vd(C, H, E));
        }
        if (u)
          break;
        C = C.return;
      }
      return h;
    }
    function Sh(e, t) {
      for (var a = t + "Capture", i = [], u = e; u !== null; ) {
        var s = u, f = s.stateNode, p = s.tag;
        if (p === oe && f !== null) {
          var h = f, C = El(u, a);
          C != null && i.unshift(Vd(u, C, h));
          var E = El(u, t);
          E != null && i.push(Vd(u, E, h));
        }
        u = u.return;
      }
      return i;
    }
    function Wc(e) {
      if (e === null)
        return null;
      do
        e = e.return;
      while (e && e.tag !== oe);
      return e || null;
    }
    function _3(e, t) {
      for (var a = e, i = t, u = 0, s = a; s; s = Wc(s))
        u++;
      for (var f = 0, p = i; p; p = Wc(p))
        f++;
      for (; u - f > 0; )
        a = Wc(a), u--;
      for (; f - u > 0; )
        i = Wc(i), f--;
      for (var h = u; h--; ) {
        if (a === i || i !== null && a === i.alternate)
          return a;
        a = Wc(a), i = Wc(i);
      }
      return null;
    }
    function i2(e, t, a, i, u) {
      for (var s = t._reactName, f = [], p = a; p !== null && p !== i; ) {
        var h = p, C = h.alternate, E = h.stateNode, N = h.tag;
        if (C !== null && C === i)
          break;
        if (N === oe && E !== null) {
          var D = E;
          if (u) {
            var z = El(p, s);
            z != null && f.unshift(Vd(p, z, D));
          } else if (!u) {
            var H = El(p, s);
            H != null && f.push(Vd(p, H, D));
          }
        }
        p = p.return;
      }
      f.length !== 0 && e.push({
        event: t,
        listeners: f
      });
    }
    function b3(e, t, a, i, u) {
      var s = i && u ? _3(i, u) : null;
      i !== null && i2(e, t, i, s, !1), u !== null && a !== null && i2(e, a, u, s, !0);
    }
    function D3(e, t) {
      return e + "__bubble";
    }
    var ma = !1, Pd = "dangerouslySetInnerHTML", Eh = "suppressContentEditableWarning", Wu = "suppressHydrationWarning", l2 = "autoFocus", as = "children", is = "style", xh = "__html", Yy, Th, Bd, u2, Rh, o2, s2;
    Yy = {
      // There are working polyfills for <dialog>. Let people use it.
      dialog: !0,
      // Electron ships a custom <webview> tag to display external web content in
      // an isolated frame and process.
      // This tag is not present in non Electron environments such as JSDom which
      // is often used for testing purposes.
      // @see https://electronjs.org/docs/api/webview-tag
      webview: !0
    }, Th = function(e, t) {
      Vs(e, t), Wf(e, t), Dv(e, t, {
        registrationNameDependencies: fr,
        possibleRegistrationNames: Va
      });
    }, o2 = gn && !document.documentMode, Bd = function(e, t, a) {
      if (!ma) {
        var i = wh(a), u = wh(t);
        u !== i && (ma = !0, y("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(u), JSON.stringify(i)));
      }
    }, u2 = function(e) {
      if (!ma) {
        ma = !0;
        var t = [];
        e.forEach(function(a) {
          t.push(a);
        }), y("Extra attributes from the server: %s", t);
      }
    }, Rh = function(e, t) {
      t === !1 ? y("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : y("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
    }, s2 = function(e, t) {
      var a = e.namespaceURI === oi ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
      return a.innerHTML = t, a.innerHTML;
    };
    var k3 = /\r\n?/g, N3 = /\u0000|\uFFFD/g;
    function wh(e) {
      Ra(e);
      var t = typeof e == "string" ? e : "" + e;
      return t.replace(k3, `
`).replace(N3, "");
    }
    function _h(e, t, a, i) {
      var u = wh(t), s = wh(e);
      if (s !== u && (i && (ma || (ma = !0, y('Text content did not match. Server: "%s" Client: "%s"', s, u))), a && Jn))
        throw new Error("Text content does not match server-rendered HTML.");
    }
    function c2(e) {
      return e.nodeType === La ? e : e.ownerDocument;
    }
    function L3() {
    }
    function bh(e) {
      e.onclick = L3;
    }
    function O3(e, t, a, i, u) {
      for (var s in i)
        if (i.hasOwnProperty(s)) {
          var f = i[s];
          if (s === is)
            f && Object.freeze(f), gv(t, f);
          else if (s === Pd) {
            var p = f ? f[xh] : void 0;
            p != null && uv(t, p);
          } else if (s === as)
            if (typeof f == "string") {
              var h = e !== "textarea" || f !== "";
              h && zs(t, f);
            } else typeof f == "number" && zs(t, "" + f);
          else s === Eh || s === Wu || s === l2 || (fr.hasOwnProperty(s) ? f != null && (typeof f != "function" && Rh(s, f), s === "onScroll" && $t("scroll", t)) : f != null && $a(t, s, f, u));
        }
    }
    function M3(e, t, a, i) {
      for (var u = 0; u < t.length; u += 2) {
        var s = t[u], f = t[u + 1];
        s === is ? gv(e, f) : s === Pd ? uv(e, f) : s === as ? zs(e, f) : $a(e, s, f, i);
      }
    }
    function U3(e, t, a, i) {
      var u, s = c2(a), f, p = i;
      if (p === oi && (p = Us(e)), p === oi) {
        if (u = ci(e, t), !u && e !== e.toLowerCase() && y("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e === "script") {
          var h = s.createElement("div");
          h.innerHTML = "<script><\/script>";
          var C = h.firstChild;
          f = h.removeChild(C);
        } else if (typeof t.is == "string")
          f = s.createElement(e, {
            is: t.is
          });
        else if (f = s.createElement(e), e === "select") {
          var E = f;
          t.multiple ? E.multiple = !0 : t.size && (E.size = t.size);
        }
      } else
        f = s.createElementNS(p, e);
      return p === oi && !u && Object.prototype.toString.call(f) === "[object HTMLUnknownElement]" && !In.call(Yy, e) && (Yy[e] = !0, y("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), f;
    }
    function j3(e, t) {
      return c2(t).createTextNode(e);
    }
    function z3(e, t, a, i) {
      var u = ci(t, a);
      Th(t, a);
      var s;
      switch (t) {
        case "dialog":
          $t("cancel", e), $t("close", e), s = a;
          break;
        case "iframe":
        case "object":
        case "embed":
          $t("load", e), s = a;
          break;
        case "video":
        case "audio":
          for (var f = 0; f < Hd.length; f++)
            $t(Hd[f], e);
          s = a;
          break;
        case "source":
          $t("error", e), s = a;
          break;
        case "img":
        case "image":
        case "link":
          $t("error", e), $t("load", e), s = a;
          break;
        case "details":
          $t("toggle", e), s = a;
          break;
        case "input":
          So(e, a), s = Co(e, a), $t("invalid", e);
          break;
        case "option":
          Os(e, a), s = a;
          break;
        case "select":
          rv(e, a), s = jf(e, a), $t("invalid", e);
          break;
        case "textarea":
          av(e, a), s = Af(e, a), $t("invalid", e);
          break;
        default:
          s = a;
      }
      switch (Hs(t, s), O3(t, e, i, s, u), t) {
        case "input":
          ml(e), Eo(e, a, !1);
          break;
        case "textarea":
          ml(e), lv(e);
          break;
        case "option":
          Uf(e, a);
          break;
        case "select":
          ay(e, a);
          break;
        default:
          typeof s.onClick == "function" && bh(e);
          break;
      }
    }
    function A3(e, t, a, i, u) {
      Th(t, i);
      var s = null, f, p;
      switch (t) {
        case "input":
          f = Co(e, a), p = Co(e, i), s = [];
          break;
        case "select":
          f = jf(e, a), p = jf(e, i), s = [];
          break;
        case "textarea":
          f = Af(e, a), p = Af(e, i), s = [];
          break;
        default:
          f = a, p = i, typeof f.onClick != "function" && typeof p.onClick == "function" && bh(e);
          break;
      }
      Hs(t, p);
      var h, C, E = null;
      for (h in f)
        if (!(p.hasOwnProperty(h) || !f.hasOwnProperty(h) || f[h] == null))
          if (h === is) {
            var N = f[h];
            for (C in N)
              N.hasOwnProperty(C) && (E || (E = {}), E[C] = "");
          } else h === Pd || h === as || h === Eh || h === Wu || h === l2 || (fr.hasOwnProperty(h) ? s || (s = []) : (s = s || []).push(h, null));
      for (h in p) {
        var D = p[h], z = f != null ? f[h] : void 0;
        if (!(!p.hasOwnProperty(h) || D === z || D == null && z == null))
          if (h === is)
            if (D && Object.freeze(D), z) {
              for (C in z)
                z.hasOwnProperty(C) && (!D || !D.hasOwnProperty(C)) && (E || (E = {}), E[C] = "");
              for (C in D)
                D.hasOwnProperty(C) && z[C] !== D[C] && (E || (E = {}), E[C] = D[C]);
            } else
              E || (s || (s = []), s.push(h, E)), E = D;
          else if (h === Pd) {
            var H = D ? D[xh] : void 0, P = z ? z[xh] : void 0;
            H != null && P !== H && (s = s || []).push(h, H);
          } else h === as ? (typeof D == "string" || typeof D == "number") && (s = s || []).push(h, "" + D) : h === Eh || h === Wu || (fr.hasOwnProperty(h) ? (D != null && (typeof D != "function" && Rh(h, D), h === "onScroll" && $t("scroll", e)), !s && z !== D && (s = [])) : (s = s || []).push(h, D));
      }
      return E && (Ro(E, p[is]), (s = s || []).push(is, E)), s;
    }
    function H3(e, t, a, i, u) {
      a === "input" && u.type === "radio" && u.name != null && Mf(e, u);
      var s = ci(a, i), f = ci(a, u);
      switch (M3(e, t, s, f), a) {
        case "input":
          uu(e, u);
          break;
        case "textarea":
          iv(e, u);
          break;
        case "select":
          iy(e, u);
          break;
      }
    }
    function F3(e) {
      {
        var t = e.toLowerCase();
        return Fs.hasOwnProperty(t) && Fs[t] || null;
      }
    }
    function V3(e, t, a, i, u, s, f) {
      var p, h;
      switch (p = ci(t, a), Th(t, a), t) {
        case "dialog":
          $t("cancel", e), $t("close", e);
          break;
        case "iframe":
        case "object":
        case "embed":
          $t("load", e);
          break;
        case "video":
        case "audio":
          for (var C = 0; C < Hd.length; C++)
            $t(Hd[C], e);
          break;
        case "source":
          $t("error", e);
          break;
        case "img":
        case "image":
        case "link":
          $t("error", e), $t("load", e);
          break;
        case "details":
          $t("toggle", e);
          break;
        case "input":
          So(e, a), $t("invalid", e);
          break;
        case "option":
          Os(e, a);
          break;
        case "select":
          rv(e, a), $t("invalid", e);
          break;
        case "textarea":
          av(e, a), $t("invalid", e);
          break;
      }
      Hs(t, a);
      {
        h = /* @__PURE__ */ new Set();
        for (var E = e.attributes, N = 0; N < E.length; N++) {
          var D = E[N].name.toLowerCase();
          switch (D) {
            case "value":
              break;
            case "checked":
              break;
            case "selected":
              break;
            default:
              h.add(E[N].name);
          }
        }
      }
      var z = null;
      for (var H in a)
        if (a.hasOwnProperty(H)) {
          var P = a[H];
          if (H === as)
            typeof P == "string" ? e.textContent !== P && (a[Wu] !== !0 && _h(e.textContent, P, s, f), z = [as, P]) : typeof P == "number" && e.textContent !== "" + P && (a[Wu] !== !0 && _h(e.textContent, P, s, f), z = [as, "" + P]);
          else if (fr.hasOwnProperty(H))
            P != null && (typeof P != "function" && Rh(H, P), H === "onScroll" && $t("scroll", e));
          else if (f && // Convince Flow we've calculated it (it's DEV-only in this method.)
          typeof p == "boolean") {
            var le = void 0, De = p && kn ? null : jr(H);
            if (a[Wu] !== !0) {
              if (!(H === Eh || H === Wu || // Controlled attributes are not validated
              // TODO: Only ignore them on controlled tags.
              H === "value" || H === "checked" || H === "selected")) {
                if (H === Pd) {
                  var Ee = e.innerHTML, rt = P ? P[xh] : void 0;
                  if (rt != null) {
                    var Je = s2(e, rt);
                    Je !== Ee && Bd(H, Ee, Je);
                  }
                } else if (H === is) {
                  if (h.delete(H), o2) {
                    var M = py(P);
                    le = e.getAttribute("style"), M !== le && Bd(H, le, M);
                  }
                } else if (p && !kn)
                  h.delete(H.toLowerCase()), le = ru(e, H, P), P !== le && Bd(H, le, P);
                else if (!Zt(H, De, p) && !_t(H, P, De, p)) {
                  var B = !1;
                  if (De !== null)
                    h.delete(De.attributeName), le = dl(e, H, P, De);
                  else {
                    var U = i;
                    if (U === oi && (U = Us(t)), U === oi)
                      h.delete(H.toLowerCase());
                    else {
                      var X = F3(H);
                      X !== null && X !== H && (B = !0, h.delete(X)), h.delete(H);
                    }
                    le = ru(e, H, P);
                  }
                  var de = kn;
                  !de && P !== le && !B && Bd(H, le, P);
                }
              }
            }
          }
        }
      switch (f && // $FlowFixMe - Should be inferred as not undefined.
      h.size > 0 && a[Wu] !== !0 && u2(h), t) {
        case "input":
          ml(e), Eo(e, a, !0);
          break;
        case "textarea":
          ml(e), lv(e);
          break;
        case "select":
        case "option":
          break;
        default:
          typeof a.onClick == "function" && bh(e);
          break;
      }
      return z;
    }
    function P3(e, t, a) {
      var i = e.nodeValue !== t;
      return i;
    }
    function Wy(e, t) {
      {
        if (ma)
          return;
        ma = !0, y("Did not expect server HTML to contain a <%s> in <%s>.", t.nodeName.toLowerCase(), e.nodeName.toLowerCase());
      }
    }
    function Qy(e, t) {
      {
        if (ma)
          return;
        ma = !0, y('Did not expect server HTML to contain the text node "%s" in <%s>.', t.nodeValue, e.nodeName.toLowerCase());
      }
    }
    function Gy(e, t, a) {
      {
        if (ma)
          return;
        ma = !0, y("Expected server HTML to contain a matching <%s> in <%s>.", t, e.nodeName.toLowerCase());
      }
    }
    function Zy(e, t) {
      {
        if (t === "" || ma)
          return;
        ma = !0, y('Expected server HTML to contain a matching text node for "%s" in <%s>.', t, e.nodeName.toLowerCase());
      }
    }
    function B3(e, t, a) {
      switch (t) {
        case "input":
          Jp(e, a);
          return;
        case "textarea":
          Hf(e, a);
          return;
        case "select":
          ly(e, a);
          return;
      }
    }
    var $d = function() {
    }, Id = function() {
    };
    {
      var $3 = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], f2 = [
        "applet",
        "caption",
        "html",
        "table",
        "td",
        "th",
        "marquee",
        "object",
        "template",
        // https://html.spec.whatwg.org/multipage/syntax.html#html-integration-point
        // TODO: Distinguish by namespace here -- for <title>, including it here
        // errs on the side of fewer warnings
        "foreignObject",
        "desc",
        "title"
      ], I3 = f2.concat(["button"]), Y3 = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], d2 = {
        current: null,
        formTag: null,
        aTagInScope: null,
        buttonTagInScope: null,
        nobrTagInScope: null,
        pTagInButtonScope: null,
        listItemTagAutoclosing: null,
        dlItemTagAutoclosing: null
      };
      Id = function(e, t) {
        var a = qe({}, e || d2), i = {
          tag: t
        };
        return f2.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), I3.indexOf(t) !== -1 && (a.pTagInButtonScope = null), $3.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = i, t === "form" && (a.formTag = i), t === "a" && (a.aTagInScope = i), t === "button" && (a.buttonTagInScope = i), t === "nobr" && (a.nobrTagInScope = i), t === "p" && (a.pTagInButtonScope = i), t === "li" && (a.listItemTagAutoclosing = i), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = i), a;
      };
      var W3 = function(e, t) {
        switch (t) {
          case "select":
            return e === "option" || e === "optgroup" || e === "#text";
          case "optgroup":
            return e === "option" || e === "#text";
          case "option":
            return e === "#text";
          case "tr":
            return e === "th" || e === "td" || e === "style" || e === "script" || e === "template";
          case "tbody":
          case "thead":
          case "tfoot":
            return e === "tr" || e === "style" || e === "script" || e === "template";
          case "colgroup":
            return e === "col" || e === "template";
          case "table":
            return e === "caption" || e === "colgroup" || e === "tbody" || e === "tfoot" || e === "thead" || e === "style" || e === "script" || e === "template";
          case "head":
            return e === "base" || e === "basefont" || e === "bgsound" || e === "link" || e === "meta" || e === "title" || e === "noscript" || e === "noframes" || e === "style" || e === "script" || e === "template";
          case "html":
            return e === "head" || e === "body" || e === "frameset";
          case "frameset":
            return e === "frame";
          case "#document":
            return e === "html";
        }
        switch (e) {
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t !== "h1" && t !== "h2" && t !== "h3" && t !== "h4" && t !== "h5" && t !== "h6";
          case "rp":
          case "rt":
            return Y3.indexOf(t) === -1;
          case "body":
          case "caption":
          case "col":
          case "colgroup":
          case "frameset":
          case "frame":
          case "head":
          case "html":
          case "tbody":
          case "td":
          case "tfoot":
          case "th":
          case "thead":
          case "tr":
            return t == null;
        }
        return !0;
      }, Q3 = function(e, t) {
        switch (e) {
          case "address":
          case "article":
          case "aside":
          case "blockquote":
          case "center":
          case "details":
          case "dialog":
          case "dir":
          case "div":
          case "dl":
          case "fieldset":
          case "figcaption":
          case "figure":
          case "footer":
          case "header":
          case "hgroup":
          case "main":
          case "menu":
          case "nav":
          case "ol":
          case "p":
          case "section":
          case "summary":
          case "ul":
          case "pre":
          case "listing":
          case "table":
          case "hr":
          case "xmp":
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t.pTagInButtonScope;
          case "form":
            return t.formTag || t.pTagInButtonScope;
          case "li":
            return t.listItemTagAutoclosing;
          case "dd":
          case "dt":
            return t.dlItemTagAutoclosing;
          case "button":
            return t.buttonTagInScope;
          case "a":
            return t.aTagInScope;
          case "nobr":
            return t.nobrTagInScope;
        }
        return null;
      }, p2 = {};
      $d = function(e, t, a) {
        a = a || d2;
        var i = a.current, u = i && i.tag;
        t != null && (e != null && y("validateDOMNesting: when childText is passed, childTag should be null"), e = "#text");
        var s = W3(e, u) ? null : i, f = s ? null : Q3(e, a), p = s || f;
        if (p) {
          var h = p.tag, C = !!s + "|" + e + "|" + h;
          if (!p2[C]) {
            p2[C] = !0;
            var E = e, N = "";
            if (e === "#text" ? /\S/.test(t) ? E = "Text nodes" : (E = "Whitespace text nodes", N = " Make sure you don't have any extra whitespace between tags on each line of your source code.") : E = "<" + e + ">", s) {
              var D = "";
              h === "table" && e === "tr" && (D += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), y("validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s", E, h, N, D);
            } else
              y("validateDOMNesting(...): %s cannot appear as a descendant of <%s>.", E, h);
          }
        }
      };
    }
    var Dh = "suppressHydrationWarning", kh = "$", Nh = "/$", Yd = "$?", Wd = "$!", G3 = "style", qy = null, Xy = null;
    function Z3(e) {
      var t, a, i = e.nodeType;
      switch (i) {
        case La:
        case yl: {
          t = i === La ? "#document" : "#fragment";
          var u = e.documentElement;
          a = u ? u.namespaceURI : Vf(null, "");
          break;
        }
        default: {
          var s = i === nn ? e.parentNode : e, f = s.namespaceURI || null;
          t = s.tagName, a = Vf(f, t);
          break;
        }
      }
      {
        var p = t.toLowerCase(), h = Id(null, p);
        return {
          namespace: a,
          ancestorInfo: h
        };
      }
    }
    function q3(e, t, a) {
      {
        var i = e, u = Vf(i.namespace, t), s = Id(i.ancestorInfo, t);
        return {
          namespace: u,
          ancestorInfo: s
        };
      }
    }
    function vT(e) {
      return e;
    }
    function X3(e) {
      qy = Fu(), Xy = f3();
      var t = null;
      return wr(!1), t;
    }
    function K3(e) {
      d3(Xy), wr(qy), qy = null, Xy = null;
    }
    function J3(e, t, a, i, u) {
      var s;
      {
        var f = i;
        if ($d(e, null, f.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
          var p = "" + t.children, h = Id(f.ancestorInfo, e);
          $d(null, p, h);
        }
        s = f.namespace;
      }
      var C = U3(e, t, a, s);
      return Zd(u, C), i1(C, t), C;
    }
    function e5(e, t) {
      e.appendChild(t);
    }
    function t5(e, t, a, i, u) {
      switch (z3(e, t, a, i), t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          return !!a.autoFocus;
        case "img":
          return !0;
        default:
          return !1;
      }
    }
    function n5(e, t, a, i, u, s) {
      {
        var f = s;
        if (typeof i.children != typeof a.children && (typeof i.children == "string" || typeof i.children == "number")) {
          var p = "" + i.children, h = Id(f.ancestorInfo, t);
          $d(null, p, h);
        }
      }
      return A3(e, t, a, i);
    }
    function Ky(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function r5(e, t, a, i) {
      {
        var u = a;
        $d(null, e, u.ancestorInfo);
      }
      var s = j3(e, t);
      return Zd(i, s), s;
    }
    function a5() {
      var e = window.event;
      return e === void 0 ? Ga : kc(e.type);
    }
    var Jy = typeof setTimeout == "function" ? setTimeout : void 0, i5 = typeof clearTimeout == "function" ? clearTimeout : void 0, e1 = -1, v2 = typeof Promise == "function" ? Promise : void 0, l5 = typeof queueMicrotask == "function" ? queueMicrotask : typeof v2 < "u" ? function(e) {
      return v2.resolve(null).then(e).catch(u5);
    } : Jy;
    function u5(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function o5(e, t, a, i) {
      switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && e.focus();
          return;
        case "img": {
          a.src && (e.src = a.src);
          return;
        }
      }
    }
    function s5(e, t, a, i, u, s) {
      H3(e, t, a, i, u), i1(e, u);
    }
    function h2(e) {
      zs(e, "");
    }
    function c5(e, t, a) {
      e.nodeValue = a;
    }
    function f5(e, t) {
      e.appendChild(t);
    }
    function d5(e, t) {
      var a;
      e.nodeType === nn ? (a = e.parentNode, a.insertBefore(t, e)) : (a = e, a.appendChild(t));
      var i = e._reactRootContainer;
      i == null && a.onclick === null && bh(a);
    }
    function p5(e, t, a) {
      e.insertBefore(t, a);
    }
    function v5(e, t, a) {
      e.nodeType === nn ? e.parentNode.insertBefore(t, a) : e.insertBefore(t, a);
    }
    function h5(e, t) {
      e.removeChild(t);
    }
    function m5(e, t) {
      e.nodeType === nn ? e.parentNode.removeChild(t) : e.removeChild(t);
    }
    function t1(e, t) {
      var a = t, i = 0;
      do {
        var u = a.nextSibling;
        if (e.removeChild(a), u && u.nodeType === nn) {
          var s = u.data;
          if (s === Nh)
            if (i === 0) {
              e.removeChild(u), Wt(t);
              return;
            } else
              i--;
          else (s === kh || s === Yd || s === Wd) && i++;
        }
        a = u;
      } while (a);
      Wt(t);
    }
    function y5(e, t) {
      e.nodeType === nn ? t1(e.parentNode, t) : e.nodeType === hr && t1(e, t), Wt(e);
    }
    function g5(e) {
      e = e;
      var t = e.style;
      typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    function C5(e) {
      e.nodeValue = "";
    }
    function S5(e, t) {
      e = e;
      var a = t[G3], i = a != null && a.hasOwnProperty("display") ? a.display : null;
      e.style.display = As("display", i);
    }
    function E5(e, t) {
      e.nodeValue = t;
    }
    function x5(e) {
      e.nodeType === hr ? e.textContent = "" : e.nodeType === La && e.documentElement && e.removeChild(e.documentElement);
    }
    function T5(e, t, a) {
      return e.nodeType !== hr || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
    }
    function R5(e, t) {
      return t === "" || e.nodeType !== si ? null : e;
    }
    function w5(e) {
      return e.nodeType !== nn ? null : e;
    }
    function m2(e) {
      return e.data === Yd;
    }
    function n1(e) {
      return e.data === Wd;
    }
    function _5(e) {
      var t = e.nextSibling && e.nextSibling.dataset, a, i, u;
      return t && (a = t.dgst, i = t.msg, u = t.stck), {
        message: i,
        digest: a,
        stack: u
      };
    }
    function b5(e, t) {
      e._reactRetry = t;
    }
    function Lh(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === hr || t === si)
          break;
        if (t === nn) {
          var a = e.data;
          if (a === kh || a === Wd || a === Yd)
            break;
          if (a === Nh)
            return null;
        }
      }
      return e;
    }
    function Qd(e) {
      return Lh(e.nextSibling);
    }
    function D5(e) {
      return Lh(e.firstChild);
    }
    function k5(e) {
      return Lh(e.firstChild);
    }
    function N5(e) {
      return Lh(e.nextSibling);
    }
    function L5(e, t, a, i, u, s, f) {
      Zd(s, e), i1(e, a);
      var p;
      {
        var h = u;
        p = h.namespace;
      }
      var C = (s.mode & Se) !== ge;
      return V3(e, t, a, p, i, C, f);
    }
    function O5(e, t, a, i) {
      return Zd(a, e), a.mode & Se, P3(e, t);
    }
    function M5(e, t) {
      Zd(t, e);
    }
    function U5(e) {
      for (var t = e.nextSibling, a = 0; t; ) {
        if (t.nodeType === nn) {
          var i = t.data;
          if (i === Nh) {
            if (a === 0)
              return Qd(t);
            a--;
          } else (i === kh || i === Wd || i === Yd) && a++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function y2(e) {
      for (var t = e.previousSibling, a = 0; t; ) {
        if (t.nodeType === nn) {
          var i = t.data;
          if (i === kh || i === Wd || i === Yd) {
            if (a === 0)
              return t;
            a--;
          } else i === Nh && a++;
        }
        t = t.previousSibling;
      }
      return null;
    }
    function j5(e) {
      Wt(e);
    }
    function z5(e) {
      Wt(e);
    }
    function A5(e) {
      return e !== "head" && e !== "body";
    }
    function H5(e, t, a, i) {
      var u = !0;
      _h(t.nodeValue, a, i, u);
    }
    function F5(e, t, a, i, u, s) {
      if (t[Dh] !== !0) {
        var f = !0;
        _h(i.nodeValue, u, s, f);
      }
    }
    function V5(e, t) {
      t.nodeType === hr ? Wy(e, t) : t.nodeType === nn || Qy(e, t);
    }
    function P5(e, t) {
      {
        var a = e.parentNode;
        a !== null && (t.nodeType === hr ? Wy(a, t) : t.nodeType === nn || Qy(a, t));
      }
    }
    function B5(e, t, a, i, u) {
      (u || t[Dh] !== !0) && (i.nodeType === hr ? Wy(a, i) : i.nodeType === nn || Qy(a, i));
    }
    function $5(e, t, a) {
      Gy(e, t);
    }
    function I5(e, t) {
      Zy(e, t);
    }
    function Y5(e, t, a) {
      {
        var i = e.parentNode;
        i !== null && Gy(i, t);
      }
    }
    function W5(e, t) {
      {
        var a = e.parentNode;
        a !== null && Zy(a, t);
      }
    }
    function Q5(e, t, a, i, u, s) {
      (s || t[Dh] !== !0) && Gy(a, i);
    }
    function G5(e, t, a, i, u) {
      (u || t[Dh] !== !0) && Zy(a, i);
    }
    function Z5(e) {
      y("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.nodeName.toLowerCase());
    }
    function q5(e) {
      Fd(e);
    }
    var Qc = Math.random().toString(36).slice(2), Gc = "__reactFiber$" + Qc, r1 = "__reactProps$" + Qc, Gd = "__reactContainer$" + Qc, a1 = "__reactEvents$" + Qc, X5 = "__reactListeners$" + Qc, K5 = "__reactHandles$" + Qc;
    function J5(e) {
      delete e[Gc], delete e[r1], delete e[a1], delete e[X5], delete e[K5];
    }
    function Zd(e, t) {
      t[Gc] = e;
    }
    function Oh(e, t) {
      t[Gd] = e;
    }
    function g2(e) {
      e[Gd] = null;
    }
    function qd(e) {
      return !!e[Gd];
    }
    function ls(e) {
      var t = e[Gc];
      if (t)
        return t;
      for (var a = e.parentNode; a; ) {
        if (t = a[Gd] || a[Gc], t) {
          var i = t.alternate;
          if (t.child !== null || i !== null && i.child !== null)
            for (var u = y2(e); u !== null; ) {
              var s = u[Gc];
              if (s)
                return s;
              u = y2(u);
            }
          return t;
        }
        e = a, a = e.parentNode;
      }
      return null;
    }
    function Qu(e) {
      var t = e[Gc] || e[Gd];
      return t && (t.tag === oe || t.tag === be || t.tag === Ye || t.tag === I) ? t : null;
    }
    function Zc(e) {
      if (e.tag === oe || e.tag === be)
        return e.stateNode;
      throw new Error("getNodeFromInstance: Invalid argument.");
    }
    function Mh(e) {
      return e[r1] || null;
    }
    function i1(e, t) {
      e[r1] = t;
    }
    function eE(e) {
      var t = e[a1];
      return t === void 0 && (t = e[a1] = /* @__PURE__ */ new Set()), t;
    }
    var C2 = {}, S2 = g.ReactDebugCurrentFrame;
    function Uh(e) {
      if (e) {
        var t = e._owner, a = po(e.type, e._source, t ? t.type : null);
        S2.setExtraStackFrame(a);
      } else
        S2.setExtraStackFrame(null);
    }
    function xi(e, t, a, i, u) {
      {
        var s = Function.call.bind(In);
        for (var f in e)
          if (s(e, f)) {
            var p = void 0;
            try {
              if (typeof e[f] != "function") {
                var h = Error((i || "React class") + ": " + a + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw h.name = "Invariant Violation", h;
              }
              p = e[f](t, f, i, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (C) {
              p = C;
            }
            p && !(p instanceof Error) && (Uh(u), y("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", i || "React class", a, f, typeof p), Uh(null)), p instanceof Error && !(p.message in C2) && (C2[p.message] = !0, Uh(u), y("Failed %s type: %s", a, p.message), Uh(null));
          }
      }
    }
    var l1 = [], jh;
    jh = [];
    var Pl = -1;
    function Gu(e) {
      return {
        current: e
      };
    }
    function _r(e, t) {
      if (Pl < 0) {
        y("Unexpected pop.");
        return;
      }
      t !== jh[Pl] && y("Unexpected Fiber popped."), e.current = l1[Pl], l1[Pl] = null, jh[Pl] = null, Pl--;
    }
    function br(e, t, a) {
      Pl++, l1[Pl] = e.current, jh[Pl] = a, e.current = t;
    }
    var u1;
    u1 = {};
    var ja = {};
    Object.freeze(ja);
    var Bl = Gu(ja), el = Gu(!1), o1 = ja;
    function qc(e, t, a) {
      return a && tl(t) ? o1 : Bl.current;
    }
    function E2(e, t, a) {
      {
        var i = e.stateNode;
        i.__reactInternalMemoizedUnmaskedChildContext = t, i.__reactInternalMemoizedMaskedChildContext = a;
      }
    }
    function Xc(e, t) {
      {
        var a = e.type, i = a.contextTypes;
        if (!i)
          return ja;
        var u = e.stateNode;
        if (u && u.__reactInternalMemoizedUnmaskedChildContext === t)
          return u.__reactInternalMemoizedMaskedChildContext;
        var s = {};
        for (var f in i)
          s[f] = t[f];
        {
          var p = Pe(e) || "Unknown";
          xi(i, s, "context", p);
        }
        return u && E2(e, t, s), s;
      }
    }
    function zh() {
      return el.current;
    }
    function tl(e) {
      {
        var t = e.childContextTypes;
        return t != null;
      }
    }
    function Ah(e) {
      _r(el, e), _r(Bl, e);
    }
    function s1(e) {
      _r(el, e), _r(Bl, e);
    }
    function x2(e, t, a) {
      {
        if (Bl.current !== ja)
          throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        br(Bl, t, e), br(el, a, e);
      }
    }
    function T2(e, t, a) {
      {
        var i = e.stateNode, u = t.childContextTypes;
        if (typeof i.getChildContext != "function") {
          {
            var s = Pe(e) || "Unknown";
            u1[s] || (u1[s] = !0, y("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", s, s));
          }
          return a;
        }
        var f = i.getChildContext();
        for (var p in f)
          if (!(p in u))
            throw new Error((Pe(e) || "Unknown") + '.getChildContext(): key "' + p + '" is not defined in childContextTypes.');
        {
          var h = Pe(e) || "Unknown";
          xi(u, f, "child context", h);
        }
        return qe({}, a, f);
      }
    }
    function Hh(e) {
      {
        var t = e.stateNode, a = t && t.__reactInternalMemoizedMergedChildContext || ja;
        return o1 = Bl.current, br(Bl, a, e), br(el, el.current, e), !0;
      }
    }
    function R2(e, t, a) {
      {
        var i = e.stateNode;
        if (!i)
          throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (a) {
          var u = T2(e, t, o1);
          i.__reactInternalMemoizedMergedChildContext = u, _r(el, e), _r(Bl, e), br(Bl, u, e), br(el, a, e);
        } else
          _r(el, e), br(el, a, e);
      }
    }
    function tE(e) {
      {
        if (!ld(e) || e.tag !== F)
          throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
        var t = e;
        do {
          switch (t.tag) {
            case I:
              return t.stateNode.context;
            case F: {
              var a = t.type;
              if (tl(a))
                return t.stateNode.__reactInternalMemoizedMergedChildContext;
              break;
            }
          }
          t = t.return;
        } while (t !== null);
        throw new Error("Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    var Zu = 0, Fh = 1, $l = null, c1 = !1, f1 = !1;
    function w2(e) {
      $l === null ? $l = [e] : $l.push(e);
    }
    function nE(e) {
      c1 = !0, w2(e);
    }
    function _2() {
      c1 && qu();
    }
    function qu() {
      if (!f1 && $l !== null) {
        f1 = !0;
        var e = 0, t = fa();
        try {
          var a = !0, i = $l;
          for (Yt(Xt); e < i.length; e++) {
            var u = i[e];
            do
              u = u(a);
            while (u !== null);
          }
          $l = null, c1 = !1;
        } catch (s) {
          throw $l !== null && ($l = $l.slice(e + 1)), Gs(qs, qu), s;
        } finally {
          Yt(t), f1 = !1;
        }
      }
      return null;
    }
    var Kc = [], Jc = 0, Vh = null, Ph = 0, Ka = [], Ja = 0, us = null, Il = 1, Yl = "";
    function rE(e) {
      return ss(), (e.flags & rd) !== _e;
    }
    function aE(e) {
      return ss(), Ph;
    }
    function iE() {
      var e = Yl, t = Il, a = t & ~lE(t);
      return a.toString(32) + e;
    }
    function os(e, t) {
      ss(), Kc[Jc++] = Ph, Kc[Jc++] = Vh, Vh = e, Ph = t;
    }
    function b2(e, t, a) {
      ss(), Ka[Ja++] = Il, Ka[Ja++] = Yl, Ka[Ja++] = us, us = e;
      var i = Il, u = Yl, s = Bh(i) - 1, f = i & ~(1 << s), p = a + 1, h = Bh(t) + s;
      if (h > 30) {
        var C = s - s % 5, E = (1 << C) - 1, N = (f & E).toString(32), D = f >> C, z = s - C, H = Bh(t) + z, P = p << z, le = P | D, De = N + u;
        Il = 1 << H | le, Yl = De;
      } else {
        var Ee = p << s, rt = Ee | f, Je = u;
        Il = 1 << h | rt, Yl = Je;
      }
    }
    function d1(e) {
      ss();
      var t = e.return;
      if (t !== null) {
        var a = 1, i = 0;
        os(e, a), b2(e, a, i);
      }
    }
    function Bh(e) {
      return 32 - xu(e);
    }
    function lE(e) {
      return 1 << Bh(e) - 1;
    }
    function p1(e) {
      for (; e === Vh; )
        Vh = Kc[--Jc], Kc[Jc] = null, Ph = Kc[--Jc], Kc[Jc] = null;
      for (; e === us; )
        us = Ka[--Ja], Ka[Ja] = null, Yl = Ka[--Ja], Ka[Ja] = null, Il = Ka[--Ja], Ka[Ja] = null;
    }
    function uE() {
      return ss(), us !== null ? {
        id: Il,
        overflow: Yl
      } : null;
    }
    function oE(e, t) {
      ss(), Ka[Ja++] = Il, Ka[Ja++] = Yl, Ka[Ja++] = us, Il = t.id, Yl = t.overflow, us = e;
    }
    function ss() {
      rr() || y("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var nr = null, ei = null, Ti = !1, cs = !1, Xu = null;
    function sE() {
      Ti && y("We should not be hydrating here. This is a bug in React. Please file a bug.");
    }
    function D2() {
      cs = !0;
    }
    function cE() {
      return cs;
    }
    function fE(e) {
      var t = e.stateNode.containerInfo;
      return ei = k5(t), nr = e, Ti = !0, Xu = null, cs = !1, !0;
    }
    function dE(e, t, a) {
      return ei = N5(t), nr = e, Ti = !0, Xu = null, cs = !1, a !== null && oE(e, a), !0;
    }
    function k2(e, t) {
      switch (e.tag) {
        case I: {
          V5(e.stateNode.containerInfo, t);
          break;
        }
        case oe: {
          var a = (e.mode & Se) !== ge;
          B5(
            e.type,
            e.memoizedProps,
            e.stateNode,
            t,
            // TODO: Delete this argument when we remove the legacy root API.
            a
          );
          break;
        }
        case Ye: {
          var i = e.memoizedState;
          i.dehydrated !== null && P5(i.dehydrated, t);
          break;
        }
      }
    }
    function N2(e, t) {
      k2(e, t);
      var a = m8();
      a.stateNode = t, a.return = e;
      var i = e.deletions;
      i === null ? (e.deletions = [a], e.flags |= ft) : i.push(a);
    }
    function v1(e, t) {
      {
        if (cs)
          return;
        switch (e.tag) {
          case I: {
            var a = e.stateNode.containerInfo;
            switch (t.tag) {
              case oe:
                var i = t.type;
                t.pendingProps, $5(a, i);
                break;
              case be:
                var u = t.pendingProps;
                I5(a, u);
                break;
            }
            break;
          }
          case oe: {
            var s = e.type, f = e.memoizedProps, p = e.stateNode;
            switch (t.tag) {
              case oe: {
                var h = t.type, C = t.pendingProps, E = (e.mode & Se) !== ge;
                Q5(
                  s,
                  f,
                  p,
                  h,
                  C,
                  // TODO: Delete this argument when we remove the legacy root API.
                  E
                );
                break;
              }
              case be: {
                var N = t.pendingProps, D = (e.mode & Se) !== ge;
                G5(
                  s,
                  f,
                  p,
                  N,
                  // TODO: Delete this argument when we remove the legacy root API.
                  D
                );
                break;
              }
            }
            break;
          }
          case Ye: {
            var z = e.memoizedState, H = z.dehydrated;
            if (H !== null) switch (t.tag) {
              case oe:
                var P = t.type;
                t.pendingProps, Y5(H, P);
                break;
              case be:
                var le = t.pendingProps;
                W5(H, le);
                break;
            }
            break;
          }
          default:
            return;
        }
      }
    }
    function L2(e, t) {
      t.flags = t.flags & ~ia | Ot, v1(e, t);
    }
    function O2(e, t) {
      switch (e.tag) {
        case oe: {
          var a = e.type;
          e.pendingProps;
          var i = T5(t, a);
          return i !== null ? (e.stateNode = i, nr = e, ei = D5(i), !0) : !1;
        }
        case be: {
          var u = e.pendingProps, s = R5(t, u);
          return s !== null ? (e.stateNode = s, nr = e, ei = null, !0) : !1;
        }
        case Ye: {
          var f = w5(t);
          if (f !== null) {
            var p = {
              dehydrated: f,
              treeContext: uE(),
              retryLane: qn
            };
            e.memoizedState = p;
            var h = y8(f);
            return h.return = e, e.child = h, nr = e, ei = null, !0;
          }
          return !1;
        }
        default:
          return !1;
      }
    }
    function h1(e) {
      return (e.mode & Se) !== ge && (e.flags & je) === _e;
    }
    function m1(e) {
      throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
    }
    function y1(e) {
      if (Ti) {
        var t = ei;
        if (!t) {
          h1(e) && (v1(nr, e), m1()), L2(nr, e), Ti = !1, nr = e;
          return;
        }
        var a = t;
        if (!O2(e, t)) {
          h1(e) && (v1(nr, e), m1()), t = Qd(a);
          var i = nr;
          if (!t || !O2(e, t)) {
            L2(nr, e), Ti = !1, nr = e;
            return;
          }
          N2(i, a);
        }
      }
    }
    function pE(e, t, a) {
      var i = e.stateNode, u = !cs, s = L5(i, e.type, e.memoizedProps, t, a, e, u);
      return e.updateQueue = s, s !== null;
    }
    function vE(e) {
      var t = e.stateNode, a = e.memoizedProps, i = O5(t, a, e);
      if (i) {
        var u = nr;
        if (u !== null)
          switch (u.tag) {
            case I: {
              var s = u.stateNode.containerInfo, f = (u.mode & Se) !== ge;
              H5(
                s,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                f
              );
              break;
            }
            case oe: {
              var p = u.type, h = u.memoizedProps, C = u.stateNode, E = (u.mode & Se) !== ge;
              F5(
                p,
                h,
                C,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                E
              );
              break;
            }
          }
      }
      return i;
    }
    function hE(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      M5(a, e);
    }
    function mE(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      return U5(a);
    }
    function M2(e) {
      for (var t = e.return; t !== null && t.tag !== oe && t.tag !== I && t.tag !== Ye; )
        t = t.return;
      nr = t;
    }
    function $h(e) {
      if (e !== nr)
        return !1;
      if (!Ti)
        return M2(e), Ti = !0, !1;
      if (e.tag !== I && (e.tag !== oe || A5(e.type) && !Ky(e.type, e.memoizedProps))) {
        var t = ei;
        if (t)
          if (h1(e))
            U2(e), m1();
          else
            for (; t; )
              N2(e, t), t = Qd(t);
      }
      return M2(e), e.tag === Ye ? ei = mE(e) : ei = nr ? Qd(e.stateNode) : null, !0;
    }
    function yE() {
      return Ti && ei !== null;
    }
    function U2(e) {
      for (var t = ei; t; )
        k2(e, t), t = Qd(t);
    }
    function ef() {
      nr = null, ei = null, Ti = !1, cs = !1;
    }
    function j2() {
      Xu !== null && (DC(Xu), Xu = null);
    }
    function rr() {
      return Ti;
    }
    function g1(e) {
      Xu === null ? Xu = [e] : Xu.push(e);
    }
    var gE = g.ReactCurrentBatchConfig, CE = null;
    function SE() {
      return gE.transition;
    }
    var Ri = {
      recordUnsafeLifecycleWarnings: function(e, t) {
      },
      flushPendingUnsafeLifecycleWarnings: function() {
      },
      recordLegacyContextWarning: function(e, t) {
      },
      flushLegacyContextWarning: function() {
      },
      discardPendingWarnings: function() {
      }
    };
    {
      var EE = function(e) {
        for (var t = null, a = e; a !== null; )
          a.mode & Xe && (t = a), a = a.return;
        return t;
      }, fs = function(e) {
        var t = [];
        return e.forEach(function(a) {
          t.push(a);
        }), t.sort().join(", ");
      }, Xd = [], Kd = [], Jd = [], ep = [], tp = [], np = [], ds = /* @__PURE__ */ new Set();
      Ri.recordUnsafeLifecycleWarnings = function(e, t) {
        ds.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
        t.componentWillMount.__suppressDeprecationWarning !== !0 && Xd.push(e), e.mode & Xe && typeof t.UNSAFE_componentWillMount == "function" && Kd.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && Jd.push(e), e.mode & Xe && typeof t.UNSAFE_componentWillReceiveProps == "function" && ep.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && tp.push(e), e.mode & Xe && typeof t.UNSAFE_componentWillUpdate == "function" && np.push(e));
      }, Ri.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        Xd.length > 0 && (Xd.forEach(function(D) {
          e.add(Pe(D) || "Component"), ds.add(D.type);
        }), Xd = []);
        var t = /* @__PURE__ */ new Set();
        Kd.length > 0 && (Kd.forEach(function(D) {
          t.add(Pe(D) || "Component"), ds.add(D.type);
        }), Kd = []);
        var a = /* @__PURE__ */ new Set();
        Jd.length > 0 && (Jd.forEach(function(D) {
          a.add(Pe(D) || "Component"), ds.add(D.type);
        }), Jd = []);
        var i = /* @__PURE__ */ new Set();
        ep.length > 0 && (ep.forEach(function(D) {
          i.add(Pe(D) || "Component"), ds.add(D.type);
        }), ep = []);
        var u = /* @__PURE__ */ new Set();
        tp.length > 0 && (tp.forEach(function(D) {
          u.add(Pe(D) || "Component"), ds.add(D.type);
        }), tp = []);
        var s = /* @__PURE__ */ new Set();
        if (np.length > 0 && (np.forEach(function(D) {
          s.add(Pe(D) || "Component"), ds.add(D.type);
        }), np = []), t.size > 0) {
          var f = fs(t);
          y(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`, f);
        }
        if (i.size > 0) {
          var p = fs(i);
          y(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state

Please update the following components: %s`, p);
        }
        if (s.size > 0) {
          var h = fs(s);
          y(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`, h);
        }
        if (e.size > 0) {
          var C = fs(e);
          L(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, C);
        }
        if (a.size > 0) {
          var E = fs(a);
          L(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, E);
        }
        if (u.size > 0) {
          var N = fs(u);
          L(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, N);
        }
      };
      var Ih = /* @__PURE__ */ new Map(), z2 = /* @__PURE__ */ new Set();
      Ri.recordLegacyContextWarning = function(e, t) {
        var a = EE(e);
        if (a === null) {
          y("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!z2.has(e.type)) {
          var i = Ih.get(a);
          (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i === void 0 && (i = [], Ih.set(a, i)), i.push(e));
        }
      }, Ri.flushLegacyContextWarning = function() {
        Ih.forEach(function(e, t) {
          if (e.length !== 0) {
            var a = e[0], i = /* @__PURE__ */ new Set();
            e.forEach(function(s) {
              i.add(Pe(s) || "Component"), z2.add(s.type);
            });
            var u = fs(i);
            try {
              St(a), y(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`, u);
            } finally {
              on();
            }
          }
        });
      }, Ri.discardPendingWarnings = function() {
        Xd = [], Kd = [], Jd = [], ep = [], tp = [], np = [], Ih = /* @__PURE__ */ new Map();
      };
    }
    var C1, S1, E1, x1, T1, A2 = function(e, t) {
    };
    C1 = !1, S1 = !1, E1 = {}, x1 = {}, T1 = {}, A2 = function(e, t) {
      if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
        if (typeof e._store != "object")
          throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        e._store.validated = !0;
        var a = Pe(t) || "Component";
        x1[a] || (x1[a] = !0, y('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
      }
    };
    function xE(e) {
      return e.prototype && e.prototype.isReactComponent;
    }
    function rp(e, t, a) {
      var i = a.ref;
      if (i !== null && typeof i != "function" && typeof i != "object") {
        if ((e.mode & Xe || er) && // We warn in ReactElement.js if owner and self are equal for string refs
        // because these cannot be automatically converted to an arrow function
        // using a codemod. Therefore, we don't have to warn about string refs again.
        !(a._owner && a._self && a._owner.stateNode !== a._self) && // Will already throw with "Function components cannot have string refs"
        !(a._owner && a._owner.tag !== F) && // Will already warn with "Function components cannot be given refs"
        !(typeof a.type == "function" && !xE(a.type)) && // Will already throw with "Element ref was specified as a string (someStringRef) but no owner was set"
        a._owner) {
          var u = Pe(e) || "Component";
          E1[u] || (y('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', u, i), E1[u] = !0);
        }
        if (a._owner) {
          var s = a._owner, f;
          if (s) {
            var p = s;
            if (p.tag !== F)
              throw new Error("Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref");
            f = p.stateNode;
          }
          if (!f)
            throw new Error("Missing owner for string ref " + i + ". This error is likely caused by a bug in React. Please file an issue.");
          var h = f;
          ii(i, "ref");
          var C = "" + i;
          if (t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === C)
            return t.ref;
          var E = function(N) {
            var D = h.refs;
            N === null ? delete D[C] : D[C] = N;
          };
          return E._stringRef = C, E;
        } else {
          if (typeof i != "string")
            throw new Error("Expected ref to be a function, a string, an object returned by React.createRef(), or null.");
          if (!a._owner)
            throw new Error("Element ref was specified as a string (" + i + `) but no owner was set. This could happen for one of the following reasons:
1. You may be adding a ref to a function component
2. You may be adding a ref to a component that was not created inside a component's render method
3. You have multiple copies of React loaded
See https://reactjs.org/link/refs-must-have-owner for more information.`);
        }
      }
      return i;
    }
    function Yh(e, t) {
      var a = Object.prototype.toString.call(t);
      throw new Error("Objects are not valid as a React child (found: " + (a === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : a) + "). If you meant to render a collection of children, use an array instead.");
    }
    function Wh(e) {
      {
        var t = Pe(e) || "Component";
        if (T1[t])
          return;
        T1[t] = !0, y("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
      }
    }
    function H2(e) {
      var t = e._payload, a = e._init;
      return a(t);
    }
    function F2(e) {
      function t(M, B) {
        if (e) {
          var U = M.deletions;
          U === null ? (M.deletions = [B], M.flags |= ft) : U.push(B);
        }
      }
      function a(M, B) {
        if (!e)
          return null;
        for (var U = B; U !== null; )
          t(M, U), U = U.sibling;
        return null;
      }
      function i(M, B) {
        for (var U = /* @__PURE__ */ new Map(), X = B; X !== null; )
          X.key !== null ? U.set(X.key, X) : U.set(X.index, X), X = X.sibling;
        return U;
      }
      function u(M, B) {
        var U = Es(M, B);
        return U.index = 0, U.sibling = null, U;
      }
      function s(M, B, U) {
        if (M.index = U, !e)
          return M.flags |= rd, B;
        var X = M.alternate;
        if (X !== null) {
          var de = X.index;
          return de < B ? (M.flags |= Ot, B) : de;
        } else
          return M.flags |= Ot, B;
      }
      function f(M) {
        return e && M.alternate === null && (M.flags |= Ot), M;
      }
      function p(M, B, U, X) {
        if (B === null || B.tag !== be) {
          var de = gg(U, M.mode, X);
          return de.return = M, de;
        } else {
          var ue = u(B, U);
          return ue.return = M, ue;
        }
      }
      function h(M, B, U, X) {
        var de = U.type;
        if (de === ba)
          return E(M, B, U.props.children, X, U.key);
        if (B !== null && (B.elementType === de || // Keep this check inline so it only runs on the false path:
        IC(B, U) || // Lazy types should reconcile their resolved type.
        // We need to do this after the Hot Reloading check above,
        // because hot reloading has different semantics than prod because
        // it doesn't resuspend. So we can't let the call below suspend.
        typeof de == "object" && de !== null && de.$$typeof === Me && H2(de) === B.type)) {
          var ue = u(B, U.props);
          return ue.ref = rp(M, B, U), ue.return = M, ue._debugSource = U._source, ue._debugOwner = U._owner, ue;
        }
        var Ue = yg(U, M.mode, X);
        return Ue.ref = rp(M, B, U), Ue.return = M, Ue;
      }
      function C(M, B, U, X) {
        if (B === null || B.tag !== K || B.stateNode.containerInfo !== U.containerInfo || B.stateNode.implementation !== U.implementation) {
          var de = Cg(U, M.mode, X);
          return de.return = M, de;
        } else {
          var ue = u(B, U.children || []);
          return ue.return = M, ue;
        }
      }
      function E(M, B, U, X, de) {
        if (B === null || B.tag !== Qe) {
          var ue = oo(U, M.mode, X, de);
          return ue.return = M, ue;
        } else {
          var Ue = u(B, U);
          return Ue.return = M, Ue;
        }
      }
      function N(M, B, U) {
        if (typeof B == "string" && B !== "" || typeof B == "number") {
          var X = gg("" + B, M.mode, U);
          return X.return = M, X;
        }
        if (typeof B == "object" && B !== null) {
          switch (B.$$typeof) {
            case li: {
              var de = yg(B, M.mode, U);
              return de.ref = rp(M, null, B), de.return = M, de;
            }
            case zr: {
              var ue = Cg(B, M.mode, U);
              return ue.return = M, ue;
            }
            case Me: {
              var Ue = B._payload, Ve = B._init;
              return N(M, Ve(Ue), U);
            }
          }
          if (En(B) || Ar(B)) {
            var xt = oo(B, M.mode, U, null);
            return xt.return = M, xt;
          }
          Yh(M, B);
        }
        return typeof B == "function" && Wh(M), null;
      }
      function D(M, B, U, X) {
        var de = B !== null ? B.key : null;
        if (typeof U == "string" && U !== "" || typeof U == "number")
          return de !== null ? null : p(M, B, "" + U, X);
        if (typeof U == "object" && U !== null) {
          switch (U.$$typeof) {
            case li:
              return U.key === de ? h(M, B, U, X) : null;
            case zr:
              return U.key === de ? C(M, B, U, X) : null;
            case Me: {
              var ue = U._payload, Ue = U._init;
              return D(M, B, Ue(ue), X);
            }
          }
          if (En(U) || Ar(U))
            return de !== null ? null : E(M, B, U, X, null);
          Yh(M, U);
        }
        return typeof U == "function" && Wh(M), null;
      }
      function z(M, B, U, X, de) {
        if (typeof X == "string" && X !== "" || typeof X == "number") {
          var ue = M.get(U) || null;
          return p(B, ue, "" + X, de);
        }
        if (typeof X == "object" && X !== null) {
          switch (X.$$typeof) {
            case li: {
              var Ue = M.get(X.key === null ? U : X.key) || null;
              return h(B, Ue, X, de);
            }
            case zr: {
              var Ve = M.get(X.key === null ? U : X.key) || null;
              return C(B, Ve, X, de);
            }
            case Me:
              var xt = X._payload, ot = X._init;
              return z(M, B, U, ot(xt), de);
          }
          if (En(X) || Ar(X)) {
            var vn = M.get(U) || null;
            return E(B, vn, X, de, null);
          }
          Yh(B, X);
        }
        return typeof X == "function" && Wh(B), null;
      }
      function H(M, B, U) {
        {
          if (typeof M != "object" || M === null)
            return B;
          switch (M.$$typeof) {
            case li:
            case zr:
              A2(M, U);
              var X = M.key;
              if (typeof X != "string")
                break;
              if (B === null) {
                B = /* @__PURE__ */ new Set(), B.add(X);
                break;
              }
              if (!B.has(X)) {
                B.add(X);
                break;
              }
              y("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.", X);
              break;
            case Me:
              var de = M._payload, ue = M._init;
              H(ue(de), B, U);
              break;
          }
        }
        return B;
      }
      function P(M, B, U, X) {
        for (var de = null, ue = 0; ue < U.length; ue++) {
          var Ue = U[ue];
          de = H(Ue, de, M);
        }
        for (var Ve = null, xt = null, ot = B, vn = 0, st = 0, ln = null; ot !== null && st < U.length; st++) {
          ot.index > st ? (ln = ot, ot = null) : ln = ot.sibling;
          var kr = D(M, ot, U[st], X);
          if (kr === null) {
            ot === null && (ot = ln);
            break;
          }
          e && ot && kr.alternate === null && t(M, ot), vn = s(kr, vn, st), xt === null ? Ve = kr : xt.sibling = kr, xt = kr, ot = ln;
        }
        if (st === U.length) {
          if (a(M, ot), rr()) {
            var cr = st;
            os(M, cr);
          }
          return Ve;
        }
        if (ot === null) {
          for (; st < U.length; st++) {
            var Aa = N(M, U[st], X);
            Aa !== null && (vn = s(Aa, vn, st), xt === null ? Ve = Aa : xt.sibling = Aa, xt = Aa);
          }
          if (rr()) {
            var Gr = st;
            os(M, Gr);
          }
          return Ve;
        }
        for (var Zr = i(M, ot); st < U.length; st++) {
          var Nr = z(Zr, M, st, U[st], X);
          Nr !== null && (e && Nr.alternate !== null && Zr.delete(Nr.key === null ? st : Nr.key), vn = s(Nr, vn, st), xt === null ? Ve = Nr : xt.sibling = Nr, xt = Nr);
        }
        if (e && Zr.forEach(function(Sf) {
          return t(M, Sf);
        }), rr()) {
          var Kl = st;
          os(M, Kl);
        }
        return Ve;
      }
      function le(M, B, U, X) {
        var de = Ar(U);
        if (typeof de != "function")
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          U[Symbol.toStringTag] === "Generator" && (S1 || y("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), S1 = !0), U.entries === de && (C1 || y("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), C1 = !0);
          var ue = de.call(U);
          if (ue)
            for (var Ue = null, Ve = ue.next(); !Ve.done; Ve = ue.next()) {
              var xt = Ve.value;
              Ue = H(xt, Ue, M);
            }
        }
        var ot = de.call(U);
        if (ot == null)
          throw new Error("An iterable object provided no iterator.");
        for (var vn = null, st = null, ln = B, kr = 0, cr = 0, Aa = null, Gr = ot.next(); ln !== null && !Gr.done; cr++, Gr = ot.next()) {
          ln.index > cr ? (Aa = ln, ln = null) : Aa = ln.sibling;
          var Zr = D(M, ln, Gr.value, X);
          if (Zr === null) {
            ln === null && (ln = Aa);
            break;
          }
          e && ln && Zr.alternate === null && t(M, ln), kr = s(Zr, kr, cr), st === null ? vn = Zr : st.sibling = Zr, st = Zr, ln = Aa;
        }
        if (Gr.done) {
          if (a(M, ln), rr()) {
            var Nr = cr;
            os(M, Nr);
          }
          return vn;
        }
        if (ln === null) {
          for (; !Gr.done; cr++, Gr = ot.next()) {
            var Kl = N(M, Gr.value, X);
            Kl !== null && (kr = s(Kl, kr, cr), st === null ? vn = Kl : st.sibling = Kl, st = Kl);
          }
          if (rr()) {
            var Sf = cr;
            os(M, Sf);
          }
          return vn;
        }
        for (var jp = i(M, ln); !Gr.done; cr++, Gr = ot.next()) {
          var sl = z(jp, M, cr, Gr.value, X);
          sl !== null && (e && sl.alternate !== null && jp.delete(sl.key === null ? cr : sl.key), kr = s(sl, kr, cr), st === null ? vn = sl : st.sibling = sl, st = sl);
        }
        if (e && jp.forEach(function(G8) {
          return t(M, G8);
        }), rr()) {
          var Q8 = cr;
          os(M, Q8);
        }
        return vn;
      }
      function De(M, B, U, X) {
        if (B !== null && B.tag === be) {
          a(M, B.sibling);
          var de = u(B, U);
          return de.return = M, de;
        }
        a(M, B);
        var ue = gg(U, M.mode, X);
        return ue.return = M, ue;
      }
      function Ee(M, B, U, X) {
        for (var de = U.key, ue = B; ue !== null; ) {
          if (ue.key === de) {
            var Ue = U.type;
            if (Ue === ba) {
              if (ue.tag === Qe) {
                a(M, ue.sibling);
                var Ve = u(ue, U.props.children);
                return Ve.return = M, Ve._debugSource = U._source, Ve._debugOwner = U._owner, Ve;
              }
            } else if (ue.elementType === Ue || // Keep this check inline so it only runs on the false path:
            IC(ue, U) || // Lazy types should reconcile their resolved type.
            // We need to do this after the Hot Reloading check above,
            // because hot reloading has different semantics than prod because
            // it doesn't resuspend. So we can't let the call below suspend.
            typeof Ue == "object" && Ue !== null && Ue.$$typeof === Me && H2(Ue) === ue.type) {
              a(M, ue.sibling);
              var xt = u(ue, U.props);
              return xt.ref = rp(M, ue, U), xt.return = M, xt._debugSource = U._source, xt._debugOwner = U._owner, xt;
            }
            a(M, ue);
            break;
          } else
            t(M, ue);
          ue = ue.sibling;
        }
        if (U.type === ba) {
          var ot = oo(U.props.children, M.mode, X, U.key);
          return ot.return = M, ot;
        } else {
          var vn = yg(U, M.mode, X);
          return vn.ref = rp(M, B, U), vn.return = M, vn;
        }
      }
      function rt(M, B, U, X) {
        for (var de = U.key, ue = B; ue !== null; ) {
          if (ue.key === de)
            if (ue.tag === K && ue.stateNode.containerInfo === U.containerInfo && ue.stateNode.implementation === U.implementation) {
              a(M, ue.sibling);
              var Ue = u(ue, U.children || []);
              return Ue.return = M, Ue;
            } else {
              a(M, ue);
              break;
            }
          else
            t(M, ue);
          ue = ue.sibling;
        }
        var Ve = Cg(U, M.mode, X);
        return Ve.return = M, Ve;
      }
      function Je(M, B, U, X) {
        var de = typeof U == "object" && U !== null && U.type === ba && U.key === null;
        if (de && (U = U.props.children), typeof U == "object" && U !== null) {
          switch (U.$$typeof) {
            case li:
              return f(Ee(M, B, U, X));
            case zr:
              return f(rt(M, B, U, X));
            case Me:
              var ue = U._payload, Ue = U._init;
              return Je(M, B, Ue(ue), X);
          }
          if (En(U))
            return P(M, B, U, X);
          if (Ar(U))
            return le(M, B, U, X);
          Yh(M, U);
        }
        return typeof U == "string" && U !== "" || typeof U == "number" ? f(De(M, B, "" + U, X)) : (typeof U == "function" && Wh(M), a(M, B));
      }
      return Je;
    }
    var tf = F2(!0), V2 = F2(!1);
    function TE(e, t) {
      if (e !== null && t.child !== e.child)
        throw new Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        var a = t.child, i = Es(a, a.pendingProps);
        for (t.child = i, i.return = t; a.sibling !== null; )
          a = a.sibling, i = i.sibling = Es(a, a.pendingProps), i.return = t;
        i.sibling = null;
      }
    }
    function RE(e, t) {
      for (var a = e.child; a !== null; )
        f8(a, t), a = a.sibling;
    }
    var R1 = Gu(null), w1;
    w1 = {};
    var Qh = null, nf = null, _1 = null, Gh = !1;
    function Zh() {
      Qh = null, nf = null, _1 = null, Gh = !1;
    }
    function P2() {
      Gh = !0;
    }
    function B2() {
      Gh = !1;
    }
    function $2(e, t, a) {
      br(R1, t._currentValue, e), t._currentValue = a, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== w1 && y("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = w1;
    }
    function b1(e, t) {
      var a = R1.current;
      _r(R1, t), e._currentValue = a;
    }
    function D1(e, t, a) {
      for (var i = e; i !== null; ) {
        var u = i.alternate;
        if (Ml(i.childLanes, t) ? u !== null && !Ml(u.childLanes, t) && (u.childLanes = Be(u.childLanes, t)) : (i.childLanes = Be(i.childLanes, t), u !== null && (u.childLanes = Be(u.childLanes, t))), i === a)
          break;
        i = i.return;
      }
      i !== a && y("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
    }
    function wE(e, t, a) {
      _E(e, t, a);
    }
    function _E(e, t, a) {
      var i = e.child;
      for (i !== null && (i.return = e); i !== null; ) {
        var u = void 0, s = i.dependencies;
        if (s !== null) {
          u = i.child;
          for (var f = s.firstContext; f !== null; ) {
            if (f.context === t) {
              if (i.tag === F) {
                var p = ku(a), h = Wl(Dt, p);
                h.tag = Xh;
                var C = i.updateQueue;
                if (C !== null) {
                  var E = C.shared, N = E.pending;
                  N === null ? h.next = h : (h.next = N.next, N.next = h), E.pending = h;
                }
              }
              i.lanes = Be(i.lanes, a);
              var D = i.alternate;
              D !== null && (D.lanes = Be(D.lanes, a)), D1(i.return, a, e), s.lanes = Be(s.lanes, a);
              break;
            }
            f = f.next;
          }
        } else if (i.tag === ke)
          u = i.type === e.type ? null : i.child;
        else if (i.tag === wt) {
          var z = i.return;
          if (z === null)
            throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
          z.lanes = Be(z.lanes, a);
          var H = z.alternate;
          H !== null && (H.lanes = Be(H.lanes, a)), D1(z, a, e), u = i.sibling;
        } else
          u = i.child;
        if (u !== null)
          u.return = i;
        else
          for (u = i; u !== null; ) {
            if (u === e) {
              u = null;
              break;
            }
            var P = u.sibling;
            if (P !== null) {
              P.return = u.return, u = P;
              break;
            }
            u = u.return;
          }
        i = u;
      }
    }
    function rf(e, t) {
      Qh = e, nf = null, _1 = null;
      var a = e.dependencies;
      if (a !== null) {
        var i = a.firstContext;
        i !== null && (Rr(a.lanes, t) && gp(), a.firstContext = null);
      }
    }
    function bn(e) {
      Gh && y("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      var t = e._currentValue;
      if (_1 !== e) {
        var a = {
          context: e,
          memoizedValue: t,
          next: null
        };
        if (nf === null) {
          if (Qh === null)
            throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
          nf = a, Qh.dependencies = {
            lanes: W,
            firstContext: a
          };
        } else
          nf = nf.next = a;
      }
      return t;
    }
    var ps = null;
    function k1(e) {
      ps === null ? ps = [e] : ps.push(e);
    }
    function bE() {
      if (ps !== null) {
        for (var e = 0; e < ps.length; e++) {
          var t = ps[e], a = t.interleaved;
          if (a !== null) {
            t.interleaved = null;
            var i = a.next, u = t.pending;
            if (u !== null) {
              var s = u.next;
              u.next = i, a.next = s;
            }
            t.pending = a;
          }
        }
        ps = null;
      }
    }
    function I2(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, k1(t)) : (a.next = u.next, u.next = a), t.interleaved = a, qh(e, i);
    }
    function DE(e, t, a, i) {
      var u = t.interleaved;
      u === null ? (a.next = a, k1(t)) : (a.next = u.next, u.next = a), t.interleaved = a;
    }
    function kE(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, k1(t)) : (a.next = u.next, u.next = a), t.interleaved = a, qh(e, i);
    }
    function ya(e, t) {
      return qh(e, t);
    }
    var NE = qh;
    function qh(e, t) {
      e.lanes = Be(e.lanes, t);
      var a = e.alternate;
      a !== null && (a.lanes = Be(a.lanes, t)), a === null && (e.flags & (Ot | ia)) !== _e && VC(e);
      for (var i = e, u = e.return; u !== null; )
        u.childLanes = Be(u.childLanes, t), a = u.alternate, a !== null ? a.childLanes = Be(a.childLanes, t) : (u.flags & (Ot | ia)) !== _e && VC(e), i = u, u = u.return;
      if (i.tag === I) {
        var s = i.stateNode;
        return s;
      } else
        return null;
    }
    var Y2 = 0, W2 = 1, Xh = 2, N1 = 3, Kh = !1, L1, Jh;
    L1 = !1, Jh = null;
    function O1(e) {
      var t = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
          pending: null,
          interleaved: null,
          lanes: W
        },
        effects: null
      };
      e.updateQueue = t;
    }
    function Q2(e, t) {
      var a = t.updateQueue, i = e.updateQueue;
      if (a === i) {
        var u = {
          baseState: i.baseState,
          firstBaseUpdate: i.firstBaseUpdate,
          lastBaseUpdate: i.lastBaseUpdate,
          shared: i.shared,
          effects: i.effects
        };
        t.updateQueue = u;
      }
    }
    function Wl(e, t) {
      var a = {
        eventTime: e,
        lane: t,
        tag: Y2,
        payload: null,
        callback: null,
        next: null
      };
      return a;
    }
    function Ku(e, t, a) {
      var i = e.updateQueue;
      if (i === null)
        return null;
      var u = i.shared;
      if (Jh === u && !L1 && (y("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), L1 = !0), D6()) {
        var s = u.pending;
        return s === null ? t.next = t : (t.next = s.next, s.next = t), u.pending = t, NE(e, a);
      } else
        return kE(e, u, t, a);
    }
    function em(e, t, a) {
      var i = t.updateQueue;
      if (i !== null) {
        var u = i.shared;
        if (gd(a)) {
          var s = u.lanes;
          s = Sc(s, e.pendingLanes);
          var f = Be(s, a);
          u.lanes = f, Cd(e, f);
        }
      }
    }
    function M1(e, t) {
      var a = e.updateQueue, i = e.alternate;
      if (i !== null) {
        var u = i.updateQueue;
        if (a === u) {
          var s = null, f = null, p = a.firstBaseUpdate;
          if (p !== null) {
            var h = p;
            do {
              var C = {
                eventTime: h.eventTime,
                lane: h.lane,
                tag: h.tag,
                payload: h.payload,
                callback: h.callback,
                next: null
              };
              f === null ? s = f = C : (f.next = C, f = C), h = h.next;
            } while (h !== null);
            f === null ? s = f = t : (f.next = t, f = t);
          } else
            s = f = t;
          a = {
            baseState: u.baseState,
            firstBaseUpdate: s,
            lastBaseUpdate: f,
            shared: u.shared,
            effects: u.effects
          }, e.updateQueue = a;
          return;
        }
      }
      var E = a.lastBaseUpdate;
      E === null ? a.firstBaseUpdate = t : E.next = t, a.lastBaseUpdate = t;
    }
    function LE(e, t, a, i, u, s) {
      switch (a.tag) {
        case W2: {
          var f = a.payload;
          if (typeof f == "function") {
            P2();
            var p = f.call(s, i, u);
            {
              if (e.mode & Xe) {
                rn(!0);
                try {
                  f.call(s, i, u);
                } finally {
                  rn(!1);
                }
              }
              B2();
            }
            return p;
          }
          return f;
        }
        case N1:
          e.flags = e.flags & ~Tn | je;
        case Y2: {
          var h = a.payload, C;
          if (typeof h == "function") {
            P2(), C = h.call(s, i, u);
            {
              if (e.mode & Xe) {
                rn(!0);
                try {
                  h.call(s, i, u);
                } finally {
                  rn(!1);
                }
              }
              B2();
            }
          } else
            C = h;
          return C == null ? i : qe({}, i, C);
        }
        case Xh:
          return Kh = !0, i;
      }
      return i;
    }
    function tm(e, t, a, i) {
      var u = e.updateQueue;
      Kh = !1, Jh = u.shared;
      var s = u.firstBaseUpdate, f = u.lastBaseUpdate, p = u.shared.pending;
      if (p !== null) {
        u.shared.pending = null;
        var h = p, C = h.next;
        h.next = null, f === null ? s = C : f.next = C, f = h;
        var E = e.alternate;
        if (E !== null) {
          var N = E.updateQueue, D = N.lastBaseUpdate;
          D !== f && (D === null ? N.firstBaseUpdate = C : D.next = C, N.lastBaseUpdate = h);
        }
      }
      if (s !== null) {
        var z = u.baseState, H = W, P = null, le = null, De = null, Ee = s;
        do {
          var rt = Ee.lane, Je = Ee.eventTime;
          if (Ml(i, rt)) {
            if (De !== null) {
              var B = {
                eventTime: Je,
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: an,
                tag: Ee.tag,
                payload: Ee.payload,
                callback: Ee.callback,
                next: null
              };
              De = De.next = B;
            }
            z = LE(e, u, Ee, z, t, a);
            var U = Ee.callback;
            if (U !== null && // If the update was already committed, we should not queue its
            // callback again.
            Ee.lane !== an) {
              e.flags |= Wa;
              var X = u.effects;
              X === null ? u.effects = [Ee] : X.push(Ee);
            }
          } else {
            var M = {
              eventTime: Je,
              lane: rt,
              tag: Ee.tag,
              payload: Ee.payload,
              callback: Ee.callback,
              next: null
            };
            De === null ? (le = De = M, P = z) : De = De.next = M, H = Be(H, rt);
          }
          if (Ee = Ee.next, Ee === null) {
            if (p = u.shared.pending, p === null)
              break;
            var de = p, ue = de.next;
            de.next = null, Ee = ue, u.lastBaseUpdate = de, u.shared.pending = null;
          }
        } while (!0);
        De === null && (P = z), u.baseState = P, u.firstBaseUpdate = le, u.lastBaseUpdate = De;
        var Ue = u.shared.interleaved;
        if (Ue !== null) {
          var Ve = Ue;
          do
            H = Be(H, Ve.lane), Ve = Ve.next;
          while (Ve !== Ue);
        } else s === null && (u.shared.lanes = W);
        Np(H), e.lanes = H, e.memoizedState = z;
      }
      Jh = null;
    }
    function OE(e, t) {
      if (typeof e != "function")
        throw new Error("Invalid argument passed as callback. Expected a function. Instead " + ("received: " + e));
      e.call(t);
    }
    function G2() {
      Kh = !1;
    }
    function nm() {
      return Kh;
    }
    function Z2(e, t, a) {
      var i = t.effects;
      if (t.effects = null, i !== null)
        for (var u = 0; u < i.length; u++) {
          var s = i[u], f = s.callback;
          f !== null && (s.callback = null, OE(f, a));
        }
    }
    var ap = {}, Ju = Gu(ap), ip = Gu(ap), rm = Gu(ap);
    function am(e) {
      if (e === ap)
        throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
      return e;
    }
    function q2() {
      var e = am(rm.current);
      return e;
    }
    function U1(e, t) {
      br(rm, t, e), br(ip, e, e), br(Ju, ap, e);
      var a = Z3(t);
      _r(Ju, e), br(Ju, a, e);
    }
    function af(e) {
      _r(Ju, e), _r(ip, e), _r(rm, e);
    }
    function j1() {
      var e = am(Ju.current);
      return e;
    }
    function X2(e) {
      am(rm.current);
      var t = am(Ju.current), a = q3(t, e.type);
      t !== a && (br(ip, e, e), br(Ju, a, e));
    }
    function z1(e) {
      ip.current === e && (_r(Ju, e), _r(ip, e));
    }
    var ME = 0, K2 = 1, J2 = 1, lp = 2, wi = Gu(ME);
    function A1(e, t) {
      return (e & t) !== 0;
    }
    function lf(e) {
      return e & K2;
    }
    function H1(e, t) {
      return e & K2 | t;
    }
    function UE(e, t) {
      return e | t;
    }
    function eo(e, t) {
      br(wi, t, e);
    }
    function uf(e) {
      _r(wi, e);
    }
    function jE(e, t) {
      var a = e.memoizedState;
      return a !== null ? a.dehydrated !== null : (e.memoizedProps, !0);
    }
    function im(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === Ye) {
          var a = t.memoizedState;
          if (a !== null) {
            var i = a.dehydrated;
            if (i === null || m2(i) || n1(i))
              return t;
          }
        } else if (t.tag === dt && // revealOrder undefined can't be trusted because it don't
        // keep track of whether it suspended or not.
        t.memoizedProps.revealOrder !== void 0) {
          var u = (t.flags & je) !== _e;
          if (u)
            return t;
        } else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === e)
          return null;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return null;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return null;
    }
    var ga = (
      /*   */
      0
    ), jn = (
      /* */
      1
    ), nl = (
      /*  */
      2
    ), zn = (
      /*    */
      4
    ), ar = (
      /*   */
      8
    ), F1 = [];
    function V1() {
      for (var e = 0; e < F1.length; e++) {
        var t = F1[e];
        t._workInProgressVersionPrimary = null;
      }
      F1.length = 0;
    }
    function zE(e, t) {
      var a = t._getVersion, i = a(t._source);
      e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, i] : e.mutableSourceEagerHydrationData.push(t, i);
    }
    var ce = g.ReactCurrentDispatcher, up = g.ReactCurrentBatchConfig, P1, of;
    P1 = /* @__PURE__ */ new Set();
    var vs = W, Et = null, An = null, Hn = null, lm = !1, op = !1, sp = 0, AE = 0, HE = 25, $ = null, ti = null, to = -1, B1 = !1;
    function ht() {
      {
        var e = $;
        ti === null ? ti = [e] : ti.push(e);
      }
    }
    function ae() {
      {
        var e = $;
        ti !== null && (to++, ti[to] !== e && FE(e));
      }
    }
    function sf(e) {
      e != null && !En(e) && y("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", $, typeof e);
    }
    function FE(e) {
      {
        var t = Pe(Et);
        if (!P1.has(t) && (P1.add(t), ti !== null)) {
          for (var a = "", i = 30, u = 0; u <= to; u++) {
            for (var s = ti[u], f = u === to ? e : s, p = u + 1 + ". " + s; p.length < i; )
              p += " ";
            p += f + `
`, a += p;
          }
          y(`React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://reactjs.org/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`, t, a);
        }
      }
    }
    function Dr() {
      throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
    }
    function $1(e, t) {
      if (B1)
        return !1;
      if (t === null)
        return y("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", $), !1;
      e.length !== t.length && y(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, $, "[" + t.join(", ") + "]", "[" + e.join(", ") + "]");
      for (var a = 0; a < t.length && a < e.length; a++)
        if (!he(e[a], t[a]))
          return !1;
      return !0;
    }
    function cf(e, t, a, i, u, s) {
      vs = s, Et = t, ti = e !== null ? e._debugHookTypes : null, to = -1, B1 = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = W, e !== null && e.memoizedState !== null ? ce.current = E4 : ti !== null ? ce.current = S4 : ce.current = C4;
      var f = a(i, u);
      if (op) {
        var p = 0;
        do {
          if (op = !1, sp = 0, p >= HE)
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          p += 1, B1 = !1, An = null, Hn = null, t.updateQueue = null, to = -1, ce.current = x4, f = a(i, u);
        } while (op);
      }
      ce.current = Cm, t._debugHookTypes = ti;
      var h = An !== null && An.next !== null;
      if (vs = W, Et = null, An = null, Hn = null, $ = null, ti = null, to = -1, e !== null && (e.flags & On) !== (t.flags & On) && // Disable this warning in legacy mode, because legacy Suspense is weird
      // and creates false positives. To make this work in legacy mode, we'd
      // need to mark fibers that commit in an incomplete state, somehow. For
      // now I'll disable the warning that most of the bugs that would trigger
      // it are either exclusive to concurrent mode or exist in both.
      (e.mode & Se) !== ge && y("Internal React error: Expected static flag was missing. Please notify the React team."), lm = !1, h)
        throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return f;
    }
    function ff() {
      var e = sp !== 0;
      return sp = 0, e;
    }
    function e4(e, t, a) {
      t.updateQueue = e.updateQueue, (t.mode & $r) !== ge ? t.flags &= ~(Rl | gr | zt | Ie) : t.flags &= ~(zt | Ie), e.lanes = Yo(e.lanes, a);
    }
    function t4() {
      if (ce.current = Cm, lm) {
        for (var e = Et.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        lm = !1;
      }
      vs = W, Et = null, An = null, Hn = null, ti = null, to = -1, $ = null, v4 = !1, op = !1, sp = 0;
    }
    function rl() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return Hn === null ? Et.memoizedState = Hn = e : Hn = Hn.next = e, Hn;
    }
    function ni() {
      var e;
      if (An === null) {
        var t = Et.alternate;
        t !== null ? e = t.memoizedState : e = null;
      } else
        e = An.next;
      var a;
      if (Hn === null ? a = Et.memoizedState : a = Hn.next, a !== null)
        Hn = a, a = Hn.next, An = e;
      else {
        if (e === null)
          throw new Error("Rendered more hooks than during the previous render.");
        An = e;
        var i = {
          memoizedState: An.memoizedState,
          baseState: An.baseState,
          baseQueue: An.baseQueue,
          queue: An.queue,
          next: null
        };
        Hn === null ? Et.memoizedState = Hn = i : Hn = Hn.next = i;
      }
      return Hn;
    }
    function n4() {
      return {
        lastEffect: null,
        stores: null
      };
    }
    function I1(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function Y1(e, t, a) {
      var i = rl(), u;
      a !== void 0 ? u = a(t) : u = t, i.memoizedState = i.baseState = u;
      var s = {
        pending: null,
        interleaved: null,
        lanes: W,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: u
      };
      i.queue = s;
      var f = s.dispatch = $E.bind(null, Et, s);
      return [i.memoizedState, f];
    }
    function W1(e, t, a) {
      var i = ni(), u = i.queue;
      if (u === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      u.lastRenderedReducer = e;
      var s = An, f = s.baseQueue, p = u.pending;
      if (p !== null) {
        if (f !== null) {
          var h = f.next, C = p.next;
          f.next = C, p.next = h;
        }
        s.baseQueue !== f && y("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."), s.baseQueue = f = p, u.pending = null;
      }
      if (f !== null) {
        var E = f.next, N = s.baseState, D = null, z = null, H = null, P = E;
        do {
          var le = P.lane;
          if (Ml(vs, le)) {
            if (H !== null) {
              var Ee = {
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: an,
                action: P.action,
                hasEagerState: P.hasEagerState,
                eagerState: P.eagerState,
                next: null
              };
              H = H.next = Ee;
            }
            if (P.hasEagerState)
              N = P.eagerState;
            else {
              var rt = P.action;
              N = e(N, rt);
            }
          } else {
            var De = {
              lane: le,
              action: P.action,
              hasEagerState: P.hasEagerState,
              eagerState: P.eagerState,
              next: null
            };
            H === null ? (z = H = De, D = N) : H = H.next = De, Et.lanes = Be(Et.lanes, le), Np(le);
          }
          P = P.next;
        } while (P !== null && P !== E);
        H === null ? D = N : H.next = z, he(N, i.memoizedState) || gp(), i.memoizedState = N, i.baseState = D, i.baseQueue = H, u.lastRenderedState = N;
      }
      var Je = u.interleaved;
      if (Je !== null) {
        var M = Je;
        do {
          var B = M.lane;
          Et.lanes = Be(Et.lanes, B), Np(B), M = M.next;
        } while (M !== Je);
      } else f === null && (u.lanes = W);
      var U = u.dispatch;
      return [i.memoizedState, U];
    }
    function Q1(e, t, a) {
      var i = ni(), u = i.queue;
      if (u === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      u.lastRenderedReducer = e;
      var s = u.dispatch, f = u.pending, p = i.memoizedState;
      if (f !== null) {
        u.pending = null;
        var h = f.next, C = h;
        do {
          var E = C.action;
          p = e(p, E), C = C.next;
        } while (C !== h);
        he(p, i.memoizedState) || gp(), i.memoizedState = p, i.baseQueue === null && (i.baseState = p), u.lastRenderedState = p;
      }
      return [p, s];
    }
    function hT(e, t, a) {
    }
    function mT(e, t, a) {
    }
    function G1(e, t, a) {
      var i = Et, u = rl(), s, f = rr();
      if (f) {
        if (a === void 0)
          throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        s = a(), of || s !== a() && (y("The result of getServerSnapshot should be cached to avoid an infinite loop"), of = !0);
      } else {
        if (s = t(), !of) {
          var p = t();
          he(s, p) || (y("The result of getSnapshot should be cached to avoid an infinite loop"), of = !0);
        }
        var h = Hm();
        if (h === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        Io(h, vs) || r4(i, t, s);
      }
      u.memoizedState = s;
      var C = {
        value: s,
        getSnapshot: t
      };
      return u.queue = C, fm(i4.bind(null, i, C, e), [e]), i.flags |= zt, cp(jn | ar, a4.bind(null, i, C, s, t), void 0, null), s;
    }
    function um(e, t, a) {
      var i = Et, u = ni(), s = t();
      if (!of) {
        var f = t();
        he(s, f) || (y("The result of getSnapshot should be cached to avoid an infinite loop"), of = !0);
      }
      var p = u.memoizedState, h = !he(p, s);
      h && (u.memoizedState = s, gp());
      var C = u.queue;
      if (dp(i4.bind(null, i, C, e), [e]), C.getSnapshot !== t || h || // Check if the susbcribe function changed. We can save some memory by
      // checking whether we scheduled a subscription effect above.
      Hn !== null && Hn.memoizedState.tag & jn) {
        i.flags |= zt, cp(jn | ar, a4.bind(null, i, C, s, t), void 0, null);
        var E = Hm();
        if (E === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        Io(E, vs) || r4(i, t, s);
      }
      return s;
    }
    function r4(e, t, a) {
      e.flags |= Uo;
      var i = {
        getSnapshot: t,
        value: a
      }, u = Et.updateQueue;
      if (u === null)
        u = n4(), Et.updateQueue = u, u.stores = [i];
      else {
        var s = u.stores;
        s === null ? u.stores = [i] : s.push(i);
      }
    }
    function a4(e, t, a, i) {
      t.value = a, t.getSnapshot = i, l4(t) && u4(e);
    }
    function i4(e, t, a) {
      var i = function() {
        l4(t) && u4(e);
      };
      return a(i);
    }
    function l4(e) {
      var t = e.getSnapshot, a = e.value;
      try {
        var i = t();
        return !he(a, i);
      } catch {
        return !0;
      }
    }
    function u4(e) {
      var t = ya(e, Te);
      t !== null && Bn(t, e, Te, Dt);
    }
    function om(e) {
      var t = rl();
      typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        interleaved: null,
        lanes: W,
        dispatch: null,
        lastRenderedReducer: I1,
        lastRenderedState: e
      };
      t.queue = a;
      var i = a.dispatch = IE.bind(null, Et, a);
      return [t.memoizedState, i];
    }
    function Z1(e) {
      return W1(I1);
    }
    function q1(e) {
      return Q1(I1);
    }
    function cp(e, t, a, i) {
      var u = {
        tag: e,
        create: t,
        destroy: a,
        deps: i,
        // Circular
        next: null
      }, s = Et.updateQueue;
      if (s === null)
        s = n4(), Et.updateQueue = s, s.lastEffect = u.next = u;
      else {
        var f = s.lastEffect;
        if (f === null)
          s.lastEffect = u.next = u;
        else {
          var p = f.next;
          f.next = u, u.next = p, s.lastEffect = u;
        }
      }
      return u;
    }
    function X1(e) {
      var t = rl();
      {
        var a = {
          current: e
        };
        return t.memoizedState = a, a;
      }
    }
    function sm(e) {
      var t = ni();
      return t.memoizedState;
    }
    function fp(e, t, a, i) {
      var u = rl(), s = i === void 0 ? null : i;
      Et.flags |= e, u.memoizedState = cp(jn | t, a, void 0, s);
    }
    function cm(e, t, a, i) {
      var u = ni(), s = i === void 0 ? null : i, f = void 0;
      if (An !== null) {
        var p = An.memoizedState;
        if (f = p.destroy, s !== null) {
          var h = p.deps;
          if ($1(s, h)) {
            u.memoizedState = cp(t, a, f, s);
            return;
          }
        }
      }
      Et.flags |= e, u.memoizedState = cp(jn | t, a, f, s);
    }
    function fm(e, t) {
      return (Et.mode & $r) !== ge ? fp(Rl | zt | Ii, ar, e, t) : fp(zt | Ii, ar, e, t);
    }
    function dp(e, t) {
      return cm(zt, ar, e, t);
    }
    function K1(e, t) {
      return fp(Ie, nl, e, t);
    }
    function dm(e, t) {
      return cm(Ie, nl, e, t);
    }
    function J1(e, t) {
      var a = Ie;
      return a |= yr, (Et.mode & $r) !== ge && (a |= gr), fp(a, zn, e, t);
    }
    function pm(e, t) {
      return cm(Ie, zn, e, t);
    }
    function o4(e, t) {
      if (typeof t == "function") {
        var a = t, i = e();
        return a(i), function() {
          a(null);
        };
      } else if (t != null) {
        var u = t;
        u.hasOwnProperty("current") || y("Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.", "an object with keys {" + Object.keys(u).join(", ") + "}");
        var s = e();
        return u.current = s, function() {
          u.current = null;
        };
      }
    }
    function e0(e, t, a) {
      typeof t != "function" && y("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null, u = Ie;
      return u |= yr, (Et.mode & $r) !== ge && (u |= gr), fp(u, zn, o4.bind(null, t, e), i);
    }
    function vm(e, t, a) {
      typeof t != "function" && y("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null;
      return cm(Ie, zn, o4.bind(null, t, e), i);
    }
    function VE(e, t) {
    }
    var hm = VE;
    function t0(e, t) {
      var a = rl(), i = t === void 0 ? null : t;
      return a.memoizedState = [e, i], e;
    }
    function mm(e, t) {
      var a = ni(), i = t === void 0 ? null : t, u = a.memoizedState;
      if (u !== null && i !== null) {
        var s = u[1];
        if ($1(i, s))
          return u[0];
      }
      return a.memoizedState = [e, i], e;
    }
    function n0(e, t) {
      var a = rl(), i = t === void 0 ? null : t, u = e();
      return a.memoizedState = [u, i], u;
    }
    function ym(e, t) {
      var a = ni(), i = t === void 0 ? null : t, u = a.memoizedState;
      if (u !== null && i !== null) {
        var s = u[1];
        if ($1(i, s))
          return u[0];
      }
      var f = e();
      return a.memoizedState = [f, i], f;
    }
    function r0(e) {
      var t = rl();
      return t.memoizedState = e, e;
    }
    function s4(e) {
      var t = ni(), a = An, i = a.memoizedState;
      return f4(t, i, e);
    }
    function c4(e) {
      var t = ni();
      if (An === null)
        return t.memoizedState = e, e;
      var a = An.memoizedState;
      return f4(t, a, e);
    }
    function f4(e, t, a) {
      var i = !Qv(vs);
      if (i) {
        if (!he(a, t)) {
          var u = qv();
          Et.lanes = Be(Et.lanes, u), Np(u), e.baseState = !0;
        }
        return t;
      } else
        return e.baseState && (e.baseState = !1, gp()), e.memoizedState = a, a;
    }
    function PE(e, t, a) {
      var i = fa();
      Yt(Ty(i, gi)), e(!0);
      var u = up.transition;
      up.transition = {};
      var s = up.transition;
      up.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        e(!1), t();
      } finally {
        if (Yt(i), up.transition = u, u === null && s._updatedFibers) {
          var f = s._updatedFibers.size;
          f > 10 && L("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), s._updatedFibers.clear();
        }
      }
    }
    function a0() {
      var e = om(!1), t = e[0], a = e[1], i = PE.bind(null, a), u = rl();
      return u.memoizedState = i, [t, i];
    }
    function d4() {
      var e = Z1(), t = e[0], a = ni(), i = a.memoizedState;
      return [t, i];
    }
    function p4() {
      var e = q1(), t = e[0], a = ni(), i = a.memoizedState;
      return [t, i];
    }
    var v4 = !1;
    function BE() {
      return v4;
    }
    function i0() {
      var e = rl(), t = Hm(), a = t.identifierPrefix, i;
      if (rr()) {
        var u = iE();
        i = ":" + a + "R" + u;
        var s = sp++;
        s > 0 && (i += "H" + s.toString(32)), i += ":";
      } else {
        var f = AE++;
        i = ":" + a + "r" + f.toString(32) + ":";
      }
      return e.memoizedState = i, i;
    }
    function gm() {
      var e = ni(), t = e.memoizedState;
      return t;
    }
    function $E(e, t, a) {
      typeof arguments[3] == "function" && y("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = lo(e), u = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (h4(e))
        m4(t, u);
      else {
        var s = I2(e, t, u, i);
        if (s !== null) {
          var f = Qr();
          Bn(s, e, i, f), y4(s, t, i);
        }
      }
      g4(e, i);
    }
    function IE(e, t, a) {
      typeof arguments[3] == "function" && y("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = lo(e), u = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (h4(e))
        m4(t, u);
      else {
        var s = e.alternate;
        if (e.lanes === W && (s === null || s.lanes === W)) {
          var f = t.lastRenderedReducer;
          if (f !== null) {
            var p;
            p = ce.current, ce.current = _i;
            try {
              var h = t.lastRenderedState, C = f(h, a);
              if (u.hasEagerState = !0, u.eagerState = C, he(C, h)) {
                DE(e, t, u, i);
                return;
              }
            } catch {
            } finally {
              ce.current = p;
            }
          }
        }
        var E = I2(e, t, u, i);
        if (E !== null) {
          var N = Qr();
          Bn(E, e, i, N), y4(E, t, i);
        }
      }
      g4(e, i);
    }
    function h4(e) {
      var t = e.alternate;
      return e === Et || t !== null && t === Et;
    }
    function m4(e, t) {
      op = lm = !0;
      var a = e.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
    }
    function y4(e, t, a) {
      if (gd(a)) {
        var i = t.lanes;
        i = Sc(i, e.pendingLanes);
        var u = Be(i, a);
        t.lanes = u, Cd(e, u);
      }
    }
    function g4(e, t, a) {
      Ho(e, t);
    }
    var Cm = {
      readContext: bn,
      useCallback: Dr,
      useContext: Dr,
      useEffect: Dr,
      useImperativeHandle: Dr,
      useInsertionEffect: Dr,
      useLayoutEffect: Dr,
      useMemo: Dr,
      useReducer: Dr,
      useRef: Dr,
      useState: Dr,
      useDebugValue: Dr,
      useDeferredValue: Dr,
      useTransition: Dr,
      useMutableSource: Dr,
      useSyncExternalStore: Dr,
      useId: Dr,
      unstable_isNewReconciler: te
    }, C4 = null, S4 = null, E4 = null, x4 = null, al = null, _i = null, Sm = null;
    {
      var l0 = function() {
        y("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, Fe = function() {
        y("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      C4 = {
        readContext: function(e) {
          return bn(e);
        },
        useCallback: function(e, t) {
          return $ = "useCallback", ht(), sf(t), t0(e, t);
        },
        useContext: function(e) {
          return $ = "useContext", ht(), bn(e);
        },
        useEffect: function(e, t) {
          return $ = "useEffect", ht(), sf(t), fm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return $ = "useImperativeHandle", ht(), sf(a), e0(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return $ = "useInsertionEffect", ht(), sf(t), K1(e, t);
        },
        useLayoutEffect: function(e, t) {
          return $ = "useLayoutEffect", ht(), sf(t), J1(e, t);
        },
        useMemo: function(e, t) {
          $ = "useMemo", ht(), sf(t);
          var a = ce.current;
          ce.current = al;
          try {
            return n0(e, t);
          } finally {
            ce.current = a;
          }
        },
        useReducer: function(e, t, a) {
          $ = "useReducer", ht();
          var i = ce.current;
          ce.current = al;
          try {
            return Y1(e, t, a);
          } finally {
            ce.current = i;
          }
        },
        useRef: function(e) {
          return $ = "useRef", ht(), X1(e);
        },
        useState: function(e) {
          $ = "useState", ht();
          var t = ce.current;
          ce.current = al;
          try {
            return om(e);
          } finally {
            ce.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return $ = "useDebugValue", ht(), void 0;
        },
        useDeferredValue: function(e) {
          return $ = "useDeferredValue", ht(), r0(e);
        },
        useTransition: function() {
          return $ = "useTransition", ht(), a0();
        },
        useMutableSource: function(e, t, a) {
          return $ = "useMutableSource", ht(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return $ = "useSyncExternalStore", ht(), G1(e, t, a);
        },
        useId: function() {
          return $ = "useId", ht(), i0();
        },
        unstable_isNewReconciler: te
      }, S4 = {
        readContext: function(e) {
          return bn(e);
        },
        useCallback: function(e, t) {
          return $ = "useCallback", ae(), t0(e, t);
        },
        useContext: function(e) {
          return $ = "useContext", ae(), bn(e);
        },
        useEffect: function(e, t) {
          return $ = "useEffect", ae(), fm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return $ = "useImperativeHandle", ae(), e0(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return $ = "useInsertionEffect", ae(), K1(e, t);
        },
        useLayoutEffect: function(e, t) {
          return $ = "useLayoutEffect", ae(), J1(e, t);
        },
        useMemo: function(e, t) {
          $ = "useMemo", ae();
          var a = ce.current;
          ce.current = al;
          try {
            return n0(e, t);
          } finally {
            ce.current = a;
          }
        },
        useReducer: function(e, t, a) {
          $ = "useReducer", ae();
          var i = ce.current;
          ce.current = al;
          try {
            return Y1(e, t, a);
          } finally {
            ce.current = i;
          }
        },
        useRef: function(e) {
          return $ = "useRef", ae(), X1(e);
        },
        useState: function(e) {
          $ = "useState", ae();
          var t = ce.current;
          ce.current = al;
          try {
            return om(e);
          } finally {
            ce.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return $ = "useDebugValue", ae(), void 0;
        },
        useDeferredValue: function(e) {
          return $ = "useDeferredValue", ae(), r0(e);
        },
        useTransition: function() {
          return $ = "useTransition", ae(), a0();
        },
        useMutableSource: function(e, t, a) {
          return $ = "useMutableSource", ae(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return $ = "useSyncExternalStore", ae(), G1(e, t, a);
        },
        useId: function() {
          return $ = "useId", ae(), i0();
        },
        unstable_isNewReconciler: te
      }, E4 = {
        readContext: function(e) {
          return bn(e);
        },
        useCallback: function(e, t) {
          return $ = "useCallback", ae(), mm(e, t);
        },
        useContext: function(e) {
          return $ = "useContext", ae(), bn(e);
        },
        useEffect: function(e, t) {
          return $ = "useEffect", ae(), dp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return $ = "useImperativeHandle", ae(), vm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return $ = "useInsertionEffect", ae(), dm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return $ = "useLayoutEffect", ae(), pm(e, t);
        },
        useMemo: function(e, t) {
          $ = "useMemo", ae();
          var a = ce.current;
          ce.current = _i;
          try {
            return ym(e, t);
          } finally {
            ce.current = a;
          }
        },
        useReducer: function(e, t, a) {
          $ = "useReducer", ae();
          var i = ce.current;
          ce.current = _i;
          try {
            return W1(e, t, a);
          } finally {
            ce.current = i;
          }
        },
        useRef: function(e) {
          return $ = "useRef", ae(), sm();
        },
        useState: function(e) {
          $ = "useState", ae();
          var t = ce.current;
          ce.current = _i;
          try {
            return Z1(e);
          } finally {
            ce.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return $ = "useDebugValue", ae(), hm();
        },
        useDeferredValue: function(e) {
          return $ = "useDeferredValue", ae(), s4(e);
        },
        useTransition: function() {
          return $ = "useTransition", ae(), d4();
        },
        useMutableSource: function(e, t, a) {
          return $ = "useMutableSource", ae(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return $ = "useSyncExternalStore", ae(), um(e, t);
        },
        useId: function() {
          return $ = "useId", ae(), gm();
        },
        unstable_isNewReconciler: te
      }, x4 = {
        readContext: function(e) {
          return bn(e);
        },
        useCallback: function(e, t) {
          return $ = "useCallback", ae(), mm(e, t);
        },
        useContext: function(e) {
          return $ = "useContext", ae(), bn(e);
        },
        useEffect: function(e, t) {
          return $ = "useEffect", ae(), dp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return $ = "useImperativeHandle", ae(), vm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return $ = "useInsertionEffect", ae(), dm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return $ = "useLayoutEffect", ae(), pm(e, t);
        },
        useMemo: function(e, t) {
          $ = "useMemo", ae();
          var a = ce.current;
          ce.current = Sm;
          try {
            return ym(e, t);
          } finally {
            ce.current = a;
          }
        },
        useReducer: function(e, t, a) {
          $ = "useReducer", ae();
          var i = ce.current;
          ce.current = Sm;
          try {
            return Q1(e, t, a);
          } finally {
            ce.current = i;
          }
        },
        useRef: function(e) {
          return $ = "useRef", ae(), sm();
        },
        useState: function(e) {
          $ = "useState", ae();
          var t = ce.current;
          ce.current = Sm;
          try {
            return q1(e);
          } finally {
            ce.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return $ = "useDebugValue", ae(), hm();
        },
        useDeferredValue: function(e) {
          return $ = "useDeferredValue", ae(), c4(e);
        },
        useTransition: function() {
          return $ = "useTransition", ae(), p4();
        },
        useMutableSource: function(e, t, a) {
          return $ = "useMutableSource", ae(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return $ = "useSyncExternalStore", ae(), um(e, t);
        },
        useId: function() {
          return $ = "useId", ae(), gm();
        },
        unstable_isNewReconciler: te
      }, al = {
        readContext: function(e) {
          return l0(), bn(e);
        },
        useCallback: function(e, t) {
          return $ = "useCallback", Fe(), ht(), t0(e, t);
        },
        useContext: function(e) {
          return $ = "useContext", Fe(), ht(), bn(e);
        },
        useEffect: function(e, t) {
          return $ = "useEffect", Fe(), ht(), fm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return $ = "useImperativeHandle", Fe(), ht(), e0(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return $ = "useInsertionEffect", Fe(), ht(), K1(e, t);
        },
        useLayoutEffect: function(e, t) {
          return $ = "useLayoutEffect", Fe(), ht(), J1(e, t);
        },
        useMemo: function(e, t) {
          $ = "useMemo", Fe(), ht();
          var a = ce.current;
          ce.current = al;
          try {
            return n0(e, t);
          } finally {
            ce.current = a;
          }
        },
        useReducer: function(e, t, a) {
          $ = "useReducer", Fe(), ht();
          var i = ce.current;
          ce.current = al;
          try {
            return Y1(e, t, a);
          } finally {
            ce.current = i;
          }
        },
        useRef: function(e) {
          return $ = "useRef", Fe(), ht(), X1(e);
        },
        useState: function(e) {
          $ = "useState", Fe(), ht();
          var t = ce.current;
          ce.current = al;
          try {
            return om(e);
          } finally {
            ce.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return $ = "useDebugValue", Fe(), ht(), void 0;
        },
        useDeferredValue: function(e) {
          return $ = "useDeferredValue", Fe(), ht(), r0(e);
        },
        useTransition: function() {
          return $ = "useTransition", Fe(), ht(), a0();
        },
        useMutableSource: function(e, t, a) {
          return $ = "useMutableSource", Fe(), ht(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return $ = "useSyncExternalStore", Fe(), ht(), G1(e, t, a);
        },
        useId: function() {
          return $ = "useId", Fe(), ht(), i0();
        },
        unstable_isNewReconciler: te
      }, _i = {
        readContext: function(e) {
          return l0(), bn(e);
        },
        useCallback: function(e, t) {
          return $ = "useCallback", Fe(), ae(), mm(e, t);
        },
        useContext: function(e) {
          return $ = "useContext", Fe(), ae(), bn(e);
        },
        useEffect: function(e, t) {
          return $ = "useEffect", Fe(), ae(), dp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return $ = "useImperativeHandle", Fe(), ae(), vm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return $ = "useInsertionEffect", Fe(), ae(), dm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return $ = "useLayoutEffect", Fe(), ae(), pm(e, t);
        },
        useMemo: function(e, t) {
          $ = "useMemo", Fe(), ae();
          var a = ce.current;
          ce.current = _i;
          try {
            return ym(e, t);
          } finally {
            ce.current = a;
          }
        },
        useReducer: function(e, t, a) {
          $ = "useReducer", Fe(), ae();
          var i = ce.current;
          ce.current = _i;
          try {
            return W1(e, t, a);
          } finally {
            ce.current = i;
          }
        },
        useRef: function(e) {
          return $ = "useRef", Fe(), ae(), sm();
        },
        useState: function(e) {
          $ = "useState", Fe(), ae();
          var t = ce.current;
          ce.current = _i;
          try {
            return Z1(e);
          } finally {
            ce.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return $ = "useDebugValue", Fe(), ae(), hm();
        },
        useDeferredValue: function(e) {
          return $ = "useDeferredValue", Fe(), ae(), s4(e);
        },
        useTransition: function() {
          return $ = "useTransition", Fe(), ae(), d4();
        },
        useMutableSource: function(e, t, a) {
          return $ = "useMutableSource", Fe(), ae(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return $ = "useSyncExternalStore", Fe(), ae(), um(e, t);
        },
        useId: function() {
          return $ = "useId", Fe(), ae(), gm();
        },
        unstable_isNewReconciler: te
      }, Sm = {
        readContext: function(e) {
          return l0(), bn(e);
        },
        useCallback: function(e, t) {
          return $ = "useCallback", Fe(), ae(), mm(e, t);
        },
        useContext: function(e) {
          return $ = "useContext", Fe(), ae(), bn(e);
        },
        useEffect: function(e, t) {
          return $ = "useEffect", Fe(), ae(), dp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return $ = "useImperativeHandle", Fe(), ae(), vm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return $ = "useInsertionEffect", Fe(), ae(), dm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return $ = "useLayoutEffect", Fe(), ae(), pm(e, t);
        },
        useMemo: function(e, t) {
          $ = "useMemo", Fe(), ae();
          var a = ce.current;
          ce.current = _i;
          try {
            return ym(e, t);
          } finally {
            ce.current = a;
          }
        },
        useReducer: function(e, t, a) {
          $ = "useReducer", Fe(), ae();
          var i = ce.current;
          ce.current = _i;
          try {
            return Q1(e, t, a);
          } finally {
            ce.current = i;
          }
        },
        useRef: function(e) {
          return $ = "useRef", Fe(), ae(), sm();
        },
        useState: function(e) {
          $ = "useState", Fe(), ae();
          var t = ce.current;
          ce.current = _i;
          try {
            return q1(e);
          } finally {
            ce.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return $ = "useDebugValue", Fe(), ae(), hm();
        },
        useDeferredValue: function(e) {
          return $ = "useDeferredValue", Fe(), ae(), c4(e);
        },
        useTransition: function() {
          return $ = "useTransition", Fe(), ae(), p4();
        },
        useMutableSource: function(e, t, a) {
          return $ = "useMutableSource", Fe(), ae(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return $ = "useSyncExternalStore", Fe(), ae(), um(e, t);
        },
        useId: function() {
          return $ = "useId", Fe(), ae(), gm();
        },
        unstable_isNewReconciler: te
      };
    }
    var no = S.unstable_now, T4 = 0, Em = -1, pp = -1, xm = -1, u0 = !1, Tm = !1;
    function R4() {
      return u0;
    }
    function YE() {
      Tm = !0;
    }
    function WE() {
      u0 = !1, Tm = !1;
    }
    function QE() {
      u0 = Tm, Tm = !1;
    }
    function w4() {
      return T4;
    }
    function _4() {
      T4 = no();
    }
    function o0(e) {
      pp = no(), e.actualStartTime < 0 && (e.actualStartTime = no());
    }
    function b4(e) {
      pp = -1;
    }
    function Rm(e, t) {
      if (pp >= 0) {
        var a = no() - pp;
        e.actualDuration += a, t && (e.selfBaseDuration = a), pp = -1;
      }
    }
    function il(e) {
      if (Em >= 0) {
        var t = no() - Em;
        Em = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case I:
              var i = a.stateNode;
              i.effectDuration += t;
              return;
            case Ae:
              var u = a.stateNode;
              u.effectDuration += t;
              return;
          }
          a = a.return;
        }
      }
    }
    function s0(e) {
      if (xm >= 0) {
        var t = no() - xm;
        xm = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case I:
              var i = a.stateNode;
              i !== null && (i.passiveEffectDuration += t);
              return;
            case Ae:
              var u = a.stateNode;
              u !== null && (u.passiveEffectDuration += t);
              return;
          }
          a = a.return;
        }
      }
    }
    function ll() {
      Em = no();
    }
    function c0() {
      xm = no();
    }
    function f0(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function bi(e, t) {
      if (e && e.defaultProps) {
        var a = qe({}, t), i = e.defaultProps;
        for (var u in i)
          a[u] === void 0 && (a[u] = i[u]);
        return a;
      }
      return t;
    }
    var d0 = {}, p0, v0, h0, m0, y0, D4, wm, g0, C0, S0, vp;
    {
      p0 = /* @__PURE__ */ new Set(), v0 = /* @__PURE__ */ new Set(), h0 = /* @__PURE__ */ new Set(), m0 = /* @__PURE__ */ new Set(), g0 = /* @__PURE__ */ new Set(), y0 = /* @__PURE__ */ new Set(), C0 = /* @__PURE__ */ new Set(), S0 = /* @__PURE__ */ new Set(), vp = /* @__PURE__ */ new Set();
      var k4 = /* @__PURE__ */ new Set();
      wm = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var a = t + "_" + e;
          k4.has(a) || (k4.add(a), y("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, D4 = function(e, t) {
        if (t === void 0) {
          var a = Ct(e) || "Component";
          y0.has(a) || (y0.add(a), y("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", a));
        }
      }, Object.defineProperty(d0, "_processChildContext", {
        enumerable: !1,
        value: function() {
          throw new Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).");
        }
      }), Object.freeze(d0);
    }
    function E0(e, t, a, i) {
      var u = e.memoizedState, s = a(i, u);
      {
        if (e.mode & Xe) {
          rn(!0);
          try {
            s = a(i, u);
          } finally {
            rn(!1);
          }
        }
        D4(t, s);
      }
      var f = s == null ? u : qe({}, u, s);
      if (e.memoizedState = f, e.lanes === W) {
        var p = e.updateQueue;
        p.baseState = f;
      }
    }
    var x0 = {
      isMounted: Pr,
      enqueueSetState: function(e, t, a) {
        var i = ra(e), u = Qr(), s = lo(i), f = Wl(u, s);
        f.payload = t, a != null && (wm(a, "setState"), f.callback = a);
        var p = Ku(i, f, s);
        p !== null && (Bn(p, i, s, u), em(p, i, s)), Ho(i, s);
      },
      enqueueReplaceState: function(e, t, a) {
        var i = ra(e), u = Qr(), s = lo(i), f = Wl(u, s);
        f.tag = W2, f.payload = t, a != null && (wm(a, "replaceState"), f.callback = a);
        var p = Ku(i, f, s);
        p !== null && (Bn(p, i, s, u), em(p, i, s)), Ho(i, s);
      },
      enqueueForceUpdate: function(e, t) {
        var a = ra(e), i = Qr(), u = lo(a), s = Wl(i, u);
        s.tag = Xh, t != null && (wm(t, "forceUpdate"), s.callback = t);
        var f = Ku(a, s, u);
        f !== null && (Bn(f, a, u, i), em(f, a, u)), rc(a, u);
      }
    };
    function N4(e, t, a, i, u, s, f) {
      var p = e.stateNode;
      if (typeof p.shouldComponentUpdate == "function") {
        var h = p.shouldComponentUpdate(i, s, f);
        {
          if (e.mode & Xe) {
            rn(!0);
            try {
              h = p.shouldComponentUpdate(i, s, f);
            } finally {
              rn(!1);
            }
          }
          h === void 0 && y("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", Ct(t) || "Component");
        }
        return h;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !Oe(a, i) || !Oe(u, s) : !0;
    }
    function GE(e, t, a) {
      var i = e.stateNode;
      {
        var u = Ct(t) || "Component", s = i.render;
        s || (t.prototype && typeof t.prototype.render == "function" ? y("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", u) : y("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", u)), i.getInitialState && !i.getInitialState.isReactClassApproved && !i.state && y("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", u), i.getDefaultProps && !i.getDefaultProps.isReactClassApproved && y("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", u), i.propTypes && y("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", u), i.contextType && y("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", u), t.childContextTypes && !vp.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & Xe) === ge && (vp.add(t), y(`%s uses the legacy childContextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() instead

.Learn more about this warning here: https://reactjs.org/link/legacy-context`, u)), t.contextTypes && !vp.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & Xe) === ge && (vp.add(t), y(`%s uses the legacy contextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() with static contextType instead.

Learn more about this warning here: https://reactjs.org/link/legacy-context`, u)), i.contextTypes && y("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", u), t.contextType && t.contextTypes && !C0.has(t) && (C0.add(t), y("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", u)), typeof i.componentShouldUpdate == "function" && y("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", u), t.prototype && t.prototype.isPureReactComponent && typeof i.shouldComponentUpdate < "u" && y("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", Ct(t) || "A pure component"), typeof i.componentDidUnmount == "function" && y("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", u), typeof i.componentDidReceiveProps == "function" && y("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", u), typeof i.componentWillRecieveProps == "function" && y("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", u), typeof i.UNSAFE_componentWillRecieveProps == "function" && y("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", u);
        var f = i.props !== a;
        i.props !== void 0 && f && y("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", u, u), i.defaultProps && y("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", u, u), typeof i.getSnapshotBeforeUpdate == "function" && typeof i.componentDidUpdate != "function" && !h0.has(t) && (h0.add(t), y("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", Ct(t))), typeof i.getDerivedStateFromProps == "function" && y("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof i.getDerivedStateFromError == "function" && y("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof t.getSnapshotBeforeUpdate == "function" && y("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", u);
        var p = i.state;
        p && (typeof p != "object" || En(p)) && y("%s.state: must be set to an object or null", u), typeof i.getChildContext == "function" && typeof t.childContextTypes != "object" && y("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", u);
      }
    }
    function L4(e, t) {
      t.updater = x0, e.stateNode = t, hu(t, e), t._reactInternalInstance = d0;
    }
    function O4(e, t, a) {
      var i = !1, u = ja, s = ja, f = t.contextType;
      if ("contextType" in t) {
        var p = (
          // Allow null for conditional declaration
          f === null || f !== void 0 && f.$$typeof === Z && f._context === void 0
        );
        if (!p && !S0.has(t)) {
          S0.add(t);
          var h = "";
          f === void 0 ? h = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof f != "object" ? h = " However, it is set to a " + typeof f + "." : f.$$typeof === R ? h = " Did you accidentally pass the Context.Provider instead?" : f._context !== void 0 ? h = " Did you accidentally pass the Context.Consumer instead?" : h = " However, it is set to an object with keys {" + Object.keys(f).join(", ") + "}.", y("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", Ct(t) || "Component", h);
        }
      }
      if (typeof f == "object" && f !== null)
        s = bn(f);
      else {
        u = qc(e, t, !0);
        var C = t.contextTypes;
        i = C != null, s = i ? Xc(e, u) : ja;
      }
      var E = new t(a, s);
      if (e.mode & Xe) {
        rn(!0);
        try {
          E = new t(a, s);
        } finally {
          rn(!1);
        }
      }
      var N = e.memoizedState = E.state !== null && E.state !== void 0 ? E.state : null;
      L4(e, E);
      {
        if (typeof t.getDerivedStateFromProps == "function" && N === null) {
          var D = Ct(t) || "Component";
          v0.has(D) || (v0.add(D), y("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", D, E.state === null ? "null" : "undefined", D));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof E.getSnapshotBeforeUpdate == "function") {
          var z = null, H = null, P = null;
          if (typeof E.componentWillMount == "function" && E.componentWillMount.__suppressDeprecationWarning !== !0 ? z = "componentWillMount" : typeof E.UNSAFE_componentWillMount == "function" && (z = "UNSAFE_componentWillMount"), typeof E.componentWillReceiveProps == "function" && E.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? H = "componentWillReceiveProps" : typeof E.UNSAFE_componentWillReceiveProps == "function" && (H = "UNSAFE_componentWillReceiveProps"), typeof E.componentWillUpdate == "function" && E.componentWillUpdate.__suppressDeprecationWarning !== !0 ? P = "componentWillUpdate" : typeof E.UNSAFE_componentWillUpdate == "function" && (P = "UNSAFE_componentWillUpdate"), z !== null || H !== null || P !== null) {
            var le = Ct(t) || "Component", De = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            m0.has(le) || (m0.add(le), y(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, le, De, z !== null ? `
  ` + z : "", H !== null ? `
  ` + H : "", P !== null ? `
  ` + P : ""));
          }
        }
      }
      return i && E2(e, u, s), E;
    }
    function ZE(e, t) {
      var a = t.state;
      typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), a !== t.state && (y("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", Pe(e) || "Component"), x0.enqueueReplaceState(t, t.state, null));
    }
    function M4(e, t, a, i) {
      var u = t.state;
      if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, i), t.state !== u) {
        {
          var s = Pe(e) || "Component";
          p0.has(s) || (p0.add(s), y("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", s));
        }
        x0.enqueueReplaceState(t, t.state, null);
      }
    }
    function T0(e, t, a, i) {
      GE(e, t, a);
      var u = e.stateNode;
      u.props = a, u.state = e.memoizedState, u.refs = {}, O1(e);
      var s = t.contextType;
      if (typeof s == "object" && s !== null)
        u.context = bn(s);
      else {
        var f = qc(e, t, !0);
        u.context = Xc(e, f);
      }
      {
        if (u.state === a) {
          var p = Ct(t) || "Component";
          g0.has(p) || (g0.add(p), y("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", p));
        }
        e.mode & Xe && Ri.recordLegacyContextWarning(e, u), Ri.recordUnsafeLifecycleWarnings(e, u);
      }
      u.state = e.memoizedState;
      var h = t.getDerivedStateFromProps;
      if (typeof h == "function" && (E0(e, t, h, a), u.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof u.getSnapshotBeforeUpdate != "function" && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (ZE(e, u), tm(e, a, u, i), u.state = e.memoizedState), typeof u.componentDidMount == "function") {
        var C = Ie;
        C |= yr, (e.mode & $r) !== ge && (C |= gr), e.flags |= C;
      }
    }
    function qE(e, t, a, i) {
      var u = e.stateNode, s = e.memoizedProps;
      u.props = s;
      var f = u.context, p = t.contextType, h = ja;
      if (typeof p == "object" && p !== null)
        h = bn(p);
      else {
        var C = qc(e, t, !0);
        h = Xc(e, C);
      }
      var E = t.getDerivedStateFromProps, N = typeof E == "function" || typeof u.getSnapshotBeforeUpdate == "function";
      !N && (typeof u.UNSAFE_componentWillReceiveProps == "function" || typeof u.componentWillReceiveProps == "function") && (s !== a || f !== h) && M4(e, u, a, h), G2();
      var D = e.memoizedState, z = u.state = D;
      if (tm(e, a, u, i), z = e.memoizedState, s === a && D === z && !zh() && !nm()) {
        if (typeof u.componentDidMount == "function") {
          var H = Ie;
          H |= yr, (e.mode & $r) !== ge && (H |= gr), e.flags |= H;
        }
        return !1;
      }
      typeof E == "function" && (E0(e, t, E, a), z = e.memoizedState);
      var P = nm() || N4(e, t, s, a, D, z, h);
      if (P) {
        if (!N && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function") {
          var le = Ie;
          le |= yr, (e.mode & $r) !== ge && (le |= gr), e.flags |= le;
        }
      } else {
        if (typeof u.componentDidMount == "function") {
          var De = Ie;
          De |= yr, (e.mode & $r) !== ge && (De |= gr), e.flags |= De;
        }
        e.memoizedProps = a, e.memoizedState = z;
      }
      return u.props = a, u.state = z, u.context = h, P;
    }
    function XE(e, t, a, i, u) {
      var s = t.stateNode;
      Q2(e, t);
      var f = t.memoizedProps, p = t.type === t.elementType ? f : bi(t.type, f);
      s.props = p;
      var h = t.pendingProps, C = s.context, E = a.contextType, N = ja;
      if (typeof E == "object" && E !== null)
        N = bn(E);
      else {
        var D = qc(t, a, !0);
        N = Xc(t, D);
      }
      var z = a.getDerivedStateFromProps, H = typeof z == "function" || typeof s.getSnapshotBeforeUpdate == "function";
      !H && (typeof s.UNSAFE_componentWillReceiveProps == "function" || typeof s.componentWillReceiveProps == "function") && (f !== h || C !== N) && M4(t, s, i, N), G2();
      var P = t.memoizedState, le = s.state = P;
      if (tm(t, i, s, u), le = t.memoizedState, f === h && P === le && !zh() && !nm() && !Ne)
        return typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || P !== e.memoizedState) && (t.flags |= Ie), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || P !== e.memoizedState) && (t.flags |= aa), !1;
      typeof z == "function" && (E0(t, a, z, i), le = t.memoizedState);
      var De = nm() || N4(t, a, p, i, P, le, N) || // TODO: In some cases, we'll end up checking if context has changed twice,
      // both before and after `shouldComponentUpdate` has been called. Not ideal,
      // but I'm loath to refactor this function. This only happens for memoized
      // components so it's not that common.
      Ne;
      return De ? (!H && (typeof s.UNSAFE_componentWillUpdate == "function" || typeof s.componentWillUpdate == "function") && (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(i, le, N), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(i, le, N)), typeof s.componentDidUpdate == "function" && (t.flags |= Ie), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= aa)) : (typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || P !== e.memoizedState) && (t.flags |= Ie), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || P !== e.memoizedState) && (t.flags |= aa), t.memoizedProps = i, t.memoizedState = le), s.props = i, s.state = le, s.context = N, De;
    }
    function hs(e, t) {
      return {
        value: e,
        source: t,
        stack: kf(t),
        digest: null
      };
    }
    function R0(e, t, a) {
      return {
        value: e,
        source: null,
        stack: a ?? null,
        digest: t ?? null
      };
    }
    function KE(e, t) {
      return !0;
    }
    function w0(e, t) {
      try {
        var a = KE(e, t);
        if (a === !1)
          return;
        var i = t.value, u = t.source, s = t.stack, f = s !== null ? s : "";
        if (i != null && i._suppressLogging) {
          if (e.tag === F)
            return;
          console.error(i);
        }
        var p = u ? Pe(u) : null, h = p ? "The above error occurred in the <" + p + "> component:" : "The above error occurred in one of your React components:", C;
        if (e.tag === I)
          C = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
        else {
          var E = Pe(e) || "Anonymous";
          C = "React will try to recreate this component tree from scratch " + ("using the error boundary you provided, " + E + ".");
        }
        var N = h + `
` + f + `

` + ("" + C);
        console.error(N);
      } catch (D) {
        setTimeout(function() {
          throw D;
        });
      }
    }
    var JE = typeof WeakMap == "function" ? WeakMap : Map;
    function U4(e, t, a) {
      var i = Wl(Dt, a);
      i.tag = N1, i.payload = {
        element: null
      };
      var u = t.value;
      return i.callback = function() {
        Y6(u), w0(e, t);
      }, i;
    }
    function _0(e, t, a) {
      var i = Wl(Dt, a);
      i.tag = N1;
      var u = e.type.getDerivedStateFromError;
      if (typeof u == "function") {
        var s = t.value;
        i.payload = function() {
          return u(s);
        }, i.callback = function() {
          YC(e), w0(e, t);
        };
      }
      var f = e.stateNode;
      return f !== null && typeof f.componentDidCatch == "function" && (i.callback = function() {
        YC(e), w0(e, t), typeof u != "function" && $6(this);
        var h = t.value, C = t.stack;
        this.componentDidCatch(h, {
          componentStack: C !== null ? C : ""
        }), typeof u != "function" && (Rr(e.lanes, Te) || y("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", Pe(e) || "Unknown"));
      }), i;
    }
    function j4(e, t, a) {
      var i = e.pingCache, u;
      if (i === null ? (i = e.pingCache = new JE(), u = /* @__PURE__ */ new Set(), i.set(t, u)) : (u = i.get(t), u === void 0 && (u = /* @__PURE__ */ new Set(), i.set(t, u))), !u.has(a)) {
        u.add(a);
        var s = W6.bind(null, e, t, a);
        Br && Lp(e, a), t.then(s, s);
      }
    }
    function e9(e, t, a, i) {
      var u = e.updateQueue;
      if (u === null) {
        var s = /* @__PURE__ */ new Set();
        s.add(a), e.updateQueue = s;
      } else
        u.add(a);
    }
    function t9(e, t) {
      var a = e.tag;
      if ((e.mode & Se) === ge && (a === V || a === Re || a === $e)) {
        var i = e.alternate;
        i ? (e.updateQueue = i.updateQueue, e.memoizedState = i.memoizedState, e.lanes = i.lanes) : (e.updateQueue = null, e.memoizedState = null);
      }
    }
    function z4(e) {
      var t = e;
      do {
        if (t.tag === Ye && jE(t))
          return t;
        t = t.return;
      } while (t !== null);
      return null;
    }
    function A4(e, t, a, i, u) {
      if ((e.mode & Se) === ge) {
        if (e === t)
          e.flags |= Tn;
        else {
          if (e.flags |= je, a.flags |= jo, a.flags &= ~(Ys | Fr), a.tag === F) {
            var s = a.alternate;
            if (s === null)
              a.tag = mn;
            else {
              var f = Wl(Dt, Te);
              f.tag = Xh, Ku(a, f, Te);
            }
          }
          a.lanes = Be(a.lanes, Te);
        }
        return e;
      }
      return e.flags |= Tn, e.lanes = u, e;
    }
    function n9(e, t, a, i, u) {
      if (a.flags |= Fr, Br && Lp(e, u), i !== null && typeof i == "object" && typeof i.then == "function") {
        var s = i;
        t9(a), rr() && a.mode & Se && D2();
        var f = z4(t);
        if (f !== null) {
          f.flags &= ~It, A4(f, t, a, e, u), f.mode & Se && j4(e, s, u), e9(f, e, s);
          return;
        } else {
          if (!yd(u)) {
            j4(e, s, u), ig();
            return;
          }
          var p = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          i = p;
        }
      } else if (rr() && a.mode & Se) {
        D2();
        var h = z4(t);
        if (h !== null) {
          (h.flags & Tn) === _e && (h.flags |= It), A4(h, t, a, e, u), g1(hs(i, a));
          return;
        }
      }
      i = hs(i, a), j6(i);
      var C = t;
      do {
        switch (C.tag) {
          case I: {
            var E = i;
            C.flags |= Tn;
            var N = ku(u);
            C.lanes = Be(C.lanes, N);
            var D = U4(C, E, N);
            M1(C, D);
            return;
          }
          case F:
            var z = i, H = C.type, P = C.stateNode;
            if ((C.flags & je) === _e && (typeof H.getDerivedStateFromError == "function" || P !== null && typeof P.componentDidCatch == "function" && !zC(P))) {
              C.flags |= Tn;
              var le = ku(u);
              C.lanes = Be(C.lanes, le);
              var De = _0(C, z, le);
              M1(C, De);
              return;
            }
            break;
        }
        C = C.return;
      } while (C !== null);
    }
    function r9() {
      return null;
    }
    var hp = g.ReactCurrentOwner, Di = !1, b0, mp, D0, k0, N0, ms, L0, _m, yp;
    b0 = {}, mp = {}, D0 = {}, k0 = {}, N0 = {}, ms = !1, L0 = {}, _m = {}, yp = {};
    function Yr(e, t, a, i) {
      e === null ? t.child = V2(t, null, a, i) : t.child = tf(t, e.child, a, i);
    }
    function a9(e, t, a, i) {
      t.child = tf(t, e.child, null, i), t.child = tf(t, null, a, i);
    }
    function H4(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && xi(
          s,
          i,
          // Resolved props
          "prop",
          Ct(a)
        );
      }
      var f = a.render, p = t.ref, h, C;
      rf(t, u), Cu(t);
      {
        if (hp.current = t, Na(!0), h = cf(e, t, f, i, p, u), C = ff(), t.mode & Xe) {
          rn(!0);
          try {
            h = cf(e, t, f, i, p, u), C = ff();
          } finally {
            rn(!1);
          }
        }
        Na(!1);
      }
      return Er(), e !== null && !Di ? (e4(e, t, u), Ql(e, t, u)) : (rr() && C && d1(t), t.flags |= Bi, Yr(e, t, h, u), t.child);
    }
    function F4(e, t, a, i, u) {
      if (e === null) {
        var s = a.type;
        if (s8(s) && a.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        a.defaultProps === void 0) {
          var f = s;
          return f = Cf(s), t.tag = $e, t.type = f, U0(t, s), V4(e, t, f, i, u);
        }
        {
          var p = s.propTypes;
          if (p && xi(
            p,
            i,
            // Resolved props
            "prop",
            Ct(s)
          ), a.defaultProps !== void 0) {
            var h = Ct(s) || "Unknown";
            yp[h] || (y("%s: Support for defaultProps will be removed from memo components in a future major release. Use JavaScript default parameters instead.", h), yp[h] = !0);
          }
        }
        var C = mg(a.type, null, i, t, t.mode, u);
        return C.ref = t.ref, C.return = t, t.child = C, C;
      }
      {
        var E = a.type, N = E.propTypes;
        N && xi(
          N,
          i,
          // Resolved props
          "prop",
          Ct(E)
        );
      }
      var D = e.child, z = V0(e, u);
      if (!z) {
        var H = D.memoizedProps, P = a.compare;
        if (P = P !== null ? P : Oe, P(H, i) && e.ref === t.ref)
          return Ql(e, t, u);
      }
      t.flags |= Bi;
      var le = Es(D, i);
      return le.ref = t.ref, le.return = t, t.child = le, le;
    }
    function V4(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = t.elementType;
        if (s.$$typeof === Me) {
          var f = s, p = f._payload, h = f._init;
          try {
            s = h(p);
          } catch {
            s = null;
          }
          var C = s && s.propTypes;
          C && xi(
            C,
            i,
            // Resolved (SimpleMemoComponent has no defaultProps)
            "prop",
            Ct(s)
          );
        }
      }
      if (e !== null) {
        var E = e.memoizedProps;
        if (Oe(E, i) && e.ref === t.ref && // Prevent bailout if the implementation changed due to hot reload.
        t.type === e.type)
          if (Di = !1, t.pendingProps = i = E, V0(e, u))
            (e.flags & jo) !== _e && (Di = !0);
          else return t.lanes = e.lanes, Ql(e, t, u);
      }
      return O0(e, t, a, i, u);
    }
    function P4(e, t, a) {
      var i = t.pendingProps, u = i.children, s = e !== null ? e.memoizedState : null;
      if (i.mode === "hidden" || fe)
        if ((t.mode & Se) === ge) {
          var f = {
            baseLanes: W,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = f, Fm(t, a);
        } else if (Rr(a, qn)) {
          var N = {
            baseLanes: W,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = N;
          var D = s !== null ? s.baseLanes : a;
          Fm(t, D);
        } else {
          var p = null, h;
          if (s !== null) {
            var C = s.baseLanes;
            h = Be(C, a);
          } else
            h = a;
          t.lanes = t.childLanes = qn;
          var E = {
            baseLanes: h,
            cachePool: p,
            transitions: null
          };
          return t.memoizedState = E, t.updateQueue = null, Fm(t, h), null;
        }
      else {
        var z;
        s !== null ? (z = Be(s.baseLanes, a), t.memoizedState = null) : z = a, Fm(t, z);
      }
      return Yr(e, t, u, a), t.child;
    }
    function i9(e, t, a) {
      var i = t.pendingProps;
      return Yr(e, t, i, a), t.child;
    }
    function l9(e, t, a) {
      var i = t.pendingProps.children;
      return Yr(e, t, i, a), t.child;
    }
    function u9(e, t, a) {
      {
        t.flags |= Ie;
        {
          var i = t.stateNode;
          i.effectDuration = 0, i.passiveEffectDuration = 0;
        }
      }
      var u = t.pendingProps, s = u.children;
      return Yr(e, t, s, a), t.child;
    }
    function B4(e, t) {
      var a = t.ref;
      (e === null && a !== null || e !== null && e.ref !== a) && (t.flags |= mr, t.flags |= ad);
    }
    function O0(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && xi(
          s,
          i,
          // Resolved props
          "prop",
          Ct(a)
        );
      }
      var f;
      {
        var p = qc(t, a, !0);
        f = Xc(t, p);
      }
      var h, C;
      rf(t, u), Cu(t);
      {
        if (hp.current = t, Na(!0), h = cf(e, t, a, i, f, u), C = ff(), t.mode & Xe) {
          rn(!0);
          try {
            h = cf(e, t, a, i, f, u), C = ff();
          } finally {
            rn(!1);
          }
        }
        Na(!1);
      }
      return Er(), e !== null && !Di ? (e4(e, t, u), Ql(e, t, u)) : (rr() && C && d1(t), t.flags |= Bi, Yr(e, t, h, u), t.child);
    }
    function $4(e, t, a, i, u) {
      {
        switch (R8(t)) {
          case !1: {
            var s = t.stateNode, f = t.type, p = new f(t.memoizedProps, s.context), h = p.state;
            s.updater.enqueueSetState(s, h, null);
            break;
          }
          case !0: {
            t.flags |= je, t.flags |= Tn;
            var C = new Error("Simulated error coming from DevTools"), E = ku(u);
            t.lanes = Be(t.lanes, E);
            var N = _0(t, hs(C, t), E);
            M1(t, N);
            break;
          }
        }
        if (t.type !== t.elementType) {
          var D = a.propTypes;
          D && xi(
            D,
            i,
            // Resolved props
            "prop",
            Ct(a)
          );
        }
      }
      var z;
      tl(a) ? (z = !0, Hh(t)) : z = !1, rf(t, u);
      var H = t.stateNode, P;
      H === null ? (Dm(e, t), O4(t, a, i), T0(t, a, i, u), P = !0) : e === null ? P = qE(t, a, i, u) : P = XE(e, t, a, i, u);
      var le = M0(e, t, a, P, z, u);
      {
        var De = t.stateNode;
        P && De.props !== i && (ms || y("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", Pe(t) || "a component"), ms = !0);
      }
      return le;
    }
    function M0(e, t, a, i, u, s) {
      B4(e, t);
      var f = (t.flags & je) !== _e;
      if (!i && !f)
        return u && R2(t, a, !1), Ql(e, t, s);
      var p = t.stateNode;
      hp.current = t;
      var h;
      if (f && typeof a.getDerivedStateFromError != "function")
        h = null, b4();
      else {
        Cu(t);
        {
          if (Na(!0), h = p.render(), t.mode & Xe) {
            rn(!0);
            try {
              p.render();
            } finally {
              rn(!1);
            }
          }
          Na(!1);
        }
        Er();
      }
      return t.flags |= Bi, e !== null && f ? a9(e, t, h, s) : Yr(e, t, h, s), t.memoizedState = p.state, u && R2(t, a, !0), t.child;
    }
    function I4(e) {
      var t = e.stateNode;
      t.pendingContext ? x2(e, t.pendingContext, t.pendingContext !== t.context) : t.context && x2(e, t.context, !1), U1(e, t.containerInfo);
    }
    function o9(e, t, a) {
      if (I4(t), e === null)
        throw new Error("Should have a current fiber. This is a bug in React.");
      var i = t.pendingProps, u = t.memoizedState, s = u.element;
      Q2(e, t), tm(t, i, null, a);
      var f = t.memoizedState;
      t.stateNode;
      var p = f.element;
      if (u.isDehydrated) {
        var h = {
          element: p,
          isDehydrated: !1,
          cache: f.cache,
          pendingSuspenseBoundaries: f.pendingSuspenseBoundaries,
          transitions: f.transitions
        }, C = t.updateQueue;
        if (C.baseState = h, t.memoizedState = h, t.flags & It) {
          var E = hs(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."), t);
          return Y4(e, t, p, a, E);
        } else if (p !== s) {
          var N = hs(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
          return Y4(e, t, p, a, N);
        } else {
          fE(t);
          var D = V2(t, null, p, a);
          t.child = D;
          for (var z = D; z; )
            z.flags = z.flags & ~Ot | ia, z = z.sibling;
        }
      } else {
        if (ef(), p === s)
          return Ql(e, t, a);
        Yr(e, t, p, a);
      }
      return t.child;
    }
    function Y4(e, t, a, i, u) {
      return ef(), g1(u), t.flags |= It, Yr(e, t, a, i), t.child;
    }
    function s9(e, t, a) {
      X2(t), e === null && y1(t);
      var i = t.type, u = t.pendingProps, s = e !== null ? e.memoizedProps : null, f = u.children, p = Ky(i, u);
      return p ? f = null : s !== null && Ky(i, s) && (t.flags |= vt), B4(e, t), Yr(e, t, f, a), t.child;
    }
    function c9(e, t) {
      return e === null && y1(t), null;
    }
    function f9(e, t, a, i) {
      Dm(e, t);
      var u = t.pendingProps, s = a, f = s._payload, p = s._init, h = p(f);
      t.type = h;
      var C = t.tag = c8(h), E = bi(h, u), N;
      switch (C) {
        case V:
          return U0(t, h), t.type = h = Cf(h), N = O0(null, t, h, E, i), N;
        case F:
          return t.type = h = cg(h), N = $4(null, t, h, E, i), N;
        case Re:
          return t.type = h = fg(h), N = H4(null, t, h, E, i), N;
        case mt: {
          if (t.type !== t.elementType) {
            var D = h.propTypes;
            D && xi(
              D,
              E,
              // Resolved for outer only
              "prop",
              Ct(h)
            );
          }
          return N = F4(
            null,
            t,
            h,
            bi(h.type, E),
            // The inner type can have defaults too
            i
          ), N;
        }
      }
      var z = "";
      throw h !== null && typeof h == "object" && h.$$typeof === Me && (z = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + h + ". " + ("Lazy element type must resolve to a class or function." + z));
    }
    function d9(e, t, a, i, u) {
      Dm(e, t), t.tag = F;
      var s;
      return tl(a) ? (s = !0, Hh(t)) : s = !1, rf(t, u), O4(t, a, i), T0(t, a, i, u), M0(null, t, a, !0, s, u);
    }
    function p9(e, t, a, i) {
      Dm(e, t);
      var u = t.pendingProps, s;
      {
        var f = qc(t, a, !1);
        s = Xc(t, f);
      }
      rf(t, i);
      var p, h;
      Cu(t);
      {
        if (a.prototype && typeof a.prototype.render == "function") {
          var C = Ct(a) || "Unknown";
          b0[C] || (y("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", C, C), b0[C] = !0);
        }
        t.mode & Xe && Ri.recordLegacyContextWarning(t, null), Na(!0), hp.current = t, p = cf(null, t, a, u, s, i), h = ff(), Na(!1);
      }
      if (Er(), t.flags |= Bi, typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0) {
        var E = Ct(a) || "Unknown";
        mp[E] || (y("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", E, E, E), mp[E] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0
      ) {
        {
          var N = Ct(a) || "Unknown";
          mp[N] || (y("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", N, N, N), mp[N] = !0);
        }
        t.tag = F, t.memoizedState = null, t.updateQueue = null;
        var D = !1;
        return tl(a) ? (D = !0, Hh(t)) : D = !1, t.memoizedState = p.state !== null && p.state !== void 0 ? p.state : null, O1(t), L4(t, p), T0(t, a, u, i), M0(null, t, a, !0, D, i);
      } else {
        if (t.tag = V, t.mode & Xe) {
          rn(!0);
          try {
            p = cf(null, t, a, u, s, i), h = ff();
          } finally {
            rn(!1);
          }
        }
        return rr() && h && d1(t), Yr(null, t, p, i), U0(t, a), t.child;
      }
    }
    function U0(e, t) {
      {
        if (t && t.childContextTypes && y("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), e.ref !== null) {
          var a = "", i = ta();
          i && (a += `

Check the render method of \`` + i + "`.");
          var u = i || "", s = e._debugSource;
          s && (u = s.fileName + ":" + s.lineNumber), N0[u] || (N0[u] = !0, y("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", a));
        }
        if (t.defaultProps !== void 0) {
          var f = Ct(t) || "Unknown";
          yp[f] || (y("%s: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.", f), yp[f] = !0);
        }
        if (typeof t.getDerivedStateFromProps == "function") {
          var p = Ct(t) || "Unknown";
          k0[p] || (y("%s: Function components do not support getDerivedStateFromProps.", p), k0[p] = !0);
        }
        if (typeof t.contextType == "object" && t.contextType !== null) {
          var h = Ct(t) || "Unknown";
          D0[h] || (y("%s: Function components do not support contextType.", h), D0[h] = !0);
        }
      }
    }
    var j0 = {
      dehydrated: null,
      treeContext: null,
      retryLane: an
    };
    function z0(e) {
      return {
        baseLanes: e,
        cachePool: r9(),
        transitions: null
      };
    }
    function v9(e, t) {
      var a = null;
      return {
        baseLanes: Be(e.baseLanes, t),
        cachePool: a,
        transitions: e.transitions
      };
    }
    function h9(e, t, a, i) {
      if (t !== null) {
        var u = t.memoizedState;
        if (u === null)
          return !1;
      }
      return A1(e, lp);
    }
    function m9(e, t) {
      return Yo(e.childLanes, t);
    }
    function W4(e, t, a) {
      var i = t.pendingProps;
      w8(t) && (t.flags |= je);
      var u = wi.current, s = !1, f = (t.flags & je) !== _e;
      if (f || h9(u, e) ? (s = !0, t.flags &= ~je) : (e === null || e.memoizedState !== null) && (u = UE(u, J2)), u = lf(u), eo(t, u), e === null) {
        y1(t);
        var p = t.memoizedState;
        if (p !== null) {
          var h = p.dehydrated;
          if (h !== null)
            return E9(t, h);
        }
        var C = i.children, E = i.fallback;
        if (s) {
          var N = y9(t, C, E, a), D = t.child;
          return D.memoizedState = z0(a), t.memoizedState = j0, N;
        } else
          return A0(t, C);
      } else {
        var z = e.memoizedState;
        if (z !== null) {
          var H = z.dehydrated;
          if (H !== null)
            return x9(e, t, f, i, H, z, a);
        }
        if (s) {
          var P = i.fallback, le = i.children, De = C9(e, t, le, P, a), Ee = t.child, rt = e.child.memoizedState;
          return Ee.memoizedState = rt === null ? z0(a) : v9(rt, a), Ee.childLanes = m9(e, a), t.memoizedState = j0, De;
        } else {
          var Je = i.children, M = g9(e, t, Je, a);
          return t.memoizedState = null, M;
        }
      }
    }
    function A0(e, t, a) {
      var i = e.mode, u = {
        mode: "visible",
        children: t
      }, s = H0(u, i);
      return s.return = e, e.child = s, s;
    }
    function y9(e, t, a, i) {
      var u = e.mode, s = e.child, f = {
        mode: "hidden",
        children: t
      }, p, h;
      return (u & Se) === ge && s !== null ? (p = s, p.childLanes = W, p.pendingProps = f, e.mode & ze && (p.actualDuration = 0, p.actualStartTime = -1, p.selfBaseDuration = 0, p.treeBaseDuration = 0), h = oo(a, u, i, null)) : (p = H0(f, u), h = oo(a, u, i, null)), p.return = e, h.return = e, p.sibling = h, e.child = p, h;
    }
    function H0(e, t, a) {
      return QC(e, t, W, null);
    }
    function Q4(e, t) {
      return Es(e, t);
    }
    function g9(e, t, a, i) {
      var u = e.child, s = u.sibling, f = Q4(u, {
        mode: "visible",
        children: a
      });
      if ((t.mode & Se) === ge && (f.lanes = i), f.return = t, f.sibling = null, s !== null) {
        var p = t.deletions;
        p === null ? (t.deletions = [s], t.flags |= ft) : p.push(s);
      }
      return t.child = f, f;
    }
    function C9(e, t, a, i, u) {
      var s = t.mode, f = e.child, p = f.sibling, h = {
        mode: "hidden",
        children: a
      }, C;
      if (
        // In legacy mode, we commit the primary tree as if it successfully
        // completed, even though it's in an inconsistent state.
        (s & Se) === ge && // Make sure we're on the second pass, i.e. the primary child fragment was
        // already cloned. In legacy mode, the only case where this isn't true is
        // when DevTools forces us to display a fallback; we skip the first render
        // pass entirely and go straight to rendering the fallback. (In Concurrent
        // Mode, SuspenseList can also trigger this scenario, but this is a legacy-
        // only codepath.)
        t.child !== f
      ) {
        var E = t.child;
        C = E, C.childLanes = W, C.pendingProps = h, t.mode & ze && (C.actualDuration = 0, C.actualStartTime = -1, C.selfBaseDuration = f.selfBaseDuration, C.treeBaseDuration = f.treeBaseDuration), t.deletions = null;
      } else
        C = Q4(f, h), C.subtreeFlags = f.subtreeFlags & On;
      var N;
      return p !== null ? N = Es(p, i) : (N = oo(i, s, u, null), N.flags |= Ot), N.return = t, C.return = t, C.sibling = N, t.child = C, N;
    }
    function bm(e, t, a, i) {
      i !== null && g1(i), tf(t, e.child, null, a);
      var u = t.pendingProps, s = u.children, f = A0(t, s);
      return f.flags |= Ot, t.memoizedState = null, f;
    }
    function S9(e, t, a, i, u) {
      var s = t.mode, f = {
        mode: "visible",
        children: a
      }, p = H0(f, s), h = oo(i, s, u, null);
      return h.flags |= Ot, p.return = t, h.return = t, p.sibling = h, t.child = p, (t.mode & Se) !== ge && tf(t, e.child, null, u), h;
    }
    function E9(e, t, a) {
      return (e.mode & Se) === ge ? (y("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = Te) : n1(t) ? e.lanes = yi : e.lanes = qn, null;
    }
    function x9(e, t, a, i, u, s, f) {
      if (a)
        if (t.flags & It) {
          t.flags &= ~It;
          var M = R0(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
          return bm(e, t, f, M);
        } else {
          if (t.memoizedState !== null)
            return t.child = e.child, t.flags |= je, null;
          var B = i.children, U = i.fallback, X = S9(e, t, B, U, f), de = t.child;
          return de.memoizedState = z0(f), t.memoizedState = j0, X;
        }
      else {
        if (sE(), (t.mode & Se) === ge)
          return bm(
            e,
            t,
            f,
            // TODO: When we delete legacy mode, we should make this error argument
            // required — every concurrent mode path that causes hydration to
            // de-opt to client rendering should have an error message.
            null
          );
        if (n1(u)) {
          var p, h, C;
          {
            var E = _5(u);
            p = E.digest, h = E.message, C = E.stack;
          }
          var N;
          h ? N = new Error(h) : N = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
          var D = R0(N, p, C);
          return bm(e, t, f, D);
        }
        var z = Rr(f, e.childLanes);
        if (Di || z) {
          var H = Hm();
          if (H !== null) {
            var P = Jv(H, f);
            if (P !== an && P !== s.retryLane) {
              s.retryLane = P;
              var le = Dt;
              ya(e, P), Bn(H, e, P, le);
            }
          }
          ig();
          var De = R0(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
          return bm(e, t, f, De);
        } else if (m2(u)) {
          t.flags |= je, t.child = e.child;
          var Ee = Q6.bind(null, e);
          return b5(u, Ee), null;
        } else {
          dE(t, u, s.treeContext);
          var rt = i.children, Je = A0(t, rt);
          return Je.flags |= ia, Je;
        }
      }
    }
    function G4(e, t, a) {
      e.lanes = Be(e.lanes, t);
      var i = e.alternate;
      i !== null && (i.lanes = Be(i.lanes, t)), D1(e.return, t, a);
    }
    function T9(e, t, a) {
      for (var i = t; i !== null; ) {
        if (i.tag === Ye) {
          var u = i.memoizedState;
          u !== null && G4(i, a, e);
        } else if (i.tag === dt)
          G4(i, a, e);
        else if (i.child !== null) {
          i.child.return = i, i = i.child;
          continue;
        }
        if (i === e)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return;
          i = i.return;
        }
        i.sibling.return = i.return, i = i.sibling;
      }
    }
    function R9(e) {
      for (var t = e, a = null; t !== null; ) {
        var i = t.alternate;
        i !== null && im(i) === null && (a = t), t = t.sibling;
      }
      return a;
    }
    function w9(e) {
      if (e !== void 0 && e !== "forwards" && e !== "backwards" && e !== "together" && !L0[e])
        if (L0[e] = !0, typeof e == "string")
          switch (e.toLowerCase()) {
            case "together":
            case "forwards":
            case "backwards": {
              y('"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.', e, e.toLowerCase());
              break;
            }
            case "forward":
            case "backward": {
              y('"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.', e, e.toLowerCase());
              break;
            }
            default:
              y('"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
              break;
          }
        else
          y('%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
    }
    function _9(e, t) {
      e !== void 0 && !_m[e] && (e !== "collapsed" && e !== "hidden" ? (_m[e] = !0, y('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && (_m[e] = !0, y('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
    }
    function Z4(e, t) {
      {
        var a = En(e), i = !a && typeof Ar(e) == "function";
        if (a || i) {
          var u = a ? "array" : "iterable";
          return y("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", u, t, u), !1;
        }
      }
      return !0;
    }
    function b9(e, t) {
      if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
        if (En(e)) {
          for (var a = 0; a < e.length; a++)
            if (!Z4(e[a], a))
              return;
        } else {
          var i = Ar(e);
          if (typeof i == "function") {
            var u = i.call(e);
            if (u)
              for (var s = u.next(), f = 0; !s.done; s = u.next()) {
                if (!Z4(s.value, f))
                  return;
                f++;
              }
          } else
            y('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?', t);
        }
    }
    function F0(e, t, a, i, u) {
      var s = e.memoizedState;
      s === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: i,
        tail: a,
        tailMode: u
      } : (s.isBackwards = t, s.rendering = null, s.renderingStartTime = 0, s.last = i, s.tail = a, s.tailMode = u);
    }
    function q4(e, t, a) {
      var i = t.pendingProps, u = i.revealOrder, s = i.tail, f = i.children;
      w9(u), _9(s, u), b9(f, u), Yr(e, t, f, a);
      var p = wi.current, h = A1(p, lp);
      if (h)
        p = H1(p, lp), t.flags |= je;
      else {
        var C = e !== null && (e.flags & je) !== _e;
        C && T9(t, t.child, a), p = lf(p);
      }
      if (eo(t, p), (t.mode & Se) === ge)
        t.memoizedState = null;
      else
        switch (u) {
          case "forwards": {
            var E = R9(t.child), N;
            E === null ? (N = t.child, t.child = null) : (N = E.sibling, E.sibling = null), F0(
              t,
              !1,
              // isBackwards
              N,
              E,
              s
            );
            break;
          }
          case "backwards": {
            var D = null, z = t.child;
            for (t.child = null; z !== null; ) {
              var H = z.alternate;
              if (H !== null && im(H) === null) {
                t.child = z;
                break;
              }
              var P = z.sibling;
              z.sibling = D, D = z, z = P;
            }
            F0(
              t,
              !0,
              // isBackwards
              D,
              null,
              // last
              s
            );
            break;
          }
          case "together": {
            F0(
              t,
              !1,
              // isBackwards
              null,
              // tail
              null,
              // last
              void 0
            );
            break;
          }
          default:
            t.memoizedState = null;
        }
      return t.child;
    }
    function D9(e, t, a) {
      U1(t, t.stateNode.containerInfo);
      var i = t.pendingProps;
      return e === null ? t.child = tf(t, null, i, a) : Yr(e, t, i, a), t.child;
    }
    var X4 = !1;
    function k9(e, t, a) {
      var i = t.type, u = i._context, s = t.pendingProps, f = t.memoizedProps, p = s.value;
      {
        "value" in s || X4 || (X4 = !0, y("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var h = t.type.propTypes;
        h && xi(h, s, "prop", "Context.Provider");
      }
      if ($2(t, u, p), f !== null) {
        var C = f.value;
        if (he(C, p)) {
          if (f.children === s.children && !zh())
            return Ql(e, t, a);
        } else
          wE(t, u, a);
      }
      var E = s.children;
      return Yr(e, t, E, a), t.child;
    }
    var K4 = !1;
    function N9(e, t, a) {
      var i = t.type;
      i._context === void 0 ? i !== i.Consumer && (K4 || (K4 = !0, y("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : i = i._context;
      var u = t.pendingProps, s = u.children;
      typeof s != "function" && y("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), rf(t, a);
      var f = bn(i);
      Cu(t);
      var p;
      return hp.current = t, Na(!0), p = s(f), Na(!1), Er(), t.flags |= Bi, Yr(e, t, p, a), t.child;
    }
    function gp() {
      Di = !0;
    }
    function Dm(e, t) {
      (t.mode & Se) === ge && e !== null && (e.alternate = null, t.alternate = null, t.flags |= Ot);
    }
    function Ql(e, t, a) {
      return e !== null && (t.dependencies = e.dependencies), b4(), Np(t.lanes), Rr(a, t.childLanes) ? (TE(e, t), t.child) : null;
    }
    function L9(e, t, a) {
      {
        var i = t.return;
        if (i === null)
          throw new Error("Cannot swap the root fiber.");
        if (e.alternate = null, t.alternate = null, a.index = t.index, a.sibling = t.sibling, a.return = t.return, a.ref = t.ref, t === i.child)
          i.child = a;
        else {
          var u = i.child;
          if (u === null)
            throw new Error("Expected parent to have a child.");
          for (; u.sibling !== t; )
            if (u = u.sibling, u === null)
              throw new Error("Expected to find the previous sibling.");
          u.sibling = a;
        }
        var s = i.deletions;
        return s === null ? (i.deletions = [e], i.flags |= ft) : s.push(e), a.flags |= Ot, a;
      }
    }
    function V0(e, t) {
      var a = e.lanes;
      return !!Rr(a, t);
    }
    function O9(e, t, a) {
      switch (t.tag) {
        case I:
          I4(t), t.stateNode, ef();
          break;
        case oe:
          X2(t);
          break;
        case F: {
          var i = t.type;
          tl(i) && Hh(t);
          break;
        }
        case K:
          U1(t, t.stateNode.containerInfo);
          break;
        case ke: {
          var u = t.memoizedProps.value, s = t.type._context;
          $2(t, s, u);
          break;
        }
        case Ae:
          {
            var f = Rr(a, t.childLanes);
            f && (t.flags |= Ie);
            {
              var p = t.stateNode;
              p.effectDuration = 0, p.passiveEffectDuration = 0;
            }
          }
          break;
        case Ye: {
          var h = t.memoizedState;
          if (h !== null) {
            if (h.dehydrated !== null)
              return eo(t, lf(wi.current)), t.flags |= je, null;
            var C = t.child, E = C.childLanes;
            if (Rr(a, E))
              return W4(e, t, a);
            eo(t, lf(wi.current));
            var N = Ql(e, t, a);
            return N !== null ? N.sibling : null;
          } else
            eo(t, lf(wi.current));
          break;
        }
        case dt: {
          var D = (e.flags & je) !== _e, z = Rr(a, t.childLanes);
          if (D) {
            if (z)
              return q4(e, t, a);
            t.flags |= je;
          }
          var H = t.memoizedState;
          if (H !== null && (H.rendering = null, H.tail = null, H.lastEffect = null), eo(t, wi.current), z)
            break;
          return null;
        }
        case He:
        case et:
          return t.lanes = W, P4(e, t, a);
      }
      return Ql(e, t, a);
    }
    function J4(e, t, a) {
      if (t._debugNeedsRemount && e !== null)
        return L9(e, t, mg(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
      if (e !== null) {
        var i = e.memoizedProps, u = t.pendingProps;
        if (i !== u || zh() || // Force a re-render if the implementation changed due to hot reload:
        t.type !== e.type)
          Di = !0;
        else {
          var s = V0(e, a);
          if (!s && // If this is the second pass of an error or suspense boundary, there
          // may not be work scheduled on `current`, so we check for this flag.
          (t.flags & je) === _e)
            return Di = !1, O9(e, t, a);
          (e.flags & jo) !== _e ? Di = !0 : Di = !1;
        }
      } else if (Di = !1, rr() && rE(t)) {
        var f = t.index, p = aE();
        b2(t, p, f);
      }
      switch (t.lanes = W, t.tag) {
        case ee:
          return p9(e, t, t.type, a);
        case Gt: {
          var h = t.elementType;
          return f9(e, t, h, a);
        }
        case V: {
          var C = t.type, E = t.pendingProps, N = t.elementType === C ? E : bi(C, E);
          return O0(e, t, C, N, a);
        }
        case F: {
          var D = t.type, z = t.pendingProps, H = t.elementType === D ? z : bi(D, z);
          return $4(e, t, D, H, a);
        }
        case I:
          return o9(e, t, a);
        case oe:
          return s9(e, t, a);
        case be:
          return c9(e, t);
        case Ye:
          return W4(e, t, a);
        case K:
          return D9(e, t, a);
        case Re: {
          var P = t.type, le = t.pendingProps, De = t.elementType === P ? le : bi(P, le);
          return H4(e, t, P, De, a);
        }
        case Qe:
          return i9(e, t, a);
        case at:
          return l9(e, t, a);
        case Ae:
          return u9(e, t, a);
        case ke:
          return k9(e, t, a);
        case kt:
          return N9(e, t, a);
        case mt: {
          var Ee = t.type, rt = t.pendingProps, Je = bi(Ee, rt);
          if (t.type !== t.elementType) {
            var M = Ee.propTypes;
            M && xi(
              M,
              Je,
              // Resolved for outer only
              "prop",
              Ct(Ee)
            );
          }
          return Je = bi(Ee.type, Je), F4(e, t, Ee, Je, a);
        }
        case $e:
          return V4(e, t, t.type, t.pendingProps, a);
        case mn: {
          var B = t.type, U = t.pendingProps, X = t.elementType === B ? U : bi(B, U);
          return d9(e, t, B, X, a);
        }
        case dt:
          return q4(e, t, a);
        case Dn:
          break;
        case He:
          return P4(e, t, a);
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function df(e) {
      e.flags |= Ie;
    }
    function eC(e) {
      e.flags |= mr, e.flags |= ad;
    }
    var tC, P0, nC, rC;
    tC = function(e, t, a, i) {
      for (var u = t.child; u !== null; ) {
        if (u.tag === oe || u.tag === be)
          e5(e, u.stateNode);
        else if (u.tag !== K) {
          if (u.child !== null) {
            u.child.return = u, u = u.child;
            continue;
          }
        }
        if (u === t)
          return;
        for (; u.sibling === null; ) {
          if (u.return === null || u.return === t)
            return;
          u = u.return;
        }
        u.sibling.return = u.return, u = u.sibling;
      }
    }, P0 = function(e, t) {
    }, nC = function(e, t, a, i, u) {
      var s = e.memoizedProps;
      if (s !== i) {
        var f = t.stateNode, p = j1(), h = n5(f, a, s, i, u, p);
        t.updateQueue = h, h && df(t);
      }
    }, rC = function(e, t, a, i) {
      a !== i && df(t);
    };
    function Cp(e, t) {
      if (!rr())
        switch (e.tailMode) {
          case "hidden": {
            for (var a = e.tail, i = null; a !== null; )
              a.alternate !== null && (i = a), a = a.sibling;
            i === null ? e.tail = null : i.sibling = null;
            break;
          }
          case "collapsed": {
            for (var u = e.tail, s = null; u !== null; )
              u.alternate !== null && (s = u), u = u.sibling;
            s === null ? !t && e.tail !== null ? e.tail.sibling = null : e.tail = null : s.sibling = null;
            break;
          }
        }
    }
    function ir(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, a = W, i = _e;
      if (t) {
        if ((e.mode & ze) !== ge) {
          for (var h = e.selfBaseDuration, C = e.child; C !== null; )
            a = Be(a, Be(C.lanes, C.childLanes)), i |= C.subtreeFlags & On, i |= C.flags & On, h += C.treeBaseDuration, C = C.sibling;
          e.treeBaseDuration = h;
        } else
          for (var E = e.child; E !== null; )
            a = Be(a, Be(E.lanes, E.childLanes)), i |= E.subtreeFlags & On, i |= E.flags & On, E.return = e, E = E.sibling;
        e.subtreeFlags |= i;
      } else {
        if ((e.mode & ze) !== ge) {
          for (var u = e.actualDuration, s = e.selfBaseDuration, f = e.child; f !== null; )
            a = Be(a, Be(f.lanes, f.childLanes)), i |= f.subtreeFlags, i |= f.flags, u += f.actualDuration, s += f.treeBaseDuration, f = f.sibling;
          e.actualDuration = u, e.treeBaseDuration = s;
        } else
          for (var p = e.child; p !== null; )
            a = Be(a, Be(p.lanes, p.childLanes)), i |= p.subtreeFlags, i |= p.flags, p.return = e, p = p.sibling;
        e.subtreeFlags |= i;
      }
      return e.childLanes = a, t;
    }
    function M9(e, t, a) {
      if (yE() && (t.mode & Se) !== ge && (t.flags & je) === _e)
        return U2(t), ef(), t.flags |= It | Fr | Tn, !1;
      var i = $h(t);
      if (a !== null && a.dehydrated !== null)
        if (e === null) {
          if (!i)
            throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
          if (hE(t), ir(t), (t.mode & ze) !== ge) {
            var u = a !== null;
            if (u) {
              var s = t.child;
              s !== null && (t.treeBaseDuration -= s.treeBaseDuration);
            }
          }
          return !1;
        } else {
          if (ef(), (t.flags & je) === _e && (t.memoizedState = null), t.flags |= Ie, ir(t), (t.mode & ze) !== ge) {
            var f = a !== null;
            if (f) {
              var p = t.child;
              p !== null && (t.treeBaseDuration -= p.treeBaseDuration);
            }
          }
          return !1;
        }
      else
        return j2(), !0;
    }
    function aC(e, t, a) {
      var i = t.pendingProps;
      switch (p1(t), t.tag) {
        case ee:
        case Gt:
        case $e:
        case V:
        case Re:
        case Qe:
        case at:
        case Ae:
        case kt:
        case mt:
          return ir(t), null;
        case F: {
          var u = t.type;
          return tl(u) && Ah(t), ir(t), null;
        }
        case I: {
          var s = t.stateNode;
          if (af(t), s1(t), V1(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), e === null || e.child === null) {
            var f = $h(t);
            if (f)
              df(t);
            else if (e !== null) {
              var p = e.memoizedState;
              // Check if this is a client root
              (!p.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
              (t.flags & It) !== _e) && (t.flags |= aa, j2());
            }
          }
          return P0(e, t), ir(t), null;
        }
        case oe: {
          z1(t);
          var h = q2(), C = t.type;
          if (e !== null && t.stateNode != null)
            nC(e, t, C, i, h), e.ref !== t.ref && eC(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return ir(t), null;
            }
            var E = j1(), N = $h(t);
            if (N)
              pE(t, h, E) && df(t);
            else {
              var D = J3(C, i, h, E, t);
              tC(D, t, !1, !1), t.stateNode = D, t5(D, C, i, h) && df(t);
            }
            t.ref !== null && eC(t);
          }
          return ir(t), null;
        }
        case be: {
          var z = i;
          if (e && t.stateNode != null) {
            var H = e.memoizedProps;
            rC(e, t, H, z);
          } else {
            if (typeof z != "string" && t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var P = q2(), le = j1(), De = $h(t);
            De ? vE(t) && df(t) : t.stateNode = r5(z, P, le, t);
          }
          return ir(t), null;
        }
        case Ye: {
          uf(t);
          var Ee = t.memoizedState;
          if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            var rt = M9(e, t, Ee);
            if (!rt)
              return t.flags & Tn ? t : null;
          }
          if ((t.flags & je) !== _e)
            return t.lanes = a, (t.mode & ze) !== ge && f0(t), t;
          var Je = Ee !== null, M = e !== null && e.memoizedState !== null;
          if (Je !== M && Je) {
            var B = t.child;
            if (B.flags |= $i, (t.mode & Se) !== ge) {
              var U = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !lt);
              U || A1(wi.current, J2) ? U6() : ig();
            }
          }
          var X = t.updateQueue;
          if (X !== null && (t.flags |= Ie), ir(t), (t.mode & ze) !== ge && Je) {
            var de = t.child;
            de !== null && (t.treeBaseDuration -= de.treeBaseDuration);
          }
          return null;
        }
        case K:
          return af(t), P0(e, t), e === null && q5(t.stateNode.containerInfo), ir(t), null;
        case ke:
          var ue = t.type._context;
          return b1(ue, t), ir(t), null;
        case mn: {
          var Ue = t.type;
          return tl(Ue) && Ah(t), ir(t), null;
        }
        case dt: {
          uf(t);
          var Ve = t.memoizedState;
          if (Ve === null)
            return ir(t), null;
          var xt = (t.flags & je) !== _e, ot = Ve.rendering;
          if (ot === null)
            if (xt)
              Cp(Ve, !1);
            else {
              var vn = z6() && (e === null || (e.flags & je) === _e);
              if (!vn)
                for (var st = t.child; st !== null; ) {
                  var ln = im(st);
                  if (ln !== null) {
                    xt = !0, t.flags |= je, Cp(Ve, !1);
                    var kr = ln.updateQueue;
                    return kr !== null && (t.updateQueue = kr, t.flags |= Ie), t.subtreeFlags = _e, RE(t, a), eo(t, H1(wi.current, lp)), t.child;
                  }
                  st = st.sibling;
                }
              Ve.tail !== null && Pt() > wC() && (t.flags |= je, xt = !0, Cp(Ve, !1), t.lanes = Bv);
            }
          else {
            if (!xt) {
              var cr = im(ot);
              if (cr !== null) {
                t.flags |= je, xt = !0;
                var Aa = cr.updateQueue;
                if (Aa !== null && (t.updateQueue = Aa, t.flags |= Ie), Cp(Ve, !0), Ve.tail === null && Ve.tailMode === "hidden" && !ot.alternate && !rr())
                  return ir(t), null;
              } else // The time it took to render last row is greater than the remaining
              // time we have to render. So rendering one more row would likely
              // exceed it.
              Pt() * 2 - Ve.renderingStartTime > wC() && a !== qn && (t.flags |= je, xt = !0, Cp(Ve, !1), t.lanes = Bv);
            }
            if (Ve.isBackwards)
              ot.sibling = t.child, t.child = ot;
            else {
              var Gr = Ve.last;
              Gr !== null ? Gr.sibling = ot : t.child = ot, Ve.last = ot;
            }
          }
          if (Ve.tail !== null) {
            var Zr = Ve.tail;
            Ve.rendering = Zr, Ve.tail = Zr.sibling, Ve.renderingStartTime = Pt(), Zr.sibling = null;
            var Nr = wi.current;
            return xt ? Nr = H1(Nr, lp) : Nr = lf(Nr), eo(t, Nr), Zr;
          }
          return ir(t), null;
        }
        case Dn:
          break;
        case He:
        case et: {
          ag(t);
          var Kl = t.memoizedState, Sf = Kl !== null;
          if (e !== null) {
            var jp = e.memoizedState, sl = jp !== null;
            sl !== Sf && // LegacyHidden doesn't do any hiding — it only pre-renders.
            !fe && (t.flags |= $i);
          }
          return !Sf || (t.mode & Se) === ge ? ir(t) : Rr(ol, qn) && (ir(t), t.subtreeFlags & (Ot | Ie) && (t.flags |= $i)), null;
        }
        case yn:
          return null;
        case Nt:
          return null;
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function U9(e, t, a) {
      switch (p1(t), t.tag) {
        case F: {
          var i = t.type;
          tl(i) && Ah(t);
          var u = t.flags;
          return u & Tn ? (t.flags = u & ~Tn | je, (t.mode & ze) !== ge && f0(t), t) : null;
        }
        case I: {
          t.stateNode, af(t), s1(t), V1();
          var s = t.flags;
          return (s & Tn) !== _e && (s & je) === _e ? (t.flags = s & ~Tn | je, t) : null;
        }
        case oe:
          return z1(t), null;
        case Ye: {
          uf(t);
          var f = t.memoizedState;
          if (f !== null && f.dehydrated !== null) {
            if (t.alternate === null)
              throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
            ef();
          }
          var p = t.flags;
          return p & Tn ? (t.flags = p & ~Tn | je, (t.mode & ze) !== ge && f0(t), t) : null;
        }
        case dt:
          return uf(t), null;
        case K:
          return af(t), null;
        case ke:
          var h = t.type._context;
          return b1(h, t), null;
        case He:
        case et:
          return ag(t), null;
        case yn:
          return null;
        default:
          return null;
      }
    }
    function iC(e, t, a) {
      switch (p1(t), t.tag) {
        case F: {
          var i = t.type.childContextTypes;
          i != null && Ah(t);
          break;
        }
        case I: {
          t.stateNode, af(t), s1(t), V1();
          break;
        }
        case oe: {
          z1(t);
          break;
        }
        case K:
          af(t);
          break;
        case Ye:
          uf(t);
          break;
        case dt:
          uf(t);
          break;
        case ke:
          var u = t.type._context;
          b1(u, t);
          break;
        case He:
        case et:
          ag(t);
          break;
      }
    }
    var lC = null;
    lC = /* @__PURE__ */ new Set();
    var km = !1, lr = !1, j9 = typeof WeakSet == "function" ? WeakSet : Set, me = null, pf = null, vf = null;
    function z9(e) {
      Tl(null, function() {
        throw e;
      }), nd();
    }
    var A9 = function(e, t) {
      if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & ze)
        try {
          ll(), t.componentWillUnmount();
        } finally {
          il(e);
        }
      else
        t.componentWillUnmount();
    };
    function uC(e, t) {
      try {
        ro(zn, e);
      } catch (a) {
        jt(e, t, a);
      }
    }
    function B0(e, t, a) {
      try {
        A9(e, a);
      } catch (i) {
        jt(e, t, i);
      }
    }
    function H9(e, t, a) {
      try {
        a.componentDidMount();
      } catch (i) {
        jt(e, t, i);
      }
    }
    function oC(e, t) {
      try {
        cC(e);
      } catch (a) {
        jt(e, t, a);
      }
    }
    function hf(e, t) {
      var a = e.ref;
      if (a !== null)
        if (typeof a == "function") {
          var i;
          try {
            if (un && qr && e.mode & ze)
              try {
                ll(), i = a(null);
              } finally {
                il(e);
              }
            else
              i = a(null);
          } catch (u) {
            jt(e, t, u);
          }
          typeof i == "function" && y("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", Pe(e));
        } else
          a.current = null;
    }
    function Nm(e, t, a) {
      try {
        a();
      } catch (i) {
        jt(e, t, i);
      }
    }
    var sC = !1;
    function F9(e, t) {
      X3(e.containerInfo), me = t, V9();
      var a = sC;
      return sC = !1, a;
    }
    function V9() {
      for (; me !== null; ) {
        var e = me, t = e.child;
        (e.subtreeFlags & mu) !== _e && t !== null ? (t.return = e, me = t) : P9();
      }
    }
    function P9() {
      for (; me !== null; ) {
        var e = me;
        St(e);
        try {
          B9(e);
        } catch (a) {
          jt(e, e.return, a);
        }
        on();
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, me = t;
          return;
        }
        me = e.return;
      }
    }
    function B9(e) {
      var t = e.alternate, a = e.flags;
      if ((a & aa) !== _e) {
        switch (St(e), e.tag) {
          case V:
          case Re:
          case $e:
            break;
          case F: {
            if (t !== null) {
              var i = t.memoizedProps, u = t.memoizedState, s = e.stateNode;
              e.type === e.elementType && !ms && (s.props !== e.memoizedProps && y("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Pe(e) || "instance"), s.state !== e.memoizedState && y("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Pe(e) || "instance"));
              var f = s.getSnapshotBeforeUpdate(e.elementType === e.type ? i : bi(e.type, i), u);
              {
                var p = lC;
                f === void 0 && !p.has(e.type) && (p.add(e.type), y("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", Pe(e)));
              }
              s.__reactInternalSnapshotBeforeUpdate = f;
            }
            break;
          }
          case I: {
            {
              var h = e.stateNode;
              x5(h.containerInfo);
            }
            break;
          }
          case oe:
          case be:
          case K:
          case mn:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
        on();
      }
    }
    function ki(e, t, a) {
      var i = t.updateQueue, u = i !== null ? i.lastEffect : null;
      if (u !== null) {
        var s = u.next, f = s;
        do {
          if ((f.tag & e) === e) {
            var p = f.destroy;
            f.destroy = void 0, p !== void 0 && ((e & ar) !== ga ? Fv(t) : (e & zn) !== ga && Ua(t), (e & nl) !== ga && Op(!0), Nm(t, a, p), (e & nl) !== ga && Op(!1), (e & ar) !== ga ? ec() : (e & zn) !== ga && Su());
          }
          f = f.next;
        } while (f !== s);
      }
    }
    function ro(e, t) {
      var a = t.updateQueue, i = a !== null ? a.lastEffect : null;
      if (i !== null) {
        var u = i.next, s = u;
        do {
          if ((s.tag & e) === e) {
            (e & ar) !== ga ? Wi(t) : (e & zn) !== ga && Vv(t);
            var f = s.create;
            (e & nl) !== ga && Op(!0), s.destroy = f(), (e & nl) !== ga && Op(!1), (e & ar) !== ga ? Js() : (e & zn) !== ga && zo();
            {
              var p = s.destroy;
              if (p !== void 0 && typeof p != "function") {
                var h = void 0;
                (s.tag & zn) !== _e ? h = "useLayoutEffect" : (s.tag & nl) !== _e ? h = "useInsertionEffect" : h = "useEffect";
                var C = void 0;
                p === null ? C = " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof p.then == "function" ? C = `

It looks like you wrote ` + h + `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` + h + `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://reactjs.org/link/hooks-data-fetching` : C = " You returned: " + p, y("%s must not return anything besides a function, which is used for clean-up.%s", h, C);
              }
            }
          }
          s = s.next;
        } while (s !== u);
      }
    }
    function $9(e, t) {
      if ((t.flags & Ie) !== _e)
        switch (t.tag) {
          case Ae: {
            var a = t.stateNode.passiveEffectDuration, i = t.memoizedProps, u = i.id, s = i.onPostCommit, f = w4(), p = t.alternate === null ? "mount" : "update";
            R4() && (p = "nested-update"), typeof s == "function" && s(u, p, a, f);
            var h = t.return;
            e: for (; h !== null; ) {
              switch (h.tag) {
                case I:
                  var C = h.stateNode;
                  C.passiveEffectDuration += a;
                  break e;
                case Ae:
                  var E = h.stateNode;
                  E.passiveEffectDuration += a;
                  break e;
              }
              h = h.return;
            }
            break;
          }
        }
    }
    function I9(e, t, a, i) {
      if ((a.flags & Gn) !== _e)
        switch (a.tag) {
          case V:
          case Re:
          case $e: {
            if (!lr)
              if (a.mode & ze)
                try {
                  ll(), ro(zn | jn, a);
                } finally {
                  il(a);
                }
              else
                ro(zn | jn, a);
            break;
          }
          case F: {
            var u = a.stateNode;
            if (a.flags & Ie && !lr)
              if (t === null)
                if (a.type === a.elementType && !ms && (u.props !== a.memoizedProps && y("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Pe(a) || "instance"), u.state !== a.memoizedState && y("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Pe(a) || "instance")), a.mode & ze)
                  try {
                    ll(), u.componentDidMount();
                  } finally {
                    il(a);
                  }
                else
                  u.componentDidMount();
              else {
                var s = a.elementType === a.type ? t.memoizedProps : bi(a.type, t.memoizedProps), f = t.memoizedState;
                if (a.type === a.elementType && !ms && (u.props !== a.memoizedProps && y("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Pe(a) || "instance"), u.state !== a.memoizedState && y("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Pe(a) || "instance")), a.mode & ze)
                  try {
                    ll(), u.componentDidUpdate(s, f, u.__reactInternalSnapshotBeforeUpdate);
                  } finally {
                    il(a);
                  }
                else
                  u.componentDidUpdate(s, f, u.__reactInternalSnapshotBeforeUpdate);
              }
            var p = a.updateQueue;
            p !== null && (a.type === a.elementType && !ms && (u.props !== a.memoizedProps && y("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Pe(a) || "instance"), u.state !== a.memoizedState && y("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Pe(a) || "instance")), Z2(a, p, u));
            break;
          }
          case I: {
            var h = a.updateQueue;
            if (h !== null) {
              var C = null;
              if (a.child !== null)
                switch (a.child.tag) {
                  case oe:
                    C = a.child.stateNode;
                    break;
                  case F:
                    C = a.child.stateNode;
                    break;
                }
              Z2(a, h, C);
            }
            break;
          }
          case oe: {
            var E = a.stateNode;
            if (t === null && a.flags & Ie) {
              var N = a.type, D = a.memoizedProps;
              o5(E, N, D);
            }
            break;
          }
          case be:
            break;
          case K:
            break;
          case Ae: {
            {
              var z = a.memoizedProps, H = z.onCommit, P = z.onRender, le = a.stateNode.effectDuration, De = w4(), Ee = t === null ? "mount" : "update";
              R4() && (Ee = "nested-update"), typeof P == "function" && P(a.memoizedProps.id, Ee, a.actualDuration, a.treeBaseDuration, a.actualStartTime, De);
              {
                typeof H == "function" && H(a.memoizedProps.id, Ee, le, De), P6(a);
                var rt = a.return;
                e: for (; rt !== null; ) {
                  switch (rt.tag) {
                    case I:
                      var Je = rt.stateNode;
                      Je.effectDuration += le;
                      break e;
                    case Ae:
                      var M = rt.stateNode;
                      M.effectDuration += le;
                      break e;
                  }
                  rt = rt.return;
                }
              }
            }
            break;
          }
          case Ye: {
            K9(e, a);
            break;
          }
          case dt:
          case mn:
          case Dn:
          case He:
          case et:
          case Nt:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
      lr || a.flags & mr && cC(a);
    }
    function Y9(e) {
      switch (e.tag) {
        case V:
        case Re:
        case $e: {
          if (e.mode & ze)
            try {
              ll(), uC(e, e.return);
            } finally {
              il(e);
            }
          else
            uC(e, e.return);
          break;
        }
        case F: {
          var t = e.stateNode;
          typeof t.componentDidMount == "function" && H9(e, e.return, t), oC(e, e.return);
          break;
        }
        case oe: {
          oC(e, e.return);
          break;
        }
      }
    }
    function W9(e, t) {
      for (var a = null, i = e; ; ) {
        if (i.tag === oe) {
          if (a === null) {
            a = i;
            try {
              var u = i.stateNode;
              t ? g5(u) : S5(i.stateNode, i.memoizedProps);
            } catch (f) {
              jt(e, e.return, f);
            }
          }
        } else if (i.tag === be) {
          if (a === null)
            try {
              var s = i.stateNode;
              t ? C5(s) : E5(s, i.memoizedProps);
            } catch (f) {
              jt(e, e.return, f);
            }
        } else if (!((i.tag === He || i.tag === et) && i.memoizedState !== null && i !== e)) {
          if (i.child !== null) {
            i.child.return = i, i = i.child;
            continue;
          }
        }
        if (i === e)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return;
          a === i && (a = null), i = i.return;
        }
        a === i && (a = null), i.sibling.return = i.return, i = i.sibling;
      }
    }
    function cC(e) {
      var t = e.ref;
      if (t !== null) {
        var a = e.stateNode, i;
        switch (e.tag) {
          case oe:
            i = a;
            break;
          default:
            i = a;
        }
        if (typeof t == "function") {
          var u;
          if (e.mode & ze)
            try {
              ll(), u = t(i);
            } finally {
              il(e);
            }
          else
            u = t(i);
          typeof u == "function" && y("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", Pe(e));
        } else
          t.hasOwnProperty("current") || y("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", Pe(e)), t.current = i;
      }
    }
    function Q9(e) {
      var t = e.alternate;
      t !== null && (t.return = null), e.return = null;
    }
    function fC(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, fC(t));
      {
        if (e.child = null, e.deletions = null, e.sibling = null, e.tag === oe) {
          var a = e.stateNode;
          a !== null && J5(a);
        }
        e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
      }
    }
    function G9(e) {
      for (var t = e.return; t !== null; ) {
        if (dC(t))
          return t;
        t = t.return;
      }
      throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
    function dC(e) {
      return e.tag === oe || e.tag === I || e.tag === K;
    }
    function pC(e) {
      var t = e;
      e: for (; ; ) {
        for (; t.sibling === null; ) {
          if (t.return === null || dC(t.return))
            return null;
          t = t.return;
        }
        for (t.sibling.return = t.return, t = t.sibling; t.tag !== oe && t.tag !== be && t.tag !== wt; ) {
          if (t.flags & Ot || t.child === null || t.tag === K)
            continue e;
          t.child.return = t, t = t.child;
        }
        if (!(t.flags & Ot))
          return t.stateNode;
      }
    }
    function Z9(e) {
      var t = G9(e);
      switch (t.tag) {
        case oe: {
          var a = t.stateNode;
          t.flags & vt && (h2(a), t.flags &= ~vt);
          var i = pC(e);
          I0(e, i, a);
          break;
        }
        case I:
        case K: {
          var u = t.stateNode.containerInfo, s = pC(e);
          $0(e, s, u);
          break;
        }
        default:
          throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    function $0(e, t, a) {
      var i = e.tag, u = i === oe || i === be;
      if (u) {
        var s = e.stateNode;
        t ? v5(a, s, t) : d5(a, s);
      } else if (i !== K) {
        var f = e.child;
        if (f !== null) {
          $0(f, t, a);
          for (var p = f.sibling; p !== null; )
            $0(p, t, a), p = p.sibling;
        }
      }
    }
    function I0(e, t, a) {
      var i = e.tag, u = i === oe || i === be;
      if (u) {
        var s = e.stateNode;
        t ? p5(a, s, t) : f5(a, s);
      } else if (i !== K) {
        var f = e.child;
        if (f !== null) {
          I0(f, t, a);
          for (var p = f.sibling; p !== null; )
            I0(p, t, a), p = p.sibling;
        }
      }
    }
    var ur = null, Ni = !1;
    function q9(e, t, a) {
      {
        var i = t;
        e: for (; i !== null; ) {
          switch (i.tag) {
            case oe: {
              ur = i.stateNode, Ni = !1;
              break e;
            }
            case I: {
              ur = i.stateNode.containerInfo, Ni = !0;
              break e;
            }
            case K: {
              ur = i.stateNode.containerInfo, Ni = !0;
              break e;
            }
          }
          i = i.return;
        }
        if (ur === null)
          throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
        vC(e, t, a), ur = null, Ni = !1;
      }
      Q9(a);
    }
    function ao(e, t, a) {
      for (var i = a.child; i !== null; )
        vC(e, t, i), i = i.sibling;
    }
    function vC(e, t, a) {
      switch (_l(a), a.tag) {
        case oe:
          lr || hf(a, t);
        case be: {
          {
            var i = ur, u = Ni;
            ur = null, ao(e, t, a), ur = i, Ni = u, ur !== null && (Ni ? m5(ur, a.stateNode) : h5(ur, a.stateNode));
          }
          return;
        }
        case wt: {
          ur !== null && (Ni ? y5(ur, a.stateNode) : t1(ur, a.stateNode));
          return;
        }
        case K: {
          {
            var s = ur, f = Ni;
            ur = a.stateNode.containerInfo, Ni = !0, ao(e, t, a), ur = s, Ni = f;
          }
          return;
        }
        case V:
        case Re:
        case mt:
        case $e: {
          if (!lr) {
            var p = a.updateQueue;
            if (p !== null) {
              var h = p.lastEffect;
              if (h !== null) {
                var C = h.next, E = C;
                do {
                  var N = E, D = N.destroy, z = N.tag;
                  D !== void 0 && ((z & nl) !== ga ? Nm(a, t, D) : (z & zn) !== ga && (Ua(a), a.mode & ze ? (ll(), Nm(a, t, D), il(a)) : Nm(a, t, D), Su())), E = E.next;
                } while (E !== C);
              }
            }
          }
          ao(e, t, a);
          return;
        }
        case F: {
          if (!lr) {
            hf(a, t);
            var H = a.stateNode;
            typeof H.componentWillUnmount == "function" && B0(a, t, H);
          }
          ao(e, t, a);
          return;
        }
        case Dn: {
          ao(e, t, a);
          return;
        }
        case He: {
          if (
            // TODO: Remove this dead flag
            a.mode & Se
          ) {
            var P = lr;
            lr = P || a.memoizedState !== null, ao(e, t, a), lr = P;
          } else
            ao(e, t, a);
          break;
        }
        default: {
          ao(e, t, a);
          return;
        }
      }
    }
    function X9(e) {
      e.memoizedState;
    }
    function K9(e, t) {
      var a = t.memoizedState;
      if (a === null) {
        var i = t.alternate;
        if (i !== null) {
          var u = i.memoizedState;
          if (u !== null) {
            var s = u.dehydrated;
            s !== null && z5(s);
          }
        }
      }
    }
    function hC(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var a = e.stateNode;
        a === null && (a = e.stateNode = new j9()), t.forEach(function(i) {
          var u = G6.bind(null, e, i);
          if (!a.has(i)) {
            if (a.add(i), Br)
              if (pf !== null && vf !== null)
                Lp(vf, pf);
              else
                throw Error("Expected finished root and lanes to be set. This is a bug in React.");
            i.then(u, u);
          }
        });
      }
    }
    function J9(e, t, a) {
      pf = a, vf = e, St(t), mC(t, e), St(t), pf = null, vf = null;
    }
    function Li(e, t, a) {
      var i = t.deletions;
      if (i !== null)
        for (var u = 0; u < i.length; u++) {
          var s = i[u];
          try {
            q9(e, t, s);
          } catch (h) {
            jt(s, t, h);
          }
        }
      var f = ny();
      if (t.subtreeFlags & Cr)
        for (var p = t.child; p !== null; )
          St(p), mC(p, e), p = p.sibling;
      St(f);
    }
    function mC(e, t, a) {
      var i = e.alternate, u = e.flags;
      switch (e.tag) {
        case V:
        case Re:
        case mt:
        case $e: {
          if (Li(t, e), ul(e), u & Ie) {
            try {
              ki(nl | jn, e, e.return), ro(nl | jn, e);
            } catch (Ue) {
              jt(e, e.return, Ue);
            }
            if (e.mode & ze) {
              try {
                ll(), ki(zn | jn, e, e.return);
              } catch (Ue) {
                jt(e, e.return, Ue);
              }
              il(e);
            } else
              try {
                ki(zn | jn, e, e.return);
              } catch (Ue) {
                jt(e, e.return, Ue);
              }
          }
          return;
        }
        case F: {
          Li(t, e), ul(e), u & mr && i !== null && hf(i, i.return);
          return;
        }
        case oe: {
          Li(t, e), ul(e), u & mr && i !== null && hf(i, i.return);
          {
            if (e.flags & vt) {
              var s = e.stateNode;
              try {
                h2(s);
              } catch (Ue) {
                jt(e, e.return, Ue);
              }
            }
            if (u & Ie) {
              var f = e.stateNode;
              if (f != null) {
                var p = e.memoizedProps, h = i !== null ? i.memoizedProps : p, C = e.type, E = e.updateQueue;
                if (e.updateQueue = null, E !== null)
                  try {
                    s5(f, E, C, h, p, e);
                  } catch (Ue) {
                    jt(e, e.return, Ue);
                  }
              }
            }
          }
          return;
        }
        case be: {
          if (Li(t, e), ul(e), u & Ie) {
            if (e.stateNode === null)
              throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
            var N = e.stateNode, D = e.memoizedProps, z = i !== null ? i.memoizedProps : D;
            try {
              c5(N, z, D);
            } catch (Ue) {
              jt(e, e.return, Ue);
            }
          }
          return;
        }
        case I: {
          if (Li(t, e), ul(e), u & Ie && i !== null) {
            var H = i.memoizedState;
            if (H.isDehydrated)
              try {
                j5(t.containerInfo);
              } catch (Ue) {
                jt(e, e.return, Ue);
              }
          }
          return;
        }
        case K: {
          Li(t, e), ul(e);
          return;
        }
        case Ye: {
          Li(t, e), ul(e);
          var P = e.child;
          if (P.flags & $i) {
            var le = P.stateNode, De = P.memoizedState, Ee = De !== null;
            if (le.isHidden = Ee, Ee) {
              var rt = P.alternate !== null && P.alternate.memoizedState !== null;
              rt || M6();
            }
          }
          if (u & Ie) {
            try {
              X9(e);
            } catch (Ue) {
              jt(e, e.return, Ue);
            }
            hC(e);
          }
          return;
        }
        case He: {
          var Je = i !== null && i.memoizedState !== null;
          if (
            // TODO: Remove this dead flag
            e.mode & Se
          ) {
            var M = lr;
            lr = M || Je, Li(t, e), lr = M;
          } else
            Li(t, e);
          if (ul(e), u & $i) {
            var B = e.stateNode, U = e.memoizedState, X = U !== null, de = e;
            if (B.isHidden = X, X && !Je && (de.mode & Se) !== ge) {
              me = de;
              for (var ue = de.child; ue !== null; )
                me = ue, t6(ue), ue = ue.sibling;
            }
            W9(de, X);
          }
          return;
        }
        case dt: {
          Li(t, e), ul(e), u & Ie && hC(e);
          return;
        }
        case Dn:
          return;
        default: {
          Li(t, e), ul(e);
          return;
        }
      }
    }
    function ul(e) {
      var t = e.flags;
      if (t & Ot) {
        try {
          Z9(e);
        } catch (a) {
          jt(e, e.return, a);
        }
        e.flags &= ~Ot;
      }
      t & ia && (e.flags &= ~ia);
    }
    function e6(e, t, a) {
      pf = a, vf = t, me = e, yC(e, t, a), pf = null, vf = null;
    }
    function yC(e, t, a) {
      for (var i = (e.mode & Se) !== ge; me !== null; ) {
        var u = me, s = u.child;
        if (u.tag === He && i) {
          var f = u.memoizedState !== null, p = f || km;
          if (p) {
            Y0(e, t, a);
            continue;
          } else {
            var h = u.alternate, C = h !== null && h.memoizedState !== null, E = C || lr, N = km, D = lr;
            km = p, lr = E, lr && !D && (me = u, n6(u));
            for (var z = s; z !== null; )
              me = z, yC(
                z,
                // New root; bubble back up to here and stop.
                t,
                a
              ), z = z.sibling;
            me = u, km = N, lr = D, Y0(e, t, a);
            continue;
          }
        }
        (u.subtreeFlags & Gn) !== _e && s !== null ? (s.return = u, me = s) : Y0(e, t, a);
      }
    }
    function Y0(e, t, a) {
      for (; me !== null; ) {
        var i = me;
        if ((i.flags & Gn) !== _e) {
          var u = i.alternate;
          St(i);
          try {
            I9(t, u, i, a);
          } catch (f) {
            jt(i, i.return, f);
          }
          on();
        }
        if (i === e) {
          me = null;
          return;
        }
        var s = i.sibling;
        if (s !== null) {
          s.return = i.return, me = s;
          return;
        }
        me = i.return;
      }
    }
    function t6(e) {
      for (; me !== null; ) {
        var t = me, a = t.child;
        switch (t.tag) {
          case V:
          case Re:
          case mt:
          case $e: {
            if (t.mode & ze)
              try {
                ll(), ki(zn, t, t.return);
              } finally {
                il(t);
              }
            else
              ki(zn, t, t.return);
            break;
          }
          case F: {
            hf(t, t.return);
            var i = t.stateNode;
            typeof i.componentWillUnmount == "function" && B0(t, t.return, i);
            break;
          }
          case oe: {
            hf(t, t.return);
            break;
          }
          case He: {
            var u = t.memoizedState !== null;
            if (u) {
              gC(e);
              continue;
            }
            break;
          }
        }
        a !== null ? (a.return = t, me = a) : gC(e);
      }
    }
    function gC(e) {
      for (; me !== null; ) {
        var t = me;
        if (t === e) {
          me = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, me = a;
          return;
        }
        me = t.return;
      }
    }
    function n6(e) {
      for (; me !== null; ) {
        var t = me, a = t.child;
        if (t.tag === He) {
          var i = t.memoizedState !== null;
          if (i) {
            CC(e);
            continue;
          }
        }
        a !== null ? (a.return = t, me = a) : CC(e);
      }
    }
    function CC(e) {
      for (; me !== null; ) {
        var t = me;
        St(t);
        try {
          Y9(t);
        } catch (i) {
          jt(t, t.return, i);
        }
        if (on(), t === e) {
          me = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, me = a;
          return;
        }
        me = t.return;
      }
    }
    function r6(e, t, a, i) {
      me = t, a6(t, e, a, i);
    }
    function a6(e, t, a, i) {
      for (; me !== null; ) {
        var u = me, s = u.child;
        (u.subtreeFlags & la) !== _e && s !== null ? (s.return = u, me = s) : i6(e, t, a, i);
      }
    }
    function i6(e, t, a, i) {
      for (; me !== null; ) {
        var u = me;
        if ((u.flags & zt) !== _e) {
          St(u);
          try {
            l6(t, u, a, i);
          } catch (f) {
            jt(u, u.return, f);
          }
          on();
        }
        if (u === e) {
          me = null;
          return;
        }
        var s = u.sibling;
        if (s !== null) {
          s.return = u.return, me = s;
          return;
        }
        me = u.return;
      }
    }
    function l6(e, t, a, i) {
      switch (t.tag) {
        case V:
        case Re:
        case $e: {
          if (t.mode & ze) {
            c0();
            try {
              ro(ar | jn, t);
            } finally {
              s0(t);
            }
          } else
            ro(ar | jn, t);
          break;
        }
      }
    }
    function u6(e) {
      me = e, o6();
    }
    function o6() {
      for (; me !== null; ) {
        var e = me, t = e.child;
        if ((me.flags & ft) !== _e) {
          var a = e.deletions;
          if (a !== null) {
            for (var i = 0; i < a.length; i++) {
              var u = a[i];
              me = u, f6(u, e);
            }
            {
              var s = e.alternate;
              if (s !== null) {
                var f = s.child;
                if (f !== null) {
                  s.child = null;
                  do {
                    var p = f.sibling;
                    f.sibling = null, f = p;
                  } while (f !== null);
                }
              }
            }
            me = e;
          }
        }
        (e.subtreeFlags & la) !== _e && t !== null ? (t.return = e, me = t) : s6();
      }
    }
    function s6() {
      for (; me !== null; ) {
        var e = me;
        (e.flags & zt) !== _e && (St(e), c6(e), on());
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, me = t;
          return;
        }
        me = e.return;
      }
    }
    function c6(e) {
      switch (e.tag) {
        case V:
        case Re:
        case $e: {
          e.mode & ze ? (c0(), ki(ar | jn, e, e.return), s0(e)) : ki(ar | jn, e, e.return);
          break;
        }
      }
    }
    function f6(e, t) {
      for (; me !== null; ) {
        var a = me;
        St(a), p6(a, t), on();
        var i = a.child;
        i !== null ? (i.return = a, me = i) : d6(e);
      }
    }
    function d6(e) {
      for (; me !== null; ) {
        var t = me, a = t.sibling, i = t.return;
        if (fC(t), t === e) {
          me = null;
          return;
        }
        if (a !== null) {
          a.return = i, me = a;
          return;
        }
        me = i;
      }
    }
    function p6(e, t) {
      switch (e.tag) {
        case V:
        case Re:
        case $e: {
          e.mode & ze ? (c0(), ki(ar, e, t), s0(e)) : ki(ar, e, t);
          break;
        }
      }
    }
    function v6(e) {
      switch (e.tag) {
        case V:
        case Re:
        case $e: {
          try {
            ro(zn | jn, e);
          } catch (a) {
            jt(e, e.return, a);
          }
          break;
        }
        case F: {
          var t = e.stateNode;
          try {
            t.componentDidMount();
          } catch (a) {
            jt(e, e.return, a);
          }
          break;
        }
      }
    }
    function h6(e) {
      switch (e.tag) {
        case V:
        case Re:
        case $e: {
          try {
            ro(ar | jn, e);
          } catch (t) {
            jt(e, e.return, t);
          }
          break;
        }
      }
    }
    function m6(e) {
      switch (e.tag) {
        case V:
        case Re:
        case $e: {
          try {
            ki(zn | jn, e, e.return);
          } catch (a) {
            jt(e, e.return, a);
          }
          break;
        }
        case F: {
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && B0(e, e.return, t);
          break;
        }
      }
    }
    function y6(e) {
      switch (e.tag) {
        case V:
        case Re:
        case $e:
          try {
            ki(ar | jn, e, e.return);
          } catch (t) {
            jt(e, e.return, t);
          }
      }
    }
    if (typeof Symbol == "function" && Symbol.for) {
      var Sp = Symbol.for;
      Sp("selector.component"), Sp("selector.has_pseudo_class"), Sp("selector.role"), Sp("selector.test_id"), Sp("selector.text");
    }
    var g6 = [];
    function C6() {
      g6.forEach(function(e) {
        return e();
      });
    }
    var S6 = g.ReactCurrentActQueue;
    function E6(e) {
      {
        var t = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        ), a = typeof jest < "u";
        return a && t !== !1;
      }
    }
    function SC() {
      {
        var e = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        );
        return !e && S6.current !== null && y("The current testing environment is not configured to support act(...)"), e;
      }
    }
    var x6 = Math.ceil, W0 = g.ReactCurrentDispatcher, Q0 = g.ReactCurrentOwner, or = g.ReactCurrentBatchConfig, Oi = g.ReactCurrentActQueue, Fn = (
      /*             */
      0
    ), EC = (
      /*               */
      1
    ), sr = (
      /*                */
      2
    ), ri = (
      /*                */
      4
    ), Gl = 0, Ep = 1, ys = 2, Lm = 3, xp = 4, xC = 5, G0 = 6, nt = Fn, Wr = null, Jt = null, Vn = W, ol = W, Z0 = Gu(W), Pn = Gl, Tp = null, Om = W, Rp = W, Mm = W, wp = null, Ca = null, q0 = 0, TC = 500, RC = 1 / 0, T6 = 500, Zl = null;
    function _p() {
      RC = Pt() + T6;
    }
    function wC() {
      return RC;
    }
    var Um = !1, X0 = null, mf = null, gs = !1, io = null, bp = W, K0 = [], J0 = null, R6 = 50, Dp = 0, eg = null, tg = !1, jm = !1, w6 = 50, yf = 0, zm = null, kp = Dt, Am = W, _C = !1;
    function Hm() {
      return Wr;
    }
    function Qr() {
      return (nt & (sr | ri)) !== Fn ? Pt() : (kp !== Dt || (kp = Pt()), kp);
    }
    function lo(e) {
      var t = e.mode;
      if ((t & Se) === ge)
        return Te;
      if ((nt & sr) !== Fn && Vn !== W)
        return ku(Vn);
      var a = SE() !== CE;
      if (a) {
        if (or.transition !== null) {
          var i = or.transition;
          i._updatedFibers || (i._updatedFibers = /* @__PURE__ */ new Set()), i._updatedFibers.add(e);
        }
        return Am === an && (Am = qv()), Am;
      }
      var u = fa();
      if (u !== an)
        return u;
      var s = a5();
      return s;
    }
    function _6(e) {
      var t = e.mode;
      return (t & Se) === ge ? Te : Tr();
    }
    function Bn(e, t, a, i) {
      q6(), _C && y("useInsertionEffect must not schedule updates."), tg && (jm = !0), Ul(e, a, i), (nt & sr) !== W && e === Wr ? J6(t) : (Br && Tc(e, t, a), e8(t), e === Wr && ((nt & sr) === Fn && (Rp = Be(Rp, a)), Pn === xp && uo(e, Vn)), Sa(e, i), a === Te && nt === Fn && (t.mode & Se) === ge && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
      !Oi.isBatchingLegacy && (_p(), _2()));
    }
    function b6(e, t, a) {
      var i = e.current;
      i.lanes = t, Ul(e, t, a), Sa(e, a);
    }
    function D6(e) {
      return (
        // TODO: Remove outdated deferRenderPhaseUpdateToNextBatch experiment. We
        // decided not to enable it.
        (nt & sr) !== Fn
      );
    }
    function Sa(e, t) {
      var a = e.callbackNode;
      Yv(e, t);
      var i = Ol(e, e === Wr ? Vn : W);
      if (i === W) {
        a !== null && BC(a), e.callbackNode = null, e.callbackPriority = an;
        return;
      }
      var u = qt(i), s = e.callbackPriority;
      if (s === u && // Special case related to `act`. If the currently scheduled task is a
      // Scheduler task, rather than an `act` task, cancel it and re-scheduled
      // on the `act` queue.
      !(Oi.current !== null && a !== og)) {
        a == null && s !== Te && y("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      a != null && BC(a);
      var f;
      if (u === Te)
        e.tag === Zu ? (Oi.isBatchingLegacy !== null && (Oi.didScheduleLegacyUpdate = !0), nE(kC.bind(null, e))) : w2(kC.bind(null, e)), Oi.current !== null ? Oi.current.push(qu) : l5(function() {
          (nt & (sr | ri)) === Fn && qu();
        }), f = null;
      else {
        var p;
        switch (Un(i)) {
          case Xt:
            p = qs;
            break;
          case gi:
            p = wl;
            break;
          case Ga:
            p = Qa;
            break;
          case Nu:
            p = Xs;
            break;
          default:
            p = Qa;
            break;
        }
        f = sg(p, bC.bind(null, e));
      }
      e.callbackPriority = u, e.callbackNode = f;
    }
    function bC(e, t) {
      if (WE(), kp = Dt, Am = W, (nt & (sr | ri)) !== Fn)
        throw new Error("Should not already be working.");
      var a = e.callbackNode, i = Xl();
      if (i && e.callbackNode !== a)
        return null;
      var u = Ol(e, e === Wr ? Vn : W);
      if (u === W)
        return null;
      var s = !Io(e, u) && !Zv(e, u) && !t, f = s ? H6(e, u) : Vm(e, u);
      if (f !== Gl) {
        if (f === ys) {
          var p = Gi(e);
          p !== W && (u = p, f = ng(e, p));
        }
        if (f === Ep) {
          var h = Tp;
          throw Cs(e, W), uo(e, u), Sa(e, Pt()), h;
        }
        if (f === G0)
          uo(e, u);
        else {
          var C = !Io(e, u), E = e.current.alternate;
          if (C && !N6(E)) {
            if (f = Vm(e, u), f === ys) {
              var N = Gi(e);
              N !== W && (u = N, f = ng(e, N));
            }
            if (f === Ep) {
              var D = Tp;
              throw Cs(e, W), uo(e, u), Sa(e, Pt()), D;
            }
          }
          e.finishedWork = E, e.finishedLanes = u, k6(e, f, u);
        }
      }
      return Sa(e, Pt()), e.callbackNode === a ? bC.bind(null, e) : null;
    }
    function ng(e, t) {
      var a = wp;
      if (Rc(e)) {
        var i = Cs(e, t);
        i.flags |= It, Z5(e.containerInfo);
      }
      var u = Vm(e, t);
      if (u !== ys) {
        var s = Ca;
        Ca = a, s !== null && DC(s);
      }
      return u;
    }
    function DC(e) {
      Ca === null ? Ca = e : Ca.push.apply(Ca, e);
    }
    function k6(e, t, a) {
      switch (t) {
        case Gl:
        case Ep:
          throw new Error("Root did not complete. This is a bug in React.");
        case ys: {
          Ss(e, Ca, Zl);
          break;
        }
        case Lm: {
          if (uo(e, a), Wv(a) && // do not delay if we're inside an act() scope
          !$C()) {
            var i = q0 + TC - Pt();
            if (i > 10) {
              var u = Ol(e, W);
              if (u !== W)
                break;
              var s = e.suspendedLanes;
              if (!Ml(s, a)) {
                Qr(), Ec(e, s);
                break;
              }
              e.timeoutHandle = Jy(Ss.bind(null, e, Ca, Zl), i);
              break;
            }
          }
          Ss(e, Ca, Zl);
          break;
        }
        case xp: {
          if (uo(e, a), Gv(a))
            break;
          if (!$C()) {
            var f = $v(e, a), p = f, h = Pt() - p, C = Z6(h) - h;
            if (C > 10) {
              e.timeoutHandle = Jy(Ss.bind(null, e, Ca, Zl), C);
              break;
            }
          }
          Ss(e, Ca, Zl);
          break;
        }
        case xC: {
          Ss(e, Ca, Zl);
          break;
        }
        default:
          throw new Error("Unknown root exit status.");
      }
    }
    function N6(e) {
      for (var t = e; ; ) {
        if (t.flags & Uo) {
          var a = t.updateQueue;
          if (a !== null) {
            var i = a.stores;
            if (i !== null)
              for (var u = 0; u < i.length; u++) {
                var s = i[u], f = s.getSnapshot, p = s.value;
                try {
                  if (!he(f(), p))
                    return !1;
                } catch {
                  return !1;
                }
              }
          }
        }
        var h = t.child;
        if (t.subtreeFlags & Uo && h !== null) {
          h.return = t, t = h;
          continue;
        }
        if (t === e)
          return !0;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return !0;
    }
    function uo(e, t) {
      t = Yo(t, Mm), t = Yo(t, Rp), Kv(e, t);
    }
    function kC(e) {
      if (QE(), (nt & (sr | ri)) !== Fn)
        throw new Error("Should not already be working.");
      Xl();
      var t = Ol(e, W);
      if (!Rr(t, Te))
        return Sa(e, Pt()), null;
      var a = Vm(e, t);
      if (e.tag !== Zu && a === ys) {
        var i = Gi(e);
        i !== W && (t = i, a = ng(e, i));
      }
      if (a === Ep) {
        var u = Tp;
        throw Cs(e, W), uo(e, t), Sa(e, Pt()), u;
      }
      if (a === G0)
        throw new Error("Root did not complete. This is a bug in React.");
      var s = e.current.alternate;
      return e.finishedWork = s, e.finishedLanes = t, Ss(e, Ca, Zl), Sa(e, Pt()), null;
    }
    function L6(e, t) {
      t !== W && (Cd(e, Be(t, Te)), Sa(e, Pt()), (nt & (sr | ri)) === Fn && (_p(), qu()));
    }
    function rg(e, t) {
      var a = nt;
      nt |= EC;
      try {
        return e(t);
      } finally {
        nt = a, nt === Fn && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
        !Oi.isBatchingLegacy && (_p(), _2());
      }
    }
    function O6(e, t, a, i, u) {
      var s = fa(), f = or.transition;
      try {
        return or.transition = null, Yt(Xt), e(t, a, i, u);
      } finally {
        Yt(s), or.transition = f, nt === Fn && _p();
      }
    }
    function ql(e) {
      io !== null && io.tag === Zu && (nt & (sr | ri)) === Fn && Xl();
      var t = nt;
      nt |= EC;
      var a = or.transition, i = fa();
      try {
        return or.transition = null, Yt(Xt), e ? e() : void 0;
      } finally {
        Yt(i), or.transition = a, nt = t, (nt & (sr | ri)) === Fn && qu();
      }
    }
    function NC() {
      return (nt & (sr | ri)) !== Fn;
    }
    function Fm(e, t) {
      br(Z0, ol, e), ol = Be(ol, t);
    }
    function ag(e) {
      ol = Z0.current, _r(Z0, e);
    }
    function Cs(e, t) {
      e.finishedWork = null, e.finishedLanes = W;
      var a = e.timeoutHandle;
      if (a !== e1 && (e.timeoutHandle = e1, i5(a)), Jt !== null)
        for (var i = Jt.return; i !== null; ) {
          var u = i.alternate;
          iC(u, i), i = i.return;
        }
      Wr = e;
      var s = Es(e.current, null);
      return Jt = s, Vn = ol = t, Pn = Gl, Tp = null, Om = W, Rp = W, Mm = W, wp = null, Ca = null, bE(), Ri.discardPendingWarnings(), s;
    }
    function LC(e, t) {
      do {
        var a = Jt;
        try {
          if (Zh(), t4(), on(), Q0.current = null, a === null || a.return === null) {
            Pn = Ep, Tp = t, Jt = null;
            return;
          }
          if (un && a.mode & ze && Rm(a, !0), Fa)
            if (Er(), t !== null && typeof t == "object" && typeof t.then == "function") {
              var i = t;
              bl(a, i, Vn);
            } else
              Ao(a, t, Vn);
          n9(e, a.return, a, t, Vn), jC(a);
        } catch (u) {
          t = u, Jt === a && a !== null ? (a = a.return, Jt = a) : a = Jt;
          continue;
        }
        return;
      } while (!0);
    }
    function OC() {
      var e = W0.current;
      return W0.current = Cm, e === null ? Cm : e;
    }
    function MC(e) {
      W0.current = e;
    }
    function M6() {
      q0 = Pt();
    }
    function Np(e) {
      Om = Be(e, Om);
    }
    function U6() {
      Pn === Gl && (Pn = Lm);
    }
    function ig() {
      (Pn === Gl || Pn === Lm || Pn === ys) && (Pn = xp), Wr !== null && ($o(Om) || $o(Rp)) && uo(Wr, Vn);
    }
    function j6(e) {
      Pn !== xp && (Pn = ys), wp === null ? wp = [e] : wp.push(e);
    }
    function z6() {
      return Pn === Gl;
    }
    function Vm(e, t) {
      var a = nt;
      nt |= sr;
      var i = OC();
      if (Wr !== e || Vn !== t) {
        if (Br) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (Lp(e, Vn), u.clear()), Sd(e, t);
        }
        Zl = Qo(), Cs(e, t);
      }
      At(t);
      do
        try {
          A6();
          break;
        } catch (s) {
          LC(e, s);
        }
      while (!0);
      if (Zh(), nt = a, MC(i), Jt !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return nc(), Wr = null, Vn = W, Pn;
    }
    function A6() {
      for (; Jt !== null; )
        UC(Jt);
    }
    function H6(e, t) {
      var a = nt;
      nt |= sr;
      var i = OC();
      if (Wr !== e || Vn !== t) {
        if (Br) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (Lp(e, Vn), u.clear()), Sd(e, t);
        }
        Zl = Qo(), _p(), Cs(e, t);
      }
      At(t);
      do
        try {
          F6();
          break;
        } catch (s) {
          LC(e, s);
        }
      while (!0);
      return Zh(), MC(i), nt = a, Jt !== null ? (tc(), Gl) : (nc(), Wr = null, Vn = W, Pn);
    }
    function F6() {
      for (; Jt !== null && !Zs(); )
        UC(Jt);
    }
    function UC(e) {
      var t = e.alternate;
      St(e);
      var a;
      (e.mode & ze) !== ge ? (o0(e), a = lg(t, e, ol), Rm(e, !0)) : a = lg(t, e, ol), on(), e.memoizedProps = e.pendingProps, a === null ? jC(e) : Jt = a, Q0.current = null;
    }
    function jC(e) {
      var t = e;
      do {
        var a = t.alternate, i = t.return;
        if ((t.flags & Fr) === _e) {
          St(t);
          var u = void 0;
          if ((t.mode & ze) === ge ? u = aC(a, t, ol) : (o0(t), u = aC(a, t, ol), Rm(t, !1)), on(), u !== null) {
            Jt = u;
            return;
          }
        } else {
          var s = U9(a, t);
          if (s !== null) {
            s.flags &= Ov, Jt = s;
            return;
          }
          if ((t.mode & ze) !== ge) {
            Rm(t, !1);
            for (var f = t.actualDuration, p = t.child; p !== null; )
              f += p.actualDuration, p = p.sibling;
            t.actualDuration = f;
          }
          if (i !== null)
            i.flags |= Fr, i.subtreeFlags = _e, i.deletions = null;
          else {
            Pn = G0, Jt = null;
            return;
          }
        }
        var h = t.sibling;
        if (h !== null) {
          Jt = h;
          return;
        }
        t = i, Jt = t;
      } while (t !== null);
      Pn === Gl && (Pn = xC);
    }
    function Ss(e, t, a) {
      var i = fa(), u = or.transition;
      try {
        or.transition = null, Yt(Xt), V6(e, t, a, i);
      } finally {
        or.transition = u, Yt(i);
      }
      return null;
    }
    function V6(e, t, a, i) {
      do
        Xl();
      while (io !== null);
      if (X6(), (nt & (sr | ri)) !== Fn)
        throw new Error("Should not already be working.");
      var u = e.finishedWork, s = e.finishedLanes;
      if (Yi(s), u === null)
        return Ks(), null;
      if (s === W && y("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = W, u === e.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackPriority = an;
      var f = Be(u.lanes, u.childLanes);
      xc(e, f), e === Wr && (Wr = null, Jt = null, Vn = W), ((u.subtreeFlags & la) !== _e || (u.flags & la) !== _e) && (gs || (gs = !0, J0 = a, sg(Qa, function() {
        return Xl(), null;
      })));
      var p = (u.subtreeFlags & (mu | Cr | Gn | la)) !== _e, h = (u.flags & (mu | Cr | Gn | la)) !== _e;
      if (p || h) {
        var C = or.transition;
        or.transition = null;
        var E = fa();
        Yt(Xt);
        var N = nt;
        nt |= ri, Q0.current = null, F9(e, u), _4(), J9(e, u, s), K3(e.containerInfo), e.current = u, fd(s), e6(u, e, s), Eu(), jv(), nt = N, Yt(E), or.transition = C;
      } else
        e.current = u, _4();
      var D = gs;
      if (gs ? (gs = !1, io = e, bp = s) : (yf = 0, zm = null), f = e.pendingLanes, f === W && (mf = null), D || FC(e.current, !1), gu(u.stateNode, i), Br && e.memoizedUpdaters.clear(), C6(), Sa(e, Pt()), t !== null)
        for (var z = e.onRecoverableError, H = 0; H < t.length; H++) {
          var P = t[H], le = P.stack, De = P.digest;
          z(P.value, {
            componentStack: le,
            digest: De
          });
        }
      if (Um) {
        Um = !1;
        var Ee = X0;
        throw X0 = null, Ee;
      }
      return Rr(bp, Te) && e.tag !== Zu && Xl(), f = e.pendingLanes, Rr(f, Te) ? (YE(), e === eg ? Dp++ : (Dp = 0, eg = e)) : Dp = 0, qu(), Ks(), null;
    }
    function Xl() {
      if (io !== null) {
        var e = Un(bp), t = Ry(Ga, e), a = or.transition, i = fa();
        try {
          return or.transition = null, Yt(t), B6();
        } finally {
          Yt(i), or.transition = a;
        }
      }
      return !1;
    }
    function P6(e) {
      K0.push(e), gs || (gs = !0, sg(Qa, function() {
        return Xl(), null;
      }));
    }
    function B6() {
      if (io === null)
        return !1;
      var e = J0;
      J0 = null;
      var t = io, a = bp;
      if (io = null, bp = W, (nt & (sr | ri)) !== Fn)
        throw new Error("Cannot flush passive effects while already rendering.");
      tg = !0, jm = !1, Pv(a);
      var i = nt;
      nt |= ri, u6(t.current), r6(t, t.current, a, e);
      {
        var u = K0;
        K0 = [];
        for (var s = 0; s < u.length; s++) {
          var f = u[s];
          $9(t, f);
        }
      }
      dd(), FC(t.current, !0), nt = i, qu(), jm ? t === zm ? yf++ : (yf = 0, zm = t) : yf = 0, tg = !1, jm = !1, sa(t);
      {
        var p = t.current.stateNode;
        p.effectDuration = 0, p.passiveEffectDuration = 0;
      }
      return !0;
    }
    function zC(e) {
      return mf !== null && mf.has(e);
    }
    function $6(e) {
      mf === null ? mf = /* @__PURE__ */ new Set([e]) : mf.add(e);
    }
    function I6(e) {
      Um || (Um = !0, X0 = e);
    }
    var Y6 = I6;
    function AC(e, t, a) {
      var i = hs(a, t), u = U4(e, i, Te), s = Ku(e, u, Te), f = Qr();
      s !== null && (Ul(s, Te, f), Sa(s, f));
    }
    function jt(e, t, a) {
      if (z9(a), Op(!1), e.tag === I) {
        AC(e, e, a);
        return;
      }
      var i = null;
      for (i = t; i !== null; ) {
        if (i.tag === I) {
          AC(i, e, a);
          return;
        } else if (i.tag === F) {
          var u = i.type, s = i.stateNode;
          if (typeof u.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && !zC(s)) {
            var f = hs(a, e), p = _0(i, f, Te), h = Ku(i, p, Te), C = Qr();
            h !== null && (Ul(h, Te, C), Sa(h, C));
            return;
          }
        }
        i = i.return;
      }
      y(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`, a);
    }
    function W6(e, t, a) {
      var i = e.pingCache;
      i !== null && i.delete(t);
      var u = Qr();
      Ec(e, a), t8(e), Wr === e && Ml(Vn, a) && (Pn === xp || Pn === Lm && Wv(Vn) && Pt() - q0 < TC ? Cs(e, W) : Mm = Be(Mm, a)), Sa(e, u);
    }
    function HC(e, t) {
      t === an && (t = _6(e));
      var a = Qr(), i = ya(e, t);
      i !== null && (Ul(i, t, a), Sa(i, a));
    }
    function Q6(e) {
      var t = e.memoizedState, a = an;
      t !== null && (a = t.retryLane), HC(e, a);
    }
    function G6(e, t) {
      var a = an, i;
      switch (e.tag) {
        case Ye:
          i = e.stateNode;
          var u = e.memoizedState;
          u !== null && (a = u.retryLane);
          break;
        case dt:
          i = e.stateNode;
          break;
        default:
          throw new Error("Pinged unknown suspense boundary type. This is probably a bug in React.");
      }
      i !== null && i.delete(t), HC(e, a);
    }
    function Z6(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : x6(e / 1960) * 1960;
    }
    function q6() {
      if (Dp > R6)
        throw Dp = 0, eg = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      yf > w6 && (yf = 0, zm = null, y("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function X6() {
      Ri.flushLegacyContextWarning(), Ri.flushPendingUnsafeLifecycleWarnings();
    }
    function FC(e, t) {
      St(e), Pm(e, gr, m6), t && Pm(e, Rl, y6), Pm(e, gr, v6), t && Pm(e, Rl, h6), on();
    }
    function Pm(e, t, a) {
      for (var i = e, u = null; i !== null; ) {
        var s = i.subtreeFlags & t;
        i !== u && i.child !== null && s !== _e ? i = i.child : ((i.flags & t) !== _e && a(i), i.sibling !== null ? i = i.sibling : i = u = i.return);
      }
    }
    var Bm = null;
    function VC(e) {
      {
        if ((nt & sr) !== Fn || !(e.mode & Se))
          return;
        var t = e.tag;
        if (t !== ee && t !== I && t !== F && t !== V && t !== Re && t !== mt && t !== $e)
          return;
        var a = Pe(e) || "ReactComponent";
        if (Bm !== null) {
          if (Bm.has(a))
            return;
          Bm.add(a);
        } else
          Bm = /* @__PURE__ */ new Set([a]);
        var i = tn;
        try {
          St(e), y("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
        } finally {
          i ? St(e) : on();
        }
      }
    }
    var lg;
    {
      var K6 = null;
      lg = function(e, t, a) {
        var i = GC(K6, t);
        try {
          return J4(e, t, a);
        } catch (s) {
          if (cE() || s !== null && typeof s == "object" && typeof s.then == "function")
            throw s;
          if (Zh(), t4(), iC(e, t), GC(t, i), t.mode & ze && o0(t), Tl(null, J4, null, e, t, a), Cy()) {
            var u = nd();
            typeof u == "object" && u !== null && u._suppressLogging && typeof s == "object" && s !== null && !s._suppressLogging && (s._suppressLogging = !0);
          }
          throw s;
        }
      };
    }
    var PC = !1, ug;
    ug = /* @__PURE__ */ new Set();
    function J6(e) {
      if (ea && !BE())
        switch (e.tag) {
          case V:
          case Re:
          case $e: {
            var t = Jt && Pe(Jt) || "Unknown", a = t;
            if (!ug.has(a)) {
              ug.add(a);
              var i = Pe(e) || "Unknown";
              y("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", i, t, t);
            }
            break;
          }
          case F: {
            PC || (y("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), PC = !0);
            break;
          }
        }
    }
    function Lp(e, t) {
      if (Br) {
        var a = e.memoizedUpdaters;
        a.forEach(function(i) {
          Tc(e, i, t);
        });
      }
    }
    var og = {};
    function sg(e, t) {
      {
        var a = Oi.current;
        return a !== null ? (a.push(t), og) : Gs(e, t);
      }
    }
    function BC(e) {
      if (e !== og)
        return Uv(e);
    }
    function $C() {
      return Oi.current !== null;
    }
    function e8(e) {
      {
        if (e.mode & Se) {
          if (!SC())
            return;
        } else if (!E6() || nt !== Fn || e.tag !== V && e.tag !== Re && e.tag !== $e)
          return;
        if (Oi.current === null) {
          var t = tn;
          try {
            St(e), y(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, Pe(e));
          } finally {
            t ? St(e) : on();
          }
        }
      }
    }
    function t8(e) {
      e.tag !== Zu && SC() && Oi.current === null && y(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
    }
    function Op(e) {
      _C = e;
    }
    var ai = null, gf = null, n8 = function(e) {
      ai = e;
    };
    function Cf(e) {
      {
        if (ai === null)
          return e;
        var t = ai(e);
        return t === void 0 ? e : t.current;
      }
    }
    function cg(e) {
      return Cf(e);
    }
    function fg(e) {
      {
        if (ai === null)
          return e;
        var t = ai(e);
        if (t === void 0) {
          if (e != null && typeof e.render == "function") {
            var a = Cf(e.render);
            if (e.render !== a) {
              var i = {
                $$typeof: ne,
                render: a
              };
              return e.displayName !== void 0 && (i.displayName = e.displayName), i;
            }
          }
          return e;
        }
        return t.current;
      }
    }
    function IC(e, t) {
      {
        if (ai === null)
          return !1;
        var a = e.elementType, i = t.type, u = !1, s = typeof i == "object" && i !== null ? i.$$typeof : null;
        switch (e.tag) {
          case F: {
            typeof i == "function" && (u = !0);
            break;
          }
          case V: {
            (typeof i == "function" || s === Me) && (u = !0);
            break;
          }
          case Re: {
            (s === ne || s === Me) && (u = !0);
            break;
          }
          case mt:
          case $e: {
            (s === it || s === Me) && (u = !0);
            break;
          }
          default:
            return !1;
        }
        if (u) {
          var f = ai(a);
          if (f !== void 0 && f === ai(i))
            return !0;
        }
        return !1;
      }
    }
    function YC(e) {
      {
        if (ai === null || typeof WeakSet != "function")
          return;
        gf === null && (gf = /* @__PURE__ */ new WeakSet()), gf.add(e);
      }
    }
    var r8 = function(e, t) {
      {
        if (ai === null)
          return;
        var a = t.staleFamilies, i = t.updatedFamilies;
        Xl(), ql(function() {
          dg(e.current, i, a);
        });
      }
    }, a8 = function(e, t) {
      {
        if (e.context !== ja)
          return;
        Xl(), ql(function() {
          Mp(t, e, null, null);
        });
      }
    };
    function dg(e, t, a) {
      {
        var i = e.alternate, u = e.child, s = e.sibling, f = e.tag, p = e.type, h = null;
        switch (f) {
          case V:
          case $e:
          case F:
            h = p;
            break;
          case Re:
            h = p.render;
            break;
        }
        if (ai === null)
          throw new Error("Expected resolveFamily to be set during hot reload.");
        var C = !1, E = !1;
        if (h !== null) {
          var N = ai(h);
          N !== void 0 && (a.has(N) ? E = !0 : t.has(N) && (f === F ? E = !0 : C = !0));
        }
        if (gf !== null && (gf.has(e) || i !== null && gf.has(i)) && (E = !0), E && (e._debugNeedsRemount = !0), E || C) {
          var D = ya(e, Te);
          D !== null && Bn(D, e, Te, Dt);
        }
        u !== null && !E && dg(u, t, a), s !== null && dg(s, t, a);
      }
    }
    var i8 = function(e, t) {
      {
        var a = /* @__PURE__ */ new Set(), i = new Set(t.map(function(u) {
          return u.current;
        }));
        return pg(e.current, i, a), a;
      }
    };
    function pg(e, t, a) {
      {
        var i = e.child, u = e.sibling, s = e.tag, f = e.type, p = null;
        switch (s) {
          case V:
          case $e:
          case F:
            p = f;
            break;
          case Re:
            p = f.render;
            break;
        }
        var h = !1;
        p !== null && t.has(p) && (h = !0), h ? l8(e, a) : i !== null && pg(i, t, a), u !== null && pg(u, t, a);
      }
    }
    function l8(e, t) {
      {
        var a = u8(e, t);
        if (a)
          return;
        for (var i = e; ; ) {
          switch (i.tag) {
            case oe:
              t.add(i.stateNode);
              return;
            case K:
              t.add(i.stateNode.containerInfo);
              return;
            case I:
              t.add(i.stateNode.containerInfo);
              return;
          }
          if (i.return === null)
            throw new Error("Expected to reach root first.");
          i = i.return;
        }
      }
    }
    function u8(e, t) {
      for (var a = e, i = !1; ; ) {
        if (a.tag === oe)
          i = !0, t.add(a.stateNode);
        else if (a.child !== null) {
          a.child.return = a, a = a.child;
          continue;
        }
        if (a === e)
          return i;
        for (; a.sibling === null; ) {
          if (a.return === null || a.return === e)
            return i;
          a = a.return;
        }
        a.sibling.return = a.return, a = a.sibling;
      }
      return !1;
    }
    var vg;
    {
      vg = !1;
      try {
        var WC = Object.preventExtensions({});
      } catch {
        vg = !0;
      }
    }
    function o8(e, t, a, i) {
      this.tag = e, this.key = a, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = i, this.flags = _e, this.subtreeFlags = _e, this.deletions = null, this.lanes = W, this.childLanes = W, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !vg && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var za = function(e, t, a, i) {
      return new o8(e, t, a, i);
    };
    function hg(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function s8(e) {
      return typeof e == "function" && !hg(e) && e.defaultProps === void 0;
    }
    function c8(e) {
      if (typeof e == "function")
        return hg(e) ? F : V;
      if (e != null) {
        var t = e.$$typeof;
        if (t === ne)
          return Re;
        if (t === it)
          return mt;
      }
      return ee;
    }
    function Es(e, t) {
      var a = e.alternate;
      a === null ? (a = za(e.tag, t, e.key, e.mode), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugSource = e._debugSource, a._debugOwner = e._debugOwner, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = _e, a.subtreeFlags = _e, a.deletions = null, a.actualDuration = 0, a.actualStartTime = -1), a.flags = e.flags & On, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue;
      var i = e.dependencies;
      switch (a.dependencies = i === null ? null : {
        lanes: i.lanes,
        firstContext: i.firstContext
      }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case ee:
        case V:
        case $e:
          a.type = Cf(e.type);
          break;
        case F:
          a.type = cg(e.type);
          break;
        case Re:
          a.type = fg(e.type);
          break;
      }
      return a;
    }
    function f8(e, t) {
      e.flags &= On | Ot;
      var a = e.alternate;
      if (a === null)
        e.childLanes = W, e.lanes = t, e.child = null, e.subtreeFlags = _e, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0;
      else {
        e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = _e, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type;
        var i = a.dependencies;
        e.dependencies = i === null ? null : {
          lanes: i.lanes,
          firstContext: i.firstContext
        }, e.selfBaseDuration = a.selfBaseDuration, e.treeBaseDuration = a.treeBaseDuration;
      }
      return e;
    }
    function d8(e, t, a) {
      var i;
      return e === Fh ? (i = Se, t === !0 && (i |= Xe, i |= $r)) : i = ge, Br && (i |= ze), za(I, null, null, i);
    }
    function mg(e, t, a, i, u, s) {
      var f = ee, p = e;
      if (typeof e == "function")
        hg(e) ? (f = F, p = cg(p)) : p = Cf(p);
      else if (typeof e == "string")
        f = oe;
      else
        e: switch (e) {
          case ba:
            return oo(a.children, u, s, t);
          case Ui:
            f = at, u |= Xe, (u & Se) !== ge && (u |= $r);
            break;
          case pl:
            return p8(a, u, s, t);
          case xe:
            return v8(a, u, s, t);
          case tt:
            return h8(a, u, s, t);
          case Lt:
            return QC(a, u, s, t);
          case Vt:
          case Ze:
          case vr:
          case ji:
          case Sn:
          default: {
            if (typeof e == "object" && e !== null)
              switch (e.$$typeof) {
                case R:
                  f = ke;
                  break e;
                case Z:
                  f = kt;
                  break e;
                case ne:
                  f = Re, p = fg(p);
                  break e;
                case it:
                  f = mt;
                  break e;
                case Me:
                  f = Gt, p = null;
                  break e;
              }
            var h = "";
            {
              (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (h += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
              var C = i ? Pe(i) : null;
              C && (h += `

Check the render method of \`` + C + "`.");
            }
            throw new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (e == null ? e : typeof e) + "." + h));
          }
        }
      var E = za(f, a, t, u);
      return E.elementType = e, E.type = p, E.lanes = s, E._debugOwner = i, E;
    }
    function yg(e, t, a) {
      var i = null;
      i = e._owner;
      var u = e.type, s = e.key, f = e.props, p = mg(u, s, f, i, t, a);
      return p._debugSource = e._source, p._debugOwner = e._owner, p;
    }
    function oo(e, t, a, i) {
      var u = za(Qe, e, i, t);
      return u.lanes = a, u;
    }
    function p8(e, t, a, i) {
      typeof e.id != "string" && y('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
      var u = za(Ae, e, i, t | ze);
      return u.elementType = pl, u.lanes = a, u.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, u;
    }
    function v8(e, t, a, i) {
      var u = za(Ye, e, i, t);
      return u.elementType = xe, u.lanes = a, u;
    }
    function h8(e, t, a, i) {
      var u = za(dt, e, i, t);
      return u.elementType = tt, u.lanes = a, u;
    }
    function QC(e, t, a, i) {
      var u = za(He, e, i, t);
      u.elementType = Lt, u.lanes = a;
      var s = {
        isHidden: !1
      };
      return u.stateNode = s, u;
    }
    function gg(e, t, a) {
      var i = za(be, e, null, t);
      return i.lanes = a, i;
    }
    function m8() {
      var e = za(oe, null, null, ge);
      return e.elementType = "DELETED", e;
    }
    function y8(e) {
      var t = za(wt, null, null, ge);
      return t.stateNode = e, t;
    }
    function Cg(e, t, a) {
      var i = e.children !== null ? e.children : [], u = za(K, i, e.key, t);
      return u.lanes = a, u.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        // Used by persistent updates
        implementation: e.implementation
      }, u;
    }
    function GC(e, t) {
      return e === null && (e = za(ee, null, null, ge)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function g8(e, t, a, i, u) {
      this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = e1, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = an, this.eventTimes = Wo(W), this.expirationTimes = Wo(Dt), this.pendingLanes = W, this.suspendedLanes = W, this.pingedLanes = W, this.expiredLanes = W, this.mutableReadLanes = W, this.finishedLanes = W, this.entangledLanes = W, this.entanglements = Wo(W), this.identifierPrefix = i, this.onRecoverableError = u, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
      {
        this.memoizedUpdaters = /* @__PURE__ */ new Set();
        for (var s = this.pendingUpdatersLaneMap = [], f = 0; f < Vo; f++)
          s.push(/* @__PURE__ */ new Set());
      }
      switch (t) {
        case Fh:
          this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
          break;
        case Zu:
          this._debugRootType = a ? "hydrate()" : "render()";
          break;
      }
    }
    function ZC(e, t, a, i, u, s, f, p, h, C) {
      var E = new g8(e, t, a, p, h), N = d8(t, s);
      E.current = N, N.stateNode = E;
      {
        var D = {
          element: i,
          isDehydrated: a,
          cache: null,
          // not enabled yet
          transitions: null,
          pendingSuspenseBoundaries: null
        };
        N.memoizedState = D;
      }
      return O1(N), E;
    }
    var Sg = "18.3.1";
    function C8(e, t, a) {
      var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
      return Ta(i), {
        // This tag allow us to uniquely identify this as a React Portal
        $$typeof: zr,
        key: i == null ? null : "" + i,
        children: e,
        containerInfo: t,
        implementation: a
      };
    }
    var Eg, xg;
    Eg = !1, xg = {};
    function qC(e) {
      if (!e)
        return ja;
      var t = ra(e), a = tE(t);
      if (t.tag === F) {
        var i = t.type;
        if (tl(i))
          return T2(t, i, a);
      }
      return a;
    }
    function S8(e, t) {
      {
        var a = ra(e);
        if (a === void 0) {
          if (typeof e.render == "function")
            throw new Error("Unable to find node on an unmounted component.");
          var i = Object.keys(e).join(",");
          throw new Error("Argument appears to not be a ReactComponent. Keys: " + i);
        }
        var u = ua(a);
        if (u === null)
          return null;
        if (u.mode & Xe) {
          var s = Pe(a) || "Component";
          if (!xg[s]) {
            xg[s] = !0;
            var f = tn;
            try {
              St(u), a.mode & Xe ? y("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s) : y("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s);
            } finally {
              f ? St(f) : on();
            }
          }
        }
        return u.stateNode;
      }
    }
    function XC(e, t, a, i, u, s, f, p) {
      var h = !1, C = null;
      return ZC(e, t, h, C, a, i, u, s, f);
    }
    function KC(e, t, a, i, u, s, f, p, h, C) {
      var E = !0, N = ZC(a, i, E, e, u, s, f, p, h);
      N.context = qC(null);
      var D = N.current, z = Qr(), H = lo(D), P = Wl(z, H);
      return P.callback = t ?? null, Ku(D, P, H), b6(N, H, z), N;
    }
    function Mp(e, t, a, i) {
      cd(t, e);
      var u = t.current, s = Qr(), f = lo(u);
      pd(f);
      var p = qC(a);
      t.context === null ? t.context = p : t.pendingContext = p, ea && tn !== null && !Eg && (Eg = !0, y(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, Pe(tn) || "Unknown"));
      var h = Wl(s, f);
      h.payload = {
        element: e
      }, i = i === void 0 ? null : i, i !== null && (typeof i != "function" && y("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", i), h.callback = i);
      var C = Ku(u, h, f);
      return C !== null && (Bn(C, u, f, s), em(C, u, f)), f;
    }
    function $m(e) {
      var t = e.current;
      if (!t.child)
        return null;
      switch (t.child.tag) {
        case oe:
          return t.child.stateNode;
        default:
          return t.child.stateNode;
      }
    }
    function E8(e) {
      switch (e.tag) {
        case I: {
          var t = e.stateNode;
          if (Rc(t)) {
            var a = md(t);
            L6(t, a);
          }
          break;
        }
        case Ye: {
          ql(function() {
            var u = ya(e, Te);
            if (u !== null) {
              var s = Qr();
              Bn(u, e, Te, s);
            }
          });
          var i = Te;
          Tg(e, i);
          break;
        }
      }
    }
    function JC(e, t) {
      var a = e.memoizedState;
      a !== null && a.dehydrated !== null && (a.retryLane = Xv(a.retryLane, t));
    }
    function Tg(e, t) {
      JC(e, t);
      var a = e.alternate;
      a && JC(a, t);
    }
    function x8(e) {
      if (e.tag === Ye) {
        var t = Bo, a = ya(e, t);
        if (a !== null) {
          var i = Qr();
          Bn(a, e, t, i);
        }
        Tg(e, t);
      }
    }
    function T8(e) {
      if (e.tag === Ye) {
        var t = lo(e), a = ya(e, t);
        if (a !== null) {
          var i = Qr();
          Bn(a, e, t, i);
        }
        Tg(e, t);
      }
    }
    function eS(e) {
      var t = Mv(e);
      return t === null ? null : t.stateNode;
    }
    var tS = function(e) {
      return null;
    };
    function R8(e) {
      return tS(e);
    }
    var nS = function(e) {
      return !1;
    };
    function w8(e) {
      return nS(e);
    }
    var rS = null, aS = null, iS = null, lS = null, uS = null, oS = null, sS = null, cS = null, fS = null;
    {
      var dS = function(e, t, a) {
        var i = t[a], u = En(e) ? e.slice() : qe({}, e);
        return a + 1 === t.length ? (En(u) ? u.splice(i, 1) : delete u[i], u) : (u[i] = dS(e[i], t, a + 1), u);
      }, pS = function(e, t) {
        return dS(e, t, 0);
      }, vS = function(e, t, a, i) {
        var u = t[i], s = En(e) ? e.slice() : qe({}, e);
        if (i + 1 === t.length) {
          var f = a[i];
          s[f] = s[u], En(s) ? s.splice(u, 1) : delete s[u];
        } else
          s[u] = vS(
            // $FlowFixMe number or string is fine here
            e[u],
            t,
            a,
            i + 1
          );
        return s;
      }, hS = function(e, t, a) {
        if (t.length !== a.length) {
          L("copyWithRename() expects paths of the same length");
          return;
        } else
          for (var i = 0; i < a.length - 1; i++)
            if (t[i] !== a[i]) {
              L("copyWithRename() expects paths to be the same except for the deepest key");
              return;
            }
        return vS(e, t, a, 0);
      }, mS = function(e, t, a, i) {
        if (a >= t.length)
          return i;
        var u = t[a], s = En(e) ? e.slice() : qe({}, e);
        return s[u] = mS(e[u], t, a + 1, i), s;
      }, yS = function(e, t, a) {
        return mS(e, t, 0, a);
      }, Rg = function(e, t) {
        for (var a = e.memoizedState; a !== null && t > 0; )
          a = a.next, t--;
        return a;
      };
      rS = function(e, t, a, i) {
        var u = Rg(e, t);
        if (u !== null) {
          var s = yS(u.memoizedState, a, i);
          u.memoizedState = s, u.baseState = s, e.memoizedProps = qe({}, e.memoizedProps);
          var f = ya(e, Te);
          f !== null && Bn(f, e, Te, Dt);
        }
      }, aS = function(e, t, a) {
        var i = Rg(e, t);
        if (i !== null) {
          var u = pS(i.memoizedState, a);
          i.memoizedState = u, i.baseState = u, e.memoizedProps = qe({}, e.memoizedProps);
          var s = ya(e, Te);
          s !== null && Bn(s, e, Te, Dt);
        }
      }, iS = function(e, t, a, i) {
        var u = Rg(e, t);
        if (u !== null) {
          var s = hS(u.memoizedState, a, i);
          u.memoizedState = s, u.baseState = s, e.memoizedProps = qe({}, e.memoizedProps);
          var f = ya(e, Te);
          f !== null && Bn(f, e, Te, Dt);
        }
      }, lS = function(e, t, a) {
        e.pendingProps = yS(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = ya(e, Te);
        i !== null && Bn(i, e, Te, Dt);
      }, uS = function(e, t) {
        e.pendingProps = pS(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var a = ya(e, Te);
        a !== null && Bn(a, e, Te, Dt);
      }, oS = function(e, t, a) {
        e.pendingProps = hS(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = ya(e, Te);
        i !== null && Bn(i, e, Te, Dt);
      }, sS = function(e) {
        var t = ya(e, Te);
        t !== null && Bn(t, e, Te, Dt);
      }, cS = function(e) {
        tS = e;
      }, fS = function(e) {
        nS = e;
      };
    }
    function _8(e) {
      var t = ua(e);
      return t === null ? null : t.stateNode;
    }
    function b8(e) {
      return null;
    }
    function D8() {
      return tn;
    }
    function k8(e) {
      var t = e.findFiberByHostInstance, a = g.ReactCurrentDispatcher;
      return sd({
        bundleType: e.bundleType,
        version: e.version,
        rendererPackageName: e.rendererPackageName,
        rendererConfig: e.rendererConfig,
        overrideHookState: rS,
        overrideHookStateDeletePath: aS,
        overrideHookStateRenamePath: iS,
        overrideProps: lS,
        overridePropsDeletePath: uS,
        overridePropsRenamePath: oS,
        setErrorHandler: cS,
        setSuspenseHandler: fS,
        scheduleUpdate: sS,
        currentDispatcherRef: a,
        findHostInstanceByFiber: _8,
        findFiberByHostInstance: t || b8,
        // React Refresh
        findHostInstancesForRefresh: i8,
        scheduleRefresh: r8,
        scheduleRoot: a8,
        setRefreshHandler: n8,
        // Enables DevTools to append owner stacks to error messages in DEV mode.
        getCurrentFiber: D8,
        // Enables DevTools to detect reconciler version rather than renderer version
        // which may not match for third party renderers.
        reconcilerVersion: Sg
      });
    }
    var gS = typeof reportError == "function" ? (
      // In modern browsers, reportError will dispatch an error event,
      // emulating an uncaught JavaScript error.
      reportError
    ) : function(e) {
      console.error(e);
    };
    function wg(e) {
      this._internalRoot = e;
    }
    Im.prototype.render = wg.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null)
        throw new Error("Cannot update an unmounted root.");
      {
        typeof arguments[1] == "function" ? y("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().") : Ym(arguments[1]) ? y("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.") : typeof arguments[1] < "u" && y("You passed a second argument to root.render(...) but it only accepts one argument.");
        var a = t.containerInfo;
        if (a.nodeType !== nn) {
          var i = eS(t.current);
          i && i.parentNode !== a && y("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
        }
      }
      Mp(e, t, null, null);
    }, Im.prototype.unmount = wg.prototype.unmount = function() {
      typeof arguments[0] == "function" && y("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        NC() && y("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), ql(function() {
          Mp(null, e, null, null);
        }), g2(t);
      }
    };
    function N8(e, t) {
      if (!Ym(e))
        throw new Error("createRoot(...): Target container is not a DOM element.");
      CS(e);
      var a = !1, i = !1, u = "", s = gS;
      t != null && (t.hydrate ? L("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === li && y(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (u = t.identifierPrefix), t.onRecoverableError !== void 0 && (s = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
      var f = XC(e, Fh, null, a, i, u, s);
      Oh(f.current, e);
      var p = e.nodeType === nn ? e.parentNode : e;
      return Fd(p), new wg(f);
    }
    function Im(e) {
      this._internalRoot = e;
    }
    function L8(e) {
      e && by(e);
    }
    Im.prototype.unstable_scheduleHydration = L8;
    function O8(e, t, a) {
      if (!Ym(e))
        throw new Error("hydrateRoot(...): Target container is not a DOM element.");
      CS(e), t === void 0 && y("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
      var i = a ?? null, u = a != null && a.hydratedSources || null, s = !1, f = !1, p = "", h = gS;
      a != null && (a.unstable_strictMode === !0 && (s = !0), a.identifierPrefix !== void 0 && (p = a.identifierPrefix), a.onRecoverableError !== void 0 && (h = a.onRecoverableError));
      var C = KC(t, null, e, Fh, i, s, f, p, h);
      if (Oh(C.current, e), Fd(e), u)
        for (var E = 0; E < u.length; E++) {
          var N = u[E];
          zE(C, N);
        }
      return new Im(C);
    }
    function Ym(e) {
      return !!(e && (e.nodeType === hr || e.nodeType === La || e.nodeType === yl || !ct));
    }
    function Up(e) {
      return !!(e && (e.nodeType === hr || e.nodeType === La || e.nodeType === yl || e.nodeType === nn && e.nodeValue === " react-mount-point-unstable "));
    }
    function CS(e) {
      e.nodeType === hr && e.tagName && e.tagName.toUpperCase() === "BODY" && y("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), qd(e) && (e._reactRootContainer ? y("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : y("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
    }
    var M8 = g.ReactCurrentOwner, SS;
    SS = function(e) {
      if (e._reactRootContainer && e.nodeType !== nn) {
        var t = eS(e._reactRootContainer.current);
        t && t.parentNode !== e && y("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var a = !!e._reactRootContainer, i = _g(e), u = !!(i && Qu(i));
      u && !a && y("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === hr && e.tagName && e.tagName.toUpperCase() === "BODY" && y("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    };
    function _g(e) {
      return e ? e.nodeType === La ? e.documentElement : e.firstChild : null;
    }
    function ES() {
    }
    function U8(e, t, a, i, u) {
      if (u) {
        if (typeof i == "function") {
          var s = i;
          i = function() {
            var D = $m(f);
            s.call(D);
          };
        }
        var f = KC(
          t,
          i,
          e,
          Zu,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          ES
        );
        e._reactRootContainer = f, Oh(f.current, e);
        var p = e.nodeType === nn ? e.parentNode : e;
        return Fd(p), ql(), f;
      } else {
        for (var h; h = e.lastChild; )
          e.removeChild(h);
        if (typeof i == "function") {
          var C = i;
          i = function() {
            var D = $m(E);
            C.call(D);
          };
        }
        var E = XC(
          e,
          Zu,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          ES
        );
        e._reactRootContainer = E, Oh(E.current, e);
        var N = e.nodeType === nn ? e.parentNode : e;
        return Fd(N), ql(function() {
          Mp(t, E, a, i);
        }), E;
      }
    }
    function j8(e, t) {
      e !== null && typeof e != "function" && y("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    function Wm(e, t, a, i, u) {
      SS(a), j8(u === void 0 ? null : u, "render");
      var s = a._reactRootContainer, f;
      if (!s)
        f = U8(a, t, e, u, i);
      else {
        if (f = s, typeof u == "function") {
          var p = u;
          u = function() {
            var h = $m(f);
            p.call(h);
          };
        }
        Mp(t, f, e, u);
      }
      return $m(f);
    }
    var xS = !1;
    function z8(e) {
      {
        xS || (xS = !0, y("findDOMNode is deprecated and will be removed in the next major release. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node"));
        var t = M8.current;
        if (t !== null && t.stateNode !== null) {
          var a = t.stateNode._warnedAboutRefsInRender;
          a || y("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", Ct(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      return e == null ? null : e.nodeType === hr ? e : S8(e, "findDOMNode");
    }
    function A8(e, t, a) {
      if (y("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Up(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = qd(t) && t._reactRootContainer === void 0;
        i && y("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
      }
      return Wm(null, e, t, !0, a);
    }
    function H8(e, t, a) {
      if (y("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Up(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = qd(t) && t._reactRootContainer === void 0;
        i && y("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
      }
      return Wm(null, e, t, !1, a);
    }
    function F8(e, t, a, i) {
      if (y("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Up(a))
        throw new Error("Target container is not a DOM element.");
      if (e == null || !Mo(e))
        throw new Error("parentComponent must be a valid React Component");
      return Wm(e, t, a, !1, i);
    }
    var TS = !1;
    function V8(e) {
      if (TS || (TS = !0, y("unmountComponentAtNode is deprecated and will be removed in the next major release. Switch to the createRoot API. Learn more: https://reactjs.org/link/switch-to-createroot")), !Up(e))
        throw new Error("unmountComponentAtNode(...): Target container is not a DOM element.");
      {
        var t = qd(e) && e._reactRootContainer === void 0;
        t && y("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?");
      }
      if (e._reactRootContainer) {
        {
          var a = _g(e), i = a && !Qu(a);
          i && y("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
        }
        return ql(function() {
          Wm(null, null, e, !1, function() {
            e._reactRootContainer = null, g2(e);
          });
        }), !0;
      } else {
        {
          var u = _g(e), s = !!(u && Qu(u)), f = e.nodeType === hr && Up(e.parentNode) && !!e.parentNode._reactRootContainer;
          s && y("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", f ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return !1;
      }
    }
    Mu(E8), wy(x8), _c(T8), eh(fa), th(Xn), (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
    Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
    Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && y("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), Nv(B3), $s(rg, O6, ql);
    function P8(e, t) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Ym(t))
        throw new Error("Target container is not a DOM element.");
      return C8(e, t, null, a);
    }
    function B8(e, t, a, i) {
      return F8(e, t, a, i);
    }
    var bg = {
      usingClientEntryPoint: !1,
      // Keep in sync with ReactTestUtils.js.
      // This is an array for better minification.
      Events: [Qu, Zc, Mh, Bs, No, rg]
    };
    function $8(e, t) {
      return bg.usingClientEntryPoint || y('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), N8(e, t);
    }
    function I8(e, t, a) {
      return bg.usingClientEntryPoint || y('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), O8(e, t, a);
    }
    function Y8(e) {
      return NC() && y("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), ql(e);
    }
    var W8 = k8({
      findFiberByHostInstance: ls,
      bundleType: 1,
      version: Sg,
      rendererPackageName: "react-dom"
    });
    if (!W8 && gn && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var RS = window.location.protocol;
      /^(https?|file):$/.test(RS) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (RS === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
    }
    xa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = bg, xa.createPortal = P8, xa.createRoot = $8, xa.findDOMNode = z8, xa.flushSync = Y8, xa.hydrate = A8, xa.hydrateRoot = I8, xa.render = H8, xa.unmountComponentAtNode = V8, xa.unstable_batchedUpdates = rg, xa.unstable_renderSubtreeIntoContainer = B8, xa.version = Sg, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), xa;
}
function YS() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
    if (process.env.NODE_ENV !== "production")
      throw new Error("^_^");
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(YS);
    } catch (v) {
      console.error(v);
    }
  }
}
process.env.NODE_ENV === "production" ? (YS(), Sx()) : Ex();
/**
 * @remix-run/router v1.19.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Ug() {
  return Ug = Object.assign ? Object.assign.bind() : function(v) {
    for (var S = 1; S < arguments.length; S++) {
      var g = arguments[S];
      for (var _ in g)
        Object.prototype.hasOwnProperty.call(g, _) && (v[_] = g[_]);
    }
    return v;
  }, Ug.apply(this, arguments);
}
var OS;
(function(v) {
  v.Pop = "POP", v.Push = "PUSH", v.Replace = "REPLACE";
})(OS || (OS = {}));
function hn(v, S) {
  if (v === !1 || v === null || typeof v > "u")
    throw new Error(S);
}
function Pp(v, S) {
  if (!v) {
    typeof console < "u" && console.warn(S);
    try {
      throw new Error(S);
    } catch {
    }
  }
}
function jg(v) {
  let {
    pathname: S = "/",
    search: g = "",
    hash: _ = ""
  } = v;
  return g && g !== "?" && (S += g.charAt(0) === "?" ? g : "?" + g), _ && _ !== "#" && (S += _.charAt(0) === "#" ? _ : "#" + _), S;
}
function WS(v) {
  let S = {};
  if (v) {
    let g = v.indexOf("#");
    g >= 0 && (S.hash = v.substr(g), v = v.substr(0, g));
    let _ = v.indexOf("?");
    _ >= 0 && (S.search = v.substr(_), v = v.substr(0, _)), v && (S.pathname = v);
  }
  return S;
}
var MS;
(function(v) {
  v.data = "data", v.deferred = "deferred", v.redirect = "redirect", v.error = "error";
})(MS || (MS = {}));
function US(v, S) {
  typeof v == "string" && (v = {
    path: v,
    caseSensitive: !1,
    end: !0
  });
  let [g, _] = xx(v.path, v.caseSensitive, v.end), b = S.match(g);
  if (!b) return null;
  let L = b[0], y = L.replace(/(.)\/+$/, "$1"), Y = b.slice(1);
  return {
    params: _.reduce((F, ee, I) => {
      let {
        paramName: K,
        isOptional: oe
      } = ee;
      if (K === "*") {
        let Qe = Y[I] || "";
        y = L.slice(0, L.length - Qe.length).replace(/(.)\/+$/, "$1");
      }
      const be = Y[I];
      return oe && !be ? F[K] = void 0 : F[K] = (be || "").replace(/%2F/g, "/"), F;
    }, {}),
    pathname: L,
    pathnameBase: y,
    pattern: v
  };
}
function xx(v, S, g) {
  S === void 0 && (S = !1), g === void 0 && (g = !0), Pp(v === "*" || !v.endsWith("*") || v.endsWith("/*"), 'Route path "' + v + '" will be treated as if it were ' + ('"' + v.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + v.replace(/\*$/, "/*") + '".'));
  let _ = [], b = "^" + v.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (y, Y, V) => (_.push({
    paramName: Y,
    isOptional: V != null
  }), V ? "/?([^\\/]+)?" : "/([^\\/]+)"));
  return v.endsWith("*") ? (_.push({
    paramName: "*"
  }), b += v === "*" || v === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : g ? b += "\\/*$" : v !== "" && v !== "/" && (b += "(?:(?=\\/|$))"), [new RegExp(b, S ? void 0 : "i"), _];
}
function xf(v, S) {
  if (S === "/") return v;
  if (!v.toLowerCase().startsWith(S.toLowerCase()))
    return null;
  let g = S.endsWith("/") ? S.length - 1 : S.length, _ = v.charAt(g);
  return _ && _ !== "/" ? null : v.slice(g) || "/";
}
function Tx(v, S) {
  S === void 0 && (S = "/");
  let {
    pathname: g,
    search: _ = "",
    hash: b = ""
  } = typeof v == "string" ? WS(v) : v;
  return {
    pathname: g ? g.startsWith("/") ? g : Rx(g, S) : S,
    search: _x(_),
    hash: bx(b)
  };
}
function Rx(v, S) {
  let g = S.replace(/\/+$/, "").split("/");
  return v.split("/").forEach((b) => {
    b === ".." ? g.length > 1 && g.pop() : b !== "." && g.push(b);
  }), g.length > 1 ? g.join("/") : "/";
}
function Ng(v, S, g, _) {
  return "Cannot include a '" + v + "' character in a manually specified " + ("`to." + S + "` field [" + JSON.stringify(_) + "].  Please separate it out to the ") + ("`to." + g + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.';
}
function wx(v) {
  return v.filter((S, g) => g === 0 || S.route.path && S.route.path.length > 0);
}
function QS(v, S) {
  let g = wx(v);
  return S ? g.map((_, b) => b === g.length - 1 ? _.pathname : _.pathnameBase) : g.map((_) => _.pathnameBase);
}
function GS(v, S, g, _) {
  _ === void 0 && (_ = !1);
  let b;
  typeof v == "string" ? b = WS(v) : (b = Ug({}, v), hn(!b.pathname || !b.pathname.includes("?"), Ng("?", "pathname", "search", b)), hn(!b.pathname || !b.pathname.includes("#"), Ng("#", "pathname", "hash", b)), hn(!b.search || !b.search.includes("#"), Ng("#", "search", "hash", b)));
  let L = v === "" || b.pathname === "", y = L ? "/" : b.pathname, Y;
  if (y == null)
    Y = g;
  else {
    let I = S.length - 1;
    if (!_ && y.startsWith("..")) {
      let K = y.split("/");
      for (; K[0] === ".."; )
        K.shift(), I -= 1;
      b.pathname = K.join("/");
    }
    Y = I >= 0 ? S[I] : "/";
  }
  let V = Tx(b, Y), F = y && y !== "/" && y.endsWith("/"), ee = (L || y === ".") && g.endsWith("/");
  return !V.pathname.endsWith("/") && (F || ee) && (V.pathname += "/"), V;
}
const Hg = (v) => v.join("/").replace(/\/\/+/g, "/"), _x = (v) => !v || v === "?" ? "" : v.startsWith("?") ? v : "?" + v, bx = (v) => !v || v === "#" ? "" : v.startsWith("#") ? v : "#" + v, ZS = ["post", "put", "patch", "delete"];
new Set(ZS);
const Dx = ["get", ...ZS];
new Set(Dx);
/**
 * React Router v6.26.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function zg() {
  return zg = Object.assign ? Object.assign.bind() : function(v) {
    for (var S = 1; S < arguments.length; S++) {
      var g = arguments[S];
      for (var _ in g)
        Object.prototype.hasOwnProperty.call(g, _) && (v[_] = g[_]);
    }
    return v;
  }, zg.apply(this, arguments);
}
const Km = /* @__PURE__ */ We.createContext(null);
process.env.NODE_ENV !== "production" && (Km.displayName = "DataRouter");
const qS = /* @__PURE__ */ We.createContext(null);
process.env.NODE_ENV !== "production" && (qS.displayName = "DataRouterState");
const kx = /* @__PURE__ */ We.createContext(null);
process.env.NODE_ENV !== "production" && (kx.displayName = "Await");
const Jl = /* @__PURE__ */ We.createContext(null);
process.env.NODE_ENV !== "production" && (Jl.displayName = "Navigation");
const Fg = /* @__PURE__ */ We.createContext(null);
process.env.NODE_ENV !== "production" && (Fg.displayName = "Location");
const Rf = /* @__PURE__ */ We.createContext({
  outlet: null,
  matches: [],
  isDataRoute: !1
});
process.env.NODE_ENV !== "production" && (Rf.displayName = "Route");
const Nx = /* @__PURE__ */ We.createContext(null);
process.env.NODE_ENV !== "production" && (Nx.displayName = "RouteError");
function Lx(v, S) {
  let {
    relative: g
  } = S === void 0 ? {} : S;
  Vg() || (process.env.NODE_ENV !== "production" ? hn(
    !1,
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useHref() may be used only in the context of a <Router> component."
  ) : hn(!1));
  let {
    basename: _,
    navigator: b
  } = We.useContext(Jl), {
    hash: L,
    pathname: y,
    search: Y
  } = $p(v, {
    relative: g
  }), V = y;
  return _ !== "/" && (V = y === "/" ? _ : Hg([_, y])), b.createHref({
    pathname: V,
    search: Y,
    hash: L
  });
}
function Vg() {
  return We.useContext(Fg) != null;
}
function Bp() {
  return Vg() || (process.env.NODE_ENV !== "production" ? hn(
    !1,
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useLocation() may be used only in the context of a <Router> component."
  ) : hn(!1)), We.useContext(Fg).location;
}
const XS = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function KS(v) {
  We.useContext(Jl).static || We.useLayoutEffect(v);
}
function Ox() {
  let {
    isDataRoute: v
  } = We.useContext(Rf);
  return v ? Ax() : Mx();
}
function Mx() {
  Vg() || (process.env.NODE_ENV !== "production" ? hn(
    !1,
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useNavigate() may be used only in the context of a <Router> component."
  ) : hn(!1));
  let v = We.useContext(Km), {
    basename: S,
    future: g,
    navigator: _
  } = We.useContext(Jl), {
    matches: b
  } = We.useContext(Rf), {
    pathname: L
  } = Bp(), y = JSON.stringify(QS(b, g.v7_relativeSplatPath)), Y = We.useRef(!1);
  return KS(() => {
    Y.current = !0;
  }), We.useCallback(function(F, ee) {
    if (ee === void 0 && (ee = {}), process.env.NODE_ENV !== "production" && Pp(Y.current, XS), !Y.current) return;
    if (typeof F == "number") {
      _.go(F);
      return;
    }
    let I = GS(F, JSON.parse(y), L, ee.relative === "path");
    v == null && S !== "/" && (I.pathname = I.pathname === "/" ? S : Hg([S, I.pathname])), (ee.replace ? _.replace : _.push)(I, ee.state, ee);
  }, [S, _, y, L, v]);
}
function $p(v, S) {
  let {
    relative: g
  } = S === void 0 ? {} : S, {
    future: _
  } = We.useContext(Jl), {
    matches: b
  } = We.useContext(Rf), {
    pathname: L
  } = Bp(), y = JSON.stringify(QS(b, _.v7_relativeSplatPath));
  return We.useMemo(() => GS(v, JSON.parse(y), L, g === "path"), [v, y, L, g]);
}
var JS = /* @__PURE__ */ function(v) {
  return v.UseBlocker = "useBlocker", v.UseRevalidator = "useRevalidator", v.UseNavigateStable = "useNavigate", v;
}(JS || {}), Pg = /* @__PURE__ */ function(v) {
  return v.UseBlocker = "useBlocker", v.UseLoaderData = "useLoaderData", v.UseActionData = "useActionData", v.UseRouteError = "useRouteError", v.UseNavigation = "useNavigation", v.UseRouteLoaderData = "useRouteLoaderData", v.UseMatches = "useMatches", v.UseRevalidator = "useRevalidator", v.UseNavigateStable = "useNavigate", v.UseRouteId = "useRouteId", v;
}(Pg || {});
function e3(v) {
  return v + " must be used within a data router.  See https://reactrouter.com/routers/picking-a-router.";
}
function Ux(v) {
  let S = We.useContext(Km);
  return S || (process.env.NODE_ENV !== "production" ? hn(!1, e3(v)) : hn(!1)), S;
}
function jx(v) {
  let S = We.useContext(Rf);
  return S || (process.env.NODE_ENV !== "production" ? hn(!1, e3(v)) : hn(!1)), S;
}
function t3(v) {
  let S = jx(v), g = S.matches[S.matches.length - 1];
  return g.route.id || (process.env.NODE_ENV !== "production" ? hn(!1, v + ' can only be used on routes that contain a unique "id"') : hn(!1)), g.route.id;
}
function zx() {
  return t3(Pg.UseRouteId);
}
function Ax() {
  let {
    router: v
  } = Ux(JS.UseNavigateStable), S = t3(Pg.UseNavigateStable), g = We.useRef(!1);
  return KS(() => {
    g.current = !0;
  }), We.useCallback(function(b, L) {
    L === void 0 && (L = {}), process.env.NODE_ENV !== "production" && Pp(g.current, XS), g.current && (typeof b == "number" ? v.navigate(b) : v.navigate(b, zg({
      fromRouteId: S
    }, L)));
  }, [v, S]);
}
new Promise(() => {
});
/**
 * React Router DOM v6.26.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Tf() {
  return Tf = Object.assign ? Object.assign.bind() : function(v) {
    for (var S = 1; S < arguments.length; S++) {
      var g = arguments[S];
      for (var _ in g)
        Object.prototype.hasOwnProperty.call(g, _) && (v[_] = g[_]);
    }
    return v;
  }, Tf.apply(this, arguments);
}
function Bg(v, S) {
  if (v == null) return {};
  var g = {}, _ = Object.keys(v), b, L;
  for (L = 0; L < _.length; L++)
    b = _[L], !(S.indexOf(b) >= 0) && (g[b] = v[b]);
  return g;
}
const Zm = "get", qm = "application/x-www-form-urlencoded";
function Jm(v) {
  return v != null && typeof v.tagName == "string";
}
function Hx(v) {
  return Jm(v) && v.tagName.toLowerCase() === "button";
}
function Fx(v) {
  return Jm(v) && v.tagName.toLowerCase() === "form";
}
function Vx(v) {
  return Jm(v) && v.tagName.toLowerCase() === "input";
}
function Px(v) {
  return !!(v.metaKey || v.altKey || v.ctrlKey || v.shiftKey);
}
function Bx(v, S) {
  return v.button === 0 && // Ignore everything but left clicks
  (!S || S === "_self") && // Let browser handle "target=_blank" etc.
  !Px(v);
}
let Gm = null;
function $x() {
  if (Gm === null)
    try {
      new FormData(
        document.createElement("form"),
        // @ts-expect-error if FormData supports the submitter parameter, this will throw
        0
      ), Gm = !1;
    } catch {
      Gm = !0;
    }
  return Gm;
}
const Ix = /* @__PURE__ */ new Set(["application/x-www-form-urlencoded", "multipart/form-data", "text/plain"]);
function Lg(v) {
  return v != null && !Ix.has(v) ? (process.env.NODE_ENV !== "production" && Pp(!1, '"' + v + '" is not a valid `encType` for `<Form>`/`<fetcher.Form>` ' + ('and will default to "' + qm + '"')), null) : v;
}
function Yx(v, S) {
  let g, _, b, L, y;
  if (Fx(v)) {
    let Y = v.getAttribute("action");
    _ = Y ? xf(Y, S) : null, g = v.getAttribute("method") || Zm, b = Lg(v.getAttribute("enctype")) || qm, L = new FormData(v);
  } else if (Hx(v) || Vx(v) && (v.type === "submit" || v.type === "image")) {
    let Y = v.form;
    if (Y == null)
      throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
    let V = v.getAttribute("formaction") || Y.getAttribute("action");
    if (_ = V ? xf(V, S) : null, g = v.getAttribute("formmethod") || Y.getAttribute("method") || Zm, b = Lg(v.getAttribute("formenctype")) || Lg(Y.getAttribute("enctype")) || qm, L = new FormData(Y, v), !$x()) {
      let {
        name: F,
        type: ee,
        value: I
      } = v;
      if (ee === "image") {
        let K = F ? F + "." : "";
        L.append(K + "x", "0"), L.append(K + "y", "0");
      } else F && L.append(F, I);
    }
  } else {
    if (Jm(v))
      throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');
    g = Zm, _ = null, b = qm, y = v;
  }
  return L && b === "text/plain" && (y = L, L = void 0), {
    action: _,
    method: g.toLowerCase(),
    encType: b,
    formData: L,
    body: y
  };
}
const Wx = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset", "unstable_viewTransition"], Qx = ["aria-current", "caseSensitive", "className", "end", "style", "to", "unstable_viewTransition", "children"], Gx = ["fetcherKey", "navigate", "reloadDocument", "replace", "state", "method", "action", "onSubmit", "relative", "preventScrollReset", "unstable_viewTransition"], Zx = "6";
try {
  window.__reactRouterVersion = Zx;
} catch {
}
const n3 = /* @__PURE__ */ We.createContext({
  isTransitioning: !1
});
process.env.NODE_ENV !== "production" && (n3.displayName = "ViewTransition");
const qx = /* @__PURE__ */ We.createContext(/* @__PURE__ */ new Map());
process.env.NODE_ENV !== "production" && (qx.displayName = "Fetchers");
process.env.NODE_ENV;
const Xx = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", Kx = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, $g = /* @__PURE__ */ We.forwardRef(function(S, g) {
  let {
    onClick: _,
    relative: b,
    reloadDocument: L,
    replace: y,
    state: Y,
    target: V,
    to: F,
    preventScrollReset: ee,
    unstable_viewTransition: I
  } = S, K = Bg(S, Wx), {
    basename: oe
  } = We.useContext(Jl), be, Qe = !1;
  if (typeof F == "string" && Kx.test(F) && (be = F, Xx))
    try {
      let Re = new URL(window.location.href), Ae = F.startsWith("//") ? new URL(Re.protocol + F) : new URL(F), Ye = xf(Ae.pathname, oe);
      Ae.origin === Re.origin && Ye != null ? F = Ye + Ae.search + Ae.hash : Qe = !0;
    } catch {
      process.env.NODE_ENV !== "production" && Pp(!1, '<Link to="' + F + '"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.');
    }
  let at = Lx(F, {
    relative: b
  }), kt = nT(F, {
    replace: y,
    state: Y,
    target: V,
    preventScrollReset: ee,
    relative: b,
    unstable_viewTransition: I
  });
  function ke(Re) {
    _ && _(Re), Re.defaultPrevented || kt(Re);
  }
  return (
    // eslint-disable-next-line jsx-a11y/anchor-has-content
    /* @__PURE__ */ We.createElement("a", Tf({}, K, {
      href: be || at,
      onClick: Qe || L ? _ : ke,
      ref: g,
      target: V
    }))
  );
});
process.env.NODE_ENV !== "production" && ($g.displayName = "Link");
const Jx = /* @__PURE__ */ We.forwardRef(function(S, g) {
  let {
    "aria-current": _ = "page",
    caseSensitive: b = !1,
    className: L = "",
    end: y = !1,
    style: Y,
    to: V,
    unstable_viewTransition: F,
    children: ee
  } = S, I = Bg(S, Qx), K = $p(V, {
    relative: I.relative
  }), oe = Bp(), be = We.useContext(qS), {
    navigator: Qe,
    basename: at
  } = We.useContext(Jl), kt = be != null && // Conditional usage is OK here because the usage of a data router is static
  // eslint-disable-next-line react-hooks/rules-of-hooks
  oT(K) && F === !0, ke = Qe.encodeLocation ? Qe.encodeLocation(K).pathname : K.pathname, Re = oe.pathname, Ae = be && be.navigation && be.navigation.location ? be.navigation.location.pathname : null;
  b || (Re = Re.toLowerCase(), Ae = Ae ? Ae.toLowerCase() : null, ke = ke.toLowerCase()), Ae && at && (Ae = xf(Ae, at) || Ae);
  const Ye = ke !== "/" && ke.endsWith("/") ? ke.length - 1 : ke.length;
  let mt = Re === ke || !y && Re.startsWith(ke) && Re.charAt(Ye) === "/", $e = Ae != null && (Ae === ke || !y && Ae.startsWith(ke) && Ae.charAt(ke.length) === "/"), Gt = {
    isActive: mt,
    isPending: $e,
    isTransitioning: kt
  }, mn = mt ? _ : void 0, wt;
  typeof L == "function" ? wt = L(Gt) : wt = [L, mt ? "active" : null, $e ? "pending" : null, kt ? "transitioning" : null].filter(Boolean).join(" ");
  let dt = typeof Y == "function" ? Y(Gt) : Y;
  return /* @__PURE__ */ We.createElement($g, Tf({}, I, {
    "aria-current": mn,
    className: wt,
    ref: g,
    style: dt,
    to: V,
    unstable_viewTransition: F
  }), typeof ee == "function" ? ee(Gt) : ee);
});
process.env.NODE_ENV !== "production" && (Jx.displayName = "NavLink");
const eT = /* @__PURE__ */ We.forwardRef((v, S) => {
  let {
    fetcherKey: g,
    navigate: _,
    reloadDocument: b,
    replace: L,
    state: y,
    method: Y = Zm,
    action: V,
    onSubmit: F,
    relative: ee,
    preventScrollReset: I,
    unstable_viewTransition: K
  } = v, oe = Bg(v, Gx), be = lT(), Qe = uT(V, {
    relative: ee
  }), at = Y.toLowerCase() === "get" ? "get" : "post", kt = (ke) => {
    if (F && F(ke), ke.defaultPrevented) return;
    ke.preventDefault();
    let Re = ke.nativeEvent.submitter, Ae = (Re == null ? void 0 : Re.getAttribute("formmethod")) || Y;
    be(Re || ke.currentTarget, {
      fetcherKey: g,
      method: Ae,
      navigate: _,
      replace: L,
      state: y,
      relative: ee,
      preventScrollReset: I,
      unstable_viewTransition: K
    });
  };
  return /* @__PURE__ */ We.createElement("form", Tf({
    ref: S,
    method: at,
    action: Qe,
    onSubmit: b ? F : kt
  }, oe));
});
process.env.NODE_ENV !== "production" && (eT.displayName = "Form");
process.env.NODE_ENV;
var Xm;
(function(v) {
  v.UseScrollRestoration = "useScrollRestoration", v.UseSubmit = "useSubmit", v.UseSubmitFetcher = "useSubmitFetcher", v.UseFetcher = "useFetcher", v.useViewTransitionState = "useViewTransitionState";
})(Xm || (Xm = {}));
var jS;
(function(v) {
  v.UseFetcher = "useFetcher", v.UseFetchers = "useFetchers", v.UseScrollRestoration = "useScrollRestoration";
})(jS || (jS = {}));
function tT(v) {
  return v + " must be used within a data router.  See https://reactrouter.com/routers/picking-a-router.";
}
function r3(v) {
  let S = We.useContext(Km);
  return S || (process.env.NODE_ENV !== "production" ? hn(!1, tT(v)) : hn(!1)), S;
}
function nT(v, S) {
  let {
    target: g,
    replace: _,
    state: b,
    preventScrollReset: L,
    relative: y,
    unstable_viewTransition: Y
  } = S === void 0 ? {} : S, V = Ox(), F = Bp(), ee = $p(v, {
    relative: y
  });
  return We.useCallback((I) => {
    if (Bx(I, g)) {
      I.preventDefault();
      let K = _ !== void 0 ? _ : jg(F) === jg(ee);
      V(v, {
        replace: K,
        state: b,
        preventScrollReset: L,
        relative: y,
        unstable_viewTransition: Y
      });
    }
  }, [F, V, ee, _, b, g, v, L, y, Y]);
}
function rT() {
  if (typeof document > "u")
    throw new Error("You are calling submit during the server render. Try calling submit within a `useEffect` or callback instead.");
}
let aT = 0, iT = () => "__" + String(++aT) + "__";
function lT() {
  let {
    router: v
  } = r3(Xm.UseSubmit), {
    basename: S
  } = We.useContext(Jl), g = zx();
  return We.useCallback(function(_, b) {
    b === void 0 && (b = {}), rT();
    let {
      action: L,
      method: y,
      encType: Y,
      formData: V,
      body: F
    } = Yx(_, S);
    if (b.navigate === !1) {
      let ee = b.fetcherKey || iT();
      v.fetch(ee, g, b.action || L, {
        preventScrollReset: b.preventScrollReset,
        formData: V,
        body: F,
        formMethod: b.method || y,
        formEncType: b.encType || Y,
        unstable_flushSync: b.unstable_flushSync
      });
    } else
      v.navigate(b.action || L, {
        preventScrollReset: b.preventScrollReset,
        formData: V,
        body: F,
        formMethod: b.method || y,
        formEncType: b.encType || Y,
        replace: b.replace,
        state: b.state,
        fromRouteId: g,
        unstable_flushSync: b.unstable_flushSync,
        unstable_viewTransition: b.unstable_viewTransition
      });
  }, [v, S, g]);
}
function uT(v, S) {
  let {
    relative: g
  } = S === void 0 ? {} : S, {
    basename: _
  } = We.useContext(Jl), b = We.useContext(Rf);
  b || (process.env.NODE_ENV !== "production" ? hn(!1, "useFormAction must be used inside a RouteContext") : hn(!1));
  let [L] = b.matches.slice(-1), y = Tf({}, $p(v || ".", {
    relative: g
  })), Y = Bp();
  if (v == null) {
    y.search = Y.search;
    let V = new URLSearchParams(y.search);
    V.has("index") && V.get("index") === "" && (V.delete("index"), y.search = V.toString() ? "?" + V.toString() : "");
  }
  return (!v || v === ".") && L.route.index && (y.search = y.search ? y.search.replace(/^\?/, "?index&") : "?index"), _ !== "/" && (y.pathname = y.pathname === "/" ? _ : Hg([_, y.pathname])), jg(y);
}
function oT(v, S) {
  S === void 0 && (S = {});
  let g = We.useContext(n3);
  g == null && (process.env.NODE_ENV !== "production" ? hn(!1, "`unstable_useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?") : hn(!1));
  let {
    basename: _
  } = r3(Xm.useViewTransitionState), b = $p(v, {
    relative: S.relative
  });
  if (!g.isTransitioning)
    return !1;
  let L = xf(g.currentLocation.pathname, _) || g.currentLocation.pathname, y = xf(g.nextLocation.pathname, _) || g.nextLocation.pathname;
  return US(b.pathname, y) != null || US(b.pathname, L) != null;
}
const a3 = ({
  href: v,
  text: S,
  inApp: g = !0,
  isDisabled: _ = !1,
  variant: b = "primary",
  iconAfter: L = Vp.EMPTY
}) => {
  const y = L && so[L];
  return _ ? /* @__PURE__ */ T.jsx("span", { className: "torres-link torres-link--disabled", children: S }) : /* @__PURE__ */ T.jsxs(
    $g,
    {
      to: v,
      target: g ? "_self" : "_blank",
      className: `torres-link torres-link--${b}`,
      children: [
        S,
        y && b === "secondary" && /* @__PURE__ */ T.jsx(y, {})
      ]
    }
  );
}, i3 = ({ text: v, size: S = "large", align: g = "left" }) => {
  const _ = Lr("torres-subtitle", {
    [`torres-subtitle--${S}`]: S,
    [`torres-subtitle--${g}`]: g
  });
  return /* @__PURE__ */ T.jsx("h3", { className: _, children: v });
}, gT = ({ text: v, size: S = "large", align: g = "left" }) => {
  const _ = Lr("torres-title", {
    [`torres-title--${S}`]: S,
    [`torres-title--${g}`]: g
  });
  return /* @__PURE__ */ T.jsx("h1", { className: _, children: v });
}, CT = ({ text: v, size: S = "large", align: g = "left" }) => {
  const _ = Lr("torres-paragraph", {
    [`torres-paragraph--${S}`]: S,
    [`torres-paragraph--${g}`]: g
  });
  return /* @__PURE__ */ T.jsx("p", { className: _, children: v });
}, sT = ({ initialQuantity: v, onQuantityChange: S, variant: g, size: _ }) => {
  const [b, L] = xs(v);
  Ha(() => {
    L(v);
  }, [v]);
  const y = () => {
    const V = b + 1;
    L(V), S(V);
  }, Y = () => {
    if (b > 1) {
      const V = b - 1;
      L(V), S(V);
    }
  };
  return /* @__PURE__ */ T.jsxs("div", { className: `torres--quantity torres--quantity--${g} torres--quantity--${_}`, children: [
    /* @__PURE__ */ T.jsx("button", { className: "torres--quantity__button", onClick: Y, disabled: b <= 1, children: "-" }),
    /* @__PURE__ */ T.jsx("span", { className: "torres--quantity__value", children: b }),
    /* @__PURE__ */ T.jsx("button", { className: "torres--quantity__button", onClick: y, children: "+" })
  ] });
}, ST = ({ value: v, total: S = 100 }) => /* @__PURE__ */ T.jsxs("div", { className: "progress-bar-container", children: [
  /* @__PURE__ */ T.jsxs("div", { className: "progress-bar-container__value", children: [
    "0",
    v
  ] }),
  /* @__PURE__ */ T.jsx("div", { className: "progress-bar-container__progress-bar", children: /* @__PURE__ */ T.jsx("div", { className: "progress-bar-container__progress-bar__progress", style: { width: `${v / S * 100}%` } }) }),
  /* @__PURE__ */ T.jsxs("div", { className: `progress-bar-container__total progress-bar-container__total--${v === S && "completed"}`, children: [
    "0",
    S
  ] })
] }), Og = ({ children: v, variant: S = "default", size: g = "medium" }) => /* @__PURE__ */ T.jsx("div", { className: `badge badge--${S} badge--${g}`, children: v }), cT = ({ status: v, label: S }) => /* @__PURE__ */ T.jsx("span", { className: `tag-torres tag-torres--${v}`, children: S }), fT = ({
  value: v,
  size: S = 72,
  // in pixels
  error: g = !1,
  valueMaximum: _ = 100
}) => {
  let b = 0;
  const L = 16.62 / 72 * S, y = 6 / 72 * S, Y = (S - y) / 2, V = 2 * Math.PI * Y, F = v / _ * 100;
  b = F > 100 ? 100 : F, b = g ? 90 : b;
  const ee = b === 100, I = V * ((100 - b) / 100);
  return Ha(() => {
    v > _ && console.error("The value is greater than the maximum value allowed");
  }, [v, _]), /* @__PURE__ */ T.jsxs(
    "svg",
    {
      className: `circle-percentage 
          circle-percentage--${g ? "error" : "success "}
          circle-percentage--${ee ? "full" : "not-full"}
        `,
      width: S,
      height: S,
      children: [
        /* @__PURE__ */ T.jsx(
          "circle",
          {
            className: "circle-percentage__background",
            cx: S / 2,
            cy: S / 2,
            r: Y,
            strokeWidth: y
          }
        ),
        /* @__PURE__ */ T.jsx(
          "circle",
          {
            className: "circle-percentage__bar",
            cx: S / 2,
            cy: S / 2,
            r: Y,
            strokeWidth: y,
            style: {
              strokeDasharray: `${V} ${V}`,
              strokeDashoffset: I
            }
          }
        ),
        /* @__PURE__ */ T.jsxs(
          "text",
          {
            x: "50%",
            y: "50%",
            dominantBaseline: "middle",
            textAnchor: "middle",
            className: "circle-percentage__text",
            fontSize: `${L}px`,
            children: [
              b % 1 === 0 ? b : b.toFixed(1),
              "%"
            ]
          }
        ),
        /* @__PURE__ */ T.jsx(
          "svg",
          {
            x: "20%",
            y: "20%",
            width: S,
            height: S,
            viewBox: "0 0 55 55",
            fill: "none",
            className: "circle-percentage__icon-check",
            children: /* @__PURE__ */ T.jsx(
              "path",
              {
                d: "M13.1362 24.6999C12.9037 24.71 12.6745 24.6417 12.4855 24.506L6.26853 19.3691C5.86799 19.0145 5.80769 18.4114 6.13007 17.9845C6.48408 17.5858 7.08249 17.5199 7.51469 17.8322L13.0531 22.346L27.5916 8.90139C28.0216 8.57859 28.6268 8.63733 28.9866 9.03677C29.3465 9.43621 29.342 10.0443 28.9762 10.4383L13.8424 24.4229C13.6496 24.5998 13.3979 24.6985 13.1362 24.6999Z",
                fill: "#47DCA6"
              }
            )
          }
        ),
        /* @__PURE__ */ T.jsx(
          "svg",
          {
            x: "-15%",
            y: "-15%",
            width: S,
            height: S,
            viewBox: "0 0 55 55",
            fill: "none",
            className: "circle-percentage__icon-error",
            children: /* @__PURE__ */ T.jsx(
              "path",
              {
                d: "M37.6151 36.0117L48.132 25.5304C48.5714 25.0869 48.5714 24.3684 48.132 23.9249C47.7004 23.4735 46.9876 23.4599 46.5394 23.8946L36.0225 34.3759L25.6408 23.8946C25.428 23.6677 25.1318 23.5391 24.822 23.5391C24.5122 23.5391 24.2161 23.6677 24.0032 23.8946C23.6136 24.3231 23.6136 24.9808 24.0032 25.4093L34.3849 35.8754L23.868 46.3416C23.4286 46.7851 23.4286 47.5036 23.868 47.9471C24.0772 48.1631 24.3649 48.2835 24.6643 48.2803C24.9695 48.3053 25.272 48.2072 25.5056 48.0077L36.0225 37.5264L46.5394 48.1289C46.7486 48.3449 47.0363 48.4652 47.3357 48.4621C47.6348 48.4635 47.9218 48.3434 48.132 48.1289C48.5714 47.6853 48.5714 46.9669 48.132 46.5233L37.6151 36.0117Z",
                fill: "#FC4E55"
              }
            )
          }
        )
      ]
    }
  );
}, ET = ({ image: v, title: S, toRedirect: g }) => /* @__PURE__ */ T.jsxs("div", { className: "torres-banner-one", children: [
  /* @__PURE__ */ T.jsx(Ag, { ...v }),
  /* @__PURE__ */ T.jsxs("div", { className: "torres-banner-one__content", children: [
    /* @__PURE__ */ T.jsx(i3, { text: S }),
    /* @__PURE__ */ T.jsx(a3, { ...g, variant: "secondary" })
  ] })
] }), xT = ({ image: v, title: S, toRedirect: g }) => /* @__PURE__ */ T.jsxs("div", { className: "torres-banner-two", children: [
  /* @__PURE__ */ T.jsx(Ag, { ...v }),
  /* @__PURE__ */ T.jsxs("div", { className: "torres-banner-two__content", children: [
    /* @__PURE__ */ T.jsx(i3, { text: S }),
    /* @__PURE__ */ T.jsx(a3, { ...g, variant: "secondary" })
  ] })
] }), TT = ({
  image: v,
  price: S,
  name: g,
  priceList: _,
  action: b
}) => {
  const L = (S - _) / S * 100;
  return /* @__PURE__ */ T.jsxs("div", { className: "torres-card-product", onClick: b, children: [
    /* @__PURE__ */ T.jsx("div", { className: "torres-card-product__container-tag", children: _ !== S && /* @__PURE__ */ T.jsx(yx, { text: `-${L.toFixed(0)}%` }) }),
    /* @__PURE__ */ T.jsx(
      Ag,
      {
        url: v.url,
        alt: v.alt,
        aspectRatio: v.aspectRatio
      }
    ),
    /* @__PURE__ */ T.jsx("div", { className: "torres-card-product__container-name", children: /* @__PURE__ */ T.jsx("span", { className: "torres-card-product__name", children: g }) }),
    /* @__PURE__ */ T.jsxs("div", { className: "torres-card-product__container-prices", children: [
      /* @__PURE__ */ T.jsx(Fp, { value: _ }),
      _ !== S && /* @__PURE__ */ T.jsx(Fp, { value: S, through: !0 })
    ] })
  ] });
}, RT = ({
  items: v,
  onSelect: S,
  multiple: g,
  group: _,
  wrapContent: b = !1
}) => {
  const [L, y] = xs(null), Y = Lr("torres-group-button-chip", {
    "torres-group-button-chip--wrapContent": b,
    "torres-group-button-chip--noWrapContent": !b
  }), V = (F) => {
    g ? Array.isArray(L) ? L.includes(F) ? y(L.filter((ee) => ee !== F)) : y([...L, F]) : y([F]) : y(F);
  };
  return Ha(() => Array.isArray(L) ? S && S({ group: _, values: L }) : S && S({ group: _, values: L ? [L] : [] }), [L]), Ha(() => {
    var F;
    y(
      g ? v.filter((ee) => ee.isSelected).map((ee) => ee.value) : ((F = v.find((ee) => ee.isSelected)) == null ? void 0 : F.value) ?? null
    );
  }, [v, g]), /* @__PURE__ */ T.jsx("div", { className: Y, children: v.map((F) => /* @__PURE__ */ T.jsx(
    px,
    {
      action: () => V(F.value),
      text: F.label,
      isSelected: Array.isArray(L) ? L.includes(F.value) : L === F.value
    },
    F.value
  )) });
}, wT = ({
  items: v,
  onSelect: S,
  multiple: g,
  group: _,
  wrapContent: b = !1
}) => {
  const [L, y] = xs(null), Y = Lr("torres-group-button-color", {
    "torres-group-button-color--wrapContent": b,
    "torres-group-button-color--noWrapContent": !b
  }), V = (F) => {
    console.log("id", F), g ? Array.isArray(L) ? L.includes(F) ? y(L.filter((ee) => ee !== F)) : y([...L, F]) : y([F]) : y(F);
  };
  return Ha(() => Array.isArray(L) ? S && S({ group: _, values: L }) : S && S({ group: _, values: L ? [L] : [] }), [L]), Ha(() => {
    var F;
    y(
      g ? v.filter((ee) => ee.isSelected).map((ee) => ee.id) : ((F = v.find((ee) => ee.isSelected)) == null ? void 0 : F.id) ?? null
    );
  }, [v, g]), /* @__PURE__ */ T.jsx("div", { className: Y, children: v.map((F) => /* @__PURE__ */ T.jsx(
    vx,
    {
      id: F.id,
      color: F.color,
      action: () => V(F.id),
      isSelected: Array.isArray(L) ? L.includes(F.id) : L === F.id
    },
    F.id
  )) });
}, _T = ({
  items: v,
  onSelect: S,
  group: g,
  multiple: _,
  orientation: b = "horizontal",
  wrapContent: L = !0
}) => {
  const [y, Y] = xs(null), V = Lr("torres-group-link-next", {
    "torres-group-link-next--wrapContent": L,
    "torres-group-link-next--noWrapContent": !L
  }), F = Lr("torres-group-link-next", {
    [`torres-group-link-next__container--${b}`]: b,
    "torres-group-link-next__container--wrapContent": L,
    "torres-group-link-next__container--noWrapContent": !L
  }), ee = (I) => {
    _ ? Array.isArray(y) ? y.includes(I) ? Y(y.filter((K) => K !== I)) : Y([...y, I]) : Y([I]) : Y(I);
  };
  return Ha(() => Array.isArray(y) ? S && S({ group: g, values: y }) : S && S({ group: g, values: y ? [y] : [] }), [y]), Ha(() => {
    var I;
    Y(
      _ ? v.filter((K) => K.isSelected).map((K) => K.value) : ((I = v.find((K) => K.isSelected)) == null ? void 0 : I.value) ?? null
    );
  }, [v, _]), /* @__PURE__ */ T.jsx("div", { className: V, children: /* @__PURE__ */ T.jsx("div", { className: F, children: v.map((I) => /* @__PURE__ */ T.jsx(
    $S,
    {
      variant: "secondary",
      action: () => ee(I.value),
      text: I.label,
      isActionDisabled: !0,
      cursorPointerInDisabled: !0,
      isDisabled: !(Array.isArray(y) ? y.includes(I.value) : y === I.value)
    },
    I.value
  )) }) });
}, dT = ({
  itemSummary: v,
  removeItem: S,
  updateItem: g
}) => {
  const [_, b] = xs(v.quantity), [L, y] = xs(v), Y = (V) => {
    b(V), g({ ...L, quantity: V });
  };
  return Ha(() => {
    y(v);
  }, [v]), Ha(() => {
    b(v.quantity);
  }, [v.quantity]), /* @__PURE__ */ T.jsx("div", { className: "item-cart", children: /* @__PURE__ */ T.jsxs("div", { className: "item-cart__container", children: [
    /* @__PURE__ */ T.jsx("div", { className: "item-cart__container__image", children: /* @__PURE__ */ T.jsx("img", { src: L.urlImage, alt: L.title }) }),
    /* @__PURE__ */ T.jsxs("div", { className: "item-cart__container__description", children: [
      /* @__PURE__ */ T.jsxs("div", { className: "item-cart__container__description__title-quantity", children: [
        /* @__PURE__ */ T.jsx("h3", { children: L.title }),
        /* @__PURE__ */ T.jsx("span", { children: /* @__PURE__ */ T.jsx(
          BS,
          {
            icon: Vp.TRASH,
            action: () => S(L.skuId)
          }
        ) })
      ] }),
      /* @__PURE__ */ T.jsxs("div", { className: "item-cart__count-prices", children: [
        /* @__PURE__ */ T.jsx(
          sT,
          {
            initialQuantity: _,
            onQuantityChange: Y
          }
        ),
        /* @__PURE__ */ T.jsxs("div", { className: "item-cart__count-prices__prices", children: [
          /* @__PURE__ */ T.jsx(Fp, { value: L.priceList }),
          L.priceList !== L.price ? /* @__PURE__ */ T.jsx("p", { className: "item-cart__count-prices__prices__priceOld", children: /* @__PURE__ */ T.jsx(Fp, { value: L.price, through: !0 }) }) : null
        ] })
      ] })
    ] })
  ] }) }, L.title);
}, bT = ({
  items: v,
  closeModal: S,
  removeItem: g,
  updateItem: _,
  onAction: b
}) => {
  const [L, y] = xs(v);
  return Ha(() => {
    y(v);
  }, [v]), /* @__PURE__ */ T.jsxs(T.Fragment, { children: [
    /* @__PURE__ */ T.jsx("div", { className: "summary-cart", children: /* @__PURE__ */ T.jsxs("div", { className: "summary-cart__container", children: [
      /* @__PURE__ */ T.jsxs("div", { className: "summary-cart__container__header", children: [
        /* @__PURE__ */ T.jsxs("h2", { className: "summary-cart__container__header__title", children: [
          "Tus pedidos (",
          L.length,
          ")"
        ] }),
        /* @__PURE__ */ T.jsx(
          BS,
          {
            action: () => S(),
            icon: Vp.CLOSE
          }
        )
      ] }),
      /* @__PURE__ */ T.jsx("div", { className: "summary-cart__items", children: L.map((Y, V) => /* @__PURE__ */ T.jsx(
        dT,
        {
          itemSummary: Y,
          removeItem: g,
          updateItem: _
        },
        V
      )) }),
      /* @__PURE__ */ T.jsxs("div", { className: "summary-cart__container-subAmount", children: [
        /* @__PURE__ */ T.jsxs("div", { className: "summary-cart__container-subAmount__subtotal", children: [
          /* @__PURE__ */ T.jsx("p", { children: "Subtotal:" }),
          /* @__PURE__ */ T.jsx(
            Fp,
            {
              value: v.reduce(
                (Y, V) => Y + V.quantity * V.priceList,
                0
              )
            }
          )
        ] }),
        /* @__PURE__ */ T.jsx("div", { className: "summary-cart__container__button-submit", children: /* @__PURE__ */ T.jsx(
          dx,
          {
            isWidthAll: !0,
            variant: Hp.PRIMARY,
            action: () => {
              b(), S();
            },
            text: "Continuar"
          }
        ) })
      ] })
    ] }) }),
    /* @__PURE__ */ T.jsx("div", { className: "padding-mobile-summary-cart" })
  ] });
}, DT = ({
  children: v,
  isOpen: S,
  onClose: g,
  position: _ = "left",
  zIndex: b = 1
}) => {
  const L = Z8(null), [y, Y] = Ef.useState(!1);
  return Ha(() => {
    const V = async (F) => {
      L.current && !L.current.contains(F.target) && g();
    };
    return document.addEventListener("mousedown", V), () => document.removeEventListener("mousedown", V);
  }, [S, g]), Ha(() => {
    S ? (Y(!0), document.body.style.overflow = "hidden") : document.body.style.overflow = "";
  }, [S]), /* @__PURE__ */ T.jsxs(Ef.Fragment, { children: [
    /* @__PURE__ */ T.jsx(
      "div",
      {
        className: `adaptive-modal-overlay adaptive-modal-overlay--${y && (S ? "opening" : "closing")}`,
        style: { zIndex: `${b - 1}` }
      }
    ),
    /* @__PURE__ */ T.jsx(
      "div",
      {
        className: `adaptive-modal adaptive-modal--${y && (S ? "opening" : "closing")}`,
        style: { zIndex: `${b}` },
        children: /* @__PURE__ */ T.jsx(
          "div",
          {
            className: `adaptive-modal__content adaptive-modal__content--${_}`,
            ref: L,
            onClick: (V) => V.stopPropagation(),
            children: v
          }
        )
      }
    )
  ] });
}, kT = ({
  data: v,
  label: S,
  action: g,
  activeBorder: _ = !0
}) => /* @__PURE__ */ T.jsxs("div", { className: "card-data-container", children: [
  /* @__PURE__ */ T.jsxs("div", { className: `card-data-container__header card-data-container__header${S ? "--between" : "--right"}`, children: [
    S && /* @__PURE__ */ T.jsx("label", { className: "card-data-container__label", children: S }),
    g && /* @__PURE__ */ T.jsx("button", { className: "card-data-button-action", onClick: g.onClick, children: g.iconAction })
  ] }),
  /* @__PURE__ */ T.jsx("div", { className: `card-data ${_ ? "active-border" : ""}`, children: v.map((b) => /* @__PURE__ */ T.jsxs("div", { className: "card-data__item", children: [
    /* @__PURE__ */ T.jsx("div", { className: "card-data__item__title", children: b.title }),
    Array.isArray(b.value) ? /* @__PURE__ */ T.jsx("ol", { className: "card-data__item__value-list", children: b.value.map((L) => /* @__PURE__ */ T.jsx("li", { children: L }, L)) }) : /* @__PURE__ */ T.jsx("div", { className: "card-data__item__value", children: b.value })
  ] }, b.title)) })
] }), zS = ({
  icon: v,
  description: S,
  isCompressed: g = !1,
  isCompleted: _ = !1,
  isFirts: b = !1,
  isCurrentStep: L = !1,
  isLast: y = !1,
  error: Y
}) => {
  const V = so[v], F = FS, ee = VS;
  return /* @__PURE__ */ T.jsx("div", { className: `step step--${g ? "compressed" : "expanded"}`, children: /* @__PURE__ */ T.jsxs(
    "div",
    {
      className: `step__container-journey step__container-journey--${b && "firts"}`,
      children: [
        /* @__PURE__ */ T.jsxs("div", { className: "step__container__badge__and_step-line", children: [
          !b && !y && /* @__PURE__ */ T.jsx(
            "div",
            {
              className: `step__container-journey__step-line 122 step__container-journey__step-line--${(L || _) && (g || !L) && "completed"}`
            }
          ),
          b && !g && /* @__PURE__ */ T.jsx(
            "div",
            {
              className: `step__container-journey__step-line 133 step__container-journey__step-line--${_ && "completed"}`
            }
          ),
          y && g && /* @__PURE__ */ T.jsx(
            "div",
            {
              className: `step__container-journey__step-line q144 step__container-journey__step-line--${(L || _) && "completed"}`
            }
          ),
          !_ && (!y || !Y) && /* @__PURE__ */ T.jsx(
            Og,
            {
              size: g ? "medium" : "small",
              variant: L ? "current" : "disabled",
              children: V && /* @__PURE__ */ T.jsx(
                V,
                {
                  size: "small",
                  variant: L ? "current" : "disabled"
                }
              )
            }
          ),
          _ && !Y && /* @__PURE__ */ T.jsx(
            Og,
            {
              size: g ? "medium" : "small",
              variant: "completed",
              children: /* @__PURE__ */ T.jsx(F, { variant: "secondary" })
            }
          ),
          Y && y && /* @__PURE__ */ T.jsx(Og, { size: g ? "medium" : "small", variant: "error", children: /* @__PURE__ */ T.jsx(ee, { variant: "secondary" }) })
        ] }),
        /* @__PURE__ */ T.jsxs("div", { className: "step__description", children: [
          b || !Y || y ? /* @__PURE__ */ T.jsx("h3", { className: "step__description__title", children: S.title }) : "-",
          /* @__PURE__ */ T.jsxs("div", { className: "step__description__body", children: [
            (L && !Y && !y || Y && b) && /* @__PURE__ */ T.jsx("p", { className: "step__description__body__resumen", children: S.description }),
            _ && /* @__PURE__ */ T.jsx("p", { className: "step__description__body__resumen", children: S.descriptionSuccess }),
            Y && y && /* @__PURE__ */ T.jsxs("p", { className: "step__description__body__resumen", children: [
              Y,
              ", comunícate con nosotros a nuestro canal de soporte vía ",
              /* @__PURE__ */ T.jsx($S, { href: "#", text: "WhatsApp" }),
              "."
            ] }),
            (!Y && (_ || L) || b || Y && y) && /* @__PURE__ */ T.jsx("p", { className: "step__description__body__start-date", children: S.startDate })
          ] })
        ] })
      ]
    }
  ) });
}, pT = ({ steps: v, compressed: S, error: g }) => {
  const _ = (b) => {
    if (b.currentStep && b.id === v[v.length - 1].id)
      return !0;
    if (g)
      return !1;
    let L = v.find((y) => y.currentStep);
    for (; L != null && L.prevStepId; ) {
      if ((L == null ? void 0 : L.prevStepId) === b.id)
        return !0;
      L = v.find((y) => y.id === (L == null ? void 0 : L.prevStepId));
    }
    return !1;
  };
  return /* @__PURE__ */ T.jsxs(
    "div",
    {
      className: `torres-progressJourney torres-progressJourney--${S ? "compressed" : "expanded"}`,
      children: [
        /* @__PURE__ */ T.jsx("div", { className: "torres-progressJourney__step-init", children: /* @__PURE__ */ T.jsx(
          zS,
          {
            icon: v[0].icon,
            isCurrentStep: !!(v[0].currentStep || g),
            description: v[0].description,
            isFirts: !0,
            isCompleted: _(v[0]),
            isCompressed: S,
            isLast: !1,
            error: g == null ? void 0 : g.label
          },
          v[0].id
        ) }),
        /* @__PURE__ */ T.jsx("div", { className: "torres-progressJourney__container", children: v.slice(1).map((b) => /* @__PURE__ */ T.jsx(
          zS,
          {
            icon: b.icon,
            isCurrentStep: b.currentStep,
            description: b.description,
            isFirts: !1,
            isCompleted: _(b),
            isCompressed: S,
            isLast: b.id === v[v.length - 1].id,
            error: g == null ? void 0 : g.label
          },
          b.id
        )) })
      ]
    }
  );
}, l3 = ({
  title: v,
  status: S,
  urlRedirection: g,
  modelType: _ = "modelOne"
}) => /* @__PURE__ */ T.jsxs("div", { className: `headerCardProcessing headerCardProcessing__header headerCardProcessing__header__${_}`, children: [
  /* @__PURE__ */ T.jsxs("div", { className: "headerCardProcessing__header__container-title-tag", children: [
    /* @__PURE__ */ T.jsx("h2", { className: "headerCardProcessing__header__title", children: v }),
    /* @__PURE__ */ T.jsx(cT, { status: S.value, label: S.label })
  ] }),
  /* @__PURE__ */ T.jsxs("a", { href: g, className: "headerCardProcessing__header__link", children: [
    /* @__PURE__ */ T.jsx("span", { children: "Ver más" }),
    " ",
    /* @__PURE__ */ T.jsx(AS, {})
  ] })
] }), NT = ({
  header: v,
  configSteps: S,
  deliveryDate: g,
  error: _
}) => {
  var L;
  const b = (L = S.find((y) => y.currentStep)) == null ? void 0 : L.description;
  return /* @__PURE__ */ T.jsxs("div", { className: "cardProcessingTwo", children: [
    /* @__PURE__ */ T.jsx(l3, { ...v, modelType: "modelTwo" }),
    /* @__PURE__ */ T.jsxs("div", { className: "cardProcessingTwo__body", children: [
      /* @__PURE__ */ T.jsxs("div", { className: "cardProcessingTwo__body__description", children: [
        /* @__PURE__ */ T.jsx("h3", { className: "cardProcessingTwo__body__description-title", children: _ ? _.title : b == null ? void 0 : b.title }),
        /* @__PURE__ */ T.jsx("p", { className: "cardProcessingTwo__body__description-description", children: _ ? _.label : b == null ? void 0 : b.description })
      ] }),
      /* @__PURE__ */ T.jsx("div", { className: "cardProcessingTwo__body__progress-container", children: /* @__PURE__ */ T.jsx(
        pT,
        {
          steps: S,
          compressed: !0,
          error: _
        }
      ) }),
      /* @__PURE__ */ T.jsx("div", { className: "cardProcessingTwo__body__container__footer", children: /* @__PURE__ */ T.jsxs("div", { className: "cardProcessingTwo__body__delivery-date", children: [
        /* @__PURE__ */ T.jsx("span", { className: "cardProcessingTwo__body__delivery-date__label", children: "Fecha de entrega:" }),
        /* @__PURE__ */ T.jsx("span", { className: "cardProcessingTwo__body__delivery-date__date", children: g })
      ] }) })
    ] })
  ] });
}, LT = ({
  title: v,
  body: S,
  status: g,
  urlRedirection: _
}) => {
  const b = ["error", "rejected"];
  return /* @__PURE__ */ T.jsxs("div", { className: "cardProcessingOne", children: [
    /* @__PURE__ */ T.jsx(
      l3,
      {
        urlRedirection: _,
        title: v,
        status: g
      }
    ),
    /* @__PURE__ */ T.jsxs("div", { className: "cardProcessingOne__body", children: [
      /* @__PURE__ */ T.jsx("div", { className: "cardProcessingOne__body__circle-container", children: /* @__PURE__ */ T.jsx(
        fT,
        {
          error: b.includes(g.value),
          value: S.percentage
        }
      ) }),
      /* @__PURE__ */ T.jsxs("div", { className: "cardProcessingOne__body__description", children: [
        /* @__PURE__ */ T.jsx("h3", { className: "cardProcessingOne__body__description-title", children: S.title }),
        /* @__PURE__ */ T.jsx("p", { className: "cardProcessingOne__body__description-description", children: S.description })
      ] })
    ] })
  ] });
};
export {
  K8 as ArrowWithTailBottom,
  AS as ArrowWithTailLeft,
  J8 as ArrowWithTailRight,
  ex as ArrowWithTailTop,
  PS as BUTTON_TYPES,
  Hp as BUTTON_VARIANTS,
  cx as CURRENCY_SYMBOLS,
  ax as Cart,
  FS as Check,
  tx as Close,
  sx as DIVIDER_VALUE_PRICE,
  VS as Error,
  nx as Filter,
  Vp as ICONS_NAMES,
  fx as IMAGE_RATIO_ASPECTS,
  ix as PaymentPending,
  lx as PaymentSuccess,
  ux as PaymentVerifying,
  ST as ProgressBar,
  Og as TorresBadge,
  ET as TorresBannerOne,
  xT as TorresBannerTwo,
  dx as TorresButton,
  px as TorresButtonChip,
  vx as TorresButtonColor,
  BS as TorresButtonIcon,
  kT as TorresCardData,
  LT as TorresCardProcessingOne,
  NT as TorresCardProcessingTwo,
  TT as TorresCardProduct,
  fT as TorresCirclePercentage,
  RT as TorresGroupButtonChip,
  wT as TorresGroupButtonColor,
  _T as TorresGroupLinkNext,
  Ag as TorresImage,
  dT as TorresItemCart,
  a3 as TorresLink,
  $S as TorresLinkNext,
  DT as TorresModalContent,
  CT as TorresParagraph,
  Fp as TorresPrice,
  pT as TorresProgressJourney,
  zS as TorresProgressStep,
  sT as TorresQuantity,
  i3 as TorresSubtitle,
  bT as TorresSummaryCart,
  yx as TorresTag,
  cT as TorresTagStatus,
  gT as TorresTitle,
  rx as Trash,
  ox as Truck,
  mx as currencyFormatter,
  hx as getPrice
};
//# sourceMappingURL=index.es.js.map
