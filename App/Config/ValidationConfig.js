export default {
    uanconfig: {
        validate: (value) => {
            const char_regex = /^[a-z0-9]+$/;
            if (value.length === 0) {
                return { message: 'UAN number is mandatory' };
            } else if (!char_regex.test(value)) {
                return { message: 'Enter a valid UAN Number' };
            }
            return { message: '' };
        }
    },
    accountNumber: {
        validate: (value) => {
            const number_regex = /^\d+$/;
            if (value.length === 0) {
                return { message: '' };
            } else if (!number_regex.test(value)) {
                return { message: 'Enter a valid Account Number' };
            }
            return { message: '' };
        }
    },
    startdat: {
        validate: (value) => {

            if (value.length === 0) {
                return { message: 'Please Select a date' };
            }
            return { message: '' };
        }
    },
    lastcontributedate: {
        validate: (value) => {
            console.log('val,', value)
            if (value.length === 0) {
                return { message: 'Please Select a date' };
            }
            return { message: '' };
        }
    },
    totalbal: {
        validate: (value) => {
            const char_regex = /^[0-9]{0,15}(\.[0-9]{1,2})?$/;
            if (value.length === 0) {
                return { message: 'Total Amount is mandatory' };
            } else if (!char_regex.test(value)) {
                return { message: 'Enter a valid Amount' };
            }
            return { message: '' };
        }
    },
    lastcontribteamount: {
        validate: (value) => {
            const char_regex = /^[0-9]{0,15}(\.[0-9]{1,2})?$/;
            if (value.length === 0) {
                return { message: 'LastContributed Amount is mandatory' };
            } else if (!char_regex.test(value)) {
                return { message: 'Enter a valid Amount' };
            }
            return { message: '' };
        }
    },
}