import type { UseFormSetError } from 'react-hook-form';
import { ALERT_TYPE, Toast } from 'react-native-alert-notification';
interface ApiError {
  field: any;
  message: string;
}

export const handleApiError = (error: any, setError: UseFormSetError<any>) => {
  if (error?.response?.data?.errors?.length > 0) {
    error?.response?.data?.errors.forEach((item: ApiError) => {
      setError(item.field, {
        type: 'manual',
        message: item.message,
      });
    });
  } else {
    Toast.show({
      type: ALERT_TYPE.DANGER,
      title: 'Error',
      textBody: error?.response?.data?.message || 'An error occurred',
    });
  }
};
