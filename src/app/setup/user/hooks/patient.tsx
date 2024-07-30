'use client'

const usePatientData = () => {
  const getPatients = async (
    facility: boolean,
    page: number,
    per_page: number,
    search: string,
    activationStatus: string
  ) => {
    const base_url =
      // 'http://localhost:4200/rms/v1/healthcare-facility/patients?facility=true&page=1&per_page=30&search=suman&activationStatus=%5B%22REFERRED%22%5D'
      `http://localhost:3000/rms/v1/healthcare-facility/patients?facility=${facility}&page=${page}&per_page=${per_page}&search=${search}${
        activationStatus ? `&activationStatus=["${activationStatus}"]` : ''
      }`
    const response = await fetch(base_url, {
      method: 'GET',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Accept-Language': 'en-US,en;q=0.9',
        Cookie:
          'pma_lang=en; phpMyAdmin=41d2c53feb401205e677497e8f2d578f; pmaUser-1=McyWk%2BGH7uMfqrQ8YBXsvTezyPl75OG7B%2FfSMU%2BDMrbuDWRZyNNkDx3iMxg%3D; pmaAuth-1=CBqwXLsQZTNTPyadN%2B4CxAlj2REywO0TXsFGd9Jy7VtErKxSGYDa7d7rsvSmMQajIdUBQasaWRv3yvQ%3D; _local_=s%3AeyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJJZCI6IjAwMC0wMDAiLCJnZW5kZXIiOm51bGwsImlzQWN0aXZhdGVkIjp0cnVlLCJiaXJ0aERhdGUiOm51bGwsImJpcnRoRGF0ZVN0cmluZyI6bnVsbCwibW9iaWxlIjoiMDkwMDc4NjAxIiwiZmlyc3ROYW1lIjoiZmlyc3RuYW5tZSIsImxhc3ROYW1lIjpudWxsLCJtaWRkbGVOYW1lIjpudWxsLCJmdWxsTmFtZSI6ImZpcnN0bmFubWUiLCJ1c2VybmFtZSI6ImFobWFkIiwiZW1haWwiOiJ0ZXN0aW5nQGdtYWlsLmNvbSIsInRpdGxlIjpudWxsLCJ1c2VyU2V0dGluZyI6eyJ1bml0cyI6eyJ3ZWlnaHQiOiJsYiIsInRlbXBlcmF0dXJlIjoiQyJ9fSwiaGVpZ2h0IjpudWxsfSwicHJvZmlsZSI6eyJ1c2VySWQiOiIwMDAtMDAwIiwiZnVsbE5hbWUiOiJmaXJzdG5hbm1lIiwiZmlyc3ROYW1lIjoiZmlyc3RuYW5tZSIsIm1pZGRsZU5hbWUiOm51bGwsImxhc3ROYW1lIjpudWxsLCJtb2JpbGUiOiIwOTAwNzg2MDEiLCJwYXRpZW50SWQiOm51bGwsImlzUGluU2V0IjpudWxsLCJndWFyZGlhbklkIjpudWxsLCJlbXBsb3llZUlkIjpudWxsLCJlbXBsb3llZVR5cGUiOm51bGwsImlzU3VwZXJBZG1pbiI6dHJ1ZSwic2hvd0Fub255bW91c0RhdGEiOmZhbHNlLCJob21lSGVhbHRoQWdlbmN5SWQiOm51bGwsInJvbGVzIjpbeyJyb2xlIjoiU1VQRVJBRE1JTiJ9XSwidXNlclNldHRpbmciOnsidW5pdHMiOnsid2VpZ2h0IjoibGIiLCJ0ZW1wZXJhdHVyZSI6IkMifX0sInR6T2Zmc2V0IjoxODAwMH0sInVzZXJEZXZpY2VJZCI6IjU4ZjVhZDU0LWFkNDktNGVkMS1iYWI1LTI1MTIwMDY3MzMzOCIsImlhdCI6MTcyMjMyNzE3MCwiZXhwIjoxNzIyNDEzNTcwfQ.p3hPinII6pS85bV0xwtIfhT37x2PQgygA3srSDxjHso.TTXnIKsvDhCj38GpFnQRQ0CBTfKTWr%2BU7mePdbOHVRo',
      },
      credentials: 'include',
    })
    // console.log(response)

    return response.json()
  }

  const patientMethods = {
    getPatients,
  }

  return { patientMethods }
}

