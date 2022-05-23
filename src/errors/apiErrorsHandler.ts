import axios from 'axios';
import { IapiResponse } from '../interfaces/interfaces';

export const apiErrorHandler = (err: any): IapiResponse => {
    if (axios.isAxiosError(err)) {
        switch (err.response?.status) {
            case 400: {
                return {
                    status: 400,
                    error: "Некорректный запрос"
                }
            }
            case 403: {
                return {
                    status: 403,
                    error: "Запрещено. У клиента нет прав доступа к содержимому, поэтому сервер отказывается дать надлежащий ответ"
                }
            }
            case 404: {
                return {
                    status: 404,
                    error: "Не найден. Сервер не может найти запрашиваемый ресурс"
                }
            }
            case 503: {
                return {
                    status: 503,
                    error: "Сервис недоступенA. Сервер не готов обрабатывать запрос"
                }
            }
            default: {
                return {
                    status: 520,
                    error: "Неизвестная ошибка"
                }
            }
        }
    } else {
        return {
            status: 520,
            error: "Неизвестная ошибка"
        }
    }
}