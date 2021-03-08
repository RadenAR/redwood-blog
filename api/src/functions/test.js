import appSettings from '../../../appsettings.json'

export const handler = async (event, context) => {
  const settings = appSettings

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
    body: settings,
  }
}
