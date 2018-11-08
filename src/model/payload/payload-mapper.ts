import { AxiosError, AxiosResponse } from 'axios'
import { PayloadMessageTypes } from '@/common'
import { IPayload } from './payload'

export { PayloadMessageTypes } from '../../common/message'

export class PayloadMapper {

    private fromError<T>(o: Error): IPayload<T> {

      return {
        // @ts-ignore
            data: null,
            message: {
                messageTypeId: PayloadMessageTypes.error,
                text: o.message,
                title: o.name
            }
        }
    }

    private fromAxiosError<T>(o: AxiosError): IPayload<T> {

        // @ts-ignore
        let data: T = null

        if (o.response && isAxiosResponse(o.response))
            data = this.fromAxiosResponse<T>(o.response).data

        return {
            data: data,
            message: {
                messageTypeId: PayloadMessageTypes.error,
                text: o.message,
                title: 'Code:' + o.code + '. ' + o.name
            }
        }
    }

    private fromAxiosResponse<T>(o: AxiosResponse): IPayload<T> {

      // @ts-ignore
        let value: IPayload<T> = null

        if (isPayload<T>(o.data))
            value = o.data
        else
            value = {
                data: <any>o.data,
                message: {
                    messageTypeId: PayloadMessageTypes.success,
                  // @ts-ignore
                    text: null
                }
            }
        return value
    }

    public fromObject<T>(o: any): IPayload<T> {

        if (isAxiosError(o))
            return this.fromAxiosError<T>(o)

        if (o instanceof Error)
            return this.fromError<T>(o)

        if (isAxiosResponse(o))
            return this.fromAxiosResponse<T>(o)

        // @ts-ignore
        return null
    }
}

function isAxiosResponse(o: any): o is AxiosResponse {
    return o instanceof Object && 'data' in o && 'config' in o && 'status' in o && 'statusText' in o && 'headers' in o
}

function isAxiosError(o: any): o is AxiosError {
    return o instanceof Object && o instanceof Error && 'config' in o
}

function isPayload<T>(o: any): o is IPayload<T> {
    return o instanceof Object && 'data' in o && 'message' in o
}
