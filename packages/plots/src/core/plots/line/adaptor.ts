import { flow, transformOptions } from '../../utils';
import { mark } from '../../components';
import type { Adaptor } from '../../types';
import type { LineOptions } from './type';

type Params = Adaptor<LineOptions>;

/**
 * @param chart
 * @param options
 */
export function adaptor(params: Params) {
  return flow(transformOptions, mark)(params);
}
