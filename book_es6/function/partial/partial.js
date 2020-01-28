const building = {
  hours: '8 a.m. - 8 p.m.',
  address: 'Jayhawk Blvd',
};

const manager = {
  name: 'Augusto',
  phone: '555-555-5555',
};

const program = {
  name: 'Presenting Research',
  room: '415',
  hours: '3 - 6',
};

const exhibit = {
  name: 'Emerging Scholarship',
  contact: 'Dyan',
};

// 초기값 세팅 부분 적용함수
const setDefaultInfo = (building, manager) => (event) => {
  return {
    ...building,
    ...manager,
    ...event
  }
}

const eventInfoFactory = setDefaultInfo(building, manager);

// 행사정보
const exhibitInfo = eventInfoFactory(exhibit);
console.log('exhibit정보',exhibitInfo);

// 세미나정보
const programInfo = eventInfoFactory(program);
console.log('program정보',programInfo);
