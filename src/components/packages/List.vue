<template>
    <div class="uk-section uk-section-default">
        <div class="uk-container">
            <h3>Packages</h3>
            <p>All your packages</p>
            
            <table class="uk-table uk-table-striped">
                <thead>
                    <tr>
                        <th>Icon</th>
                        <th>Label</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <ul class="uk-iconnav">
                                <li><a uk-icon="clock" title="Pending review"></a></li>
                            </ul>
                        </td>
                        <td>Prending review</td>
                        <td>The package is under review.</td>
                    </tr>
                    <tr>
                        <td>
                            <ul class="uk-iconnav">
                                <li><a uk-icon="check" title="Published"></a></li>
                            </ul>
                        </td>
                        <td>Published</td>
                        <td>The package has been verified and published.</td>
                    </tr>
                    <tr>
                        <td>
                            <ul class="uk-iconnav">
                                <li><a uk-icon="close" title="Not published"></a></li>
                            </ul>
                        </td>
                        <td>Not published</td>
                        <td>The package did not pass the review, more information are provided to the publisher.</td>
                    </tr>
                </tbody>
            </table>

            <table class="uk-table uk-table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Version</th>
                        <th>Type</th>
                        <th>Status</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>biskuit/helloworld</td>
                        <td>biskuit-extension</td>
                        <td>1.0.0</td>
                        <td>
                            <ul class="uk-iconnav">
                                <li><a uk-icon="check" title="Published"></a></li>
                            </ul>
                        </td>
                        <td>
                            <ul class="uk-iconnav">
                                <li><a uk-icon="info" title="Details"></a></li>
                                <li><a uk-icon="upload" title="Send update"></a></li>
                                <li><a uk-icon="trash" title="Delete"></a></li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td>mirkobrombin/icecream</td>
                        <td>biskuit-theme</td>
                        <td>0.1.0</td>
                        <td>
                            <ul class="uk-iconnav">
                                <li><a uk-icon="clock" title="Pending review"></a></li>
                            </ul>
                        </td>
                        <td>
                            <ul class="uk-iconnav">
                                <li><a uk-icon="check" title="Published"></a></li>
                            </ul>
                        </td>
                        <td>
                            <ul class="uk-iconnav">
                                <li><a uk-icon="info" title="Details"></a></li>
                                <li><a uk-icon="upload" title="Send update"></a></li>
                                <li><a uk-icon="trash" title="Delete"></a></li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td>mirkobrombin/example</td>
                        <td>pagekit-extension</td>
                        <td>2.1.0</td>
                        <td>
                            <ul class="uk-iconnav">
                                <li><a uk-icon="close" title="Not published"></a></li>
                            </ul>
                        </td>
                        <td>
                            <ul class="uk-iconnav">
                                <li><a uk-icon="info" title="Details"></a></li> 
                                <li><a uk-icon="upload" title="Send update"></a></li>
                                <li><a uk-icon="trash" title="Delete"></a></li>
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'packages',
        metaInfo: {
            title: 'Packages'
        }
    }
</script>