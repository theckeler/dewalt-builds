const Maintenance = ({
  numberOfMaintenanceJobsPerYear,
  averageTotalTimeForServicing,
}) => {
  return (
    <ul className="outputs">
      <li className="title">
        Reduced ZTR downtime with NGBR from lower maintenance needs
      </li>
      <li>
        <span>Time saved from reduced maintenance</span>
        <span>
          {(
            numberOfMaintenanceJobsPerYear * averageTotalTimeForServicing
          ).toFixed(2)}
        </span>
      </li>
    </ul>
  );
};

export default Maintenance;
