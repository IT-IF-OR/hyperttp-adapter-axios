import { type AxiosInstance, type AxiosStatic } from "axios";
import type { HyperAdapter, IHyperCore } from "@hyperttp/types";
import type { HyperAxiosConfig } from "./types/index.js";
/**
 * Creates an Axios-compatible client backed by a Hyperttp core instance.
 *
 * Axios keeps its normal request/response transforms, interceptors, cancellation,
 * status validation, and convenience methods; only the network adapter is replaced.
 */
export declare function createAxios(core: IHyperCore, config?: HyperAxiosConfig): AxiosInstance;
/** Axios adapter descriptor for use with the generic HyperAdapter contract. */
export declare const adapter: HyperAdapter<AxiosStatic>;
/** A ready-to-use Axios-compatible client using a default Hyperttp core. */
export declare const axios: AxiosInstance;
export default axios;
//# sourceMappingURL=axios.d.ts.map