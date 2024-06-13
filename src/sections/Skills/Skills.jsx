import styles from './SkillsStyles.module.css';
import checkMarkIcon from '../../assets/checkmark-dark.png';
import SkillList from '../../common/SkillList';
function Skills() {
  return (
    <section id="skills" className={styles.container}>
        <h1 className="sectionTitle">Skills</h1>
        <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="C "/>
        <SkillList src={checkMarkIcon} skill="HTML"/>
        <SkillList src={checkMarkIcon} skill="CSS"/>
        <SkillList src={checkMarkIcon} skill="C++"/>
        <SkillList src={checkMarkIcon} skill="Javascript"/>
        <SkillList src={checkMarkIcon} skill="Python"/>
        <SkillList src={checkMarkIcon} skill="C#"/>        
        <SkillList src={checkMarkIcon} skill="React"/>
        <SkillList src={checkMarkIcon} skill="Java"/>
        <SkillList src={checkMarkIcon} skill="SQL"/>
        <SkillList src={checkMarkIcon} skill="DBMS"/>
        <SkillList src={checkMarkIcon} skill="React"/>
        <SkillList src={checkMarkIcon} skill="Bootstrap"/>
        <SkillList src={checkMarkIcon} skill="Node"/>
        <SkillList src={checkMarkIcon} skill="Networking"/>
        <SkillList src={checkMarkIcon} skill="Mern"/> 
        <SkillList src={checkMarkIcon} skill="Php"/>
        </div>

        
    </section>
  )
}

export default Skills