export default usePatientData

// fetch(
//   'https://usman-stable.cognitivehealthintl.com/rms/v1/healthcare-facility/patients?facility=true&page=1&per_page=30&search=null',
//   {
//     method: 'GET',
//     headers: {
//       Accept: 'application/json, text/plain, */*',
//       Cookie:
//         '_qa_=s%3AeyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJJZCI6IjAwMC0wMDAiLCJnZW5kZXIiOm51bGwsImlzQWN0aXZhdGVkIjp0cnVlLCJiaXJ0aERhdGUiOm51bGwsImJpcnRoRGF0ZVN0cmluZyI6bnVsbCwibW9iaWxlIjoiMDkwMDc4NjAxIiwiZmlyc3ROYW1lIjoiZmlyc3RuYW5tZSIsImxhc3ROYW1lIjpudWxsLCJtaWRkbGVOYW1lIjpudWxsLCJmdWxsTmFtZSI6ImZpcnN0bmFubWUiLCJ1c2VybmFtZSI6ImFobWFkIiwiZW1haWwiOiJ0ZXN0aW5nQGdtYWlsLmNvbSIsInRpdGxlIjpudWxsLCJ1c2VyU2V0dGluZyI6eyJ1bml0cyI6eyJ3ZWlnaHQiOiJsYiIsInRlbXBlcmF0dXJlIjoiQyJ9fSwiaGVpZ2h0IjpudWxsfSwicHJvZmlsZSI6eyJ1c2VySWQiOiIwMDAtMDAwIiwiZnVsbE5hbWUiOiJmaXJzdG5hbm1lIiwiZmlyc3ROYW1lIjoiZmlyc3RuYW5tZSIsIm1pZGRsZU5hbWUiOm51bGwsImxhc3ROYW1lIjpudWxsLCJtb2JpbGUiOiIwOTAwNzg2MDEiLCJwYXRpZW50SWQiOm51bGwsImlzUGluU2V0IjpudWxsLCJndWFyZGlhbklkIjpudWxsLCJlbXBsb3llZUlkIjpudWxsLCJlbXBsb3llZVR5cGUiOm51bGwsImlzU3VwZXJBZG1pbiI6dHJ1ZSwic2hvd0Fub255bW91c0RhdGEiOmZhbHNlLCJob21lSGVhbHRoQWdlbmN5SWQiOm51bGwsInJvbGVzIjpbeyJyb2xlIjoiU1VQRVJBRE1JTiJ9XSwidXNlclNldHRpbmciOnsidW5pdHMiOnsid2VpZ2h0IjoibGIiLCJ0ZW1wZXJhdHVyZSI6IkMifX0sInR6T2Zmc2V0IjoxODAwMH0sInVzZXJEZXZpY2VJZCI6IjEwNTEzOWU4LTYyNjYtNGE1ZC1iNzBiLTAyY2U4MTAyNWE1YyIsImlhdCI6MTcyMjIzMTM4OCwiZXhwIjoxNzIyMzE3Nzg4fQ.0yP1Aoj0sn_cJql6zd8kTs9kugXxw-P84rvbunjZBpA.OF8uJAyYjYRw1oMjdCnxllS8JiOG6AL%2BkmRPH3hBhcs',
//       Referer:
//         'https://usman-stable.cognitivehealthintl.com/setup/user/patients',
//     },
//   }
// )

// 'http://10.8.100.14:3000/rms/v1/patient?activeAdmissionsOnly=false'
