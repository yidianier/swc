//// [objectSpreadIndexSignature.ts]
import _object_spread from "@swc/helpers/src/_object_spread.mjs";
import _object_spread_props from "@swc/helpers/src/_object_spread_props.mjs";
_object_spread_props(_object_spread({}, indexed1), {
    b: 11
})[101], _object_spread({}, indexed1, indexed2)[1001], indexed3 = _object_spread({}, b ? indexed3 : void 0), _object_spread({}, roindex).a = 0;
