import React from 'react';
import { TextInput, View, Text } from 'react-native';
import { globalStyles } from '../styles/global.js';
import { Formik } from 'formik';
import * as yup from 'yup';
import FlatButton from '../shared/button';

const reviewSchema = yup.object({
    title: yup.string()
        .required()
        .min(4),
    body: yup.string()
        .required()
        .min(8),
    rating: yup.string()
        .required()
        .test('is-num-1-5', "Number must be between 1-5", (val) => {
            return parseInt(val) > 0 && parseInt(val) < 6;
        }
    )
});

export default function ReviewForm({ addReview }) {

    return (

        <View style={ globalStyles.container }>
            <Formik 
                initialValues={{ title: '', body: '', rating: ''}}
                validationSchema={ reviewSchema }
                onSubmit={ (values) => { addReview(values) }}
            >
                {props => (
                    <View>
                        <TextInput 
                            style={ globalStyles.input }
                            placeholder="Review title"
                            onChangeText={ props.handleChange('title') }
                            onBlur={ props.handleBlur('title') }
                            value={ props.values.title }
                        />
                        <Text style={ globalStyles.errorText }>{ props.touched.title && props.errors.title }</Text>

                        <TextInput 
                            multiline 
                            minHeight={ 60 }
                            style={ globalStyles.input }
                            placeholder="Review details"
                            onChangeText={ props.handleChange('body') }
                            onBlur={ props.handleBlur('body') }
                            value={ props.values.body }
                        />
                        <Text style={ globalStyles.errorText }>{ props.touched.body && props.errors.body }</Text>

                        <TextInput 
                            style={ globalStyles.input }
                            placeholder="Rating (1-5)"
                            onChangeText={ props.handleChange('rating') }
                            onBlur={ props.handleBlur('rating') }
                            value={ props.values.rating }
                            keyboardType="numeric"
                        />
                        <Text style={ globalStyles.errorText }>{ props.touched.rating && props.errors.rating }</Text>

                        <FlatButton 
                            text="submit"
                            onPress={ props.handleSubmit }
                        />
                    </View>
                )}
            </Formik>
        </View>

    );

}