import { PDFViewer, Document, Page, View, Text, StyleSheet } from "@react-pdf/renderer";
import { useContext } from 'react';
import { AppContext } from './../Store';

const styles = StyleSheet.create({
    page: {
        flexDirection: 'row',
        backgroundColor: '#E4E4E4'
    },
    section: {
        margin: 10,
        padding: 10,
        flexGrow: 1
    }
});

const MyDocument = (props) => {
    
    const { resumeState } = props;

    const { profile } = resumeState;

    return (<Document>
        <Page size="A4" style={styles.page}>
            <View style={styles.section}>
                <Text>Section #1</Text>
                <Text>{profile.fullName}</Text>
                <Text>{profile.email}</Text>
                <Text>{profile.phone}</Text>
                <Text>{profile.location}</Text>
                <Text>{profile.portfolioLink}</Text>
            </View>
            <View style={styles.section}>
                <Text>Section #2</Text>
            </View>
        </Page>
    </Document>);

}

const ResumePreview = () => {

    const {resumeState} = useContext(AppContext);

    return (<div>
        <PDFViewer>
            <MyDocument resumeState={resumeState} />
        </PDFViewer>
    </div>);
}

export default ResumePreview;